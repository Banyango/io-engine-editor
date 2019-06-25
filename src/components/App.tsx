import React, {Component, ReactNode} from 'react';
import Sidebar from "./sidebar/Sidebar";
import {EntitiesState} from "../store/entities/Types";
import {AppState} from "../store";
import {connect} from "react-redux";
import Inspector from "./inspector/Inspector";

interface AppProps {
    entities: EntitiesState
}

class App extends Component<AppProps> {
    renderNoInspector(): ReactNode {
        return (
            <div className="row">
                <div className="col-lg-2">
                    <Sidebar entities={this.props.entities.objects} selectedIndex={-1}/>
                </div>
                <div className="col-lg-10">
                    <canvas id="mycanvas"></canvas>
                </div>
            </div>)
    }

    renderWithInspector(): ReactNode {
        return (
            <div className="row">
                <div className="col-lg-2">
                    <Sidebar entities={this.props.entities.objects} selectedIndex={this.props.entities.selectedIndex}/>
                </div>
                <div className="col-lg-7">
                    <canvas id="mycanvas"></canvas>
                </div>
                <div className="col-lg-3">
                    <Inspector/>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="container-fluid">
                {this.props.entities.selectedIndex != -1 ? this.renderWithInspector() : this.renderNoInspector()}
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    entities: state.entity
});

export default connect(mapStateToProps, {})(App);