import { generateTopologies } from './index';

describe('generateTopologies', () => {
  it('should generate all possible topologies for input A = [1]', () => {
    const A = [1];
    const expectedTopologyLength = 1;

    const result = generateTopologies(A);

    expect(result.length).toEqual(expectedTopologyLength);
  });

  it('should generate all possible topologies for input A = [1, 2]', () => {
    const A = [1, 2];
    const expectedTopologyLength = 4;

    const result = generateTopologies(A);

    expect(result.length).toEqual(expectedTopologyLength);
  });

  it('should generate all possible topologies for input A = [1, 2, 3]', () => {
    const A = [1, 2, 3];
    const expectedTopologyLength = 29;

    const result = generateTopologies(A);

    expect(result.length).toEqual(expectedTopologyLength);
  });

  it('should generate all possible topologies for input A = [1, 2, 3, 4]', () => {
    const A = [1, 2, 3, 4];
    const expectedTopologyLength = 355;

    const result = generateTopologies(A);

    expect(result.length).toEqual(expectedTopologyLength);
  });
});
