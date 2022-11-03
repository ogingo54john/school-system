import React, { Component,useState} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import TextInputGroup from "../courseManagement/layout/TextInputGroup";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import jsPDF, {jsPdf} from "jspdf";

export default class Result extends Component{
   
    constructor(props){
        super(props);

        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentRegNo = this.onChangeStudentRegNo.bind(this);
        this.onChangeStudentPackages = this.onChangeStudentPackages.bind(this);
        this.onchangeStudentProgramming = this.onchangeStudentProgramming.bind(this);
        this.onChangeStudentWebdesign = this.onChangeStudentWebdesign.bind(this);

        this.onSubmit =this.onSubmit.bind(this);

        this.state = {
            studentName:"",
            studentRegNo:"",
            studentPackages:"",
            studentProgramming:"",
            studentWebdesign:""

        }
        
    }

    onChangeStudentName(e){
        this.setState({
            studentName:e.target.value
        });
    }
    onChangeStudentRegNo(e){
        this.setState({
            studentRegNo:e.target.value
        });
    }
    onChangeStudentPackages(e){
        this.setState({
            studentPackages:e.target.value
        })
    }
    onchangeStudentProgramming(e){
        this.setState({
            studentProgramming:e.target.value
        })
    }
    onChangeStudentWebdesign(e){
        this.setState({
            studentWebdesign:e.target.value
        })
    }
    
    // createPDF = async () => {
    //     const pdf = new jsPDF("portrait", "pt", "a4");
    //     const data = await document.querySelector("#pdf");
    //     pdf.html(data).then(() => {
    //       pdf.save("shipping_label.pdf");
    //     });
    //   };

    onSubmit(e) {
        e.preventDefault();

        const {studentName,studentRegNo,studentPackages,studentProgramming,studentWebdesign} = this.state;

        console.log(`form submitted`);
        console.log(`student Name: ${this.state.studentName}`);
        console.log(`studentRegNo: ${this.state.studentRegNo}`)

        const newStudent = {
            userName:this.state.studentName,
            regNumber:this.state.studentRegNo,
            packages:this.state.studentPackages,
            programming:this.state.studentProgramming,
            webdesign:this.state.studentWebdesign
        };
        console.log(newStudent);

        axios
            .post("http://localhost:4000/api/result/add",newStudent)
            .then(
                res => console.log(res.data),
                alert("You are successfully registered")
            );

        // check errors
        // if (studentName === ""){
        //     this.setState({studentName:"student name is required"});
        //     return;
        // }
        // if (studentRegNo === ""){
        //     this.setState({studentName:"student registration number is required"});
        //     return;
        // }

        // axios
        //     .get("http://localhost:4000/api/result/allresults")
        //     .then(data => console.log(data.data))

        this.setState({
            studentName:"",
            studentRegNo:"",
            studentPackages:"",
            studentProgramming:"",
            studentWebdesign:""
        })
    }

    render(){
        const {errors} = this.state;

        return(
            <div id="pdf">
                <h1 className="text-center">Result Page</h1>
                <form onSubmit={this.onSubmit}>
                    <TextInputGroup 
                     label=""
                     name="studentName"
                     placeholder="Full Name"
                     value={this.state.studentName}
                     onChange={this.onChangeStudentName}
                    />{""}
                    <TextInputGroup 
                        label=""
                        name="studentRegNo"
                        placeholder="Registration Number"
                        value={this.state.studentRegNo}
                        onChange={this.onChangeStudentRegNo}
                    />
                     <TextInputGroup 
                        label=""
                        name="packages"
                        placeholder="Package Name"
                        value={this.state.studentPackages}
                        onChange={this.onChangeStudentPackages}
                    />
                     <TextInputGroup 
                        label=""
                        name="Studentprogramming"
                        placeholder="progrmming name"
                        value={this.state.studentProgramming}
                        onChange={this.onchangeStudentProgramming}
                    />
                     <TextInputGroup 
                        label=""
                        name="StudentWebdesign"
                        placeholder="web design"
                        value={this.state.studentWebdesign}
                        onChange={this.onChangeStudentWebdesign}
                    />
                    {/* <div className="form-group">
                        <label>Introduction to Computer</label>
                        <select name="cars" id="cars" className="form-control">
                            <option value="volvo">Distinction</option>
                            <option value="saab">Credit</option>
                            <option value="opel">Pass</option>
                            <option value="audi">Fail</option>
                            <option value="audi">Not Done</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Ms Word</label>
                        <select name="cars" id="cars" className="form-control">
                            <option value="volvo">Distinction</option>
                            <option value="saab">Credit</option>
                            <option value="opel">Pass</option>
                            <option value="audi">Fail</option>
                            <option value="audi">Not Done</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Ms Excel</label>
                        <select name="cars" id="cars" className="form-control">
                            <option value="volvo">Distinction</option>
                            <option value="saab">Credit</option>
                            <option value="opel">Pass</option>
                            <option value="audi">Fail</option>
                            <option value="audi">Not Done</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Ms Access</label>
                        <select name="cars" id="cars" className="form-control">
                            <option value="volvo">Distinction</option>
                            <option value="saab">Credit</option>
                            <option value="opel">Pass</option>
                            <option value="audi">Fail</option>
                            <option value="audi">Not Done</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Power Point</label>
                        <select name="cars" id="cars" className="form-control">
                            <option value="volvo">Distinction </option>
                            <option value="saab">Credit </option>
                            <option value="opel">Pass </option>
                            <option value="audi">Fail </option>
                            <option value="audi">Not Done </option>
                        </select>
                    </div> */}
                  <button
                      class="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                    >
                      {" "}
                      Submit{" "}
                    </button>{" "}
                </form>
               <button>Download</button>
            </div>
        );
    }
}