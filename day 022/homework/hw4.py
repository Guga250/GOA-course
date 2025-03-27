age = int(input(" enter your age: "))
is_student = bool(input("enter if you are student (yes or no): "))
if age <= 18:
    if is_student == "no":
        print("20 discount")
    else:
        print("10 discount")
else:
    print("regular pirce")