import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import About from './pages/About';
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'
import Login from './pages/Login';
import Protected from './components/Protected'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={
            <Protected>
              <App />
            </Protected>
          } />

          <Route path="/about" element={
            <Protected>
              <About />
            </Protected>
          } />
          <Route path="/blog" element={
            <Protected>
              <Blog />
            </Protected>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
