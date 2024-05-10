// import styles from "./styles.module.css";
import axios from "axios";
import React from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";


export default class AdminPanel extends React.Component {
  state = {
    tools: [],
  };

  componentDidMount() {
    try {
      axios.get("http://localhost:8080/api/tools").then((res) => {
        const tools = res.data.data;
        tools.map((tool) => {
          tool.image_url = "http://localhost:8080/" + tool.image_url;
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

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <main>
          <div class="content">
            <h1>Admin panel</h1>
            {/* {this.state.tools.length > 0 ? (
              <Toolss tools={this.state.tools} />
            ) : (
              <p>Ładowanie dostępnych narzędzi</p>
            )} */}
          </div>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}
