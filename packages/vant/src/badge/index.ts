import { withInstall } from '../utils';
import _Badge from './Badge';

export const Badge = withInstall(_Badge);
export default Badge;
export type { BadgeProps, BadgePosition } from './Badge';

declare module 'vue' {
  export interface GlobalComponents {
    VanBadge: typeof Badge;
  }
}
