class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const root = new Node(1);
root.left = new Node(5);
root.right = new Node(6);
root.right.left = new Node(7);
root.right.right = new Node(8);

console.log("Root Node:", root.data);
console.log("Left Child Node:", root.left.data);
console.log("Right Child Node:", root.right.data);
console.log("Left Child Node of Right:", root.right.left.data);
console.log("Right Child Node of Right:", root.right.right.data);

//   1
//  /  \
// 5    6
//     /  \
//     7   8

