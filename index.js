/* eslint no-unused-expressions: "warn" */
const cases = require('./load-tests.js')

// var findMedianSortedArrays = function (nums1, nums2) {
function solution (input) {
  let nums1 = input[0]
  let nums2 = input[1]

  nums1 = (Array.isArray(nums1) && nums1.length) ? nums1 : []
  nums2 = (Array.isArray(nums2) && nums2.length) ? nums2 : []

  let numbers = [...nums1, ...nums2].map(n => parseFloat(n)).sort((a, b) => a - b)
  let isEven = numbers.length % 2 === 0
  let startCut = Math.floor(numbers.length / 2)
  let endCut = startCut + 1
  if (isEven) {
    startCut = Math.floor(numbers.length / 2) - 1
  }

  let medianSource = numbers.slice(startCut, endCut)

  if (medianSource.length === 1) {
    return medianSource[0]
  }
  if (medianSource.length === 2) {
    return (medianSource[0] + medianSource[1]) / 2
  }
  return 0
}

/* eslint-disable no-unused-expressions */
let result = solution(cases[0].in)
cases[0].out
JSON.stringify(result) === JSON.stringify(cases[0].out)

module.exports = solution
