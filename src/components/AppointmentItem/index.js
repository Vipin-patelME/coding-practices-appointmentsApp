// Write your code here

const AppointmentItem = props => {
  const {eachAppointment} = props
  const {Title, date} = eachAppointment

  return (
    <li className="appointment-list">
      <div>
        <h1>{Title}</h1>
        <button type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
            alt="star"
          />
        </button>
      </div>
      <p>{date}</p>
    </li>
  )
}

export default AppointmentItem
