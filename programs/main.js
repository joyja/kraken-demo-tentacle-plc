module.exports = async function ({ global }) {
    global.count = global.count + 1
    if (!global.Level) {
        global.Level = 0
    }
    if (global.Valve1.Open) {
        if (global.inletFlow < 120) {
            global.inletFlow = global.inletFlow + 10
        } else {
            global.inletFlow = 120
        }   
    } else {
        if (global.inletFlow > 0) {
            global.inletFlow = global.inletFlow - 10
        } else {
            global.inletFlow = 0
        }
    }
    if (global.Motor1.On) {
        if (global.outletFlow < 120) {
            global.outletFlow = global.outletFlow + 10
        } else {
            global.outletFlow = 120
        }
    } else {
        if (global.outletFlow > 0) {
            global.outletFlow = global.outletFlow - 10
        } else {
            global.outletFlow = 0
        }
    }
    global.Level = global.Level + (global.inletFlow / 60) - (global.outletFlow / 60)
    if (global.Level > 80) {
        global.Valve1.Open = false
        global.Motor1.On = true
    }
    if (global.Level < 20) {
        global.Valve1.Open = true
        global.Motor1.On = false
    }
}