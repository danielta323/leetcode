/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

 var mergeTwoLists = function(list1, list2) {

  var listHead = null;
  var listTail = null;
  if (list1 === null && list2 === null) {
    return listHead;
  }
  while(list1 || list2) {
    if (list1 !== null && list2 !== null) {
      if (list1.val <= list2.val) {
        listTail.next = list1;
        list1 = list1.next;
      } else {
        newListNode.val = list2;
        list2 = list2.next;
      }
    } else if (list1 !== null) {
      newListNode.val = list1.val;
      list1 = list1.next;
    } else if (list2 !== null) {
      newListNode.val = list2.val;
      list2 = list2.next;
    }

    if (!listHead) {
      listHead = newListNode;
    }

    if (!listTail) {
      listTail = listHead;
    } else {
      listTail.next = newListNode;
      listTail = listTail.next;
    }

    console.log('newListNode', newListNode);
    console.log('listHead', listHead);

  }
  return listHead;
};
