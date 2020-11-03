import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  // Create data as an array in state
  state = {
    data: []
  }

  // Function to handle the change in the form
  handleInputChange = (event, index) => {
    const { name, value } = event.target
    const infoList = [...this.state.data]
    infoList[index][name] = value
    this.setState({ infoList })
  }

  // Function to add form as an item of array
  handleAddClick = () => {
    const allData = this.state.data
    const addData = allData.push({ firstname: '', age: '' })
    this.setState([...this.state.data, addData])
  }

  // Function to delete form by its index
  handleDeleteClick = index => {
    const allData = this.state.data
    const deleteData = allData.splice(index, 1)
    this.setState([...this.state.data, deleteData])
  }

  // Function to count the average
  ageAverage = () => {
    const sum = this.state.data.reduce((beforeSum, currentSum) => beforeSum = beforeSum + parseInt(currentSum.age), 0)
    const length = this.state.data.length
    const average = sum / length
    return average
  }

  // Function to change firstname to letter case whatever word format that input
  changeToLetterCase = (param) => {
    return param.charAt(0).toUpperCase() + param.slice(1)
  }

  render() {
    return (
      <div className="App">
        {/* Button to add form input firstname and age */}
        <button type="button" class="btn btn-primary" onClick={this.handleAddClick}>
          <svg width="20px" height="20px" viewBox="0 0 16 16" class="bi bi-person-plus-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
          </svg>
        </button>

        {/* Create form as an item in array */}
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
              min="0"
              placeholder="Age"
              class="form-control"
              name="age"
              value={data.age}
              onChange={e => this.handleInputChange(e, index)} />
              {/* Button to delete item by its index */}
            <button type="button" class="btn btn-danger" onClick={() => this.handleDeleteClick(index)}>
              <svg width="20px" height="20px" viewBox="0 0 16 16" class="bi bi-person-x-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        ))}

        {/* Count average of all ages by the array */}
        <div className="Average">
          Average of age : {this.ageAverage()}
        </div>

        {/* Show all the input in the table */}
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
              {/* Table condition when array is empty */}
              {this.state.data.length === 0 ?
                <tr align="center">
                  <th colSpan="3" >...</th>
                </tr> :
                // Table condition when array has content
                this.state.data.map((data, index) => (
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