import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/about/about.component';
import Footer from './components/footer/footer.component';
import ContactPage from './pages/contact/contact.component';
import WithSpinner from './components/with-spinner/with-spinner.component';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../src/firebase/firebase.utils';

import { updateProjects } from '../src/redux/projects/projects.actions';

const HomePageWithSpinner = WithSpinner(HomePage);

class App extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateProjects } = this.props;
    const collectionRef = firestore.collection('projects');

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateProjects(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    console.log(match);
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <HomePageWithSpinner isLoading={loading} {...props} />
            )}
          />
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

export default withRouter(connect(null, mapDispatchToProps)(App));
