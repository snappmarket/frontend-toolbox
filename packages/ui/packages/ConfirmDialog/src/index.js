import * as React from 'react';
import PropTypes from 'prop-types';

import { Row } from '../../GridSystem/src';
import Button from '../../Button/src';

import {
  StyledConfirmDialog,
  StyledConfirmDialogContainer,
  StyledButtonWrapper,
  StyledIconCol,
  StyledContentCol,
} from './styles';

const ConfirmDialog = props => {
  const {
    title,
    description,
    icon,
    loading,
    acceptTitle,
    dismissTitle,
    onAccept,
    onDismiss,
    ...rest
  } = props;

  return (
    <StyledConfirmDialog
      className="justify-center"
      footer={
        <StyledButtonWrapper className="justify-end">
          <Button
            size="sm"
            title={acceptTitle}
            onClick={onAccept}
            loading={loading}
            className="ml-1"
          />
          <Button
            size="sm"
            title={dismissTitle}
            onClick={onDismiss}
            modifier="outline"
            color="gray"
          />
        </StyledButtonWrapper>
      }
      {...rest}
    >
      <StyledConfirmDialogContainer>
        <Row>
          {!!icon && (
            <StyledIconCol className="align-center" sm={2}>
              <div className="align-center justify-center circle">{icon}</div>
            </StyledIconCol>
          )}
          <StyledContentCol
            className="justify-center flex-column"
            sm={!icon ? 12 : 10}
          >
            <strong>{title}</strong>
            <p>{description}</p>
          </StyledContentCol>
        </Row>
      </StyledConfirmDialogContainer>
    </StyledConfirmDialog>
  );
};

ConfirmDialog.propTypes = {
  title: PropTypes.string,
  acceptTitle: PropTypes.string,
  dismissTitle: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.node]),
  className: PropTypes.string,
  visibility: PropTypes.bool,
  loading: PropTypes.bool,
  width: PropTypes.number,
  position: PropTypes.oneOf(['top', 'center', 'bottom']),
  onClose: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  onOpen: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  onAccept: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  onDismiss: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

ConfirmDialog.defaultProps = {
  className: '',
  visibility: false,
  loading: false,
  onClose: () => {},
  onOpen: () => {},
  onAccept: () => {},
  onDismiss: () => {},
  title: '',
  acceptTitle: 'accept',
  dismissTitle: 'dismiss',
  description: '',
  width: 50,
  position: 'center',
};

export default ConfirmDialog;
