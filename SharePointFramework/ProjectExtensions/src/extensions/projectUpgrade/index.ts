import { override } from '@microsoft/decorators';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';

export interface IProjectUpgradeProperties { }

export default class ProjectUpgrade extends BaseApplicationCustomizer<IProjectUpgradeProperties> {
  @override
  public onInit(): Promise<void> {
    return Promise.resolve();
  }
}
