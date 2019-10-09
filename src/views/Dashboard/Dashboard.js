import React, { Component } from 'react';
import BarGraph from '../Graph/Graph';
import Field from '../../components/Field.js';
import Table from './Table.js';

class Graphy extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return(
                <BarGraph/>
        )
    }
}

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            budgets: []
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const response = await fetch('/api/home');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        this.setState({ budgetes: body.budgets });
    }

    render() {
        return(
            <div>
                <Graphy></Graphy>
                <Field getData={this.getData}></Field>
                <Table data={this.state.budgets}></Table>
            </div>
        )
    }
}

export default Dashboard