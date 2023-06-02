degrees = 0
s = [0, 0]


def countDegrees():
    global degrees, s
    if pins.digital_read_pin(DigitalPin.P0) == pins.digital_read_pin(DigitalPin.P1):
        degrees += 1
    else:
        degrees -= 1
    return degrees
    
def on_forever():
    if pins.digital_read_pin(DigitalPin.P0) != s[0]:
        serial.write_value("x", countDegrees())
        s[0] = pins.digital_read_pin(DigitalPin.P0)


basic.forever(on_forever)