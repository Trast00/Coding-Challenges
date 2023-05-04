## How to solve this challenge?

1. Read the "Challenge description" below.
2. Make changes to the [challenge.rb](./challenge.rb) file.
3. Commit your changes.
4. Wait for the result of the "GitHub Classroom Workflow" action. If it is green - congratulations, you solved this challenge! If not - try again!
      - If you cannot see any auto-grading workflows on the  [Actions](../../actions) page, learn how to fix it in [this repo](https://github.com/microverse-students/autograding-troubles-ruby).
5.  *You can watch an example of how to solve a challenge in the video linked in the theoretical lesson preceding this challenge.*

Note: We use RSpec for checking your solution with unit tests. You can [install](https://github.com/rspec/rspec) it and use it in your local environment if you like.


## Challenge description

### Breadth-First Search
BFS begins at one node in a graph and visits all the neighboring nodes. It then goes to each of those neighbors to explore their unvisited neighbors in order. So it goes through the entire graph one level at a time, until the whole graph has been visited.

![](bfs.gi)

BFS goes through the Nodes one level at a time, so you need a structure to keep track of the next nodes to be processed.

- **Q:** What structure can be used to access items in the order they were put in?
- **A:** A Queue

### Challenge
Return an array with the given graph in BFS order.

### Sample Input
```ruby
graph = {
  0 => [2], 
  1 => [4], 
  2 => [5, 0, 3], 
  3 => [2], 
  4 => [1, 5], 
  5 => [4, 2]
}

bfs(graph)
# => [0, 2, 5, 3, 4, 1]
```
### Get stuck and need some hint?
Check this link: https://gitlab.com/microverse/guides/coding_challenges/hints/blob/master/challenges/tress_and_graphs/breadth-first-search.md

### Troubleshooting

If you cannot see any auto-grading workflows on the [Actions](../../actions) page, learn how to fix it in [this repo](https://github.com/microverse-students/autograding-troubles-ruby).
