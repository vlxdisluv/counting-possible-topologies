# Set Topology

This repository contains a script to calculate the number of topologies for a set of `N` elements, with a focus on small `N`.

## Problem Statement

Write a program to count the number of [preorders](https://en.wikipedia.org/wiki/Preorder) of a set of `N` elements for small `N`. For example, consider a set of 3 elements `A={1, 2, 3}`. From this set, we can construct 29 suborders.

Alternatively, the problem can be solved by counting the number of all possible [topologies](https://en.wikipedia.org/wiki/Finite_topological_space) for finite sets.

## Getting Started

To run the scripts in this repository, you need to have Node.js and Yarn installed on your system.

### Installation

First, clone the repository to your local machine:

```bash
git clone git@github.com:vlxdisluv/counting-possible-topologies.git
cd counting-possible-topologies
```

Then, install the required dependencies using Yarn:

```bash
yarn install
```

### Execution

To execute the main script and print the number of topologies to the console, run:

```bash
yarn run
```

### Testing

The repository also includes test cases. To run the tests, execute the following command:

```bash
yarn test
```

Make sure you have all the dependencies installed before running the tests.
