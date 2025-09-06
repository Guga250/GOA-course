def get_count(sentence):
    xmovani = "aeiou"
    return sum(1 for i in sentence if i in xmovani)