import React, { Component } from 'react';
import './TaskTable.css';
import './TaskRow.css';
import axios from 'axios';

const TaskRow = props => (
    <div className="TaskRow">
        <div className="title">
            <h2>{props.data.name}</h2>
        </div>
        <div className="body">
            <p>Description: {props.data.desc}</p>
            <p>Due Date: {new Date(props.data.due).toLocaleDateString()} </p>
            <p>Status: {props.data.status}</p>
            <a className="remtask" href="#" onClick={() => { props.deleteTask(props.data._id) }}>Remove This Task</a>
        </div>
    </div>);

class TaskTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

        this.taskList = this.taskList.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:5000/tasks/')
            .then(response => response.json())
            .then(fetchedData => { this.setState({ data: fetchedData }) });
    }

    deleteTask(id) {
        if (window.confirm("Confirm delete?")) {
            axios.delete('http://localhost:5000/tasks/del/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                data: this.state.data.filter(el => el._id !== id)
            })
        } else {
            return;
        }
    }

    taskList() {
        return this.state.data.map(item => { return <TaskRow key={item._id} data={item} deleteTask={this.deleteTask} /> });
    }

    render() {
        return (
            <div className="TaskTable">
                {this.taskList()}
            </div>
        );
    }
}

export default TaskTable;