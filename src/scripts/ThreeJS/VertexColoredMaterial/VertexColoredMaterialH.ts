import { pipe } from "fp-ts/lib/function";
import { THREE } from "../ThreeEngine/THREE";
import { array } from "fp-ts";

export class VertexColoredMaterialH {
	public static async assignWhiteVertexColorsToSceneIfHasNoVC(scene: THREE.Scene): Promise<void> {
		await pipe(
			scene.children,
			array.filter((ch) => ch instanceof THREE.Mesh),
			array.map(
				async (ch) =>
					await VertexColoredMaterialH.assignWhiteVertexColors(ch, new THREE.Color(1, 1, 0.95))
			)
		);
	}
	public static doesMeshHasVertexColor(mesh: THREE.Mesh): boolean {
		return mesh.geometry.attributes.color && mesh.geometry.attributes.color.count > 0;
	}

	public static async assignWhiteVertexColors(mesh: THREE.Mesh, color: THREE.Color): Promise<void> {
		if (!VertexColoredMaterialH.doesMeshHasVertexColor(mesh)) {
			const numVertices = mesh.geometry.attributes.position.count;
			const colors = new Float32Array(numVertices * 3);
			for (let i = 0; i < numVertices; i++) {
				colors[i * 3] = color.r;
				colors[i * 3 + 1] = color.g;
				colors[i * 3 + 2] = color.b;
			}

			const colorAttribute = new THREE.BufferAttribute(colors, 3);

			mesh.geometry.setAttribute("color", colorAttribute);
		}
	}
}
