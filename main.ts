let degrees = 0
let s = [0, 0]
function countDegrees(): number {
    
    if (pins.digitalReadPin(DigitalPin.P0) == pins.digitalReadPin(DigitalPin.P1)) {
        degrees += 1
    } else {
        degrees -= 1
    }
    
    return degrees
}

basic.forever(function on_forever() {
    if (pins.digitalReadPin(DigitalPin.P0) != s[0]) {
        serial.writeValue("x", countDegrees())
        s[0] = pins.digitalReadPin(DigitalPin.P0)
    }
    
})
