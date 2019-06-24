import React, {Component} from 'react'
import {Entity} from "../../store/entities/Types";
import {AppState} from "../../store";
import {connect} from "react-redux";
import EcsComponent from "./components/EcsComponent";

type InspectorProps = {
    selected: Entity;
}

class Inspector extends Component<InspectorProps, {}> {
    render() {
        const entity = this.props.selected;

        let name: string = "";
        if (entity != null) {
            name = entity.name;
        }

        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    { this.props.selected.components.map((e,i)=> <EcsComponent key={i} component={e}/>)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    selected:state.entity.objects[state.entity.selectedIndex]
});

export default connect(mapStateToProps, {})(Inspector);