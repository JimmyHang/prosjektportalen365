import { IPersonaSharedProps } from 'office-ui-fabric-react/lib/Persona';

export interface ISPUser {
    'odata.type': string;
    'odata.id': string;
    'odata.editLink': string;
    Id: number;
    IsHiddenInUI: boolean;
    LoginName: string;
    Title: string;
    PrincipalType: number;
    Email: string;
    IsEmailAuthenticationGuestUser: boolean;
    IsShareByEmailGuestUser: boolean;
    IsSiteAdmin: boolean;
    UserId: any;
}

export interface ISPProjectItem {
    GtGroupId: string;
    GtSiteId: string;
    GtSiteUrl: string;
    GtProjectOwnerId: number;
    GtProjectManagerId: number;
    GtProjectPhase: { TermGuid: string };
}

export class ProjectListModel {
    constructor(
        public Id: string,
        public Title: string,
        public Url: string,
        public LogoUrl?: string,
        public Phase?: string,
        public Manager?: IPersonaSharedProps,
        public Owner?: IPersonaSharedProps,
    ) {}
}