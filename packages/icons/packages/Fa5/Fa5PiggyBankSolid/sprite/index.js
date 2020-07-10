/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5PiggyBankSolid.svg');
}

const Fa5PiggyBankSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5PiggyBankSolid"
      viewBox="0 0 576 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5PiggyBankSolidHref"
        xlinkHref={`${importPrefix}#Fa5PiggyBankSolid`}
      />
    </svg>
  );
};

Fa5PiggyBankSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5PiggyBankSolid.defaultProps = {
  size: 1.5,
};

export default Fa5PiggyBankSolid;
