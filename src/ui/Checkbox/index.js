import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

let counter = 0;

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.id = `checkbox-${counter++}`
    }
    render() {
        const {value, onChange, label, className} = this.props;
        return (
            <label className={cx('checkbox', className)}>
                <span className={cx(['checkbox__checkbox'], {[['checkbox__checkbox_checked']]: value})}/>
                <input
                    type="checkbox"
                    className="checkbox__input"
                    checked={value}
                    id={this.id}
                    onChange={e => onChange(e.target.checked)}
                />
                <span className="checkbox__label">{label}</span>
            </label>
        );
    }
};

Checkbox.defaultProps = {
    value: false,
    onChange: () => console.log('Checkbox: No onChange handler'),
};

Checkbox.propTypes = {
    value: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
};

export default Checkbox;
