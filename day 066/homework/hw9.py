def to_alternating_case(string):
    result = ""
    for i in string:
        if i.isupper():
            result +=i.lower()
        elif i.islower:
            result +=i.upper()
    return result