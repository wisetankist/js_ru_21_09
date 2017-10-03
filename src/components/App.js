import React, { Component } from 'react'
import Select from 'react-select'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from 'react-day-picker';
import moment from 'moment';
import 'react-day-picker/lib/style.css';

class App extends Component {
    state = {
        selected: null,
        username: '',
        from: null,
        to: null,
    }

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };
    handleResetClick = e => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
    };
    handleChange = selected => this.setState({selected})
    handleUserChange = ev => {
        if (ev.target.value.length > 10) return this.setState({
            username: ''
        })

        this.setState({
            username: ev.target.value
        })
    }

    render() {
        const {articles} = this.props

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        const {selected, username, from, to} = this.state

        return (
            <div>
                <h1>App name</h1>
                User: <input type='text' value={username} onChange={this.handleUserChange}/>
                <Select options={options} value={selected} onChange={this.handleChange} multi/>
                <DayPicker
                    numberOfMonths={1}
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.handleDayClick}
                    fixedWeeks
                />
                {from &&
                to &&
                <p>
                    You chose from
                    {' '}
                    {moment(from).format('L')}
                    {' '}
                    to
                    {' '}
                    {moment(to).format('L')}
                    .
                    {' '}<a href="." onClick={this.handleResetClick}>Reset</a>
                </p>}
                <ArticleList articles={articles}/>
                <ArticlesChart articles={articles}/>
            </div>
        )
    }
}

export default App