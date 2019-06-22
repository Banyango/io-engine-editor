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
            <div className="ul">
                {entities.map((e => <EntityComponent key={e.id} entity={e} isSelected={false}/>))}
            </div>
        )
    }
}

export default Sidebar;