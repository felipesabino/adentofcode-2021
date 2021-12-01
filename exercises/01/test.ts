import { Problem } from './';

import * as path from 'path';

describe('1 - removeKFromList', () => {

  let problem: Problem = null;

  beforeEach(() => {
    problem = new Problem();
  });

  [
    { input: [1, 2, 3, 4, 5], output: 4 },
    { input: [5, 4, 3, 2, 1], output: 0 },
    { input: [1], output: 0 },
    { input: [1, 3, 2, 4], output: 2 },
  ].forEach((test) => {
    it(`${test.input} => ${test.output}`, () => {
      expect(problem.exec(test.input)).toBe(test.output);
    });
  });

  [
    { input: './test01.txt', output: 4 },
    { input: './test02.txt', output: 2 },
    { input: './input.txt', output: 1226 },
  ].forEach((test) => {
    it(`${test.input} => ${test.output}`, () => {
      expect(problem.execFromFile(path.join(__dirname, test.input))).toBe(test.output);
    });
  });
});
