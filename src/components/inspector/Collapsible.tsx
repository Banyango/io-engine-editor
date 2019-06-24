import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

interface CollapsibleProps {
    id:string;
    collapsed: boolean;
    className:string;

}

interface CollapsibleState {
    collapsed: boolean;
}

export default class Collapsible extends React.Component<CollapsibleProps, CollapsibleState> {
    static propTypes = {
        collapsed: PropTypes.bool,
        children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
            .isRequired,
        id: PropTypes.string
    };


    constructor(props:any) {
        super(props);
        this.state = {
            collapsed: this.props.collapsed
        };
    }

    toggleVisibility = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };

    render() {
        const rootClassNames = {
            collapsible: true,
            component: true,
            collapsed: this.state.collapsed
        };
        if (this.props.className) {
            // @ts-ignore
            rootClassNames[this.props.className] = true;
        }
        const rootClasses = classnames(rootClassNames);

        const contentClasses = classnames({
            content: true,
            hide: this.state.collapsed
        });

        return (
            <div id={this.props.id} className={rootClasses}>
                <div className="static" onClick={this.toggleVisibility}>
                    <div className="collapse-button" />
                    // @ts-ignore
                    {this.props.children[0]}
                </div>
                // @ts-ignore
                <div className={contentClasses}>{this.props.children[1]}</div>
            </div>
        );
    }
}