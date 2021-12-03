import { Problem, Item } from './';

import * as path from 'path';

describe('Day 01 - A', () => {

  let problem: Problem = null;

  beforeEach(() => {
    problem = new Problem();
  });

  [
    { input: [
      { direction: 'forward', depth: 5},
      { direction: 'down', depth: 5},
      { direction: 'forward', depth: 8},
      { direction: 'up', depth: 3},
      { direction: 'down', depth: 8},
      { direction: 'forward', depth: 2},
    ] as Item[], output: 900},
  ].forEach((test) => {
    it(`${test.input} => ${test.output}`, () => {
      expect(problem.exec(test.input)).toBe(test.output);
    });
  });

  [
    { input: './test01.txt', output: 900 },
    { input: './input.txt', output: 1580000 },
  ].forEach((test) => {
    it(`${test.input} => ${test.output}`, () => {
      expect(problem.execFromFile(path.join(__dirname, '..', test.input))).toBe(test.output);
    });
  });
});
