import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import universal from 'react-universal-component';
import styles from '../css/App';
import UsageHero from './UsageHero';
import Loading from './Loading';
import NotFound from './NotFound';
import { pages, nextIndex, indexFromPath } from '../utils';

const UniversalComponent = universal(props => import(`./${props.page}`), {
  minDelay: 1200,
  loading: Loading,
  error: NotFound,
});

const propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default class App extends React.Component {
  constructor(props) {
    super(props);

    const { history } = props;
    const index = indexFromPath(history.location.pathname);

    this.state = {
      index,
      loading: false,
      done: false,
      error: false,
    };

    history.listen(({ pathname }) => {
      this.setState({ index: indexFromPath(pathname) });
    });
  }

  changePage = () => {
    if (this.state.loading) return;

    const index = nextIndex(this.state.index);
    const page = pages[index];

    this.props.history.push(`/${page}`);
  };

  beforeChange = ({ isSync }) => {
    if (!isSync) {
      this.setState({ loading: true, error: false });
    }
  };

  afterChange = ({ isSync, isServer, isMount }) => {
    if (!isSync) {
      this.setState({ loading: false, error: false });
    } else if (!isServer && !isMount) {
      this.setState({ done: true, error: false });
    }
  };

  handleError = () => {
    this.setState({ error: true, loading: false });
  };

  buttonText() {
    const { loading, error } = this.state;
    if (error) return 'ERROR';
    return loading ? 'LOADING...' : 'CHANGE PAGE';
  }

  render() {
    const { index, done, loading } = this.state;
    const page = pages[index];
    const loadingClass = loading ? styles.loading : '';
    const buttonClass = `${styles[page]} ${loadingClass}`;

    return (
      <div className={styles.container}>
        <h1>Hello Reactlandia</h1>
        {done && <div className={styles.checkmark}>all loaded ✔</div>}

        <UsageHero page={page} />

        <UniversalComponent
          page={page}
          onBefore={this.beforeChange}
          onAfter={this.afterChange}
          onError={this.handleError}
        />

        <button className={buttonClass} onClick={this.changePage}>
          {this.buttonText()}
        </button>

        <p>
          <span>*why are you looking at this? refresh the page</span>
          <span>and view the source in Chrome for the real goods</span>
        </p>
      </div>
    );
  }
}

App.propTypes = propTypes;
