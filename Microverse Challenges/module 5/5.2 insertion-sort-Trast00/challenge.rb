# Time : O(n^2) Space: O(1)
def sort_itself(array)
  # write your code here

  # for each element in the list (starting from the second)
  array.each_with_index do |element, index|
    next if index == 0
    # for each previous element
    for j in (index).downto(1)
      # if the previous element is greater then swap
      if array[j-1] > array[j]
        array[j], array[j-1] = array[j-1], array[j]
      end
    end
    
    puts array.join(' ')
  end
  
end

sort_itself([1, 4, 3, 6, 9, 2])
# => 1 4 3 6 9 2
#    1 3 4 6 9 2
#    1 3 4 6 9 2
#    1 3 4 6 9 2
#    1 2 3 4 6 9
