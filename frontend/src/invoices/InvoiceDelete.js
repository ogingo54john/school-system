import React, { Component } from "react";
import axios from "axios";

export default class InvoiceDelete extends Component{
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    
    componentDidMount() {
        axios
            .delete("http://localhost:4000/api/fees/delete/63469a951592382034e8172b" + this.props.match.params.id)
            .then(response => {})
            .catch(function(error) {
                console.log(error);
            });
    }

    onSubmit(e) {
        e.preventDefault();
        axios.delete(
            "http://localhost:4000/api/fees/delete/" + this.props.match.params.id
        );

        this.props.history.push("/invoices");
    }
    render(){
        return(
            <div>
                <h1 className="bg-danger"> Invoice deleted successfully</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Back to Assignments"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        )
    }
}