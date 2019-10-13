import { doNothing } from "../../utils/axioms/doNothing";
import * as React from "react";
import Autosuggest from "react-autosuggest";
import { theme } from "./theme";
import { identity } from "../../utils/axioms/identity";
import { TextField } from "@material-ui/core";

export const HPSearchBar = ({searchBarValue: value = "", placeholder, suggestions, renderSuggestion, onSuggestionSelected, onSearchBarValueChange}) => {
    const getSuggestionValue = identity
    const isNotIllegitimateZeroThatComesWhenTheUserClicksMargins = (value:any) => value !== 0

    const onChange = ({target: { value }}:React.ChangeEvent<HTMLInputElement>) => 
        isNotIllegitimateZeroThatComesWhenTheUserClicksMargins(value) && onSearchBarValueChange(value || '')

    const inputProps = {
        placeholder,
        value,
        onChange,
    }

    const renderInputComponent = () => {
        return <TextField
            fullWidth
            inputProps={inputProps} />
    }

    const autoSuggestProps = {
        suggestions,
        onSuggestionsFetchRequested: doNothing,
        onSuggestionsClearRequested: doNothing,
        renderSuggestion,
        renderInputComponent,
        getSuggestionValue,
        inputProps,
        alwaysRenderSuggestions: true,
        onSuggestionSelected: (event, {suggestion}) => onSuggestionSelected(suggestion),
        theme,
    }

    return <Autosuggest {...autoSuggestProps} />
}