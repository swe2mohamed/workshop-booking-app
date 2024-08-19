import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import Booking from "./Validation/Booking";
import CancelBooking from "./Validation/CancelBooking";
import RouterDemo from "./RouterDemo";
import AxiosDemo from "./Home/AxiosDemo";

const root = ReactDom.createRoot(document.getElementById("root"));
//root.render(<App />)
//root.render(<Booking />)
//root.render(<CancelBooking />)
root.render(<RouterDemo />);
//root.render(<AxiosDemo />)
