import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/about/about.component';
import Footer from './components/footer/footer.component';
import ContactPage from './pages/contact/contact.component';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../src/firebase/firebase.utils';

import { updateProjects } from '../src/redux/projects/projects.actions';

class App extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateProjects } = this.props;
    const collectionRef = firestore.collection('projects');

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateProjects(collectionsMap);
    });
  }

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

const mapDispatchToProps = (dispatch) => ({
  updateProjects: (projectsMap) => dispatch(updateProjects(projectsMap)),
});

export default connect(null, mapDispatchToProps)(App);
