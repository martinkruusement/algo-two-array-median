/* eslint no-unused-expressions: "warn" */
const cases = require('./load-tests.js')

// var findMedianSortedArrays = function (nums1, nums2) {
function solution (input) {
  let nums1 = input[0]
  let nums2 = input[1]

  nums1 = (Array.isArray(nums1) && nums1.length) ? nums1 : []
  nums2 = (Array.isArray(nums2) && nums2.length) ? nums2 : []

  if (!nums1.length && !nums2.length) {
    return 0
  }

  let numbers = new Float64Array([...nums1, ...nums2]).sort()
  let midpoint = Math.floor(numbers.length / 2)
  let median = numbers[midpoint]
  if (numbers.length % 2 === 0) {
    return (median + numbers[midpoint - 1]) / 2
  }

  return median
}

/* eslint-disable no-unused-expressions */
let result = solution(cases[0].in)
cases[0].out
JSON.stringify(result) === JSON.stringify(cases[0].out)

module.exports = solution
