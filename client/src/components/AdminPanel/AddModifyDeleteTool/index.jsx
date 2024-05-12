// import styles from "./styles.module.css";
import axios from "axios";
import React from "react";

import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default class AddModifyDeleteTool extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "zostanie uzupełnione automatycznie",
      image_url: "",
      title: "",
      image: null,
    };
  }

  componentDidMount() {
    console.log(this.state._id);
    try {
      this.setState({ _id: window.location.href.split("/")[5] });

      console.log(this.state._id);
      axios
        .get("http://localhost:8080/api/tools/" + this.state.tool._id)
        .then((res) => {
          console.log(123);
          const tool = res.data.data;

          this.setState({ _id: tool._id });
          this.setState({ image_url: tool.image_url });
          this.setState({ title: tool.title });

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

  handleChangeId = (event) => {
    this.setState({ _id: event.target.value });
  };

  handleChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  handleChangeImageUrl = (event) => {
    this.setState({ image_url: event.target.value });
  };

  // handleChange = (e) => {
  //   // const { name, value } = e.target;
  //   // const newtool = { ...this.state.tool };
  //   // console.log(newtool[name]);
  //   // newtool[name] = value;
  //   // this.setState({ tool: newtool });
  // };

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

    window.location = "/admin";
  };

  updateTool = async () => {
    const id = this.state.tool._id;

    const tool = {
      _id: this.state._id,
      image_url: this.state.image_url,
      title: this.state.title,
    };

    console.log(id);
    const token = localStorage.getItem("token");
    const config = {
      method: "patch",
      url: "http://localhost:8080/api/tools/" + id,
      data: tool,
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    };
    //wysłanie żądania o dane:
    const { data: res } = await axios(config);
    console.log(res);

    window.location = "/admin";
  };

  handleFileInput = (e) => {
    console.log("handleFileInput working!");
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append("my-image-file", e.target.files[0], e.target.files[0].name);
    const image = formData;
    this.setState({ image });
  };

  handleClick = () => {
    axios
      .post("http://localhost:8080/api/image-upload", this.state.image)
      .then((res) => {
        console.log("Axios response: ", res.data.imageUrl);

        //this.state.tool.image_url = res.data.imageUrl;
        var newtool = { ...this.state.tool };
        newtool.image_url = res.data.imageUrl;
        this.setState({ tool: newtool });
      });
  };

  cancelClick = () => {
    window.location = "/admin";
  };

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <main>
          <div class="content">
            <br />
            <h2>Edycja narzędzia </h2>
            <input
              type="text"
              value={this.state._id}
              onChange={this.handleChangeId}
              readOnly
            ></input>
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleChangeTitle}
            ></input>
            <input
              type="text"
              value={this.state.image_url}
              onChange={this.handleChangeImageUrl}
            ></input>
            <button onClick={this.deleteTool}>Usuń narzędzie</button>

            <button onClick={this.handleClick}>Upload!</button>
            <input type="file" onChange={this.handleFileInput} />

            <button onClick={this.updateTool}>Zapisz zmiany</button>
            <button onClick={this.cancelClick}>Anuluj</button>
          </div>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}
