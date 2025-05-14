/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

public class Solution {
    public int RemoveElement(int[] nums, int val) {
        int k = 0;  // Pointer to track valid elements
            for(int i = 0; i < nums.Length; i++) {
                if(nums[i] != val) {
                    nums[k++] = nums[i];  // Move valid element forward
                }
            }
            return k;  // New length of array

        // MY OVERCOMPLICATED SOLUTION THAT FAILS - FOR FUTURE REFERENCE WHAT NOT TO DO

        // int i = 0;
        // int k = 0;

        // // account for if nums is empty or 1
        // if (nums == null) {
        //     return k;
        // }

        // if (nums.Length == 1) {
        //     if (nums[0] != val) {
        //         k++;
        //     }
        //     return k;
        // }

        // int nextLastVal = nums.Length;

        // while(i < nextLastVal) {
        //     if (nums[i] == val) {
        //         // swap with the next last val that doesnt equal val
        //         while (nums[nextLastVal] == val) {
        //             nextLastVal--;
        //         }
        //         if (i != nextLastVal) {
        //             nums[i] = nums[nextLastVal];
        //             nums[nextLastVal] = val;
        //             k++;
        //         }
                
        //     }
        //     else {
        //         k++;
        //     }
        //     i++;
        // }

        // return k;
    }
}