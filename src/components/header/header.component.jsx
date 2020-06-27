import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleDropdownHidden } from '../../redux/dropdown/dropdown.actions';

import PROJECTS_DATA from '../../pages/projects.data';

import './header.styles.scss';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      projects: PROJECTS_DATA,
    };
  }

  render() {
    const { projects } = this.state;
    const { history, match, toggleDropdownHidden, hidden } = this.props;

    return (
      <div className='header'>
        <div className='name'>
          <h1>Odysseas Kouloukythas</h1>
        </div>
        <div className='options'>
          <Link className='option' to='/'>
            Home
          </Link>
          <div className='option'>
            <div className='dd-projects' onClick={toggleDropdownHidden}>
              <div className='dd-title'>
                Projects{' '}
                <div className='dd-title-symbol'>
                  {!hidden ? <div> -</div> : <div> +</div>}
                </div>
              </div>
              {!hidden && (
                <ul className='dd-projects-list'>
                  {projects.map((item) => (
                    <li
                      key={item.id}
                      className='dd-projects-title'
                      onClick={() =>
                        history.push(`${match.url}${item.routeName}`)
                      }
                    >
                      -{item.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <Link className='option' to='/about'>
            About
          </Link>
          <Link className='option' to='/contact'>
            Contact
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hidden: state.dropdown.hidden,
});

/*const mapStateToProps = ({ dropdown: { hidden } }) => ({
  hidden,
});
*/
const mapDispatchToProps = (dispatch) => ({
  toggleDropdownHidden: () => dispatch(toggleDropdownHidden()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
