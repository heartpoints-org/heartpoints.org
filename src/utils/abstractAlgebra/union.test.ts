import { then } from "../../testing/then";
import { whenValues } from "../../testing/whenValues";
import { setContainingOneElement } from "./setContainingOneElement";
import { equatableNumber } from "./equatableNumber";

const s = setContainingOneElement;

describe("Set#union", () => {
    const e1 = () => equatableNumber(1)
    const e2 = () => equatableNumber(2)
    const s1 = () => s(e1())
    const s2 = () => s(e2())
    const unionOfS1AndS2 = () => s1().union(s2())
    const unionIncludesE1 = () => unionOfS1AndS2().includes(e1())
    whenValues({e1, e2, s1, s2, unionOfS1AndS2}, () => {
        then(unionIncludesE1).shouldBeTrue()
    })
})
