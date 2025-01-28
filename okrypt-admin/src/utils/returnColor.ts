import {COLORS} from '../constants/theme';

export function returnColor(status: string) {
  const color =
    status === 'SUCCESSFUL'
      ? COLORS.secondary
      : status === 'PENDING'
      ? COLORS.pending
      : COLORS.red;
  return color;
}
