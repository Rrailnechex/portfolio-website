import { pipe } from "fp-ts/lib/function";
import type { ID } from "../ADTs/ID.ts/types";
import { IDB } from "../ADTs/ID.ts/builders";
import type { IDinamicObject } from "../ADTs/IDinamicObject/IDinamicObject";
import { type IRootGame, IDinamicObjectB } from "../ADTs/IDinamicObject/IDinamicObjectB";
import type { IDinamicUpdates } from "../ADTs/IDinamicUpdates/IDinamicUpdates";
import { IDinamicUpdatesB } from "../ADTs/IDinamicUpdates/IDinamicUpdatesB";
import type { IDinamicUpdateFields } from "../ADTs/IDinamicUpdate/IDinamicUpdate";
import { IURIB } from "../ADTs/_IURI/IURIB";
import type { IURI } from "../ADTs/_IURI/types";

/**
 *
 */
export type ITopLevelGame = IURI & IDinamicUpdates & IDinamicObject & IRootGame;

/**
 * builds root top entities that unfortunatelly ron on the same thread
 */
export class ITopLevelGameB {
	static _createGame = (dinamicUpdateFields: IDinamicUpdateFields): ID<ITopLevelGame> =>
		pipe(
			dinamicUpdateFields, //
			IDinamicUpdatesB.new,
			IDinamicObjectB.newRootSelfUpdating,
			IURIB.newImprinted("ITopLevelGame"),
			IDB.new
		);

	static newRootGame = (): ID<ITopLevelGame> =>
		ITopLevelGameB._createGame({
			onStart(time) {
				console.log("rootGame started");
			},
		});
	// static listenerGame = (): ID<Game> =>
	// 	GameB._createGame({
	// 		onStart(time) {
	// 			console.log("listenerGame started");
	// 		},
	// 	});
}
