class Solution {
    search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        // Si on sort de la boucle sans avoir fait de "return mid",
        // c'est que la cible n'est pas dans le tableau.
        return -1;
    }
}
