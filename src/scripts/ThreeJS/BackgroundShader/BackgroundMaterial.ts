import * as THREE from "three";
import { TJ } from "..";
import { GE } from "@/scripts/GameEngine";
import { MegaCursor } from "@/scripts/MegaCursor";

import a_vertex from "./a_vertex.glsl";
import a_fragment from "./a_fragment.glsl";

export class BackgroundMaterial extends TJ.AManagimentedShaderMaterial {
	public constructor() {
		super();

		this.__shader = new THREE.ShaderMaterial({
			uniforms: {
				time: { value: 0 },
				pallete_mix_factor: { value: 0 },
				sin_factor: { value: 0 },
				resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
			},
			vertexShader: a_vertex,
			fragmentShader: a_fragment,
		});
	}

	public override onFrameUpdate(): void {
		this.__shader.uniforms.time.value = GE.GameTime.realTimeSinceStartup;
		this.__shader.uniforms.pallete_mix_factor.value = MegaCursor.currentPosition0to1.x;
		this.__shader.uniforms.sin_factor.value = MegaCursor.currentPosition0to1.x * 50 + 1;
		this.__shader.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
	}
}
