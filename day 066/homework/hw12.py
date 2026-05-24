def get_count(sentence):
    xmovani = "aeiou"
    count = 0
    for i in sentence:
        if i in xmovani:
            count+=1
    return count