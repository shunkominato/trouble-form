import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Form, TroubleList, TroubleDetail } from './views';

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
        <Route exact path="/troubleList/detail/:id" component={TroubleDetail} />
      </Switch>
    </>
  );
};

export default Router;
