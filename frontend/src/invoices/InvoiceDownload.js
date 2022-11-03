import axios from "axios";
import React, {Component} from "react";
import ReactToPrint from "react-to-print";

import kadesea from "../img/kadesealogo.png";

const current = new Date();
const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;

const vallNumber = Math.floor(1000 + Math.random() * 9000);


class InvoiceDownload extends Component{
    constructor(props){
        super(props);

       this.state ={
        userName:"",
        amountPaid:"",
        rated:"",
        quantity:"",
        amountDue:"",
        amountExpected:""
       }
    }

  
    componentDidMount(){
        

        axios.get("http://localhost:4000/api/fees/"+this.props.match.params.id)
        .then(res=>{
            console.log(res.data);

            this.setState({
                userName:res.data.userName,
                amountPaid:res.data.amountPaid,
                rated:res.data.rated,
                quantity:res.data.quantity,
                amountDue:res.data.amountDue,
                amountExpected:res.data.amountExpected
            })
        })
    }

    render(){
       return(
        <div>
            <ReactToPrint
                 trigger={() => {
                    // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                    // to the root node of the returned component as it will be overwritten.
                    return <a href="#">Print this out!</a>;
                  }}
                  content={() => this.componentRef}
            />
            <div className="container" ref={el => (this.componentRef = el)}>
                <div className="row row-header mt-3">
                    <div className="col">
                        <img src={kadesea} alt="kadesea" />
                    <h1>Kadesea Agency Limited</h1>
                    <p>Safina plaza 3rd Floor</p>
                    <p>Ronald Ngala Street
                        <p>Eldoret UASIN GISHU 30100
                        <p>Kenya</p>  
                        </p>
                    </p>
                    </div>
                    <div className="col"></div>
                    <div className=" invoice col mt-5 align-self-center">
                        <h2>Invoice</h2>
                        <h3>INV-NO {vallNumber}</h3>
                        {" "}
                        <h4>Balance Due</h4>
                        <h5><span
                                style={{
                                    fontSize:"30px",
                                    width:"100px",
                                    fontWeight:"bold"
                                }}
                            >
                            KSH{this.state.amountDue}
                            </span></h5>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-sm-6">
                        <p>Bill To</p>
                    <h1>{this.state.userName}</h1> 
                    </div>
                    
                    <div className="col-sm-6">
                        <h2>Invoice Date:
                            <span class="date">
                                <p> dd {date}</p>
                            </span>
                        </h2>
                        <h3>Terms: <span>Due on Receipt</span></h3>
                        <h4>Due Date: <span>{date}</span></h4>
                    </div>
                </div>
                <div className="row">
                    <div className="table-responsive mt-5">
                        <table className="table table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Programme</th>
                                    <th>Qty</th>
                                    <th>Rate</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Programe Name</th>
                                    <td>{this.state.quantity}</td>
                                    <td>{this.state.rated}</td>
                                    <td>{this.state.amountExpected}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="Item">
                    <div 
                        style={{
                            fontSize:"30px",
                            marginLeft:"50%"
                        }}
                    >
                    <p>Total Expected <span 
                    style={{
                        fontSize:"25px",
                        fontWeight:"bold"
                    }}
                    >
                        KSH{this.state.amountExpected}</span></p>
                    <p>Total Paid <span
                    style={{
                        fontSize:"25px",
                        fontWeight:"bold"
                    }}
                    >
                        KSH{this.state.amountPaid}</span></p>
                    <p>Balane Due <span
                    style={{
                        fontSize:"25px",
                        fontWeight:"bold"
                    }}
                    >
                        KSH{this.state.amountDue}</span></p>
                </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm">
                        <div>
                            <h5>Notes</h5>
                            <p>Thank youfor the paymenyt.You just made our day</p>
                            {" "}
                            <p>Authorized Signature ........................</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
       )
    }
}

export default InvoiceDownload;