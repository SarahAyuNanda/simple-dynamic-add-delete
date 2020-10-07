import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  state = [
    {
      firstname: 'Sarah',
      age: '24'
    }
  ]

  handleInputChange = (event, index) => {
    const { name, value } = event.target
    const infoList = [...this.state]
    infoList[index][name] = value
    this.setState({ ...infoList })
  }

  handleAddClick = () => {
    this.setState([...this.state, { firstname: '', age: '' }])
  }

  handleDeleteClick = index => {
    const infoList = [...this.state]
    infoList.splice(index, 1)
    this.setState({ ...infoList })
  }

  ageAverage = () => {
    const sum = this.state.reduce((beforeSum, currentSum) => beforeSum = beforeSum + parseInt(currentSum.age), 0)
    const length = this.state.length
    const average = sum / length
    return average
  }

  addFormInput = () => {
    return this.state.map((data, index) => (
      <div className="Form">
        <input
          type="text"
          autoComplete="off"
          placeholder="Firstname"
          class="form-control"
          name="firstname"
          value={data.firstname}
          onChange={e => this.handleInputChange(e, index)} />
        <input
          type="number"
          placeholder="Age"
          class="form-control"
          name="age"
          value={data.age}
          onChange={e => this.handleInputChange(e, index)} />
        <button type="button" class="btn btn-danger" onClick={() => this.handleDeleteClick(index)}>Delete</button>
      </div>
    ))
  }

  render() {


    return (
      <div className="App">
        <button type="button" class="btn btn-primary" onClick={this.handleAddClick}>Add</button>

        {this.addFormInput()}

        <div className="Average">
          Average of age : {this.ageAverage()}
        </div>

        <div class="table-responsive-sm">
          <table class="table table-bordered table-hover">
            <thead>
              <tr align="center">
                <th scope="col" style={{ width: "50px" }}>#</th>
                <th scope="col">Firstname</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>
              {this.state.map((data, index) => (
                <tr align="center">
                  <td>{index + 1}</td>
                  <td>{data.firstname}</td>
                  <td>{data.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;