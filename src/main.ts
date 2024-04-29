import "./assets/styles/styles.min.css";
import "./styles/global.scss";
import { createApp } from "vue";
import App from "./App.vue";
import * as GE from "./scripts/GameEngine";
import SceneConfiguratorH from "./scripts/GameEngine/Configurations/SceneConfiguratorH";
import TailwindMirrorH from "./scripts/styles/TailwindMirrorH";
//
import { PromisseH } from "./scripts/utils/PromisseH";

// load website first
createApp(App).mount("#app");

/**
 * @deprecated
 */
const newTestMessageAfter =
	(dur_ms: number) =>
	(text: string): Promise<void> => {
		return new Promise<void>((resolve) =>
			setTimeout(() => {
				console.log(text);
				resolve();
			}, dur_ms)
		);
	};

// init all code in "parallel"
PromisseH.runSimultaneously([
	TailwindMirrorH.injectColorTokensToCSSDocument(),
	SceneConfiguratorH.asetupMainScenePage().finally(() => GE.Game.getInstance().triggerStart()),
	newTestMessageAfter(0)("nut after 0 ms"),
	newTestMessageAfter(1000)("nut after 1000 ms"),
	newTestMessageAfter(2000)("nut after 2000 ms"),
	newTestMessageAfter(3000)("nut after 3000 ms"),
	newTestMessageAfter(4000)("nut after 4000 ms"),
	newTestMessageAfter(5000)("nut after 5000 ms"),
]);
