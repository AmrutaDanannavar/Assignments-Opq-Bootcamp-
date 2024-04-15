class Stack {
    constructor() {
      this.size = 3;
      this.items = [];
      this.top = -1;
    }
  
    push(element) {
      if (this.isFull()) {
        console.log("Stack is full. Cannot push element:", element);
        return;
      }
      this.items[++this.top] = element;
      console.log("Pushed element:", element);
    }
  
    pop() {
      if (this.isEmpty()) {
        console.log("Stack is empty. Cannot pop element.");
        return;
      }
      return this.items[this.top--];
    }
  
    isEmpty() {
      return this.top === -1;
    }

    isFull() {
      return this.top === this.size - 1;
    }
  
    print() {
        const stackElements = this.items.slice(0, this.top + 1);
        console.log(stackElements.toString());
    }
  }

 
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log("Stack elements:");
stack.print();

console.log("Popped element:", stack.pop()); 
console.log("Popped element:", stack.pop()); 

console.log("Stack elements after pop:");
stack.print(); 

 
  