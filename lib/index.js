'use strict'

/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// core
const execSync = require('child_process').execSync

/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

module.exports = {
  getPort (basePort) {
    const execPath = require.resolve('./exec')
    const cmd = `${process.execPath} "${execPath}"`
    const output = execSync(basePort ? `${cmd} --base-port=${basePort}` : cmd)

    return parseInt(output.toString())
  }
}
