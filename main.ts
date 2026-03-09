OLED.init(128, 64)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
        OLED.clear()
        OLED.writeStringNewLine("HELLO")
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Sad)
        OLED.clear()
        OLED.writeStringNewLine("BYE")
    }
    basic.pause(100)
})
