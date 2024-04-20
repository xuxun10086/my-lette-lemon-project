import ReservationForm from "../../components/reservePages/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../../bookingsAPI";
import HeroImage from "../../assets/food/food4.webp";

export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
      <>
        <header className="reserve-table">
          <img
              className="header-reserve"
              src={HeroImage}
              alt="Little Lemon Ingredients"
          ></img>
          <div className="reserve-header-text">
            <h1>Reserve a table</h1>
          </div>
        </header>
        <ReservationForm availableTimes={availableTimes} updateTimes={dispatch}/>
      </>
  );
}
