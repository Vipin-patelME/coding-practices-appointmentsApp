// Write your code here

import {format} from 'date-fns'

const AppointmentItem = props => {
  const {eachAppointment, isFavToggle} = props
  const {Title, date, id, isFav} = eachAppointment

  const onChangeFav = () => {
    isFavToggle(id)
  }

  return (
    <li className="appointment-list">
      <div>
        <p>{Title}</p>
        <p>{format(new Date(`${date}`), 'dd MMMM  yyyy, EEEE')}</p>
      </div>
      {isFav ? (
        <button type="button" testid="star" onClick={onChangeFav}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
            alt="star"
          />
        </button>
      ) : (
        <button type="button" testid="star" onClick={onChangeFav}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
            alt="star"
          />
        </button>
      )}
    </li>
  )
}

export default AppointmentItem
