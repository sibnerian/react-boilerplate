import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Loading';

const propTypes = {
  page: PropTypes.string.isRequired,
};

export default function Loading({ page }) {
  return (
    <div className={styles[page]}>
      <div className={styles.spinner}>
        <div />
      </div>
    </div>
  );
}

Loading.propTypes = propTypes;
