import { Pipe, PipeTransform } from '@angular/core';
import { Pet } from './interfaces/pet';

const expTable = [
  20,
  40,
  100,
  250,
  500,
  1000,
  1500,
  4000,
  10000
];

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {

  transform(pet: Pet, type: 'percent' | 'label'): any {
    const totalExp = pet.exp;
    const level = pet.level;
    const bassExp = expTable[level - 2] || 0;
    const nextExp = expTable[level - 1] - bassExp;
    const exp = totalExp - bassExp;

    if (type === 'percent') {
      console.log(exp / nextExp * 100);
      return exp / nextExp * 100;
    } else {
      return exp + ' / ' + nextExp;
    }
  }

}
