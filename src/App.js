import React from 'react';
import './App.css';
import Birthday from './Birthday';
import { Route, Switch } from 'react-router-dom';
import RouterBirthday from './RouterBirthday';
import Generate from './Generate';
import Wish from './Wish';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Birthday} />
        <Route
          exact
          path='/birthday/:name?/:day?/:month?'
          component={RouterBirthday}
        />
        <Route exact path='/generate' component={Generate} />
        <Route exact path='/wish' component={Wish}  />
      </Switch>
    </div>
  );
}

export default App;