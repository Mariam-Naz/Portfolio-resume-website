import React from 'react';
import './App.css';
import {Container , Grid} from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Resume from './pages/Resume/Resume';
import Portfolio from './pages/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Container className='top_60'>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <Router>
            <Header />
            <div className='main-content container_shadow'>
              <Switch>
                <Route exact path='/' component={Resume} />
                <Route exact path='/portfolio' component={Portfolio} />
              </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
