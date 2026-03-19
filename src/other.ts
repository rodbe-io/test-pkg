import { mysingleton3 } from './mod-3';

export const other = () => {
  return mysingleton3({ dbName: 'other' });
};
