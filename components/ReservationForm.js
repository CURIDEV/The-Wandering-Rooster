import Link from "next/link";
import NiceSelect from "./NiceSelect";

const ReservationForm = () => {
  return (
    <div
      className="booking-contact bg-cover"
      style={{
        backgroundImage: 'url("assets/img/shape/booking-shape.png")',
      }}
    >
      <h4 className="text-center text-white">create an reservation</h4>
      <div className="booking-items">
        <div className="form-clt">
          <NiceSelect
            option={[
              { id: 1, name: "1 People", value: "1-people" },
              { id: 2, name: "2 People", value: "2-people" },
              { id: 3, name: "3 People", value: "3-people" },
            ]}
            className="no-of-person"
          />
        </div>
        <div className="form-clt">
          <input
            type="text"
            name="number"
            id="number"
            placeholder="phone number"
          />
          <div className="icon">
            <i className="fas fa-phone" />
          </div>
        </div>
        <div className="form-clt">
          <input type="date" id="date" name="date" />
        </div>
        <div className="form-clt">
          <Link href="/reservation" className="theme-btn bg-yellow">
            booking now
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ReservationForm;
