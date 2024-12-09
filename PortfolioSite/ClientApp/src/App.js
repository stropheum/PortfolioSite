import React, {Component} from 'react';
import {Route} from 'react-router';
import {Layout} from './components/Layout';
import {Home} from './components/Home';
import {FetchData} from './components/FetchData';
import {Counter} from './components/Counter';
import {Samples} from "./components/Samples";
import {Resume} from "./components/Resume";
import {Github} from "./components/Github";
import './custom.css';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout style={{colorScheme: "dark"}}>
                <Route exact path='/' component={Home}/>
                <Route path='/counter' component={Counter}/>
                <Route path='/fetch-data' component={FetchData}/>
                <Route path='/samples' component={Samples}/>
                <Route path='/resume' component={Resume}/>
                <Route path='/github' component={Github}/>
            </Layout>
        );
    }
}
