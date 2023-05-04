const hanoi_steps = require('./challenge')
const assert = require('assert')

describe('Tests', function () {
  it('hanoi_steps_of_2', function () {
    assert(hanoi_steps(2) === "1->2\n1->3\n2->3\n")
  })

  it('hanoi_steps_of_3', function () {
    assert(hanoi_steps(3) === "1->3\n1->2\n3->2\n1->3\n2->1\n2->3\n1->3\n")
  })

  it('hanoi_steps_of_4', function () {
    assert(hanoi_steps(4) === "1->2\n1->3\n2->3\n1->2\n3->1\n3->2\n1->2\n1->3\n2->3\n2->1\n3->1\n2->3\n1->2\n1->3\n2->3\n")
  })

  it('hanoi_steps_of_5', function () {
    assert(hanoi_steps(5) === "1->3\n1->2\n3->2\n1->3\n2->1\n2->3\n1->3\n1->2\n3->2\n3->1\n2->1\n3->2\n1->3\n1->2\n3->2\n1->3\n2->1\n2->3\n1->3\n2->1\n3->2\n3->1\n2->1\n2->3\n1->3\n1->2\n3->2\n1->3\n2->1\n2->3\n1->3\n")
  })
})
