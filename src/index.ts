import mysingleton from './mod-1';
import { mysingleton2 } from './mod-2';
import { mysingleton3 } from './mod-3';
import { other } from './other';

export const init = () => {
  console.log('init RBX lib', process.env.MY_ENV_1);
  console.log('init RBX lib', process.env.MY_SECRET_1);
};

const obj1 = mysingleton.getInstance();
const obj2 = mysingleton.getInstance();

console.log('obj1', obj1);
console.log('obj2', obj2);

console.log('obj1 === obj2', obj1 === obj2);

//

const obje1 = mysingleton2({ dbName: '1' }).getInstance();
const obje2 = mysingleton2({ dbName: '2' }).getInstance();

console.log('obje1', obje1);
console.log('obje2', obje2);

console.log('obje1 === obje2', obje1 === obje2);

//

const objet1 = mysingleton3({ dbName: '1' });
const objet2 = mysingleton3({ dbName: '2' });
const objet3 = other();

console.log('objet1', objet1, objet1.getTable('table1'));
console.log('objet2', objet2, objet2.getTable('table2'));

console.log('objet1 === objet2', objet1 === objet2);
console.log('objet1 === other', objet1 === objet3);
