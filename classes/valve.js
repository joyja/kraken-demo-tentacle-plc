class Valve {
    constructor() {
        this.Auto = false
        this.Open = false
    }
}
Valve.variables = {
    'Auto': {
        description: 'In auto mode',
        datatype: 'boolean',
        initialValue: true,
        persistent: true
    },
    'Open': {
        descript: 'valve is open',
        datatype: 'boolean',
        initialValue: true,
        persistent: true
    }
}

module.exports = [
    Valve
]