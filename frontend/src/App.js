import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Courses from "./courseManagement/Courses";
import Home from "./Home";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Admin from "./adminManagement/Admin";
import Students from "./studentManagement/Students";
import StudentSignup from "./studentManagement/Signup/StudentSignup";
import instructorHeader from "./instructorManagement/instructorHeader";
import InstructorDashboard from "./instructorManagement/InstructorDashboard";
import MainSignIn from "./signIn/MainSignIn";
import MainHeader from "./header/MainHeader";
import StudentSignIn from "./signIn/StudentSignIn";
import InstructorSignIn from "./signIn/InstructorSignIn";
import AdminSignIn from "./signIn/AdminSignIn";
import CourseSignIn from "./signIn/CourseSignIn";
import InstructorCourseSignIn from "./signIn/InstructorCourseSignIn";
import StudentDashbord from "./studentManagement/StudentDashboard";

// new components
import Result from "./results/Results";
import Invoice from "./invoices/Invoice";
// import InvoiceView from "./invoices/InvoiceView";
// import InvoiceAdd from "./invoices/InvoiceAdd";
// import InvoiceEdit from "./invoices/InvoiceEdit";
// import InvoiceDownload from "./invoices/InvoiceDownload";
// import InvoiceDelete from "./invoices/InvoiceDelete";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MainHeader />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/courses" component={Courses} />
            <Route path="/admin" component={Admin} />
            <Route path="/students" component={Students} />{" "}
            <Route path="/signup" component={StudentSignup} />{" "}
            <Route path="/instructor" component={instructorHeader} />
            <Route path="/mainsignin" component={MainSignIn} />
            <Route
              path="/instructorDashboard"
              component={InstructorDashboard}
            />
            <Route path="/studentsignin" component={StudentSignIn} />
            <Route path="/adminsignin" component={AdminSignIn} />

            <Route path="/instructorsignin" component={InstructorSignIn} />
            <Route path="/coursesignin" component={CourseSignIn} />
            <Route
              path="/instructorcoursesignin"
              component={InstructorCourseSignIn}
            />
            <Route path="/studentdashbord" component={StudentDashbord} />{" "}
            <Route path="/allinvoices" exact component={Invoice} />{""}
            {/* <Route path="/student/results" component={Result} />{""}
            <Route path="/invoices" exact component={InvoiceView} />{""}
            <Route path="/addInvoice" exact component={InvoiceAdd} />{""}
            <Route path="/invoices/edit/:id"  component={InvoiceEdit} />
            <Route path="/invoices/download/:id" exact component={InvoiceDownload} />
            <Route path="/invoices/delete/:id" component={InvoiceDelete} /> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
