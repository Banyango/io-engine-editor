import React, {Component} from 'react';
import Sidebar from "./sidebar/sidebar";
import {EntitiesState} from "../store/entities/types";
import {AppState} from "../store/index";
import {connect} from "react-redux";

interface AppProps {
    entities: EntitiesState
}

class App extends Component<AppProps> {
    render() {
        return (<Sidebar entities={this.props.entities.objects} selectedIndex={-1}/>)
    }
}

const mapStateToProps = (state: AppState) => ({
    entities: state.entity
});

export default connect(mapStateToProps, {})(App);