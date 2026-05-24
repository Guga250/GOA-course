def find_needle(haystack):
    for i in haystack:
        a = haystack.index("needle")
        return f"found the needle at position { a }"  