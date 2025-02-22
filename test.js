class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
function arrayToLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next; // Return the actual linked list
}

var addTwoNumbers = function (l1, l2) {
    const dummy = new ListNode();
    let current = dummy;
    let trailingDigit = 0;

    while (l1 || l2 || trailingDigit) {
        let sum = trailingDigit;

        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        trailingDigit = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    return dummy.next;
};

// Convert arrays into linked lists
let l1 = arrayToLinkedList([2, 4, 3]); // Represents 342
let l2 = arrayToLinkedList([5, 6, 4]); // Represents 465

// Run the function
let result = addTwoNumbers(l1, l2);

console.log(result);
