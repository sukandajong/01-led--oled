OLED.init(128, 64)

def on_forever():
    if input.button_is_pressed(Button.A):
        basic.show_icon(IconNames.HAPPY)
        OLED.clear()
        OLED.write_string_new_line("HELLO")
    elif input.button_is_pressed(Button.B):
        basic.show_icon(IconNames.SAD)
        OLED.clear()
        OLED.write_string_new_line("BYE")
    basic.pause(100)
basic.forever(on_forever)
