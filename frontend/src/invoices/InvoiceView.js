import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css";
// import InvoiceAdd from './InvoiceAdd';

const Course =props =>(
    <tr>
    <td> {props.course.userName} </td>
    <td> {props.course.amountPaid} </td>
    <td> {props.course.rated} </td>
    <td> {props.course.quantity} </td>
    <td> {props.course.amountDue} </td>
    <td> {props.course.amountExpected} </td>
    <td>
       {/* <span>
        <Link to={"/addInvoice"}
        className=" btn btn-primary"
        style={{
        fontSize:"15px",
        width:"100px"
        }}
        >
            Add</Link> </span>  */}
            {/* extends */}

       <span> <Link 
       to={"/invoices/delete/"+ props.course._id}
       className=" btn btn-primary"
       style={{
        fontSize:"15px",
        width:"100px"
       }}
       >
        Delete
        </Link>
        </span>
{/*  */}
       <span> 
        <Link 
        to={"/invoices/edit/"+ props.course._id}
        className=" btn btn-primary"
        style={{
        fontSize:"15px",
        width:"100px"
       }}
        >
            Edit
            </Link>
        </span>

        <span> 
        <Link 
        to={"/invoices/download/"+props.course._id }
        className=" btn btn-primary"
        style={{
        fontSize:"15px",
        width:"100px"
       }}
        >
            Download
            </Link>
        </span>
    </td>
  </tr>
)
class InvoiceView extends Component{
    constructor(props){
        super(props);
        this.state = {courses:[]};
    }

    componentDidMount(){
        axios
        .get("http://localhost:4000/api/fees/allfees")
        .then(response =>{
            this.setState({courses: response.data});
        })
        .catch(function(error){
            console.log(error);
        });
    }

    courseList(){
        return this.state.courses.map(function(currentCourse, i){
            return <Course course={currentCourse} key={i} />;
        });
    }
    render(){
        return(
                    <div>
                        <h3 className='center'>ALL Invoices</h3>

                        {/* New Invoice */}
                        <span>
                            <Link to={"/addInvoice"}
                                className=" btn btn-primary"
                                style={{
                                fontSize:"15px",
                                width:"200px"
                                }}
                            >
                                New Invoice</Link> 
                        </span> 

            {/* Invoice Table */}
                    <table className='table table-hover table-stripped' style={{ marginTop: 20 }}>
                        <tHead>
                            <tr>
                                <th> User Name </th>
                                <th>Amount Paid</th>
                                <th> Rated </th>
                                <th> Qty </th>
                                <th> Amount Due </th>
                                <th> Amount Expected </th>
                                <th> Modify </th>
                            </tr>
                        </tHead>
                        <tbody>{this.courseList()}</tbody>
                    </table>
                    
                    </div>
                    
                
        )
    }
}

export default InvoiceView;