import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Form, TroubleList } from './views';

export const Path = {
  Form: '/',
  TroubleList: '/troubleList',
};

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="(/)?" component={Form} />
        <Route exact path="/troubleList" component={TroubleList} />
      </Switch>
    </>
  );
};

export default Router;
