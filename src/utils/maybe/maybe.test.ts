import { reduceMaybe } from "./reduceMaybe";
import { Some } from "./Some";
import { whenValues, then } from "../../testing/expect";
import { add3ToEvens, doubleOdds } from "../../testing/helpers";

describe("Maybe", () => {
    whenValues({add3ToEvens, doubleOdds}, () => {
        then(
            () => Some(5).flatMap(doubleOdds).flatMap(add3ToEvens).valueOrDefault(2)
        ).shouldEqual(13);

        then(
            () => reduceMaybe(5, doubleOdds, add3ToEvens, doubleOdds, add3ToEvens).valueOrDefault(2)
        ).shouldEqual(29);
    });
})