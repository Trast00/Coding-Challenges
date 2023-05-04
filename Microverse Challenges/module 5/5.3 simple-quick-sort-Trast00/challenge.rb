def simple_quicksort(array)
  # write your code here
  
  # if array contain only one element return the array
  return array if array.length <= 1

  # take the firt value
  first = array[0]

  # separate it in two array (before and after)
  before = array.select { |el| el<first }
  after = array.select { |el| el>first }
    # simple_quicksort(before)
  before = simple_quicksort(before)
    # simple_quicksort(after)
  after = simple_quicksort(after)
    
  #puts [before, first, after].join(' ')
  puts [*before, first, *after].join(' ')
  [*before, first, *after]
end

simple_quicksort([5, 8, 1, 3, 7, 10, 2])