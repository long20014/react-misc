import React from 'react';
import { requireLogin } from 'router/guards';
import { GuardProvider } from 'react-router-guards';
import history from 'services/history.service';
import { Switch } from 'react-router-dom';
import { Router } from "react-router";
import Nav from 'components/nav/nav';
import PuzzlePageRoute from 'pages/puzzle-page/puzzle-page-route'
import HomePageRoute from 'pages/home-page/home-page-route'
import ClockPageRoute from 'pages/clock-page/clock-page-route'
import LoginPageRoute from 'pages/login-page/login-page-route';
import CardPageRoute from 'pages/card-page/card-page-route';

const GLOBAL_GUARDS = [requireLogin];
const MainRouter = () => {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`} history={history}>
      <Nav />
      <GuardProvider guards={GLOBAL_GUARDS} loading="Loading..." >
        <Switch>
          {HomePageRoute()}
          {ClockPageRoute()}
          {PuzzlePageRoute()}
          {CardPageRoute()}
          {LoginPageRoute()}
        </Switch>
      </GuardProvider>          
    </Router>
  )
}

export default MainRouter;