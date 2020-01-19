import React, { Component } from "react";
import axios from "axios/dist/axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: ""
    };
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmitHandler = e => {
    e.preventDefault();
    axios
      .post(API_URL, this.state)
      .then(response => console.log(response))
      .catch(err => console.error(err));
  };

  render() {
    const { name, email } = this.state;

    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-4 col-offset-4">
          <div className="card">
            <div className="card-header">Create User</div>
            <div className="card-body">
              <form onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={this.onChangeHandler}
                  />
                </div>
                <button className="btn btn-primary w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
