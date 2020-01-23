import permissions from '../permissions';

/**
 * This function will check if route meet it's permissions
 * @param permissionNames
 * @param props
 * @returns {boolean}
 */
export default (permissionNames, props) => {
  if (!permissionNames) return true;

  /**
   * Check all permissions
   */
  const checkedPermissions = permissionNames.map(name => {
    const permissionFunc = permissions[name] || false;
    if (!permissionFunc) {
      // eslint-disable-next-line no-console
      console.log('Router: Not valid permission function supplied');
      return true;
    }

    return permissionFunc(props);
  });

  return !checkedPermissions.includes(false);
};
