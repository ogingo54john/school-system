import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Course = props => (
  <tr>
    <td> {props.course.courseName} </td>
    <td> {props.course.description} </td>
    <td> {props.course.instructorName} </td>
    <td> {props.course.instructorEmail} </td>
    <td> {props.course.startDate} </td>
    <td> {props.course.duration} </td>
  </tr>
);
class ViewCourse extends Component {
  constructor(props) {
    super(props);
    this.state = { courses: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/course/")
      .then(response => {
        this.setState({ courses: response.data });
        console.log(response.data)
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:4000/api/course/")
      .then(response => {
        this.setState({ courses: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  courseList() {
    return this.state.courses.map(function(currentCourse, i) {
      return <Course course={currentCourse} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3
          style={{
            color: "black"
          }}
        >
          {" "}
          View All Courses{" "}
        </h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th> Course Name </th>
              <th> Description </th>
              <th> Instructor Name </th>
              <th> Instructor Email </th>
              <th> Start Date </th>
              <th> Duration </th>
            </tr>
          </thead>
          <tbody>{this.courseList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ViewCourse;
