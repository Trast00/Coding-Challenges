# Time: O(n) Space: O(1)
def partition(array)
  pivot = array[0]
  i = 1
  array[1..-1].each_with_index do |el, idx|
    if el < pivot
      array[i], array[idx+1] = array[idx+1], array[i]
      i += 1
    end
  end
  array[0], array[i-1] = array[i-1], array[0]
  array
end

p partition([4, 5, 3, 9, 1])
# => [3, 1, 4, 5, 9]
