function productArray(A) {
    const n = A.length;
    const leftProduct = new Array(n);
    const rightProduct = new Array(n);
    const product = new Array(n);

    // Calculate left products
    leftProduct[0] = 1;
    for (let i = 1; i < n; i++) {
        leftProduct[i] = leftProduct[i - 1] * A[i - 1];
    }

    // Calculate right products
    rightProduct[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        rightProduct[i] = rightProduct[i + 1] * A[i + 1];
    }

    // Calculate product array
    for (let i = 0; i < n; i++) {
        product[i] = leftProduct[i] * rightProduct[i];
    }

    return product;
}

// Example usage:
const A1 = [1, 2, 3, 4, 5];
console.log(productArray(A1)); // Output: [120, 60, 40, 30, 24]

const A2 = [5, 1, 10, 1];
console.log(productArray(A2)); // Output: [10, 50, 5, 50]