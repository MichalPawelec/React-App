import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Switch,
    Route,
    Link,
    NavLink
} from 'react-router-dom';

class Main extends React.Component {
    render() {
        return <ul>
                <li><NavLink to="/services/www">WWW</NavLink></li>
                <li><NavLink to="/services/shop">SHOP</NavLink></li>
                <li><NavLink to="/services/seo">SEO</NavLink></li>
            </ul>
    }
}

class ServiceInfo extends React.Component {
    render() {
        const services = ['www', 'shop', 'seo']
        const {service} = this.props.match.params

        if (services.indexOf(service) === -1) {
            return <Link to="/">Strona główna</Link>
        }
        return <h2>We can offer you: {service}</h2>;
    }
}

class App extends React.Component {

    render() {
        return <HashRouter>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/services/:service" component={ServiceInfo}/>
                </Switch>
            </HashRouter>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});