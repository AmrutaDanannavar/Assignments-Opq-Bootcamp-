class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function heightOfBinaryTree(root) {
    if (root === null) {
        return -1; // Height of an empty tree is -1
    } else {
        const leftHeight = heightOfBinaryTree(root.left);
        const rightHeight = heightOfBinaryTree(root.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

const root = new Node(1);
root.left = new Node(5);
root.right = new Node(6);
root.right.left = new Node(7);
root.right.right = new Node(8);

console.log("Height of the binary tree:", heightOfBinaryTree(root)); //2
