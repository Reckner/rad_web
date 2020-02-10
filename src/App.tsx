import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Card from './molecules/Card';
import BlogIntersection from './atoms/BlogIntersection';

export default function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact render={() => <BlogIntersection />} />
                </Switch>
            </div>
        </Router>
    );
}
