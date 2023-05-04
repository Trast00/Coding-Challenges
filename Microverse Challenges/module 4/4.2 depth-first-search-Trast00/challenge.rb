def depth_first_search(graph)
  # write your code here
  @result = [0]
  @discovered = [0]
  @graph = graph

  def depth(key)
    @result << key if !@result.include?(key)

    list_nodes = @graph[key]
    list_nodes.each do |node|
      if !@discovered.include?(node)
        @discovered << node
        depth(node)
      end
    end
  end

  depth(0)

  @result
end

p depth_first_search({
  0 => [2], 
  1 => [4], 
  2 => [5, 0, 3], 
  3 => [2], 
  4 => [1, 5], 
  5 => [4, 2]
})
# => [0, 2, 5, 4, 1, 3]
