import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/about/about.component';
import Footer from './components/footer/footer.component';
import ContactPage from './pages/contact/contact.component';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/contact' component={ContactPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
