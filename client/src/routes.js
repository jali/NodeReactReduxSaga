import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Books from './components/Book';
import Login from './components/Login';
import Register from './components/Register';
import Comment from './components/Comment';

import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Books} />
    <Route path="register" component={Register} />
    <Route path="login" component={Login} />
    <Route path="comment" component={requireAuth(Comment)} />
  </Route>
)
