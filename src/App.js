import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  state = {
    data: []
  }

  handleInputChange = (event, index) => {
    const { name, value } = event.target
    const infoList = [...this.state.data]
    infoList[index][name] = value
    this.setState({ infoList })
  }

  handleAddClick = () => {
    const allData = this.state.data
    const addData = allData.push({firstname: '', age: ''})
    this.setState([...this.state.data, addData])
  }

  handleDeleteClick = index => {
    const allData = this.state.data
    const deleteData = allData.splice(index, 1)
    this.setState([...this.state.data, deleteData])
  }

  ageAverage = () => {
    const sum = this.state.data.reduce((beforeSum, currentSum) => beforeSum = beforeSum + parseInt(currentSum.age), 0)
    const length = this.state.data.length
    const average = sum / length
    return average
  }

  changeToLetterCase = (param) => {
    return param.charAt(0).toUpperCase() + param.slice(1)
  }

  render() {
    return (
      <div className="App">
        <button type="button" class="btn btn-primary" onClick={this.handleAddClick}>Add</button>

        {this.state.data.map((data, index) => (
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
        ))}

        <div className="Average">
          Average of age : {this.ageAverage()}
        </div>

        <div class="table-responsive-sm">
          <table class="table table-bordered table-hover">
            <thead class="thead-dark">
              <tr align="center">
                <th scope="col" style={{ width: "50px" }}>#</th>
                <th scope="col" style={{ width: "fit-content" }}>Firstname</th>
                <th scope="col" style={{ width: "fit-content" }}>Age</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((data, index) => (
                <tr align="center">
                  <td>{index + 1}</td>
                  <td>{this.changeToLetterCase(data.firstname)}</td>
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