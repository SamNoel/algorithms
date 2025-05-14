public class Solution {
    // SOLVED WITHOUT LOOKING UP SOLUTION
    public int RemoveDuplicates(int[] nums) {
        int k = 0; // counter
        int pointer = 0;

        if (nums.Length > 0) {
            k = 1;
        }

        for (int i = 0; i < nums.Length; i++) {
            if (nums[i] > nums[pointer]) {
                nums[pointer + 1] = nums[i];
                pointer++;
                k++;
            }
        }

        return k;
    }
}