input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 5) {
        maqueen.motorStop(maqueen.Motors.All)
        for (let index = 0; index < 10; index++) {
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
            basic.pause(500)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            basic.pause(500)
        }
    }
})
