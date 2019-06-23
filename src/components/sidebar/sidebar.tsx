import React, {Component} from 'react'
import EntityComponent from "./entity";
import {EntitiesState, Entity} from "../../store/entities/types";
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