import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../_components/Header';
import SideMenu from '../_components/SideMenu';
import routes from '../_routes/routes';
import { rolesAction, emailActions, departmentAction, requistionAction } from '../_actions';
import Loader from './../_components/commonLoader';
import { status } from "../_constants";

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Loading: false
    }
  }

  componentDidMount() {
    this.props.dispatch(departmentAction.getDepartment());
    this.props.dispatch(requistionAction.getCurrency());
    this.props.dispatch(emailActions.searchallemails({ 'search': 'inbox' }));
  }

  componentDidUpdate(prevProps, prevState) {
    if ((this.props.search_all_email_status !== prevProps.search_all_email_status) &&
      this.props.search_all_email_status === status.SUCCESS) {
      if (this.props.searchallemail.object && this.props.searchallemail.object.length > 0 && this.props.searchallemail.type == 'inbox') {
        this.props.dispatch(emailActions.searchallinboxemails(this.props.searchallemail.object))
      }
      else {
        this.props.dispatch(emailActions.searchallinboxemails(this.props.searchallemail.object))
      }
    }
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
  const { get_roles_status, getRoles, search_all_email_status, searchallemail } = state.procurement;
  return {
    get_roles_status,
    getRoles,
    search_all_email_status,
    searchallemail
  };
}

const connectedDefaultLayout = connect(mapStateToProps)(DefaultLayout);
export { connectedDefaultLayout as DefaultLayout };
