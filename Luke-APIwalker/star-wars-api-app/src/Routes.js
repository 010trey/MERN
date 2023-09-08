    // src/Routes.js
    import React from 'react';
    import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
    import Home from './components/Home';
    import ResourceDetails from './components/ResourceDetails';
    import NotFound from './components/NotFound';
    import ErrorMessage from './components/ErrorMessage';

    function Routes() {
    return (
        <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:resource/:id" component={ResourceDetails} />
            <Route path="/error" component={ErrorMessage} />
            <Route component={NotFound} />
        </Switch>
        </Router>
    );
    }

    export default Routes;
