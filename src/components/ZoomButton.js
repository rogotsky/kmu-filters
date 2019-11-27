import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openModal } from '../store/actions';

class ZoomButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      openModal,
      source
    } = this.props;

    return (
      <button onClick={() => openModal(source)} className="post-image__zoom" />
    )
  }
}

ZoomButton.propTypes = {
  source: PropTypes.string,
  openModal: PropTypes.func
};

export default connect(null, { openModal })(ZoomButton);
