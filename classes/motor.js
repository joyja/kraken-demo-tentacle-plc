class Motor {
    constructor() {
        this.Auto = false
        this.On = false
    }
}
Motor.variables = {
    'Auto': {
        description: 'In auto mode',
        datatype: 'boolean',
        initialValue: true,
        persistent: true
    },
    'On': {
        descript: 'motor is on',
        datatype: 'boolean',
        initialValue: false,
        persistent: true
    }
}

module.exports = [
    Motor
]