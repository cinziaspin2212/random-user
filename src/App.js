import "./App.css";
import { Component, useState } from "react";
import CardUser from "./components/CardUser/CardUser";
import ButtonNext from "./components/ButtonNext/ButtonNext";
import Container from "./components/Loading/Loading";

// class App extends Component
const App = (props) => {
  // state = {
  //   loading: true,
  //   userState: {
  //     fullName: "",
  //     email: "",
  //     birthday: "",
  //     address: "",
  //     telephone: "",
  //     password: "",
  //     immage: "",
  //   },
  //   iconPanel: {
  //     whoEvent: "",
  //   },
  // };

  const [loadingState, setLoadingState] = useState(true);

  const [userState, setUserState] = useState({
    fullName: "",
    email: "",
    birthday: "",
    address: "",
    telephone: "",
    password: "",
    immage: "",
  });

  const [iconPanelState, seticonPanelState] = useState({
    whoEvent: "",
  });

  const mouseOverButtonHandler = (e) => {
    console.log("over", e.target.id);
    console.log("des", document.getElementById("descrizione").value);
    // e.target.style.background = "cornflowerblue";

    const el = e.target.id;
    seticonPanelState({
      whoEvent: el,
    });
  };

  const mouseLeaveButtonHandler = (e) => {
    console.log("leave", e.target.id);
    // e.target.style.background = "gray";
    seticonPanelState({
      whoEvent: "",
    });
  };

  const retrieveDataHandler = () => {
    setLoadingState(true);

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
        setLoadingState(false);
        setUserState({
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
        });
        seticonPanelState({
          whoEvent: "User",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // componentDidMount() {
  //   this.retrieveDataHandler();
  // }

  // render() {
  console.log("userData:", userState);
  return loadingState ? (
    <Container />
  ) : (
    <div className="App">
      <CardUser
        infoUserDet={userState}
        infoEvent={iconPanelState}
        envenHover={(e) => {
          mouseOverButtonHandler(e);
        }}
        evenLeave={(e) => {
          mouseLeaveButtonHandler(e);
        }}
      />
      {/*  passo le info */}
      <ButtonNext changeUser={retrieveDataHandler} />
      {/* passo la funzione che cambia lo stato */}
    </div>
  );
};
// }
export default App;
