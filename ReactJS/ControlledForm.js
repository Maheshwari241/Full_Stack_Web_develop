import React, { Component } from 'react';

class ControlledForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empId: '',
      empName: '',
      gender: '',
      dob: '',
      doj: '',
      basicPay: '',
      allowances: '',
      deductions: '',
      netPay: '',
      experience: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { empId, empName, gender, dob, doj, basicPay, allowances, deductions } = this.state;

    // Calculate total years of experience
    const experience = this.calculateExperience(doj);

    // Compute net pay
    const netPay = parseFloat(basicPay) + parseFloat(allowances) - parseFloat(deductions);

    // Display output
    alert(`Mr./Ms. ${gender === 'male' ? 'Mr.' : 'Ms.'} ${empName} (${empId}) having ${experience} years is earning $${netPay.toFixed(2)} as salary`);

    // Set state for net pay and experience
    this.setState({ netPay, experience });
  }

  calculateExperience = (dateString) => {
    const today = new Date();
    const doj = new Date(dateString);
    const diff = today - doj;
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    return years;
  }

  render() {
    const { empId, empName, gender, dob, doj, basicPay, allowances, deductions } = this.state;

    return (
      <div>
        <h2>Controlled Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Employee ID:</label>
            <input type="text" name="empId" value={empId} onChange={this.handleChange} />
          </div>
          <div>
            <label>Employee Name:</label>
            <input type="text" name="empName" value={empName} onChange={this.handleChange} />
          </div>
          <div>
            <label>Gender:</label>
            <select name="gender" value={gender} onChange={this.handleChange}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label>Date of Birth:</label>
            <input type="date" name="dob" value={dob} onChange={this.handleChange} />
          </div>
          <div>
            <label>Date of Joining:</label>
            <input type="date" name="doj" value={doj} onChange={this.handleChange} />
          </div>
          <div>
            <label>Basic Pay:</label>
            <input type="number" name="basicPay" value={basicPay} onChange={this.handleChange} />
          </div>
          <div>
            <label>Allowances:</label>
            <input type="number" name="allowances" value={allowances} onChange={this.handleChange} />
          </div>
          <div>
            <label>Deductions:</label>
            <input type="number" name="deductions" value={deductions} onChange={this.handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ControlledForm;
