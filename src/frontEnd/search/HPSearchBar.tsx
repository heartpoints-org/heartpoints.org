import React, { useState, MouseEvent } from "react";
import { doNothing } from "../../utils/axioms/doNothing";
import Autosuggest from "react-autosuggest";
import { theme } from "./theme";
import { identity } from "../../utils/axioms/identity";
import { TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from  '@material-ui/icons/Search';

export const HPSearchBar = ({searchBarValue: value = "", placeholder, suggestions, renderSuggestion, onSuggestionSelected, onSearchBarValueChange, onFocus, onBlur, renderSuggestionsContainer}) => {

    const getSuggestionValue = identity
    const isNotIllegitimateZeroThatComesWhenTheUserClicksMargins = (value:any) => value !== 0

    const onChange = ({target: { value }}:React.ChangeEvent<HTMLInputElement>) => 
        isNotIllegitimateZeroThatComesWhenTheUserClicksMargins(value) && onSearchBarValueChange(value || '')


    const inputProps = {
        placeholder,
        value,
        onChange,
        onFocus,
        onBlur
    }

    //const adornmentClickHandler = (event:React.MouseEvent<HTMLDivElement>) => event.stopPropagation();
    

    const renderInputComponent = (inputProps) => {
        const { ref, ...rest } = inputProps;
        return <TextField 
            fullWidth
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start" onClick={event => event.stopPropagation()}>
                        <SearchIcon />
                    </InputAdornment>
                )
            }}
            {...{inputProps}} />
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
        renderSuggestionsContainer,
        onSuggestionSelected: (event, {suggestion}) => onSuggestionSelected(suggestion),
        theme,
    }

    return <Autosuggest {...autoSuggestProps} />
}