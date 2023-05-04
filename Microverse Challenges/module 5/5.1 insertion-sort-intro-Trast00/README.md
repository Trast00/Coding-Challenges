## How to solve this challenge?

1. Read the "Challenge description" below.
2. Make changes to the [challenge.rb](./challenge.rb) file.
3. Commit your changes.
4. Wait for the result of the "GitHub Classroom Workflow" action. If it is green - congratulations, you solved this challenge! If not - try again!
      - If you cannot see any auto-grading workflows on the  [Actions](../../actions) page, learn how to fix it in [this repo](https://github.com/microverse-students/autograding-troubles-ruby).
5.  *You can watch an example of how to solve a challenge in the video linked in the theoretical lesson preceding this challenge.*

Note: We use RSpec for checking your solution with unit tests. You can [install](https://github.com/rspec/rspec) it and use it in your local environment if you like.


## Challenge description

### Insertion Sort 1

Goal: Before sorting entire lists, sort one element in a list.

#### Challenge 
Given a sorted list of numbers with an unsorted number 'X' in the right-most spot, can you write some simple code to insert 'X' into the list so it remains sorted?

Print the list every time a value is shifted, until the list is fully sorted. The goal of this challenge is to follow the correct order of insertion sort.

*How to Solve:* You can copy the right-most value ('X') to a variable, and consider its cell “empty”. Since this leaves an extra cell empty on the right, you can shift every number over until 'X' can be inserted. This will create a duplicate of each value, but when you reach the right spot, you can replace a value with 'X'.

#### Output Format 
On each line, output the entire array every time an item is shifted in it. This will include duplicate values.

#### Example
```
insertion_sort([1, 3, 2])
# => 1 3 3
#    1 2 3
```

**HINT:** To print the array in the format above you can use:
```
puts array.join(' ')
```

### Troubleshooting

If you cannot see any auto-grading workflows on the [Actions](../../actions) page, learn how to fix it in [this repo](https://github.com/microverse-students/autograding-troubles-ruby).
