const findErrorNums = function (nums) {
  nums.sort((a, b) => a - b)
  let repet = 0
  let notOnly = 0
  for (let i = 0; i < nums.length; i++) {
    if (repet !== 0 && notOnly !== 0) break

    if (nums[i] === nums[i + 1] && repet === 0) {
      repet = nums[i]
    }

    if (nums[i] !== i + 1 && notOnly === 0 && nums[i + 1] !== i + 1) {
      notOnly = i + 1
    }
  }
  return [repet, notOnly]
}

console.log(findErrorNums([1, 5, 3, 2, 2, 7, 6, 4, 8, 9]))
// [3, 2, 3, 4, 6, 5]
