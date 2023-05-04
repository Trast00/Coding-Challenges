def partition(array)
  first = array[0]
  before = array.select { |el| el<first}
  after = array.select { |el| el>first}
  [*before, first, *after]
end

p partition([4, 5, 3, 9, 1])
# => [3, 1, 4, 5, 9]
