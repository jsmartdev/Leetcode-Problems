## [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

### Problem:

You are climbing a staircase. It takes **n** steps to reach the top.

Each time you can either climb **1** or **2** steps. In how many distinct ways can you climb to the top?

**Example 1:**

```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```

**Example 2:**

```
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

### Solutions:

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 1 || n == 0) return 1
    let first = 1;
    let second = 2;
    for (let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }
    return second;
};
```

### Related Topics:

**[Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)**

### Similar Questions:

**[Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)**

**[Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)**

**[N-th Fibonacci Number](https://leetcode.com/problems/n-th-tribonacci-number/)**
