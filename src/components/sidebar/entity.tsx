import React, {Component, MouseEventHandler, TableHTMLAttributes} from 'react';
import classNames from 'classnames';
import {Entity} from "../../store/entities/types";
import {deselectEntity, selectEntity} from "../../store/entities/actions";
import {connect} from "react-redux";


type EntityState = {

}

type EntityProps = {
    entity:Entity;
    isSelected:boolean;
    selectEntity: typeof selectEntity;
    deselectEntity: typeof deselectEntity;
}

class EntityComponent extends Component<EntityProps, EntityState> {

    constructor(props:any) {
        super(props);
        this.clickOnEntity = this.clickOnEntity.bind(this);
    }
    clickOnEntity(event1:any) {
        if (!this.props.isSelected) {
            this.props.selectEntity(this.props.entity.id)
        } else {
            this.props.deselectEntity()
        }
    }
    render() {
        const entity = this.props.entity;
        const isSelected = this.props.isSelected;

        const className = classNames({
            "entity":true,
            "table-info":isSelected,
        });

        return (
            <tr className={className} onClick={ this.clickOnEntity }>
                <th scope="row">{entity.id}</th>
                <td>{entity.name}</td>
            </tr>
        )
    }
}

const mapStateToProps = (state: EntityState) => ({

});

export default connect(mapStateToProps, { selectEntity, deselectEntity })(EntityComponent);