list1 = ['name','age','address']

list1.sort()
print(list1)




class Person:
    
    def __init__(self,name,age,address):
        self.name = name
        self.age = age
        self.address = address

        
    def CreateName(self):
        self.name = 'vinay'
        return self.name
        

instance = Person('kollu',28,'milan')
instance2 = Person('kvk',28,'milan')
 


