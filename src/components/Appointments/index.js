// Write your code here
import {Component} from 'react'
import './index.css'

import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {Title: '', date: '', appointmentslist: []}

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
      id: 1,
      Title,
      date,
    }
    this.setState(prevState => ({
      appointmentslist: [...prevState.appointmentslist, newAppointment],
    }))
  }

  render() {
    const {Title, date, id, appointmentslist} = this.state
    console.log(Title)
    console.log(date)
    return (
      <div className="bg-container">
        <div className="card-cont">
          <h1>Appointment</h1>
          <div className="form-cont">
            <form onSubmit={this.onSubmitData}>
              <p>Title</p>
              <input value={Title} onChange={this.onUserInput} />
              <p>Date</p>
              <input type="date" onChange={this.onDateChange} />
              <br />
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="appoinment_image"
              />
            </div>
          </div>
          <ul>
            {appointmentslist.map(eachAppointment => (
              <AppointmentItem
                eachAppointment={eachAppointment}
                key={eachAppointment.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
