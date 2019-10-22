
import React, { useState } from "react";
import { HPSearchResult } from "../../search/HPSearchResult";
import { HPSearchBar } from "../../search/HPSearchBar";
import { Page } from "../../page/Page";
import { Organization } from "../data/organization";
import { Space } from "../../page/Space";
import { PageTitle } from "../../page/PageTitle";
import { ComponentWithOverlay } from "../../page/ComponentWithOverlay";

export const SearchBar = (props) => {
    const { searchBarValue, onSearchBarValueChange, organizations, navTo } = props;


    const getSuggestions = (searchBarValue) => {
        const inputValue = (searchBarValue || "").trim().toLowerCase();
        return inputValue.length === 0 
            ? [] 
            : organizations.filter(org =>
                (org.title || "").toLowerCase().includes(inputValue)
            )
    }

    const onSuggestionSelected = ({href}) => navTo(href)

    const placeholder = "Search by organization name..."
    const suggestions = getSuggestions(searchBarValue);

    const [shouldShowOverlay, toggleOverlay] = useState(false);

    const onFocus = () => {
        toggleOverlay(true);
        console.log(shouldShowOverlay);
    }

    const onBlur = () => {
        toggleOverlay(false);
        console.log(shouldShowOverlay);
    }

    const hpSearchBarProps = { 
        placeholder,
        suggestions,
        renderSuggestion: ({mission: description, ...rest}:Organization) => <HPSearchResult {...{description, ...rest}} />,
        onSuggestionSelected,
        searchBarValue,
        onSearchBarValueChange,
        onFocus,
        onBlur
    }
    
    return <Page>
        <PageTitle>Organization Search...</PageTitle>
        <Space />
        <ComponentWithOverlay bgColor={"#FFF"} showOverlay={shouldShowOverlay}>
            <HPSearchBar {...hpSearchBarProps} />
        </ComponentWithOverlay>
    </Page>
}