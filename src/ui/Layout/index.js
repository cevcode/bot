import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

class Layout extends React.PureComponent {
    render() {
        const { direction, jc, ai, noFlex, multiStr, hidden, disabled, className, ...params } = this.props;

        const classNames = cx(
            className,
            'layout',
            noFlex && 'l_no_flex',
            direction === 'column' && 'layout_column',
            multiStr && 'l_wrap',
            hidden && 'l_hidden',
            jc && `l_jc_${jc}`,
            ai && `l_ai_${ai}`,
            disabled && 'l_disabled'
        );

        return (
            <div className={classNames} {...params}>
                {this.props.children}
            </div>
        );
    }
}

Layout.displayName = 'Layout';
Layout.propTypes = {
    noFlex: PropTypes.bool,
    hidden: PropTypes.bool,
    multiStr: PropTypes.bool,
    disabled: PropTypes.bool,
    onScroll: PropTypes.func,
    tagName: PropTypes.string,
    className: PropTypes.string,
    direction: PropTypes.oneOf(['row', 'column']),
    ai: PropTypes.oneOf(['flex-start', 'center', 'stretch', 'flex-end']),
    jc: PropTypes.oneOf(['flex-start', 'center', 'stretch', 'flex-end', 'space-around', 'space-between']),
};

Layout.defaultProps = {};

export class Row extends React.PureComponent {
    render() {
        return (
            <Layout {...this.props} direction="row">
                {this.props.children}
            </Layout>
        );
    }
}

export class Column extends React.PureComponent {
    render() {
        return (
            <Layout {...this.props} direction="column">
                {this.props.children}
            </Layout>
        );
    }
}
