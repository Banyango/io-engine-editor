import React, {Component} from 'react'
import EntityComponent from "./Entity";
import {EntitiesState, Entity} from "../../store/entities/Types";
import {connect} from "react-redux";

type SidebarProps = {
    entities: Entity[];
    selectedIndex: number;
}

class Sidebar extends Component<SidebarProps, {}> {
    render() {

        let entities = this.props.entities;

        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Entity</th>
                    </tr>
                </thead>
                <tbody>
                    {entities.map(((e,i) => <EntityComponent key={e.id} entity={e} isSelected={i == this.props.selectedIndex}/>))}
                </tbody>
            </table>
        )
    }
}

export default Sidebar;