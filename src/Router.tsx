import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Form,
  TroubleList,
  TroubleDetail,
  SignIn,
  Menu,
  IdiaForm,
} from './views';

export const Path = {
  Form: '/',
  TroubleList: '/troubleList',
};

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="(/)?" component={Form} />
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/troubleList" component={TroubleList} />
        <Route exact path="/troubleList/detail/:id" component={TroubleDetail} />
        <Route exact path="/idiaForm/:title" component={IdiaForm} />
      </Switch>
    </>
  );
};

export default Router;
