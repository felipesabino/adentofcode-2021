import * as fs from 'fs';

export type Direction = 'forward' | 'up' | 'down'

export interface Item {
  direction: Direction,
  depth: number,
}

export class Problem {
  exec(input: Item[]): number {
    let horizontal = 0;
    let depth = 0;
    let aim = 0;
    input.forEach(item => {
      if (item.direction === 'forward') { horizontal += item.depth;  depth += item.depth * aim; }
      else if (item.direction === 'up') { aim -= item.depth; }
      else if (item.direction === 'down') { aim += item.depth; }
    })

    return horizontal * depth;
  }

  execFromFile(path: string): number {
    let content : string = fs.readFileSync(path, 'utf8');
    let items = content
    .split('\n')
    .map(value => value.split(' '))
    .map<Item>(value => {
      return {
        direction: value[0] as Direction,
        depth: +value[1],
     }
    });
    return this.exec(items);
  }
}