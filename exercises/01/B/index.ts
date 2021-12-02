import * as fs from 'fs';

export class Problem {


  exec(input: number[]): number {
    const WINDOW_SIZE: number = 3;

    let carrier = 0;
    return input
      .flatMap((current: number, index: number) => {
        carrier += current;
        if (index < WINDOW_SIZE - 1) { return []; }
        else if (index === WINDOW_SIZE - 1) { return carrier; }
        carrier -= input[index - WINDOW_SIZE];
        return carrier;
      })
      .reduce<number>((total: number, current: number, index: number, values: number[]) => {
        if (index > 0 && current > values[index - 1] ) { return total + 1; }
        else { return total || 0; }
      }, 0);
  }

  execFromFile(path: string): number {
    let content : string = fs.readFileSync(path, 'utf8');
    return this.exec(content.split('\n').map(value => +value));

  }
}