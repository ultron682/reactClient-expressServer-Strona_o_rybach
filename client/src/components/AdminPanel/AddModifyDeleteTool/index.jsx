// import styles from "./styles.module.css";
import axios from "axios";
import React from "react";

import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default class AddModifyDeleteTool extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      image_url: "",
      title: "",
      image: null,
      newTool: false,
    };
  }

  componentDidMount() {
    try {
      this.setState({ _id: window.location.href.split("/")[5] }, () => {
        if (this.state._id === "") {
          this.setState({ newTool: true });
        }

        console.log(this.state._id);
        axios
          .get("http://localhost:8080/api/tools/" + this.state._id)
          .then((res) => {
            const tool = res.data.data;

            this.setState({ _id: tool._id });
            this.setState({ image_url: tool.image_url });
            this.setState({ title: tool.title });

            console.log(tool);
          });
      });
    } catch (error) {
      console.log(error);
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
    const id = this.state._id;
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

  handleSubmit = async () => {
    if (this.state.newTool === true) {
      this.addTool();
    } else {
      this.updateTool();
    }
  };

  addTool = async () => {
    const tool = {
      image_url: this.state.image_url,
      title: this.state.title,
    };


    if(this.state.title === ""){
      return;
          }

    const token = localStorage.getItem("token");
    const config = {
      method: "put",
      url: "http://localhost:8080/api/tools",
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

  updateTool = async () => {
    const id = this.state._id;

    const tool = {
      _id: this.state._id,
      image_url: this.state.image_url,
      title: this.state.title,
    };

    if(this.state.title === ""){
return;
    }

    //console.log(id);
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
    this.setState({ image }, () => {
      this.imageUpload();
    });
  };

  imageUpload(){
    const token = localStorage.getItem("token");

    axios
    .post("http://localhost:8080/api/image-upload", this.state.image, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": token,
      }
    })
    .then((res) => {
      console.log("Axios response: ", res.data.imageUrl);

      this.setState({ image_url: res.data.imageUrl }, () => {
        console.log(this.state.image_url);
      });
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
            {this.state.newTool === false ? (
              <>
                <h2>Edycja narzędzia </h2>
                <input
                  type="text"
                  value={this.state._id}
                  onChange={this.handleChangeId}
                  visible={this.state.readOnly}
                  placeholder="ID narzędzia"
                  readOnly
                ></input>
              </>
            ) : (
              <h2>Dodawanie nowego narzędzia</h2>
            )}
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleChangeTitle}
              placeholder="Tytuł narzędzia"
            ></input>
            <input
              type="text"
              value={this.state.image_url}
              onChange={this.handleChangeImageUrl}
              placeholder="URL obrazka narzędzia (uzupełniany automatycznie po uploadzie!)"
              readOnly
            ></input>
            {this.state.newTool === false ? (
              <button onClick={this.deleteTool}>Usuń narzędzie</button>
            ) : null}

            {/* <button onClick={this.handleClick}>Upload!</button> */}
            <input type="file" accept="image/png, image/jpeg"  onChange={this.handleFileInput} />

            <button onClick={this.handleSubmit}>
              {this.state.newTool === false ? "Zapisz zmiany" : "Dodaj nowy"}
            </button>
            <button onClick={this.cancelClick}>Anuluj</button>
          </div>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}
