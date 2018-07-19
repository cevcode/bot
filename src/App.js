import React, { Component } from 'react';
import Filter from 'modules/filters';
import Posts from 'modules/posts';
import { Column, Row } from 'ui/Layout';
import { RUB } from './currency/code';

import 'theme/scss/App.scss';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currency: RUB,
            tickets: [],
            stops: [],
        };
    }
    // Task #6
    componentDidMount() {
        const url = '/tickets.json';
        fetch(url)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    tickets: data.tickets,
                    stops: [...new Set(data.tickets.map(ticket => ticket.stops))],
                })
            )
            .catch(error => console.log(error));
    }

    onChangeStops = stops => {
        this.setState({ stops });
    };
    // Task #3
    onChangeCur = currency => {
        this.setState({ currency });
    };

    render() {
        const { tickets, currency, stops } = this.state;
        const newTickets = tickets
            .filter(ticket => stops.includes(ticket.stops))
            .map(ticket => ({
                ...ticket,
                currency,
            }));
        const { minStops, maxStops } = tickets.reduce((prev, ticket) => {
            if (!prev.minStops || prev.minStops > ticket.stops) {
                prev.minStops = ticket.stops;
            }

            if (!prev.maxStops || prev.maxStops < ticket.stops) {
                prev.maxStops = ticket.stops;
            }

            return prev;
        }, {});

        return (
            <div className="App">
                <Column className="container">
                    <div className="header">
                        <i className="logo" />
                    </div>
                    <Row className="content">
                        <Filter
                            currency={currency}
                            minStops={minStops}
                            maxStops={maxStops}
                            stops={stops}
                            onChangeCur={this.onChangeCur}
                            onChangeStops={this.onChangeStops}
                        />
                        <Posts currency={currency} tickets={newTickets} />
                    </Row>
                </Column>
            </div>
        );
    }
}

export default App;
