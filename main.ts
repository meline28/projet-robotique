input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(90)
})
input.onButtonPressed(Button.B, function () {
    servos.P1.setAngle(45)
})
servos.P1.setAngle(155)
basic.forever(function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
