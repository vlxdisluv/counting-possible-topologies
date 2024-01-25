type NumberSet = number[];
type Topology = NumberSet[];

function powerSet(set: NumberSet): Topology;
function powerSet(set: Topology): Topology[];
function powerSet<T extends NumberSet | Topology[]>(set: T): Topology | Topology[] {
  const subsets: T[] = [[]] as unknown as T[];

  for (let i = 0; i < set.length; i++) {
    const subsetLength = subsets.length;
    for (let j = 0; j < subsetLength; j++) {
      const currentSet = subsets[j];
      const mergedSet = [...currentSet, set[i]];
      subsets.push(mergedSet as unknown as T);
    }
  }

  return subsets as unknown as Topology | Topology[];
}

function isClosedUnderUnion(sets: Topology): boolean {
  const setsAsStrings = sets.map((set) => set.sort().join(','));

  function setExists(union: Set<number>): boolean {
    const unionString = Array.from(union).sort().join(',');
    return setsAsStrings.includes(unionString);
  }

  for (let i = 0; i < sets.length; i++) {
    for (let j = 0; j < sets.length; j++) {
      const union = new Set([...sets[i], ...sets[j]]);

      if (!setExists(union)) {
        return false;
      }
    }
  }

  return true;
}

function isClosedUnderIntersection(sets: Topology): boolean {
  const setsAsStrings = new Set<string>(
    sets.map((set) => set.sort((a, b) => a - b).join(','))
  );

  function setExists(intersection: number[]): boolean {
    const key = intersection.sort((a, b) => a - b).join(',');
    return setsAsStrings.has(key);
  }

  for (let i = 0; i < sets.length; i++) {
    for (let j = 0; j < sets.length; j++) {
      const intersection = sets[i].filter((element) => sets[j].includes(element));

      if (!setExists(intersection)) {
        return false;
      }
    }
  }

  return true;
}

function isTopology(sets: Topology, set: NumberSet): boolean {
  const containsEmptySet = sets.some((s) => s.length === 0);
  const containsSet = sets.some((s) => s.sort().join(',') === set.sort().join(','));

  return (
    containsEmptySet &&
    containsSet &&
    isClosedUnderUnion(sets) &&
    isClosedUnderIntersection(sets)
  );
}

export function generateTopologies(set: NumberSet): Topology[] {
  const pSet = powerSet(set);

  const possibleTopologies = powerSet(pSet);

  const topologies = possibleTopologies.filter((t) => isTopology(t, set));

  return topologies;
}

const A1: NumberSet = [1];
const A2: NumberSet = [1, 2];
const A3: NumberSet = [1, 2, 3];
const A4: NumberSet = [1, 2, 3, 4];

const result = [A1, A2, A3, A4].map((A) => generateTopologies(A).length);

console.log('result', result);
