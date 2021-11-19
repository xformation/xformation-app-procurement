import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../_components/Header';
import SideMenu from '../_components/SideMenu';
import routes from '../_routes/routes';
import { rolesAction, rulesAction, departmentAction, requistionAction } from '../_actions';
import Loader from './../_components/commonLoader';

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Loading: false
    }
  }

  componentDidMount() {
    // this.props.dispatch(rolesAction.searchRoles());
    // this.props.dispatch(rulesAction.searchRules());
    this.props.dispatch(departmentAction.getDepartment());
    this.props.dispatch(requistionAction.getCurrency());
  }

  createRoutes = () => {
    const retData = routes.map((route, index) => {
      return (route.component) ? (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={props => (
            <route.component {...props} />
          )} />
      ) : (null);
    });
    return retData;
  };

  render() {
    return (
      <div className="wrapper">
        <SideMenu {...this.props} />
        <Header {...this.props} />
        <Suspense fallback={<Loader />}>
          <div className="content-page">
            <div className="container-fluid">
              {this.createRoutes()}
            </div>
          </div>
        </Suspense>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { get_roles_status, getRoles } = state.roles;
  return {
    get_roles_status,
    getRoles
  };
}

const connectedDefaultLayout = connect(mapStateToProps)(DefaultLayout);
export { connectedDefaultLayout as DefaultLayout };
