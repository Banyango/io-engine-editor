import React, {Component} from 'react'
import EntityComponent from "./entity";
import {Entity} from "../../store/entities/types";

type SidebarProps = {
    entities: Entity[];
    selectedIndex: -1;
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
                    {entities.map((e => <EntityComponent key={e.id} entity={e} isSelected={false}/>))}
                </tbody>
            </table>
        )
    }
}

export default Sidebar;