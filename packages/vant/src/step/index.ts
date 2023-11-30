import { withInstall } from '../utils';
import _Step from './Step';

export const Step = withInstall(_Step);
export default Step;

declare module 'vue' {
  export interface GlobalComponents {
    VanStep: typeof Step;
  }
}
