# CS Review

## Intro To Algorithms, 3rd Ed. (CLRS)

### Chapter 1
* Resources of an algorithm:
  * Memory
  * Time
  * Ease-of-implementation
* n versus lg n: when n = 1000, lg n is approximately 10, and when n = one million, lg n is approximately only 20.
### Chapter 2
* Insertion Sort
  * Fast for very small number of inputs
  * n^2 worst-case running time
  * Iterative
* Loop-invariant is a term for a condition that is true:
  1. Before the first iteration of the loop
  1. Before the next and every iteration of the loop
  1. After the loop terminates
* Merge sort??????
  * Divide-and-conquor recursion (divide/conquor/combine)
  * n lg n worst-case running time
* A *sentinel* is a marker inserted into a set for use by the algorithm
* Recurrence is the running time that describes a recursive algorithm
* Binary search
  * n lg n worst-case running time
### Chapter 3
* *Asymtotic* efficiency of an algorithm as the size of the input increases without bound.
  * *Usually* an algorithm which is most asymtotically efficient is the best choice for all but very small inputs
* "Big-oh" notation (O notation) is an asymptotic upper bound.
  * This is saying that some constant multiple of g(n) is an asymptotic upper bound on f(n), with no claim about how tight an upper bound it is.
  * f(n) = O(g(n)), the bound 0 <= f(n) <= cg(n) is true for *some* value of c > 0
* "Big-omenga" notation is an asymptotic lower bound
* "Little-oh" notation is an upper bound that isnot asymptotically tight
  * f(n) = o(g(n)), the bound 0 <= f(n) < cg(n) is true for *all* values of c > 0
### Chapter 4
* In recursion, *base case* means that a subproblem is small enough that it does not need to be broken down again.
* Three methods for solving recurrences - for obtaining asymptotic "big theta" or "big oh" on the solution:
  * *Substitution method*: we guess a bound and then prove our guess correct
  * *Recursion-tree method*: convert recurrence into a tree whose nodes represent the custs at verious levels of the recursion, then sum the costs to solve.
  * *Master method*: provide bounds for the recurrences with the form T(n) = aT(n/b) + f(n) where a >= 1, b > 1. a subproblems, each of which is 1/b the size of the original problem.
* When solving recurrences, often omit floors, ceilings, and boundary conditions. Although the complexity of T(1) may be different, the order of growth is unchanged
* The maximum-subarray problem is finding the largest "sum" of subsequent values in a set.
  * The problem is only interesting if the array contains negative numbers.
  * A brute force solution is "big theta" n^2 since all combinations should be compared against all other combinations.
  * Divide-and-conquor approach
    * Any subarray must either:
      * cross the midline
      * be entirely left of the midline
      * be entirely right of the midline
    * Base case: subarray is one element