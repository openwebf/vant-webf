import { withInstall } from '../utils';
import _ActionSheet from './ActionSheet';

export const ActionSheet = withInstall(_ActionSheet);
export default ActionSheet;
export type { ActionSheetProps, ActionSheetAction } from './ActionSheet';

declare module 'vue' {
  export interface GlobalComponents {
    VanActionSheet: typeof ActionSheet;
  }
}
