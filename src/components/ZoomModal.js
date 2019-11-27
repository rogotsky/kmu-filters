import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeModal } from '../store/actions';

class ZoomModal extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.tagName !== 'IMG') {
      this.props.closeModal();
    }
  }

  render() {
    const {
      modalSource,
      modalOpened,
    } = this.props;

    return(
      <div
        className={`zoom-modal${modalOpened ? ' zoom-modal--opened' : ''}`}
        onClick={this.handleClick}
      >
        <div className="zoom-modal__inner">
          <button className="post-image__close" />
          {!!modalSource.length && <img src={modalSource} />}
        </div>
      </div>
    )
  }
}

ZoomModal.propTypes = {
  modalSource: PropTypes.string,
  modalOpened: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default connect(
  ({ modalSource, modalOpened }) => ({ modalSource, modalOpened }),
  { closeModal }
)(ZoomModal);
