const { unsubscribe } = require('diagnostics_channel')
const os = require('os')

//info about user
const user = os.userInfo()
console.log(user)
//methods returns the system uptime in sec
const currentOs = {
    name:os.type(),
    realease:os.release(),
    totalmem :os.totalmem(),
    freemem :os.freemem()
}

console.log(currentOs)