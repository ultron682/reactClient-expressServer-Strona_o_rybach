// import styles from "./styles.module.css";
import axios from "axios";
import React from "react";

import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default class AddModifyDeleteTool extends React.Component {
  state = {
    tool: {},
    image: null,
  };

  componentDidMount() {
    try {
      //this.setState({ tool: {_id: window.location.href.split("/")[5]} });
      this.state.tool._id = window.location.href.split("/")[5];

      axios
        .get("http://localhost:8080/api/tools/" + this.state.tool._id)
        .then((res) => {
          const tool = res.data.data;
          tool.image_url = "http://localhost:8080" + tool.image_url;
          this.setState({ tool });
          console.log(tool);
        });
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log(error);
      }
    }
  }

  deleteTool = async () => {
    const id = this.state.tool._id;
    console.log(id);
    const token = localStorage.getItem("token");
    const config = {
      method: "delete",
      url: "http://localhost:8080/api/tools/" + id,
      data: { _id: id },
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    };
    //wysłanie żądania o dane:
    const { data: res } = await axios(config);
    console.log(res);
  };

  updateTool = async () => {
    const id = this.state.tool._id;
    console.log(id);
    const token = localStorage.getItem("token");
    const config = {
      method: "patch",
      url: "http://localhost:8080/api/tools",
      data: { _id: id },
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    };
  };

  handleFileInput = (e) => {
    console.log("handleFileInput working!");
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append("my-image-file", e.target.files[0], e.target.files[0].name);
    const image = formData;
    this.setState({image});
  };

  handleClick = () => {
    axios
      .post("http://localhost:8080/api/image-upload", this.state.image)
      .then((res) => {
        console.log("Axios response: ", res);
      });
  };

  // deleteContact = async (id) => {
  //   console.log(id);
  //   const token = localStorage.getItem("token");
  //   const config = {
  //     method: "delete",
  //     url: "http://localhost:8080/api/contact",
  //     data: { _id: id },
  //     headers: {
  //       "Content-Type": "application/json",
  //       "x-access-token": token,
  //     },
  //   };
  //   //wysłanie żądania o dane:
  //   const { data: res } = await axios(config);
  //   console.log(res);
  //   const contacts = this.state.contacts.filter(
  //     (contact) => contact._id !== id
  //   );
  //   this.setState({ contacts });
  // };

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <main>
          <div class="content">
            <br />
            <h2>Edycja narzędzia </h2>
            <input type="text" readOnly value={this.state.tool._id}></input>
            <input type="text" value={this.state.tool.title}></input>
            <input type="text" value={this.state.tool.image_url}></input>
            <button onClick={this.deleteTool}>Usuń narzędzie</button>

            <button onClick={this.handleClick}>Upload!</button>
            <input type="file" onChange={this.handleFileInput} />
          </div>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}
