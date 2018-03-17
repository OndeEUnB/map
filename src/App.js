import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history,  sagaMiddleware } from './store';
import Layout from './containers/Layout';
import rootSaga from './sagas';

const App = () => {
  const store = configureStore();
  sagaMiddleware.run(rootSaga);
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Layout />
        </div>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
