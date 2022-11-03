import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import InvoiceAdd from "./InvoiceAdd";
import InvoiceDelete from "./InvoiceDelete";
import InvoiceDownload from "./InvoiceDownload";
import InvoiceEdit from "./InvoiceEdit";
import InvoiceView from "./InvoiceView";

export default class Invoice extends Component{
   render(){
    return(
        <Router>
            <div className="Container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a
              className="navbar-brand"
              href="http://courseweb.sliit.lk/"
              target="_blank"
            >
              {/* <img src={logo} width="50" height="50" alt="courseweb.sliit.lk" /> */}
            </a>

            <Link to="/courselist" className="navbar-brand">
              Invoice Management
            </Link>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/invoices" className="nav-link">
                    View Invoices
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/addinvoice" className="nav-link">
                    Add Invoices
                  </Link>
                </li>
                {/* <li className="navbar-item">
                  <Link to="/invoices/download/:id" className="nav-link">
                    Download Course
                  </Link>
                </li> */}
              </ul>
            </div>
          </nav>
            
          <Route path="/invoices" exact component={InvoiceView} />{""}
            <Route path="/addInvoice" exact component={InvoiceAdd} />{""}
            <Route path="/invoices/edit/:id"  component={InvoiceEdit} />
            <Route path="/invoices/download/:id" exact component={InvoiceDownload} />
            <Route path="/invoices/delete/:id" component={InvoiceDelete} />
            </div>
        </Router>
    )
   } 
}
