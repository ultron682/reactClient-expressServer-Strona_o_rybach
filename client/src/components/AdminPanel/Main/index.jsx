// import styles from "./styles.module.css";
import axios from "axios";
import React from "react";

import Navbar from "../../Navbar";
import Footer from "../../Footer";

import Contacts from "./Contacts";
import Tools from "./Tools";

import { Link } from "react-router-dom";

export default class AdminPanel extends React.Component {
  state = {
    contacts: [],
    tools: [],
  };

  componentDidMount() {
    try {
      axios.get("http://localhost:8080/api/contact").then((res) => {
        const contacts = res.data.data;
        contacts.map((tool) => {
          tool.image_url = "http://localhost:8080/" + tool.image_url;
          return tool;
        });
        this.setState({ contacts });
        console.log(contacts);
      });

      axios.get("http://localhost:8080/api/tools").then((res) => {
        const tools = res.data.data;
        tools.map((tool) => {
          tool.image_url = "http://localhost:8080" + tool.image_url;
          return tool;
        });
        this.setState({ tools });
        console.log(tools);
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

  deleteContact = async (id) => {
    console.log(id);
    const token = localStorage.getItem("token");
    const config = {
      method: "delete",
      url: "http://localhost:8080/api/contact",
      data: { _id: id },
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    };
    //wysłanie żądania o dane:
    const { data: res } = await axios(config);
    console.log(res);
    const contacts = this.state.contacts.filter(
      (contact) => contact._id !== id
    );
    this.setState({ contacts });
  };

  editTool = async (id) => {
    window.location = "/admin/addmodifydeletetool/" + id;
  };

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <main>
          <div class="content">
            <h1>Panel administratora</h1>
            <br />
            <h2>Wszystkie zgłoszenia</h2>
            {this.state.contacts.length > 0 ? (
              <Contacts
                contacts={this.state.contacts}
                deleteContact={this.deleteContact}
              />
            ) : (
              <p>Ładowanie dostępnych narzędzi</p>
            )}

            <br />
            <h2>Wszystkie narzędzia</h2>
            <Tools tools={this.state.tools} editTool={this.editTool}></Tools>

            <Link to="/admin/addmodifydeletetool/">
              <button>
                Dodaj nowe narzędzie
              </button>
            </Link>
          </div>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}
