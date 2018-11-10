import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./modules/Header";
import Menu from './modules/Menu';
import Sidebar from './modules/Sidebar';

import routes from './routes';
import 'theme/scss/App.scss';


class App extends React.PureComponent {
    state = {
      isOpen: false,
    };

    onSidebarClick = isOpen => {
        this.setState({ isOpen });
    };

    render() {
        const { isOpen } = this.state;
        return (
            <Router>
                <div className="App" id="outer-container">
                    <Sidebar isOpen={isOpen}
                             onSidebarClick={this.onSidebarClick}
                             pageWrapId="page-wrap"
                             outerContainerId="outer-container"
                    />
                    <main id="page-wrap">
                        <Header onSidebarClick={this.onSidebarClick} />
                        {routes.map(route =>
                            <Route key={route.path}
                                   path={route.path}
                                   exact={route.exact}
                                   component={route.component}
                                   onSidebarClick={this.onSidebarClick}
                            />
                        )}
                        <Menu onSidebarClick={this.onSidebarClick} />
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
