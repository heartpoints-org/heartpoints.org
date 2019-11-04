import { Predicate } from "../predicates/Predicate";
import { IMaybe } from "../maybe/IMaybe";
import { Mapper } from "../axioms/Mapper";
import { Reducer } from "../axioms/Reducer";
import { EmptyList } from "./EmptyList";
import { ListOfLiterals } from "./ListOfLiterals";

export interface IList<T> extends Iterable<T> {
    map<S>(f: Mapper<T, S>): IList<S>;
    push<S>(s: S): IList<T | S>;
    head: IMaybe<T>;
    tail: IMaybe<IList<T>>;
    reduce<S>(reducer: Reducer<S, T>, startingPoint: S): S;
    first(predicate: Predicate<T>): IMaybe<T>;
    isEmpty: boolean;
    notEmpty: boolean;
    toString(): string;
    asArray: Array<T>;
    any(predicate: Predicate<T>): boolean;
    append<S>(otherList:IList<S>):IList<T | S>
    join(delimiter):string
}

export const ListOfLists = 
    <T> (arrayOfArrays:Array<Array<T>>):IList<IList<T>> =>
    ListOfLiterals(...arrayOfArrays).map(nestedArray => ListOfLiterals(...nestedArray))

export const flatten = 
    <T> (listOfLists:IList<IList<T>>) => 
    listOfLists.reduce(
        (reducedSoFar, currentItemToReduce) => reducedSoFar.append(currentItemToReduce),
        EmptyList as IList<T>
    )

export const flatMap =
    <T, S> (listOfLists:IList<IList<T>>, f: Mapper<T, S>): IList<S> => 
    flatten(listOfLists).map(f)
