def bmi(weight, height):
    wona = weight / (height ** 2)
    
    if wona <= 18.5:
        return "Underweight"
    elif wona <= 25.0:
        return "Normal"
    elif wona <= 30.0:
        return "Overweight"
    else:
        return "Obese"