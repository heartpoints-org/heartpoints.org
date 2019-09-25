import { MaybeFlatmapper } from "./MaybeFlatmapper";
import { IMaybe } from "./IMaybe";
import { False } from "../axioms/False";
import { True } from "../axioms/true";
import { SomeType } from "./SomeType";
import { Predicate } from "../predicates/Predicate";
import { None } from "./None";

export const Some = <T>(value: T): SomeType<T> => ({
    map: <S>(f: (t: T) => S) => Some(f(value)),
    mapOrDefault: (f, d) => f(value),
    flatMap: <S>(f: MaybeFlatmapper<T, S>): IMaybe<S> => {
        return f(value)
    },
    value,
    hasValue: True,
    valueOrDefault: () => value,
    isNone: False,
    ifElse: valueIfSomeObject => valueIfSomeObject,
    valueOr: () => value,
    if(predicate:Predicate<T>) { return predicate(value) ? this : None }
})
