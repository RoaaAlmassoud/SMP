import React, {Component} from "react"
import MainLayout from './components/main-layout/main-layout'
import TopPage from './components/top-page/src/top-page'

//import Logout from './components/logout/logout'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppContext from './context/app-context';
import Helper from '../src/utils/helper'
import {css} from 'glamor';
import {toast, ToastContainer} from 'react-toastify';
import {Icon, Label} from 'semantic-ui-react'

export default class App extends Component {
  constructor(props) {

    super(props);
    this.pathName = window.location.pathname;
    this.state = {
      errorFor: this.errorFor
    }
  }


  notify = (error, message, duration = 5000) =>
      (message) ? toast(
          error ?
              <div><Icon size="large" name='warning'/> {message}</div>
              : <div><Icon link name='check'/> {message}</div>,
          {
            autoClose: duration,
            className: css({
              padding: '10px',
              color: error ? '#912d2b !important' : 'teal !important',
            }),
            progressClassName: css({
              background: error ? '#912d2b !important' : 'teal !important',
            }),
            // This position to determine where should the toast appear . (default top right)
            position: toast.POSITION.TOP_RIGHT,
          }) : null;

  errorFor = (state, field, component, direction) => {
    let {isMobile, screenSize} = this.state;
    if (component === 'login' || component === 'register') {
      isMobile = screenSize <= 990;
    }

    let hide = state.validationErrors[field]? state.validationErrors[field].includes('required'): false;
    if (state.validationErrors[field] && state.showErrors) {
      return <div className={`error-section ${state.serverError && !hide ? '' : 'invisible'}`}>
        <Label
            basic color='red' pointing={direction || isMobile ? `above` : 'right'}>
          {state.validationErrors[field]}
        </Label>
      </div>
    }
    return null
  }


  render() {
    return (
        <BrowserRouter>
          <AppContext.Provider value={this.state}>
            <MainLayout props={this} notify={this.notify} key={Helper.unique()}>
              <Switch>
                <Route exact path="/"
                       render={(props) => <TopPage notify={this.notify} {...props}/>}/>
              </Switch>
              <ToastContainer autoClose={5000}/>
            </MainLayout>
          </AppContext.Provider>
        </BrowserRouter>
    )
  }

}

