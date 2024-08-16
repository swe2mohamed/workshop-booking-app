import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import ValidationForm from "./Booking/ValidationForm";
import CancelBooking from "./Booking/CancelBooking";

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />)
//root.render(<ValidationForm />)
//root.render(<CancelBooking />)