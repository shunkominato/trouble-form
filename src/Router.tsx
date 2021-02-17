import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Form,
  TroubleList,
  TroubleDetail,
  SignIn,
  Menu,
  IdiaForm,
  IdiaList,
  IdiaDetail,
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
        <Route exact path="/idiaForm/:id/:title" component={IdiaForm} />
        <Route exact path="/idiaList" component={IdiaList} />
        <Route exact path="/idiaList/detail/:id" component={IdiaDetail} />
      </Switch>
    </>
  );
};

export default Router;
