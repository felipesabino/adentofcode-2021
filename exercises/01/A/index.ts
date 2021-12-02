import * as fs from 'fs';

export class Problem {
  exec(input: number[]): number {
    return input.reduce<number>((total: number, current: number, index: number, values: number[]) => {
      if (index > 0 && current > values[index - 1] ) { return total + 1; }
      else { return total || 0; }
    }, 0);
  }

  execFromFile(path: string): number {
    let content : string = fs.readFileSync(path, 'utf8');
    return this.exec(content.split('\n').map(value => +value));

  }
}