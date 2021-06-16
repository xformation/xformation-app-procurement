import React, { Component, Suspense } from 'react';
import Header from '../Components/Header';
import SideMenu from '../Components/SideMenu';
import routes from '../_routes/routes';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: false
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
    const { Loading } = this.state;
    return (
      <BrowserRouter>
        <div className="wrapper">
          <SideMenu {...this.props} />
          <Header {...this.props} />
          <div className="content-page">
            <div className="container-fluid">
              <Suspense fallback={Loading}>
                {this.createRoutes()}
              </Suspense>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default DefaultLayout;
