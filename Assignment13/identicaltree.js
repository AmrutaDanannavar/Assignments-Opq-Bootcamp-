
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function areIdentical(root1, root2) {
    // If both trees are empty, they are identical
    if (!root1 && !root2) {
        return true;
    }
    
    // If one of the trees is empty while the other is not, they are not identical
    if (!root1 || !root2) {
        return false;
    }
    
    // Check if the values of the current nodes are equal
    if (root1.val !== root2.val) {
        return false;
    }
    
    // Recursively check the left and right subtrees
    return (
        areIdentical(root1.left, root2.left) &&
        areIdentical(root1.right, root2.right)
    );
}

// Example usage:
// Define the trees
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

// Check if the trees are identical
if (areIdentical(tree1, tree2)) {
    console.log("The trees are identical");
} else {
    console.log("The trees are not identical");
}
