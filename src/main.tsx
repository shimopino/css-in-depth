import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Listing_1_01 } from './ch01/linting-1.1/Markup';
import { Listing_1_02 } from './ch01/linting-1.2/Markup';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/chapter01/listing-1-01" exact>
        <Listing_1_01 />
      </Route>
      <Route path="/chapter01/listing-1-02" exact>
        <Listing_1_02 />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
