import React from 'react';
import styles from '../css/NotFound';

const propTypes = {};

export default function NotFound() {
  return (
    <div className={styles.container}>
      <span>404 - PAGE NOT FOUND</span>
    </div>
  );
}

NotFound.propTypes = propTypes;
