# Practice Test

## Task 1: Tower of Cubes 
Limak is a little polar bear. He plays by building towers from blocks. Every block is a cube with positive integer length of side. Limak has infinitely many blocks of each side length.

A block with side a has volume a3. A tower consisting of blocks with sides a1, a2, ..., ak has the total volume a13 + a23 + ... + ak3.
Limak is going to build a tower. First, he asks you to tell him a positive integer X the required total volume of the tower. Then, Limak adds new blocks greedily, one by one. Each time he adds the biggest block such that the total volume doesn't exceed X.
Limak asks you to choose X not greater than m. Also, he wants to maximize the number of blocks in the tower at the end (however, he still behaves greedily). Secondarily, he wants to maximize X.
Can you help Limak? Find the maximum number of blocks his tower can have and the maximum X <=m that results in this number of blocks.

Input Format
You will be given a function with one integer m , meaning that Limak wants you to choose X between 1 and m, inclusive as a single argument.

Constraints
1 < = m < =10^15

Output Format
Return two integers the maximum number of blocks in the tower and the maximum required total volume X, resulting in the maximum number of blocks as an integer array.

Example 

input
48
output
9 42

input
6
output
6 6

Hint:
In the first sample test, there will be 9 blocks if you choose X = 23 or X = 42. Limak wants to maximize X secondarily so you should choose 42.

In more detail, after choosing X = 42 the process of building a tower is:

Limak takes a block with side 3 because it's the biggest block with volume not greater than 42. The remaining volume is 42 - 27 = 15.
The second added block has side 2, so the remaining volume is 15 - 8 = 7.
Finally, Limak adds 7 blocks with side 1, one by one.
So, there are 9 blocks in the tower. The total volume is is 33 + 23 + 7·13 = 27 + 8 + 7 = 42.

## Task 2: Play with Fibonacci sequence 
You just need to take a number as input from stdin which will tell how many terms of the Fibonacci needs to be printed.

Input Format
You will be taking a number as an input from stdin.

Constraints
1 <= N <= 10000

Output Format
You need to print the Fibonacci series separated by space to the stdout.

Answer

input
10
Output
0 1 1 2 3 5 8 13 21 34

Hint:
The twist in the Fibonacci is that it will get its next number by adding two previous numbers.

### Result
![alt text](https://github.com/yashguptaab99/practice-test/blob/main/result/fibonnacci.png) 