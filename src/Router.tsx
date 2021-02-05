import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Form, TroubleList } from './views';

export const Path = {
  Form: '/',
  TroubleList: '/troubleList',
};

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="(/)?" component={Form} />
          <Route exact path="/troubleList" component={TroubleList} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
