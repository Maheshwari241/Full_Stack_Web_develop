import React, { Component } from 'react';

class UncontrolledForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const empId = this.empId.value;
    const empName = this.empName.value;
    const gender = this.gender.value;
    const dob = this.dob.value;
    const doj = this.doj.value;
    const basicPay = this.basicPay.value;
    const allowances = this.allowances.value;
    const deductions = this.deductions.value;

    // Calculate total years of experience
    const experience = this.calculateExperience(doj);

    // Compute net pay
    const netPay = parseFloat(basicPay) + parseFloat(allowances) - parseFloat(deductions);

    // Display output
    alert(`Mr./Ms. ${gender === 'male' ? 'Mr.' : 'Ms.'} ${empName} (${empId}) having ${experience} years is earning $${netPay.toFixed(2)} as salary`);
  }

  calculateExperience = (dateString) => {
    const today = new Date();
    const doj = new Date(dateString);
    const diff = today - doj;
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    return years;
  }

  render() {
    return (
      <div>
        <h2>Uncontrolled Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Employee ID:</label>
            <input type="text" ref={(input) => this.empId = input} />
          </div>
          <div>
            <label>Employee Name:</label>
            <input type="text" ref={(input) => this.empName = input} />
          </div>
          <div>
            <label>Gender:</label>
            <select ref={(input) => this.gender = input}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label>Date of Birth:</label>
            <input type="date" ref={(input) => this.dob = input} />
          </div>
          <div>
            <label>Date of Joining:</label>
            <input type="date" ref={(input) => this.doj = input} />
          </div>
          <div>
            <label>Basic Pay:</label>
            <input type="number" ref={(input) => this.basicPay = input} />
          </div>
          <div>
            <label>Allowances:</label>
            <input type="number" ref={(input) => this.allowances = input} />
          </div>
          <div>
            <label>Deductions:</label>
            <input type="number" ref={(input) => this.deductions = input} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default UncontrolledForm;
