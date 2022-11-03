import React, { Component } from 'react';
import TextInputGroup from '../courseManagement/layout/TextInputGroup';
import axios from 'axios';

export default class InvoiceAdd extends Component{
    constructor(props){
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeAmountPaid = this.onChangeAmountPaid.bind(this);
        this.onChangeRated = this.onChangeRated.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);

        this.onSubmit =this.onSubmit.bind(this);

        this.state ={
            userName:"",
            amountPaid:"",
            rated:"",
            quantity:"",
            course:"",
            userList:[]

        }
        
    }

    onChangeUserName(e){
        this.setState({
            userName:e.target.value
        })
    }
    onChangeAmountPaid(e){
        this.setState({
            amountPaid:e.target.value
        })
    }
    onChangeRated(e){
        this.setState({
            rated:e.target.value
        })
    }
    onChangeQuantity(e){
        this.setState({
            quantity:e.target.value
        })
    }
    componentDidMount(){
        axios
        .get("http://localhost:4000/api/student/")
        .then(response => {
          this.setState({userList: response.data });
        //   console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    onSubmit(e){
        e.preventDefault();

        const {userName,amountPaid,rated,quantity} =this.state;

        const Invoices ={
            userName:this.state.userName,
            amountPaid:this.state.amountPaid,
            rated:this.state.rated,
            quantity:this.state.quantity
        };

        console.log(Invoices);
        // check errors
        
        if(userName===""||Number(userName)){
            // this.setState({errors: {userName:"Name is required"}});
           alert("name required and should not be a digit")
            return;
        }
        if(amountPaid===""|| !Number(amountPaid)){
            // this.setState({errors: {userName:"Name is required"}});
           alert("Wrong Inputs!")
            return;
        }
        if(rated===""|| !Number(rated)){
            // this.setState({errors: {userName:"Name is required"}});
           alert("Wrong Inputs!")
            return;
        }
        if(quantity===""|| !Number(quantity)){
            // this.setState({errors: {userName:"Name is required"}});
           alert("Wrong Inputs!")
            return;
        }

        axios
            .post("http://localhost:4000/api/fees/add", Invoices)
            .then(alert("Invoice added successfully"))

            this.props.history.push("/invoices");
    }


    render(){
        return(
            <div>
                <h1>New Invoice</h1>
                <form onSubmit={this.onSubmit}>
                    {/* <TextInputGroup 
                     label=""
                     name="userName"
                     placeholder="Full Name"
                     value={this.state.userName}
                     onChange={this.onChangeUserName}
                    />{""} */}
                    <label> Student Name </label>
                  <select
                    className="form-control"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.onChangeUserName}
                  >
                    <option value="">------</option>
                    {this.state.userList.map(course => {
                      return (
                        <option
                          value={course.studentName}
                          key={course._id}
                        >
                          {course.studentName}
                        </option>
                      );
                    })}
                  </select>
                    <TextInputGroup 
                     label=""
                     name="amountPaid"
                     placeholder="Amount Paid"
                     value={this.state.amountPaid}
                     onChange={this.onChangeAmountPaid}
                    />{""}
                    <TextInputGroup 
                     label=""
                     name="rated"
                     placeholder="Rated"
                     value={this.state.rated}
                     onChange={this.onChangeRated}
                    />{""}
                    <TextInputGroup 
                     label=""
                     name="quantity"
                     placeholder="Quantity"
                     value={this.state.quantity}
                     onChange={this.onChangeQuantity}
                    />{""}
                   
                  <button
                      class="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                    >
                      {" "}
                      Submit{" "}
                    </button>{" "}
                </form>
            </div>
        )
    }
}