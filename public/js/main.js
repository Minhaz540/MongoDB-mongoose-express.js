const os = require("os");

const version = os.version();
const arch = os.arch();
const cpu = os.cpus();
const freemem = os.freemem();
console.log(version, arch, cpu, freemem);

document.getElementById("version").innerHTML = version;