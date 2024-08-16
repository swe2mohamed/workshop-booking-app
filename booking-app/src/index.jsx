import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";


const element = <h1>Hello Reacrt</h1>
const root = ReactDom.createRoot(document.getElementById('root'));


root.render(element);