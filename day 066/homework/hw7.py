def remove_bmw(string):
    if type(string)!= type(""):
        return TypeError("This program only works for text.")
    else:
        return string.replace("B","").replace("M","").replace("W","").replace("b","").replace("m","").replace("w","")