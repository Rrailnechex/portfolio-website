import { GE } from "../GameEngine/index";

/**
 * Execute action untill success.
 * Delete this.
 * Delete this.
 */
export class Seeker extends GE.ADynamicObject {
	private readonly _stopCondition: () => boolean;
	private readonly _executeAction: () => void;

	constructor(stopCondition: () => boolean, executeAction: () => void) {
		super();
		this._stopCondition = stopCondition;
		this._executeAction = executeAction;
	}

	public override onFrameUpdate(): void {
		if (this._stopCondition()) {
			this._executeAction();
			this.delete();
		}
	}
}
