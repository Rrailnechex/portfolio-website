import "./assets/styles/styles.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import * as GE from "./scripts/GameEngine/index";

const app = createApp(App);
app.mount("#app");

// start all game scripts
new GE.SceneConfigurator().start();
GE.GameManager.getInstance().start();
