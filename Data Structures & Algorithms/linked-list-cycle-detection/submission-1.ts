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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
      if (head == null) {
        return false;
      }
      
      let visitedNodes = new Set<ListNode>();
      while (!visitedNodes.has(head)) {
        visitedNodes.add(head);
        head = head.next;
        if (head == null) {
          return false;
        }
      }
      return true;
    }
}
