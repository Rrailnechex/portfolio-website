import "./assets/styles/styles.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import * as GE from "./scripts/GameEngine/index";

const app = createApp(App);
app.mount("#app");

// start all game scripts
const sc = new GE.SceneConfigurator();
await sc.start();
const gm = GE.GameManager.getInstance();
await gm.start();
