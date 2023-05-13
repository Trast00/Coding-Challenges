/* Time: O(n) Space: O(h) */
class Node
	attr_reader :data
	attr_accessor :left, :right
	
	def initialize data
		@data = data
	end
end

def array_to_tree(array, i = 0)
	# use your function from the previous challenge
  return if (i >= array.length || array[i] === 0)

  node = Node.new(array[i])
  node.left = array_to_tree(array, 2*i+1)
  node.right = array_to_tree(array, 2*i+2)

  node
end

def search_tree?(array)
	root = array_to_tree(array)
  # write your code here

  #each left descent is smaller (set a max= node.value)
  def is_node_binary (node, min = nil, max = nil)
    return true if node.nil?
    return false if min && node.data<min
    return false if max && node.data>max

    return is_node_binary(node.left, min, node.data) && is_node_binary(node.right, node.data, max)
  end
  
  is_node_binary(root)
end

puts search_tree?([10, 4, 12])
# => true

puts search_tree?([10, 5, 7])
# => false
