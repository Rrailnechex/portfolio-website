import "./assets/styles/styles.min.css";
import "./styles/global.scss";
import { createApp } from "vue";
import App from "./App.vue";
import * as GE from "./scripts/GameEngine/index";

const app = createApp(App);
app.mount("#app");

// start all game scripts
// without them its pure DEATH html

// setup asi

// const sc = new GE.Scene
// sc.setupMainScenePage();

const gm = GE.GameManager.getInstance();
gm.start();
