let strip: neopixel.Strip = null
let crasch1 = 0
let crasch2 = 0
crasch2 = 0
crasch1 = 0
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB_RGB)
music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
strip.showColor(neopixel.colors(NeoPixelColors.Blue))
basic.pause(2000)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
basic.pause(2000)
if (input.buttonIsPressed(Button.A)) {
    basic.showIcon(IconNames.Happy)
    music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    basic.pause(5000)
} else {
    basic.showString("Hello world! I am Laxoi micro:bit")
    basic.showString("Hoi!")
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
    music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    basic.pause(5000)
}
basic.forever(function () {
    if (crasch1 == 3 || crasch2 == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        music.beginMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
        basic.pause(1000)
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 200)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 200)
        basic.pause(2000)
    }
    if (maqueen.sensor(PingUnit.Centimeters) < 10) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        if (Math.randomBoolean() == true) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 150)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            crasch1 += 1
            crasch2 = 0
        } else {
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 150)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            crasch2 = 0
            crasch1 = 0
        }
        basic.pause(715)
    } else {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 100)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 100)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        crasch1 = 0
        crasch2 += 1
    }
})
