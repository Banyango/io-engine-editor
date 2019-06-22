import React, {Component} from 'react';
import classNames from 'classnames';
import {Entity} from "../../store/entities/types";

type EntityState = {

}

type EntityProps = {
    entity:Entity,
    isSelected:boolean
}

class EntityComponent extends Component<EntityProps, EntityState> {

    render() {
        const entity = this.props.entity;
        const isSelected = this.props.isSelected;

        const className = classNames({
            entity:true,
            active:isSelected,
        });

        return (
            <div className={className} >
                <p>entity+ {entity.id}</p>
            </div>
        )
    }
}

export default EntityComponent;