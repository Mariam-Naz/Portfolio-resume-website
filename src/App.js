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
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3} style={{backgroundColor: "blue"}}>
          <Profile />
        </Grid>
        <Grid item xs style={{ backgroundColor: "yellow" }}>
          <Header />
          <Router>
            <Switch>
              <Route exact path='/' component={Resume} />
              <Route exact path='/portfolio' component={Portfolio} />
            </Switch>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
