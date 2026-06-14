/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
      let dummyNode = new ListNode(-1);
      dummyNode.next = head;
      let slow = dummyNode;
      let fast = dummyNode;

      for (let i = 0; i <=n; i++) {
        fast = fast.next;
      }

      while (fast != null) {
        slow = slow.next;
        fast = fast.next;
      }

      if (slow !== null && slow.next !== null) {
        slow.next = slow.next.next;
      }

      return dummyNode.next

    }
}
