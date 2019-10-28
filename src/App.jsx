import React from 'react';
import {Router, Route} from 'react-router-dom';
import history from './history';
import UserProvider from './contexts/UserProvider';

import Home from './pages/home';
import Events from './pages/events';
import RSVPList from './pages/rsvpList';

import MenuBar from './components/menu/MenuBar'
import Footer from "./components/footer/footer";


const App = () => {
    return (
        <div>
            <Router history={history}>
                <UserProvider>
                    <Route path='/' component={MenuBar} />
                    <Route path='/Events'exact component={Events} />

                </UserProvider>
                <Route path='/' exact component={Home} />

            </Router>
        </div>
    );
};

export default App;
