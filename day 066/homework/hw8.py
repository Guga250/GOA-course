def filter_string(st):
    num = "".join(i for i in st if i.isdigit())
    return int(num)