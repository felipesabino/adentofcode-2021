import { Problem } from './';

import * as path from 'path';

describe.only('Day 01 - B', () => {

  let problem: Problem = null;

  beforeEach(() => {
    problem = new Problem();
  });

  [
    { input: [199, 200, 208, 210, 200, 207, 240, 269, 260, 263], output: 5 },
    { input: [1, 2, 3, 4, 5], output: 2 },
    { input: [5, 4, 3, 2, 1], output: 0 },
    { input: [1], output: 0 },
    { input: [1, 2], output: 0 },
    { input: [1, 2, 3], output: 0 },
    { input: [1, 3, 2, 4], output: 1 },
  ].forEach((test) => {
    it(`${test.input} => ${test.output}`, () => {
      expect(problem.exec(test.input)).toBe(test.output);
    });
  });

  [
    { input: './test01.txt', output: 2 },
    { input: './test02.txt', output: 1 },
    { input: './test03.txt', output: 5 },
    { input: './input.txt', output: 1252 },
  ].forEach((test) => {
    it(`${test.input} => ${test.output}`, () => {
      expect(problem.execFromFile(path.join(__dirname, '..', test.input))).toBe(test.output);
    });
  });
});
