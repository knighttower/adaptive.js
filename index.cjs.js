// Single Modules and Aliases from: Adaptive
const { Adaptive, adaptive } = require('./src/Adaptive.js');
// Default Module from: Adaptive
const _adaptive = require('./src/Adaptive.js');
// Default Module from: AdaptiveElement
const AdaptiveElement = require('./src/classes/AdaptiveElement.js');
// Single Modules and Aliases from: Teleport
const { TeleportGlobal } = require('./src/Teleport.js');
// Default Module from: Teleport
const Teleport = require('./src/Teleport.js');
// Default Module from: TeleportTo
const componentTeleportTo = require('./src/web-components/TeleportTo.js');

module.exports = {
    Adaptive,
    adaptive,
    _adaptive,
    AdaptiveElement,
    TeleportGlobal,
    Teleport,
    componentTeleportTo,
};
