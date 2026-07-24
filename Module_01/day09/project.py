class Account:
    def __init__(self,owner,account_number,private_balance):
        self.owner= owner
        self.account_number = account_number
        self.__private_balance = private_balance
        self.observers = []
        self.history=[]
    @property
    def balance(self):
        return self.__private_balance 
    @balance.setter
    def balance(self,balance):
        self.__private_balance = balance
    def deposit(self,amount):
        if amount < 0:
            raise ValueError("invalid input")
            return 
        self.__private_balance += amount
        message= f"this transaction happen from your account type : - {self.account_type}"        
        self.notify(message)
        self.history.append(f"deposit,{amount}")
    def withdraw(self,amount):
        if amount > self.__private_balance :
            print("insuficient fund")
            return
        self.__private_balance -= amount
        self.notify(f"-you withdraw= {amount} now your balance is {self.balance}etb")
        self.history.append(f"withdraw,{amount}")

    def statement(self,account_type="main"):
        self.account_type=account_type
        message= f"this transaction happen from your account type : - {self.account_type}"
        self.notify(message)
        self.history.append(f"Account type,{self.account_type}")
        return message

    def subscribe(self,obs):
        self.observers.append(obs)
    def notify(self,event):
        for obs in self.observers:
            obs.update(event)
            
    def undo_last(self):
        return f"this is your last_transaction or undo {self.history.pop()}"
            
    def total_transactions(self, history):
        if len(history) == 0:
            return 0

        transaction = history[0]
        transaction_parts = transaction.split(",")

        amount = int(transaction_parts[1])

        return amount + self.total_transactions(history[1:])

class SMSAlert:
    def update(self,event):
        print(f"[Telebirr SMS]{event}")


class SavingAccount(Account):
    def __init__(self,owner,account_number,private_balance,rate,account_type="saving account"):
        super().__init__(owner,account_number,private_balance)
        self.account_type=account_type
        self.rate=rate

    def add_intrest(self):
        self.balance += self.balance*self.rate
        
    def statement(self):
        message= f"this transaction happen from your account type : - {self.account_type}"
        self.notify(message)


class CurrentAccount(Account):
    def __init__(self,owner,account_number,private_balance,rate,account_type="current account"):
        super().__init__(owner,account_number,private_balance)
        self.account_type=account_type

    def withdraw(self,overdraft):
        if overdraft < 0:
            raise ValueError("couldn't be less than zero")
        self.overdraft=overdraft
        self.balance-=overdraft
        if self.overdraft > self.balance + 10000:
            print("your overdraft withdraw is unseccussful. You can only withdraw 10,000 over draft")

        else:
            self.notify(f"-you withdraw from current account = {overdraft} now your balance is {self.balance}etb")

    def statement(self):
        message= f"this transaction happen from your account type : - {self.account_type}"
        self.notify(message)
class AccountFactor:
    @staticmethod
    def create(kind,owner,account_number,private_balance,rate):
        if kind == "savingaccount":
            return SavingAccount(owner,account_number,private_balance,rate)
        if kind == "currentaccount":
            return CurrentAccount(owner,account_number,private_balance,rate)
        if kind == "account":
                    return Account(owner,account_number,private_balance)                    

class AccountRegistry:
    def __init__(self):
        self.accounts_data={}

    def add_account(self, account):
        self.accounts_data[account.account_number] = account

    def find_account(self, account_number):
        return self.accounts_data.get(account_number)
    def list_all(self):
        return sorted(self.accounts_data.keys())


    def top_by_balance(self, n):
            accounts = list(self.accounts_data.values())
            result = sorted(accounts,key=lambda account: account.balance,reverse=True)
            return result[:n]

    def find_by_number(self, number):
        account_numbers = sorted(self.accounts_data.keys())
        low = 0
        high = len(account_numbers) - 1
        while low <= high:
            middle = (low + high) // 2
            if account_numbers[middle] == number:
                return self.accounts_data[number]
            elif account_numbers[middle] < number:
                low = middle + 1
            else:
                high = middle - 1
        return -1


class Branch:
    def __init__(self, name):
        self.name = name
        self.children = []
        self.accounts = []

    def add_branch(self, branch):
        self.children.append(branch)

    def add_account(self, account):
        self.accounts.append(account)

    def total_balance(self):
        total = 0

        for account in self.accounts:
            total += account.balance

        for child in self.children:
            total += child.total_balance()

        return total
head_office = Branch("Head Office")
addis_region = Branch("Addis Region")
oromia_region = Branch("Oromia Region")
cbe1 = Branch("CBE-1")
cbe2 = Branch("CBE-2")
cbe3 = Branch("CBE-3")
cbe4 = Branch("CBE-4")
head_office.add_branch(addis_region)
head_office.add_branch(oromia_region)
addis_region.add_branch(cbe1)
addis_region.add_branch(cbe2)
oromia_region.add_branch(cbe3)
oromia_region.add_branch(cbe4)
current_Account=AccountFactor.create("currentaccount","Roba", "ADB-10002938", 2000,20000)
Saving_Account=AccountFactor.create("savingaccount","sami", "ADB-10007498", 5000,0.5)
main_Account=AccountFactor.create("account","bruk", "ADB-10006749", 800,0.5)
cbe1.add_account(main_Account)
cbe2.add_account(Saving_Account)
cbe3.add_account(current_Account)
print(f"this is the head office total acoount: {head_office.total_balance()}")
accounts=[main_Account,Saving_Account,current_Account]
for i in accounts:
    i.statement()
    i.subscribe(SMSAlert())
    i.withdraw(100)
    i.account_number
    print(f"this is account balance after each class:{i.balance}")
Saving_Account.add_intrest()

print(f"this is intrest of saving account value = {Saving_Account.balance}")

registry = AccountRegistry()
registry.add_account(main_Account)
registry.add_account(current_Account)
registry.add_account(Saving_Account)
findAccount=registry.find_account("ADB-10007498")
findAccount.deposit(500)
findAccount.withdraw(300)
print(registry.list_all())
account1 = registry.find_by_number("ADB-10007498")
account2 = registry.find_by_number("ADB-10002938")
account3 = registry.find_by_number("ADB-10006749")

print(f"testing if is through account number in history{findAccount.history}")
print(f"this value the undo last: {findAccount.undo_last()}")
print(findAccount.account_type)
print(registry.accounts_data.keys())
print(findAccount.total_transactions(findAccount.history))

print("Total Transaction Value:", findAccount.total_transactions(findAccount.history))
top_accounts = registry.top_by_balance(3)

print("this output gained by top acounts by balance")
for account in top_accounts:
    print(f"Owner: {account.owner} , account number: {account.account_number} , account balance: {account.balance} ETB")
account_by_number = [account1,account2,account3]
for i in account_by_number:
    print(f"this output gained by account number or find by number method:{i.owner}-  {i.account_number} -{i.balance}")
