/* Time: O(V + E) Space: O(V) */
def bfs(graph)
  # write your code here
  
  # create a array taht contain the first key
  @result = [0]
  @queue = [0]
  @discovered = [0]


  until @queue.empty? 
    key = @queue.shift
    @discovered << key

    @result = [*@result, *graph[key]].uniq
    graph[key].uniq.each do |element|
      @queue << element if !@discovered.include?(element)
    end
  end

  @result
end

p bfs({
  0 => [2], 
  1 => [4], 
  2 => [5, 0, 3], 
  3 => [2], 
  4 => [1, 5], 
  5 => [4, 2]
})
# => [0, 2, 5, 3, 4, 1]
