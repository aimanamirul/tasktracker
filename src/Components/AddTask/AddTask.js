import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import './AddTask.css';
import "react-datepicker/dist/react-datepicker.css";

class AddTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            desc: '',
            due: new Date()
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleDescChange(e) {
        this.setState({
            desc: e.target.value
        })
    }

    handleDateChange(date) {
        this.setState({
            due: date
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const task = {
            name: this.state.name,
            desc: this.state.desc,
            due: this.state.due.toLocaleDateString()
        };

        axios.post('http://localhost:5000/tasks/add', task)
            .then(res => console.log(res.data));


        window.location = '/';
    }

    render() {
        return (
            <div className="AddTask">
                <div className="title">
                    <h2>Add New Task</h2>
                </div>
                <form className="form" onSubmit={this.onSubmit}>
                    <label>Task Name
                    <input className="input-box" type="text" value={this.state.name} onChange={this.handleNameChange} /> </label>
                    <label>Description <input className="input-box" type="text" value={this.state.desc} onChange={this.handleDescChange} /></label>
                    <label>Due Date
                    <DatePicker
                        selected={this.state.due}
                        showTimeSelect
                        onChange={this.handleDateChange}
                        className="input-box"
                    /></label>
                    <p>{this.state.due.toLocaleDateString()}</p>
                    <input className="submit-btn" type="submit" value="Add Task" />
                </form>
            </div>
        );
    }
}

export default AddTask;