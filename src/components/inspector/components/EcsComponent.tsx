import React, {ReactNode} from "react";
import {Component, FloatValue, Property, VectorValue} from "../../../store/components/Types";
import FloatValueRenderer from "../valuerenderers/FloatValueRenderer";
import VectorValueRenderer from "../valuerenderers/VectorValueRenderer";

interface PositionComponentProps {
    component:Component
}

class EcsComponent extends React.Component<PositionComponentProps> {
    renderComponent(component: Component) {
        if (component.properties != null) {
            let result = Array<ReactNode>();
            component.properties.forEach((e, i)=> {
                if (e != null && e.value != null) {
                    let value = (<span></span>);

                    if (e.value.type === 'float') {
                        value = (<FloatValueRenderer key={i} property={e}/>)
                    } else if (e.value.type === 'vector') {
                        value = (<VectorValueRenderer property={e}/>)
                    } else {
                        console.log("value cannot be rendered " + e.value.type)
                    }

                    result.push(
                        <div key={e.name}>
                            <div className="">{value}</div>
                        </div>
                    )
                }
            });
            return result
        } else {
            return (<div></div>)
        }
    }
    render(){
        return (
            <div className="">
                <div className="toast-header">
                    <img src="/img/icon_component.svg" className="mr-2" style={{width:16,height:16}} />
                    <strong className="mr-auto">
                        {this.props.component.name}
                    </strong>
                    {/*<button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">*/}
                    {/*    <span aria-hidden="true">^</span>*/}
                    {/*</button>*/}
                </div>
                { this.renderComponent(this.props.component) }
            </div>
        )
    }
}

export default EcsComponent;