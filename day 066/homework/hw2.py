def count_positives_sum_negatives(arr):
    if not arr:
        return []
    positive=0
    negativ=0
    for guga in arr:
        if guga>0:
            positive+=1
        elif guga<0:
            negativ+=guga
    return [positive, negativ]