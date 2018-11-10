import React from 'react';
import { Column } from 'ui/Layout';
import Balance from "../Balance"
import Charts from "../Charts";
import BotList from "../BotList"
import Filter from "../Filter";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            activeFilter: 'all_time',
            activeBot: 'yellow_bot',
        };
    }
    componentDidMount() {
        const url = '/data.json';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                    this.setState({
                        data: data,
                    })
                }
            )
            .catch(error => console.log(error));
    }

    onChangeFilter = activeFilter => {
        this.setState({ activeFilter });
    };

    onChangeBot = activeBot => {
        this.setState({ activeBot });
    };
    render() {
        const { data, activeFilter, activeBot } = this.state;
        return (
            <Column>
                <Balance data={data}/>
                <Charts activeFilter={activeFilter} activeBot={activeBot}/>
                <BotList bots={data.bots} activeFilter={activeFilter} onChangeBot={this.onChangeBot} activeBot={activeBot}/>
                <Filter onChangeFilter={this.onChangeFilter} activeFilter={activeFilter}/>
            </Column>
        )
    }
}

export default Home;
