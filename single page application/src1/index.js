import React from "react";
import  ReactDOM  from "react-dom";
import "./bootstarp/bootstrap.min.css";
import App from "./App";
import "./index.css";
import "./bootstarp/js/bootstrap.bundle";
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'))