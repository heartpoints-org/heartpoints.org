import { Consumer } from "../axioms/Consumer";
import { callEachWith } from "./callEachWith";

export type Compose = <T>(...funcs:Array<Consumer<T>>) => Consumer<T>
export const compose:Compose = (...funcs) => t => callEachWith(funcs, t);
