#Q1
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def insert(root, value):
    if root is None:
        return Node(value)

    if value < root.value:
        root.left = insert(root.left, value)
    else:
        root.right = insert(root.right, value)

    return root


def inorder(root):
    if root:
        inorder(root.left)
        print(root.value)
        inorder(root.right)

root = None
for x in [5, 3, 7, 1]:
    root = insert(root, x)

inorder(root)
#Q2
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def height(node):
    if node is None:
        return 0
    return max(height(node.left), height(node.right)) + 1

root = Node(10)
root.left = Node(5)
root.left.left = Node(2)
print(height(root))
#Q3
graph = {
    "A": ["B", "C"],
    "B": ["D"],
    "C": [],
    "D": []
}


def bfs(start):
    queue = [start]
    visited = []
    while queue:
        node = queue.pop(0)
        visited.append(node)
        for x in graph[node]:
            queue.append(x)

    return visited
print(bfs("A"))
#Q5
import heapq

tasks = []

heapq.heappush(tasks, (3, "Study"))
heapq.heappush(tasks, (1, "Eat"))
heapq.heappush(tasks, (2, "Sleep"))


while tasks:
    print(heapq.heappop(tasks))