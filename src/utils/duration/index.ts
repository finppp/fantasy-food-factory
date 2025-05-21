import { Duration } from '@/types';

// Todo: automate plurals names
export const generateDurationText = ({count, unit}: Duration): string => {
  return `${count} ${unit}`
}
