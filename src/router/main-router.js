import React from 'react';
import { requireLogin } from 'router/guards';
import { GuardProvider } from 'react-router-guards';
import { Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Nav from 'components/nav/nav';
import PuzzlePageRoute from 'pages/puzzle-page/puzzle-page-route';
import HomePageRoute from 'pages/home-page/home-page-route';
import ClockPageRoute from 'pages/clock-page/clock-page-route';
import LoginPageRoute from 'pages/login-page/login-page-route';
import CardPageRoute from 'pages/card-page/card-page-route';
import ComponentGeneratorPageRoute from 'pages/component-generator-page/component-generator-page-route';
import RpgRoute from 'pages/rpg-page/rpg-page-route';

const GLOBAL_GUARDS = [requireLogin];
const MainRouter = () => {
  return (
    <HashRouter>
      <Nav />
      <GuardProvider guards={GLOBAL_GUARDS} loading="Loading...">
        <Switch>
          {HomePageRoute()}
          {ClockPageRoute()}
          {PuzzlePageRoute()}
          {CardPageRoute()}
          {LoginPageRoute()}
          {ComponentGeneratorPageRoute()}
          {RpgRoute()}
        </Switch>
      </GuardProvider>
    </HashRouter>
  );
};

export default MainRouter;
