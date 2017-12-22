import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/UsageHero';

const propTypes = {
  page: PropTypes.string.isRequired,
};

export default function UsageHero({ page }) {
  return (
    <div className={styles.usageHero}>
      <div>
        <h2>universal!</h2>
        <h3>
          {"<UniversalComponent page='"}
          {page}
          {"' />"}
        </h3>
      </div>
    </div>
  );
}
UsageHero.propTypes = propTypes;
