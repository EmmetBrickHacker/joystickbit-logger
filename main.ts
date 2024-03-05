joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.up, function () {
    datalogger.log(
    datalogger.createCV("button", "C"),
    datalogger.createCV("status", "released")
    )
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    datalogger.log(
    datalogger.createCV("button", "E"),
    datalogger.createCV("status", "pressed")
    )
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.up, function () {
    datalogger.log(
    datalogger.createCV("button", "D"),
    datalogger.createCV("status", "released")
    )
})
input.onButtonPressed(Button.A, function () {
    datalogger.log(
    datalogger.createCV("button", "joystick"),
    datalogger.createCV("rocker value of X", joystickbit.getRockerValue(joystickbit.rockerType.X)),
    datalogger.createCV("rocker value of Y", joystickbit.getRockerValue(joystickbit.rockerType.Y)),
    datalogger.createCV("status", joystick_position)
    )
    joystick_position = (joystick_position + 1) % 9
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    datalogger.log(
    datalogger.createCV("button", "F"),
    datalogger.createCV("status", "pressed")
    )
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.up, function () {
    datalogger.log(
    datalogger.createCV("button", "F"),
    datalogger.createCV("status", "released")
    )
})
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog(datalogger.DeleteType.Fast)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.up, function () {
    datalogger.log(
    datalogger.createCV("button", "E"),
    datalogger.createCV("status", "released")
    )
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    datalogger.log(
    datalogger.createCV("button", "D"),
    datalogger.createCV("status", "pressed")
    )
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    datalogger.log(
    datalogger.createCV("button", "C"),
    datalogger.createCV("status", "pressed")
    )
})
let joystick_position = 0
joystick_position = 0
let inicialised = 0
datalogger.setColumnTitles(
"button",
"status",
"rocker value of X",
"rocker value of Y"
)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
joystickbit.initJoystickBit()
basic.showIcon(IconNames.Heart)
inicialised = 1
