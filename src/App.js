import React from "react";
// import styles from "./styles.module.css";
// import { SwitchControl } from "./components/SwitchControl";
import { AppHeader } from "./components/AppHeader/AppHeader.js";
import { BurgerIngredients } from "./components/BurgerIngredients/BurgerIngredients.js";
import { BurgerConstructor } from "./components/BurgerConstructor/BurgerConstructor.js";
import styles from "./components/BurgerConstructor/rightSection.module.css";
import './App.css';
export default class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="wrapper">
        <AppHeader />
          <div className="main">
        <BurgerIngredients />
        <BurgerConstructor />
          </div>
      </div>
    );
  }
}
