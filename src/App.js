import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import DefaultLayout from './Layout/DefaultLayout';
import LoginLayout from './Layout/LoginLayout';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Loading: false
        }
    }
    render() {
        const { Loading } = this.state;
        return (
            <BrowserRouter>
                <Suspense fallback={Loading}>
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return (
                                <Redirect to="/PostLogin/dashboard" />
                            )
                        }}
                    />
                    <Route path="/prelogin" component={LoginLayout} />
                    <Route path="/PostLogin" component={DefaultLayout} />
                </Suspense>
            </BrowserRouter>
        );
    }
}

export default App;