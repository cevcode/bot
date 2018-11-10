import React from 'react';
import ls from 'local-storage'
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
            activeFilter: ls.get('activeFilterLocal') || 'all_time',
            activeBot: ls.get('activeBotLocal') || 'yellow_bot',
        };
    }


    async fetchAsync (url) {
        let response = await fetch(url);
        let data = await response.json();
        this.setState({
            data: data,
        });
    }

    componentDidMount() {
        this.fetchAsync('data.json');
    }

    onChangeFilter = activeFilter => {
        this.setState({ activeFilter });
        ls.set('activeFilterLocal', activeFilter);
    };

    onChangeBot = activeBot => {
        this.setState({ activeBot });
        ls.set('activeBotLocal', activeBot);
    };
    render() {
        const { data, activeFilter, activeBot } = this.state;
        return (
            <Column className="content">
                <Balance data={data}/>
                <Charts activeFilter={activeFilter} activeBot={activeBot}/>
                <BotList bots={data.bots} activeFilter={activeFilter} onChangeBot={this.onChangeBot} activeBot={activeBot}/>
                <Filter onChangeFilter={this.onChangeFilter} activeFilter={activeFilter}/>
            </Column>
        )
    }
}

export default Home;
