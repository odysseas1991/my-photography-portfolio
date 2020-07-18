import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/about/about.component';
import Footer from './components/footer/footer.component';
import ContactPage from './pages/contact/contact.component';
import ProjectsPage from './pages/projectspage/projectspage.component';
import WithSpinner from './components/with-spinner/with-spinner.component';

import { fetchProjectsStartAsync } from '../src/redux/projects/projects.actions';
import { selectProjectFetching } from '../src/redux/projects/projects.selectors';

const HomePageWithSpinner = WithSpinner(HomePage);
const ProjectsPageWithSpinner = WithSpinner(ProjectsPage);

class App extends React.Component {
  componentDidMount() {
    const { fetchProjectsStartAsync } = this.props;
    fetchProjectsStartAsync();
  }

  render() {
    const { isProjectsFetching } = this.props;

    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <HomePageWithSpinner isLoading={isProjectsFetching} {...props} />
            )}
          />
          <Route
            exact
            path='/'
            render={(props) => (
              <ProjectsPageWithSpinner
                isLoading={isProjectsFetching}
                {...props}
              />
            )}
          />
          <Route path='/projects' component={ProjectsPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/contact' component={ContactPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isProjectsFetching: selectProjectFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProjectsStartAsync: () => dispatch(fetchProjectsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
