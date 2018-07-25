// Implement a linked-list
var LinkedList = function (initialValue) {
    this.head = null
    this.tail = null
    if (typeof initialValue === 'number') {
        this.addToTail(initialValue);
    }

};


LinkedList.prototype.addToTail = function (value) {
    var newNode = Node(value)
    if (this.head === null) {
        this.head = newNode
        this.tail = newNode
    } else {
        this.tail.next = newNode
        this.tail = newNode
    }

}


LinkedList.prototype.removeHead = function () {
    if (this.head.next === null) {
        delete this.head
        delete this.tail
        return null
    } else {
        var remove = this.head.value
        this.head = this.head.next;
    }
    return remove
}


LinkedList.prototype.contains = function (target) {
    while (this.head !== null) {
        if (this.head.value === target) {
            return true;
        } else {
            this.head = this.head.next
        }
    }
    return false;
}

var Node = function (value) {
    var node = {}
    node.next = null
    node.value = value
    return node
}