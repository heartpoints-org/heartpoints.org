import * as React from 'react';
import { Page } from "../../page/Page";
import { MissingOrganization } from './MissingOrganization';
import { LoadedOrganization } from './LoadedOrganization';
import { findOrgByHref } from '../data/findOrgByHref';
import { WithOrganizations } from '../data/WithOrganizations';
import { WithNavTo } from '../../nav/WithNavTo';
import { WithUrl } from '../../../utils/url/WithUrl';

//export type ViewOrganizationProps = WithOrganizations & WithNavTo & WithUrl
export const ViewOrganization = ({url, organizations, navTo, deleteOrganization, facebookUserSession}) => {

    const content = findOrgByHref(organizations, url.path)
        .map(organization => <LoadedOrganization {...{...organization, navTo, deleteOrganization, facebookUserSession}} />)
        .valueOrDefault(<MissingOrganization />)

    return <Page>
        {content}
    </Page>
}