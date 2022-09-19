// Write your code here

const AppointmentItem = props => {
  const {eachAppointment} = props
  const {Title, date} = eachAppointment

  return (
    <li>
      <h1>{Title}</h1>
      <p>{date}</p>
    </li>
  )
}

export default AppointmentItem
