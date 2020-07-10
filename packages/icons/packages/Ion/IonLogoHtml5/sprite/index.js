/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./IonLogoHtml5.svg');
}

const IonLogoHtml5 = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="IonLogoHtml5"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="IonLogoHtml5Href"
        xlinkHref={`${importPrefix}#IonLogoHtml5`}
      />
    </svg>
  );
};

IonLogoHtml5.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IonLogoHtml5.defaultProps = {
  size: 1.5,
};

export default IonLogoHtml5;
