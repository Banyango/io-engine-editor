import React, {Component} from "react";
import {Property, VectorValue} from "../../../store/components/Types";

interface VectorComponentProps {
    property: Property<VectorValue>
}

class VectorValueRenderer extends Component<VectorComponentProps> {
    render() {
        return (
            <div className="property text-center">
                <div className="h-100">
                    <p className="label">
                    {this.props.property.name}
                    </p>
                </div>
                <div className="value value-vec">
                    <input type="text" readOnly={true} value={this.props.property.value.X}/>
                    <input type="text" readOnly={true} value={this.props.property.value.Y}/>
                </div>
            </div>
        )
    }
}

export default VectorValueRenderer;