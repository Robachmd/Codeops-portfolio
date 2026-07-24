# 1. Four Pillars of OOP

#   Encapsulation  - Hide data using private variables.
#   Example: self.__private_balance

#   Abstraction  - Show only important features and hide implementation.
#   Example: deposit()

#   Inheritance  - A class inherits from another class.
#   Example: SavingAccount(Account)

#   Polymorphism  - The same method behaves differently in different classes.
#   Example: statement()


# 2. Design Patterns

#   Singleton  - Ensures only one object exists.
#   Example: One bank system.

#   Factory  - Creates objects without creating them directly.
#   Example: AccountFactory.create()

#   Observer  - Notifies objects when something changes.
#   Example: SMSAlert receives account updates.


# 3. Time Complexity (Fastest → Slowest)

# O(1)
# O(log n)
# O(n)
# O(n log n)
# O(n²)


# 4. Why is dict lookup O(1) but list search O(n)?

#   Dictionary (dict): Uses a hash table to find a key directly, so lookup is O(1).
#   List: Searches one item at a time, so search is O(n).


# 5. Binary Search

#   Can be used only on a sorted list.
#   Time complexity: O(log n).


# 6. BST Traversal

#   In-order traversal (Left → Root → Right).
#   It returns values in sorted order because smaller values are on the left and larger values are on the right.


# 7. Data Structures

#   Branch hierarchy → Tree
#   Transfer network → Graph
#   Payment by urgency → Priority Queue (Heap)