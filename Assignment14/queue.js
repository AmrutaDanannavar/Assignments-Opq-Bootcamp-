class Queue {
    constructor() {
      this.size = 3;
      this.items = [];
    }
  
    enqueue(element) {
      if (this.isFull()) {
        console.log("Queue is full. Cannot enqueue element:", element);
        return;
      }
      this.items.push(element);
      console.log("enqueued  element:", element);
    }
  
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        }
        return this.items.shift();
      }
  
    isEmpty() {
      return this.items.length === 0;
    }

    isFull() {
      return this.items.length === this.size ;
    }
  
    print() {
        // const stackElements = this.items.slice(0, this.top + 1);
        // console.log(stackElements.toString());
        console.log(this.items.toString());
    }
  }

 
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log("Queue  elements:");
queue.print();

console.log("Dequeue element:", queue.dequeue()); 
console.log("Dequeue  element:", queue.dequeue()); 

console.log("Queue  elements after Dequeue :");
queue.print(); 

 
  