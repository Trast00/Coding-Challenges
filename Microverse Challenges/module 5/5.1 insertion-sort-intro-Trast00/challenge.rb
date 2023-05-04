def insertion_sort(array)
  # write your code here

  index = array.length-1
  shifted_element = array[index]
  result = []
  until array[index-1] <= shifted_element do # until previousElement is smaller than X
    
    array[index] = array[index-1]
    print "#{array.join(' ')}\n"
    index -=1
    array.unshift(shifted_element) if index == 0
    exit if index == 0
  end
  if index!=0  
    array[index]= shifted_element
    result << array
    print "#{array.join(' ')}\n"
  end
  #puts result
end

insertion_sort([1, 3, 2])
# => 1 3 3
#    1 2 3

puts '-' * 20

insertion_sort([1, 4, 6, 9, 3])
# => 1 4 6 9 9
#    1 4 6 6 9
#    1 4 4 6 9
#    1 3 4 6 9
