class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left); // Traverse the left subtree
        console.log(node.data); // Visit the current node
        inOrderTraversal(node.right); // Traverse the right subtree
    }
}
function postOrderTraversal(node) {
    if (node !== null) {
        postOrderTraversal(node.left); // Traverse the left subtree
        postOrderTraversal(node.right); // Traverse the right subtree
        console.log(node.data); // Visit the current node
    }
}
function preOrderTraversal(node) {
    if (node !== null) {
        console.log(node.data); // Visit the current node
        preOrderTraversal(node.left); // Traverse the left subtree
        preOrderTraversal(node.right); // Traverse the right subtree
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

console.log("In-Order Traversal:");//51768
inOrderTraversal(root);
console.log("Post-Order Traversal:");//57861
postOrderTraversal(root);
console.log("Pre-Order Traversal:"); //15678
preOrderTraversal(root);

//   1
//  /  \
// 5    6
//     /  \
//     7   8