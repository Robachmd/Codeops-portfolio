# 1. Recursive Sum
def total(number):
    if len(number) == 0:
        return 0
    return number[0] + total(number[1:])

number=[10,20,30,40]
    
print(total(number))
def countdown(num):
    if num==0:
        return 
    print(num)
    countdown(num-1)
countdown(5)
#2
def binary_search(items, target):
    low = 0
    high = len(items) - 1
    while low <= high:
        middle = (low + high) // 2
        if items[middle] == target:
            return middle
        elif items[middle] < target:
            low = middle + 1
        else:
            high = middle - 1
    return -1
balances = [100, 200, 300, 400, 500]

print(binary_search(balances, 400))
print(binary_search(balances, 900))



#4
accounts = [
    ("Roba", 3000),
    ("Sami", 5000),
    ("Abel", 2000)
]
sorted_account=sorted(accounts,key=lambda account:account[1], reverse = True)
print(sorted_account)