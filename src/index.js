import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider, useSelector } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/stores/rootReducers';
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore'
import  { ReactReduxFirebaseProvider, getFirebase, isLoaded, reactReduxFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'

const store = createStore(rootReducer,
  compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
      reduxFirestore(firebase, fbConfig),
      )
  )
  
 const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false,
  fbConfig:fbConfig
}

const rrfProps = { firebase,config: profileSpecificProps, dispatch: store.dispatch, createFirestoreInstance ,attachAuthIsReady: true} // <- needed if using firestore


function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  return children
}

ReactDOM.render(<Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                  <AuthIsLoaded>  
                    <App />
                  </AuthIsLoaded>
                </ReactReduxFirebaseProvider>
              </Provider>, document.getElementById('root'));