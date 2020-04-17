import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Route, Switch } from 'react-router';
import NavBar from 'app/components/NavBar';
import { BooksContainer } from 'app/containers/BooksContainer';
import About from 'app/components/About';
import { CategoriesContainer } from 'app/containers/CategoriesContainer';
import './style.css';

// render react DOM
export const App = hot(({ history }) => {
  return (
    <Router history={history}>
      <NavBar />
      <Switch>
        <Route path="/" exact component={CategoriesContainer} />
        <Route path="/category/:listName" component={BooksContainer} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
});
