import React, {Component} from 'react'
import {Entity} from "../../store/entities/types";
import {AppState} from "../../store";
import {connect} from "react-redux";

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
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Position x:0 y:0</li>
                        <li className="list-group-item">Collision false</li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    selected:state.entity.objects[state.entity.selectedIndex]
});

export default connect(mapStateToProps, {})(Inspector);