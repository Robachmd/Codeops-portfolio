#Q1
#  Operation                  | Big-O          | Why?                    
# -----------------------------------------------------------------------------------------------                              
#  List index                 | O(1)           | Go directly to the position.                          
#  Single loop                | O(n)           | Visit each element once.                              
#  Nested loop                | O(n²)          | For each element, visit every element again.          
#  Dictionary lookup          | O(1)           | Use the key to find the value directly.              
#  Binary Search              | O(log) n        | Throw away half the remaining search space each step. 

#Q2
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def peek(self,item):
        return self.items.reverse()


names = ["Roba", "Sami", "Abel"]

stack = Stack()

for name in names:
    stack.push(name)

print(stack.peek(names))
print(stack.pop())

#3
from collections import deque

queue = deque()

queue.append("Roba")
queue.append("Sami")
queue.append("Abel")
queue.append("John")
queue.append("Sara")

while len(queue) > 0:
    customer = queue.popleft()
    print(customer)