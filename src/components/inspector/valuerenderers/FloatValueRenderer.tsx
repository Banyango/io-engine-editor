import React, {Component} from "react";
import {FloatValue, Property} from "../../../store/components/Types";

interface FloatValueProps {
    property:Property<FloatValue>
}

class FloatValueRenderer extends Component<FloatValueProps> {
    render(){
        return (
            <div className="property text-center">
                <div className="h-100">
                    <p className="label">
                        {this.props.property.name}
                    </p>
                </div>
                <div className="value value-vec">
                    <input type="text" readOnly={true} value={this.props.property.value.Val}/>
                </div>
            </div>
        )
    }
}

export default FloatValueRenderer;