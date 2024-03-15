import App from "../App";
import About from "./About";
import Contact from "./Contact";
import Body from "./Body";
import {createBrowserRouter} from "react-router-dom";
//import Cardcontainer from "./Cardcontainer";
//import CustomError from "./CustomError";
  
const approuter = createBrowserRouter([
    {
      path : "/",
      element : <App/>,
      //errorElement : <CustomError/>,
      children : [
        {
            path : "",
            element : <Body/>,
            //errorElement : <CustomError/>
        },
        {
            path : "About",
            element : <About/>
       // errorElement : <CustomError/>
        },
        {
            path : "Contact",
            element : <Contact/>
          //  errorElement : <CustomError/>
          }
        ]
    }
])
export default approuter;