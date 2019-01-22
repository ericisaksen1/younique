import React, { Component } from 'react';
import './App.scss';
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './components/pages/homepage';
import NotFound from './components/pages/notfound';
import {Route, Switch} from 'react-router-dom';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';

class App extends Component {
  state = {
      hideNav: false,
  };
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  resize() {
      this.setState({hideNav: window.innerWidth <= 1023});
  }
  render() {
    return (
      <>
      <Header/>
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
              key={location.key}
              timeout={this.state.hideNav ? 0 : 750}
              classNames="transition"
            >
            <Switch location={location}>
              <Route exact path="/" component={Homepage} />
              <Route component={NotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
      <Footer/> 
      </>
    )
  }
}

export default App;
