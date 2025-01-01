from turtle import*

shape("classic")

speed(20)
#first build a black quare.

width(5)
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

#now door
forward(70)
begin_fill()
color("brown")
left(90)
forward(130)
right(90)
forward(60)
right(90)
forward(130)
right(90)
forward(60)
end_fill()

#now we need the roof.

penup()
goto(200, 200)
pendown()
begin_fill()
color("red")

right(45)
forward(148)
left(90)
forward(150)
end_fill()

#window now
penup()
goto(40,150)
pendown()

begin_fill()
color("cyan")
left(135)
forward(120)
left(90)
forward(40)
left(90)
forward(120)
left(90)
forward(40)
end_fill()

exitonclick()