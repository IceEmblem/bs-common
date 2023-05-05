import React from 'react';

export default class extends React.Component<{
    className?: string,
    style?: React.CSSProperties,
    tagClassName?: string,
    tagStyle?: React.CSSProperties,
    text: React.ReactNode,
    children: React.ReactNode,
    isMust?: boolean
}> {
    render() {
        let style = this.props.style || {};
        let tagStyle = this.props.tagStyle || {};

        return <div className={this.props.className} style={{ display: 'flex', alignItems: 'center', ...style }}>
            <span className={`${this.props.isMust ? 'must' : ''} inline-block flex-shrink-0 mr-2 ${this.props.tagClassName || ''}`}
                style={{
                    display: 'inline-block',
                    flexShrink: 0,
                    marginRight: '0.5rem',
                    ...tagStyle
                }}
            >{this.props.text}</span>
            {this.props.children}
        </div>
    }
}