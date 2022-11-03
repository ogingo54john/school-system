import React, { Component } from "react";
import axios from "axios";


export default class InvoiceEdit extends Component{
    constructor(props){
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeAmountPaid = this.onChangeAmountPaid.bind(this);
        this.onChangeRated = this.onChangeRated.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);

        this.onSubmit =this.onSubmit.bind(this);

        this.state = {
            userName:"",
            amountPaid:"",
            rated:"",
            quantity:""
        }
    }

    componentDidMount(){
        axios
        .get("http://localhost:4000/api/fees/allfees/"+ this.props.match.params.id)
        .then(res=>{
            this.setState({
                userName:res.data.userName,
                amountPaid:res.data.amountPaid,
                rated:res.data.rated,
                quantity:res.data.quantity 
            });
            console.log(res.data);

        })

        axios
            .get("http://localhost:4000/api/fees/allfees")
            .then(res=>{
                this.setState({courses: res.data});
            })
    }
    // setting state

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
    onSubmit(e){
        e.preventDefault();

        const {userName,amountPaid,rated,quantity} =this.state;

        const Invoices ={
            userName:this.state.userName,
            amountPaid:this.state.amountPaid,
            rated:this.state.rated,
            quantity:this.state.quantity
        };

        const updatedInvoice = {
            userName:this.state.userName,
            amountPaid:this.state.amountPaid,
            rated:this.state.rated,
            quantity:this.state.quantity
        }

        console.log(updatedInvoice);
        console.log(Invoices);

        axios
            .post("http://localhost:4000/api/fees/add/" + this.props.match.params.id,
             updatedInvoice)
            .then(res => console.log(res.data))

            this.props.history.push("/invoices");
    }


    render(){
        return(
            <div>
                <h3>update Invoice</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Full Name</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.userName}
                            onChange={this.onChangeUserName}
                        />
                    </div>
                    <div className="form-group">
                        <label> Amount Paid</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.amountPaid}
                            onChange={this.onChangeAmountPaid}
                        />
                    </div>
                    <div className="form-group">
                        <label> Course rating</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.rated}
                            onChange={this.onChangeRated}
                        />
                    </div>
                    <div className="form-group">
                        <label> Quantity</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.quantity}
                            onChange={this.onChangeQuantity}
                        />
                    </div> 
                    <div className="form-group">
                        <input
                        type="submit"
                        value="Edit Invoice"
                        className="btn btn-primary"
                        />
                     </div>
                </form>
            </div>
        )
    }
}

// eslint-disable-next-line