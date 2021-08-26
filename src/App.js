import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardUser from "./components/CardUser/CardUser";
import ButtonNext from "./components/ButtonNext/ButtonNext";
import Container from "./components/Loading/Loading";

class App extends Component {
  state = {
    loading: true,
    userState: {
      fullName: "",
      email: "",
      birthday: "",
      address: "",
      telephone: "",
      password: "",
      immage: "",
    },
    iconPanel: {
      whoEvent: "",
    },
  };

  mouseOverButtonHandler = (e) => {
    console.log("over", e.target.id);
    console.log("des", document.getElementById("descrizione").value);
    // e.target.style.background = "cornflowerblue";

    const el = e.target.id;
    this.setState({
      iconPanel: {
        whoEvent: el,
      },
    });
  };

  mouseLeaveButtonHandler = (e) => {
    console.log("leave", e.target.id);
    // e.target.style.background = "gray";
    this.setState({
      iconPanel: {
        whoEvent: "",
      },
    });
  };
  retrieveDataHandler = () => {
    this.setState({
      loading:true,
    });
    
    fetch("https://randomuser.me/api", {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log('Success:', data);
        const userData = data.results[0];
        //console.log("userData:", userData)
        this.setState({
          loading: false,
          userState: {
            fullName:
              userData.name.title +
              " " +
              userData.name.first +
              " " +
              userData.name.last,
            email: userData.email,
            birthday: new Date(userData.dob.date).toDateString(),
            address:
              userData.location.street.name +
              " " +
              userData.location.street.number,
            telephone: userData.phone,
            password: userData.login.password,
            immage: userData.picture.medium,
          },
          iconPanel: {
            whoEvent: "User",
          },
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  componentDidMount() {
    this.retrieveDataHandler();
  }

  render() {
    console.log("userData:", this.state.userState);
    return this.state.loading ? (
      <Container />
    ) : (
      <div className="App">
        <CardUser
          infoUserDet={this.state.userState}
          infoEvent={this.state.iconPanel}
          envenHover={(e) => {
            this.mouseOverButtonHandler(e);
          }}
          evenLeave={(e) => {
            this.mouseLeaveButtonHandler(e);
          }}
        />
        {/*  passo le info */}
        <ButtonNext changeUser={this.retrieveDataHandler} />
        {/* passo la funzione che cambia lo stato */}
      </div>
    );
  }
}
export default App;
