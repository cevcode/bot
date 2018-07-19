import React from 'react';
import { Column, Row } from 'ui/Layout';
import Checkbox from 'ui/Checkbox';
import PropTypes from 'prop-types';
import { numberText } from 'helpers';
import Description from 'ui/Description';

const config = ['пересадка', 'пересадки', 'пересадок'];

//Task #2

class Stops extends React.Component {
    constructor(props) {
        super(props);

    }
    static getDerivedStateFromProps(nextProps) {
        const { minStops, maxStops } = nextProps;
        const scope = [];

        if (minStops === null || maxStops === null) {
            return scope;
        } else {
            for (let i = minStops; i <= maxStops; i++) {
                scope.push(i);
            }
            return { scope };
            }
        }

    state = {
        scope: [],
    };

    showAll = () => {
        const { onChange } = this.props;
        const { scope } = this.state;

        onChange([...scope]);
    };

    onChange = (count) => {
        const { stops, onChange } = this.props;
        const idx = stops.indexOf(count);

        if (idx !== -1) {
            onChange(
                [
                    ...stops.slice(0, idx),
                    ...stops.slice(idx + 1),
                ]
            );
        } else {
            onChange([...stops, count]);
        }
    };

    showOnly = (count) => {
        const { onChange } = this.props;

        onChange([count]);
    };

    showLabel(count) {
        if (count === 0) {
            return `Без ${numberText(count, config)}`;
        }

        return `${count} ${numberText(count, config)}`;
    }

    render() {
        const { stops } = this.props;
        const { scope } = this.state;
        const all = stops.length === scope.length;

        return (
            <Column className="stops">
                <Description size="x-medium" className="stops__title">Количество пересадок</Description>
                <Column>
                <Row className="stops__row">
                    <Checkbox
                        value={all}
                        onChange={this.showAll}
                        label="Все"
                    />
                </Row>
                {
                    scope.map((count, i) => (
                        <Row className="stops__row" key={i}>
                            <Checkbox
                                value={stops.includes(count)}
                                onChange={() => this.onChange(count)}
                                label={this.showLabel(count)}
                            />
                            <button
                                className="stops__button"
                                onClick={() => this.showOnly(count)}
                            >
                                только
                            </button>
                        </Row>
                    ))
                }
                </Column>
            </Column>
        );
    }
}

Stops.PropTypes = {
    minStops: PropTypes.number,
    maxStops: PropTypes.number,
    stops: PropTypes.array,
    onChange: PropTypes.func,
};

Stops.defaultProps = {
    minStops: null,
    maxStops: null,
    stops: [],
    onChange: () => console.log('Clicked on checkbox')
};

export default Stops;
