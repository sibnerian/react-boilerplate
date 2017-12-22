import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import AppContainer from 'react-hot-loader/lib/AppContainer';
import App from './components/App';

const history = createHistory();

const render = DynamicHotLoadedAppComponent =>
  ReactDOM.hydrate(
    <AppContainer>
      <DynamicHotLoadedAppComponent history={history} />
    </AppContainer>,
    document.getElementById('root'),
  );

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    // eslint-disable-next-line global-require
    const DynamicHotLoadedAppComponent = require('./components/App').default;
    render(DynamicHotLoadedAppComponent);
  });
}

render(App);
