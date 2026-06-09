class Solution {
    /**
     * @param {ListNode} head
     * @return {void} Modifie la liste en place
     */
    reorderList(head: ListNode | null): void {
        if (head === null || head.next === null) {
            return;
        }

        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let secondListHead = slow.next;
        slow.next = null;
        let secondList = this.invertList(secondListHead);

        let firstList = head;
        
        while (secondList !== null) {
            let temp1 = firstList.next;
            let temp2 = secondList.next;

            firstList.next = secondList;
            secondList.next = temp1;

            firstList = temp1;
            secondList = temp2;
        }
    }

    private invertList(head: ListNode | null): ListNode | null {
        let current = head;
        let previous = null;

        while (current !== null) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        return previous;
    }
}