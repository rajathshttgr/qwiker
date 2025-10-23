"use strict";

import { VERSION } from "./env/data.js";
import Qwiker from "./core/Qwiker.js";

function createInstance(defaultConfig) {
  const context = new Qwiker(defaultConfig);

  const instance = function (config) {
    return context.request(config);
  };

  // Copy prototype methods to instance
  Object.setPrototypeOf(instance, Qwiker.prototype);

  // Copy instance properties like defaults
  Object.assign(instance, context);

  return instance;
}

const qwiker = createInstance();

qwiker.VERSION = VERSION;
qwiker.create = (defaultConfig) => createInstance(defaultConfig);
qwiker.Qwiker = Qwiker;

export default qwiker;
