import React from 'react';
import  { LoadVolunteeringOption } from "./LoadVolunteeringOption";
import { WithNavTo } from '../nav/WithNavTo';
import { WithUrl } from '../../utils/url/WithUrl';
import { NotFound } from '../nav/NotFound';
import { findOrgOpportunityPairByJobId } from './findOrgOpportunityPairByJobId';
import { combineOrgOppPairToSinglePropsObject } from './combineOrgOppPairToSinglePropsObject';
import { WithOrganizations } from '../organizations/data/WithOrganizations';

//type ViewVolunteeringOptionProps = WithNavTo & WithUrl & WithOrganizations
export const ViewVolunteeringOption = ({url, organizations, navTo, deleteOpportunity, facebookUserSession}) => {
    const selectedJobID = (url.path).substring(14);
    const possiblyMatchingOrgVolPair = findOrgOpportunityPairByJobId(organizations, selectedJobID)
    const combinedPropsForMatch = possiblyMatchingOrgVolPair.map(combineOrgOppPairToSinglePropsObject)
    return combinedPropsForMatch.mapOrDefault(
        combinedProps => <LoadVolunteeringOption  {...{deleteOpportunity}} {...{facebookUserSession}} {...combinedProps} {...{navTo}} />,
        <NotFound />
    )
}