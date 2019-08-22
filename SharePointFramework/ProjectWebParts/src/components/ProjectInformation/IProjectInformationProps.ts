import { ISpEntityPortalServiceParams } from 'sp-entityportal-service';

export interface IProjectInformationProps {
  title?: string;
  entity: ISpEntityPortalServiceParams;
  hubSiteUrl: string;
  siteId: string;
  webUrl: string;
  isSiteAdmin?: boolean;
  filterField: string;
  hideActions?: boolean;
  boxLayout?: boolean;
  boxBackgroundColor?: string;
  boxType?: string;
}

export const ProjectInformationDefaultProps: Partial<IProjectInformationProps> = {};
