// Write your code here
import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'

import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {Title: '', date: '', appointmentsList: []}

  onDateChange = event => {
    this.setState({date: event.target.value})
  }

  onUserInput = event => {
    this.setState({Title: event.target.value})
  }

  onSubmitData = event => {
    event.preventDefault()
    const {Title, date} = this.state
    const newAppointment = {
      id: v4(),
      Title,
      date,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      Title: '',
      date: '',
    }))
  }

  render() {
    const {Title, date, appointmentsList} = this.state
    return (
      <div className="bg-container">
        <div className="card-cont">
          <h1>Add Appointment</h1>
          <div className="form-cont">
            <form onSubmit={this.onSubmitData}>
              <label htmlFor="titleInput">Title</label>
              <input
                type="text"
                value={Title}
                onChange={this.onUserInput}
                id="titleInput"
              />
              <br />
              <label htmlFor="dateInput">Date</label>
              <input
                type="date"
                onChange={this.onDateChange}
                value={date}
                id="dateInput"
              />
              <br />
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="appointment-image"
              />
            </div>
          </div>
          <ul>
            <div className="appointment-button-cont">
              <h1>Appointments</h1>
              <button type="button">Starred</button>
            </div>
            <div className="appointment-list-cont">
              {appointmentsList.map(eachAppointment => (
                <AppointmentItem
                  eachAppointment={eachAppointment}
                  key={eachAppointment.id}
                />
              ))}
            </div>
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
