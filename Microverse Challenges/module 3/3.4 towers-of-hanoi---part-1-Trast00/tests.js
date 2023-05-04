const move = require('./challenge')
const assert = require('assert')

describe('Tests', function () {
  it('move_1_3', function () {
    assert(move(1, 3).trim() === '1->2 1->3 2->3')
  })

  it('move_1_2', function () {
    assert(move(1, 2).trim() === '1->3 1->2 3->2')
  })

  it('move_2_3', function () {
    assert(move(2, 3).trim() === '2->1 2->3 1->3')
  })

  it('move_2_1', function () {
    assert(move(2, 1).trim() === '2->3 2->1 3->1')
  })
})
