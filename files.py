from collections import Counter
import os
import shutil

#take a list input from the user
mylist = input("Enter your list: ")

newlist = []
mydict = {}

#create alphabetically sorted files with each person's name
for name in sorted(mylist.split(", ")):
    mydict[name] = mylist.split(", ").count(name)
    name = name + ".txt"
    if not os.path.isfile("/home/user/Desktop/Tasks"+name):
        f = open(name,"a+")

#print the 5 most frequently used names
#print(list(Counter(mylist.split(", ")).items())[:5])

#create folders and move files in them
for name in sorted(mylist.split(", ")):
    parent_dir = "/home/user/Desktop/Tasks"
    dir = name[0].capitalize()
    path = os.path.join(parent_dir, dir)
    try: 
        if not os.path.isfile(path):
            os.mkdir(path) 
    except OSError as error: 
        pass
    new_dir = parent_dir+"/"+name+".txt" 
    if os.path.exists(new_dir):
        shutil.move(new_dir,path)
        print(name[0]+"/"+name+".txt")
