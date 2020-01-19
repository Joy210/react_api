import React, { Component } from "react";

import axios from "../../node_modules/axios/dist/axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    axios
      .get(API_URL)
      .then(response =>
        this.setState({
          isLoaded: true,
          items: response.data
        })
      )
      .catch(error => console.error(error));
  }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return (
        <div className="text-center my-3">
          {" "}
          <h1>Loading...</h1>{" "}
        </div>
      );
    } else {
      return (
        <div className="user mt-4">
          <div className="row">
            {items.map(item => {
              return (
                <div key={item.id} className="col-3 mb-3">
                  <div className="card card-body">
                    <h5>{item.name}</h5>
                    <span> {item.email} </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}
