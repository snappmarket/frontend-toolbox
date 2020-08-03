// eslint-disable-next-line import/no-named-default
import AbortController from 'abort-controller';
import fetch from 'isomorphic-unfetch';

import { delog } from '../DebugHelpers';
import { serializeObject } from '../ObjectHelpers';
import { emptyPromise, makeTimeout } from '../PromiseHelpers';

/**
 * @function
 * @name fetchWithTimeOut
 * @description fetches the request, if it takes to long, it will be timed out
 * @param   url         {string}    the URL you want to fetch
 * @param   options     {object}    the options such as get parameters, method etc...
 * @param   timeout     {number}    timeout in ms to kill the request if it's taking too long
 * @returns {Promise<unknown>}
 */
export const fetchWithTimeOut = (url, options, timeout = 5000) => {
  const controller = new AbortController();
  const { signal } = controller;
  const request = fetch(url, { ...options, signal });
  const challenger = makeTimeout(timeout);
  const race = Promise.race([request, challenger]);
  race.catch(e => {
    if (e.message === 'TIMEOUT') {
      controller.abort();
    }
  });
  return race;
};

/**
 * @function
 * @name universalCall
 * @description Call an api in universal way
 * @param   url                   {string}    the URL you want to fetch
 * @param   method                {string}    method of the request e.g. POST
 * @param   credentials           {string}    credentials to include the third party cookies or not e.g. same-origin
 * @param   data                  {object}    object of the data you want to send, not for get
 * @param   headers               {object}    object of the request headers
 * @param   params                {object}    URL parameters
 * @param   jwtToken              {string}    the JWA token for end-points with authentication, Bearer prefix would be added automatically
 * @param   rest                  {any}       any additional options which is supported by the isomorphic fetch
 * @param   timeout               {number}    timeout to kill the request if it's taking too long
 * @param   allowedNoContent      {boolean}   flag to allow the request be handle even if there is no content
 * @returns {Promise}
 */
export const universalCall = async ({
  url,
  method = 'GET',
  credentials = 'same-origin',
  data = {},
  headers = {},
  params = {},
  jwtToken = '',
  allowedNoContent = false,
  timeout = 5000,
  ...rest
  // eslint-disable-next-line consistent-return
}) => {
  const options = {
    method: method.toUpperCase(),
    credentials,
    headers,
    ...rest,
  };

  if (jwtToken) {
    // eslint-disable-next-line no-param-reassign
    headers.authorization = `Bearer ${jwtToken}`;
  }

  /**
   * Make body of POST and PUT requests
   */
  if (!['GET', 'HEAD'].includes(options.method)) {
    options.body = JSON.stringify(data);
    delete options.data;
  }

  /**
   * Make query parameters
   */
  let callUrl = url;
  if (Object.keys(params).length > 0) {
    const queryParameters = serializeObject(params);
    callUrl += `?${decodeURIComponent(queryParameters)}`;
  }

  if (process.env.DEBUG_MODE === 'true') {
    // eslint-disable-next-line no-console
    console.log({ callUrl, headers: options.headers });
  }

  /**
   * Call universal request with options
   */
  const response = await fetchWithTimeOut(encodeURI(callUrl), options, timeout);
  const contentType = response.headers.get('content-type');

  /**
   * Handle custom response types
   */
  if (allowedNoContent && response.status === 204) {
    return emptyPromise();
  }

  /**
   * If we did not got json then throw error message
   */
  if (!contentType || !contentType.includes('application/json')) {
    delog(`SERVER_CONTENT_TYPE_IS_NOT_JSON:${url}`);
  }

  const result = {
    headers: response.headers,
    status: response.status,
    ok: response.ok,
    data: {},
  };
  /**
   * Parse server response json string
   */
  try {
    result.data = await response.json();
  } catch (e) {
    delog(`SERVER_CONTENT_PARSING_ERROR:${url}`);
  }

  /**
   * If result is not ok throw error
   */
  if (!result.ok) {
    throw result;
  }
  return result;
};
