class Solution {
    /**
     * @param {Node} head
     * @return {Node | null}
     */
    copyRandomList(head: Node | null): Node | null {
      if (head === null) return null;
      let map = new Map<Node, Node>();
      let curr = head; 
      while (curr != null) {
        map.set(curr, new Node(curr.val));
        curr = curr.next;
      }

      let start = head;
      while (start != null) {
        let clone = map.get(start)!; 

        clone.next = start.next ? map.get(start.next)! : null;
        clone.random = start.random ? map.get(start.random)! : null;
        
        start = start.next;
      }

      return map.get(head)!;
    }
}