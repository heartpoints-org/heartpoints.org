import { defaultOrganizations } from "../organizations/defaultOrganizations";
import { Url } from "../../utils/url";
import { inDevMode } from "../developers/inDevMode";
import { facebookUserSession } from "../facebook/facebookUserSession";
import { CastleRiskInitialState } from "../castleRisk/game";

export const initialState = () => ({
    facebookUserSession: facebookUserSession(),
    inDevMode: inDevMode(),
    isSideNavExpanded: false,
    isSideNavOpen: false,
    newOrgLogo: [],
    newOrgMission: '',
    newOrgTitle: '',
    newOrgUrl: '',
    organizations: defaultOrganizations,
    searchBarSuggestions: [],
    searchBarValue: '',
    shouldShowCelebration: false,
    shouldShowSearch: true,
    showSimpleModel: false,
    url: Url(window.location.href),
    volunteeringSearchBarSuggestions: [],
    volunteeringSearchBarValue: '',
    castleRisk: CastleRiskInitialState,
});
