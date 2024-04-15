// Define the Node class
class Node {
    constructor(name, phoneNumber) {
        this.name = name; // Name stored in the node
        this.phoneNumber = phoneNumber; // Phone number stored in the node
        this.next = null; // Reference to the next node in the list
    }
}

// Define the LinkedList class
class LinkedList {
    constructor() {
        this.head = null; // Reference to the first node in the list (head)
        this.size = 0;    // Number of nodes in the list
    }

    // Method to add a new node to the end of the list
    append(name, phoneNumber) {
        const newNode = new Node(name, phoneNumber);
        if (!this.head) {
            this.head = newNode; // If the list is empty, set the new node as the head
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode; // Set the new node as the next node of the current last node
        }
        this.size++; // Increment the size of the list
    }
    getsizebeforedelete(){
        return this.size;
    }

    // Method to traverse through the entire linked list and display name and phone number
    display() {
        let current = this.head;
        while (current) {
            console.log(`Name: ${current.name}, Phone Number: ${current.phoneNumber}`);
            current = current.next;
        }
    }
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
        
        // Traverse the list and reverse the pointers
        while (current) {
            next = current.next; // Store the next node
            current.next = prev; // Reverse the pointer to the previous node
            prev = current;      // Move prev to current node
            current = next;      // Move current to next node
        }
        
        // Update the head to point to the new first node (prev)
        this.head = prev;
    }

    // Method to delete a contact from the linked list based on name or phone number
    deleteContact(targetData) {
        if (!this.head) {
            return; // List is empty
        }

        // Special case: if the head node contains the target data
        if (this.head.name === targetData || this.head.phoneNumber === targetData) {
            this.head = this.head.next; // Delete the head node
            this.size--; // Decrement the size of the list
            return;
        }

        let prev = null;
        let current = this.head;
        while (current) {
            if (current.name === targetData || current.phoneNumber === targetData) {
                prev.next = current.next; // Skip the current node
                this.size--; // Decrement the size of the list
                return;
            }
            prev = current;
            current = current.next;
        }
    }
    getsizeafterdelete(){
        return this.size;
    }
}

// Example usage:
const myContacts = new LinkedList();
myContacts.append("Ram", "123-456-7890");
myContacts.append("Seeta", "987-654-3210");
myContacts.append("Krishna", "456-789-0123");
myContacts.display();
console.log(myContacts.getsizebeforedelete());
// Delete a contact from the linked list based on name or phone number
myContacts.deleteContact("Seeta");
myContacts.display();
console.log(myContacts.getsizeafterdelete());
myContacts.reverse();
console.log("Reversed list:");
myContacts.display();



