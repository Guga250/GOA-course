def calculator(a, b, op):
    if op == "+":
        return a+b
    elif op =='-':
        return a-b
    elif op == '*':
        return a*b
    elif op == '/':
        return a/b
    else:
        return "unknown value"