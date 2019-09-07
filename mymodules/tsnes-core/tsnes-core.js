(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TsNesCore"] = factory();
	else
		root["TsNesCore"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! exports provided: Nes, PadBit, PadValue, ChannelType, Ppu, MirrorMode, kColors, Fds, Addressing, Instruction, OpType, kInstTable, disassemble, kOpcode, Bus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_nes_nes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/nes/nes */ "./src/nes/nes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nes", function() { return _src_nes_nes__WEBPACK_IMPORTED_MODULE_0__["Nes"]; });

/* harmony import */ var _src_nes_apu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/nes/apu */ "./src/nes/apu.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PadBit", function() { return _src_nes_apu__WEBPACK_IMPORTED_MODULE_1__["PadBit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PadValue", function() { return _src_nes_apu__WEBPACK_IMPORTED_MODULE_1__["PadValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChannelType", function() { return _src_nes_apu__WEBPACK_IMPORTED_MODULE_1__["ChannelType"]; });

/* harmony import */ var _src_nes_ppu_ppu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/nes/ppu/ppu */ "./src/nes/ppu/ppu.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ppu", function() { return _src_nes_ppu_ppu__WEBPACK_IMPORTED_MODULE_2__["Ppu"]; });

/* harmony import */ var _src_nes_ppu_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/nes/ppu/types */ "./src/nes/ppu/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MirrorMode", function() { return _src_nes_ppu_types__WEBPACK_IMPORTED_MODULE_3__["MirrorMode"]; });

/* harmony import */ var _src_nes_ppu_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/nes/ppu/const */ "./src/nes/ppu/const.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kColors", function() { return _src_nes_ppu_const__WEBPACK_IMPORTED_MODULE_4__["kColors"]; });

/* harmony import */ var _src_nes_fds_fds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/nes/fds/fds */ "./src/nes/fds/fds.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fds", function() { return _src_nes_fds_fds__WEBPACK_IMPORTED_MODULE_5__["Fds"]; });

/* harmony import */ var _src_nes_cpu_inst__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/nes/cpu/inst */ "./src/nes/cpu/inst.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Addressing", function() { return _src_nes_cpu_inst__WEBPACK_IMPORTED_MODULE_6__["Addressing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Instruction", function() { return _src_nes_cpu_inst__WEBPACK_IMPORTED_MODULE_6__["Instruction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpType", function() { return _src_nes_cpu_inst__WEBPACK_IMPORTED_MODULE_6__["OpType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kInstTable", function() { return _src_nes_cpu_inst__WEBPACK_IMPORTED_MODULE_6__["kInstTable"]; });

/* harmony import */ var _src_nes_cpu_disasm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/nes/cpu/disasm */ "./src/nes/cpu/disasm.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disassemble", function() { return _src_nes_cpu_disasm__WEBPACK_IMPORTED_MODULE_7__["disassemble"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kOpcode", function() { return _src_nes_cpu_disasm__WEBPACK_IMPORTED_MODULE_7__["kOpcode"]; });

/* harmony import */ var _src_nes_bus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/nes/bus */ "./src/nes/bus.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bus", function() { return _src_nes_bus__WEBPACK_IMPORTED_MODULE_8__["Bus"]; });

// Public




// Additional





// Debugging purpose





/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/charenc/charenc.js":
/*!*****************************************!*\
  !*** ./node_modules/charenc/charenc.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),

/***/ "./node_modules/crypt/crypt.js":
/*!*************************************!*\
  !*** ./node_modules/crypt/crypt.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/md5/md5.js":
/*!*********************************!*\
  !*** ./node_modules/md5/md5.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(/*! crypt */ "./node_modules/crypt/crypt.js"),
      utf8 = __webpack_require__(/*! charenc */ "./node_modules/charenc/charenc.js").utf8,
      isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js"),
      bin = __webpack_require__(/*! charenc */ "./node_modules/charenc/charenc.js").bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message) && message.constructor !== Uint8Array)
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/nes/apu.ts":
/*!************************!*\
  !*** ./src/nes/apu.ts ***!
  \************************/
/*! exports provided: PadBit, PadValue, ChannelType, kChannelTypes, Apu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PadBit", function() { return PadBit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PadValue", function() { return PadValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelType", function() { return ChannelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kChannelTypes", function() { return kChannelTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Apu", function() { return Apu; });
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/util */ "./src/util/util.ts");
// APU: Audio Processing Unit

var PadBit;
(function (PadBit) {
    PadBit[PadBit["A"] = 0] = "A";
    PadBit[PadBit["B"] = 1] = "B";
    PadBit[PadBit["SELECT"] = 2] = "SELECT";
    PadBit[PadBit["START"] = 3] = "START";
    PadBit[PadBit["U"] = 4] = "U";
    PadBit[PadBit["D"] = 5] = "D";
    PadBit[PadBit["L"] = 6] = "L";
    PadBit[PadBit["R"] = 7] = "R";
})(PadBit || (PadBit = {}));
var PadValue;
(function (PadValue) {
    PadValue[PadValue["A"] = 1] = "A";
    PadValue[PadValue["B"] = 2] = "B";
    PadValue[PadValue["SELECT"] = 4] = "SELECT";
    PadValue[PadValue["START"] = 8] = "START";
    PadValue[PadValue["U"] = 16] = "U";
    PadValue[PadValue["D"] = 32] = "D";
    PadValue[PadValue["L"] = 64] = "L";
    PadValue[PadValue["R"] = 128] = "R";
})(PadValue || (PadValue = {}));
var ChannelType;
(function (ChannelType) {
    ChannelType[ChannelType["PULSE"] = 0] = "PULSE";
    ChannelType[ChannelType["TRIANGLE"] = 1] = "TRIANGLE";
    ChannelType[ChannelType["SAWTOOTH"] = 2] = "SAWTOOTH";
    ChannelType[ChannelType["NOISE"] = 3] = "NOISE";
    ChannelType[ChannelType["DMC"] = 4] = "DMC";
})(ChannelType || (ChannelType = {}));
const BASE = 0x4000;
const STATUS_REG = 0x15;
const PAD1_REG = 0x16;
const PAD2_REG = 0x17;
const FRAME_COUNTER = 0x17;
const IRQ_INHIBIT = 1 << 6;
const SEQUENCER_MODE = 1 << 7;
const CONSTANT_VOLUME = 0x10;
const LENGTH_COUNTER_HALT = 0x20;
const LENGTH_COUNTER_HALT_TRI = 0x80;
const ENVELOPE_LOOP = 0x20;
const CPU_CLOCK = 1789773; // Hz
const DMC_IRQ_ENABLE = 0x80;
const CHANNEL_COUNT = 5;
const CH_PULSE1 = 0;
const CH_PULSE2 = 1;
const CH_TRIANGLE = 2;
const CH_NOISE = 3;
const CH_DMC = 4;
const REG_STATUS = 0;
const REG_SWEEP = 1;
const REG_TIMER_L = 2;
const REG_TIMER_H = 3;
const kChannelTypes = [
    ChannelType.PULSE,
    ChannelType.PULSE,
    ChannelType.TRIANGLE,
    ChannelType.NOISE,
    ChannelType.DMC,
];
const kLengthTable = [
    0x0a, 0xfe, 0x14, 0x02, 0x28, 0x04, 0x50, 0x06, 0xa0, 0x08, 0x3c, 0x0a, 0x0e, 0x0c, 0x1a, 0x0e,
    0x0c, 0x10, 0x18, 0x12, 0x30, 0x14, 0x60, 0x16, 0xc0, 0x18, 0x48, 0x1a, 0x10, 0x1c, 0x20, 0x1e,
];
const kNoiseFrequencies = [4, 8, 16, 32, 64, 96, 128, 160, 202, 254, 380, 508, 762, 1016, 2034, 4068];
const kPulseDutyRatio = [0.125, 0.25, 0.5, -0.25];
const VBLANK_START = 241;
// ================================================================
// GamePad
class GamePad {
    constructor() {
        this.status = new Uint8Array(2);
        this.tmp = new Uint8Array(2);
    }
    setStatus(no, status) {
        // Prevent simultaneous pressing on LR and UD.
        const LR = 64 /* L */ | 128 /* R */, UD = 16 /* U */ | 32 /* D */;
        if ((status & LR) === LR)
            status &= ~LR;
        if ((status & UD) === UD)
            status &= ~UD;
        this.status[no] = status;
    }
    latch() {
        this.tmp[0] = this.status[0];
        this.tmp[1] = this.status[1];
    }
    shift(no) {
        const value = this.tmp[no];
        this.tmp[no] = value >> 1;
        return value & 1;
    }
}
// ================================================================
// Sound channel
class Channel {
    constructor() {
        this.regs = new Uint8Array(4);
        this.stopped = true;
    }
    reset() {
        this.regs.fill(0);
        this.stopped = true;
    }
    write(reg, value) {
        this.regs[reg] = value;
    }
    getVolume() { return 0; }
    getFrequency() { return 0; }
    getDutyRatio() { return 0.5; }
    setEnable(value) {
        if (!value)
            this.stopped = true;
    }
    update() { }
    isPlaying() {
        return !this.stopped;
    }
}
class PulseChannel extends Channel {
    constructor() {
        super(...arguments);
        this.lengthCounter = 0;
        this.sweepCounter = 0;
        this.envelopeDivider = 0; // i.e. Envelope counter
        this.envelopeCounter = 0; // i.e. Envelope volume
        this.envelopeReset = false;
    }
    reset() {
        super.reset();
        this.sweepCounter = 0;
        this.envelopeDivider = this.envelopeCounter = 0;
    }
    write(reg, value) {
        super.write(reg, value);
        switch (reg) {
            case REG_STATUS:
                this.stopped = false;
                if ((value & CONSTANT_VOLUME) === 0) {
                    this.envelopeDivider = value & 0x0f;
                    this.envelopeCounter = 0x0f;
                }
                break;
            case REG_SWEEP:
                this.sweepCounter = (value >> 4) & 7;
                break;
            case REG_TIMER_H:
                this.lengthCounter = kLengthTable[value >> 3];
                this.stopped = false;
                this.envelopeReset = true;
                break;
            default:
                break;
        }
    }
    getVolume() {
        if (this.stopped)
            return 0;
        let v = this.regs[REG_STATUS];
        if ((v & CONSTANT_VOLUME) !== 0)
            return (v & 15) / 15;
        return this.envelopeCounter / 15;
    }
    getFrequency() {
        const value = this.regs[REG_TIMER_L] + ((this.regs[REG_TIMER_H] & 7) << 8);
        return ((CPU_CLOCK / 16) / (value + 1)) | 0;
    }
    getDutyRatio() {
        return kPulseDutyRatio[(this.regs[REG_STATUS] >> 6) & 3];
    }
    update() {
        if (this.stopped)
            return;
        this.updateLength();
        this.updateEnvelope();
        this.sweep();
    }
    updateLength() {
        let v = this.regs[REG_STATUS];
        if ((v & LENGTH_COUNTER_HALT) !== 0)
            return;
        let l = this.lengthCounter;
        if (l <= 0) {
            l = 0;
            this.stopped = true;
        }
        else {
            l -= 4;
            if (l < 0)
                l = 0;
        }
        this.lengthCounter = l;
    }
    updateEnvelope() {
        if ((this.regs[REG_STATUS] & CONSTANT_VOLUME) !== 0)
            return;
        if (this.envelopeReset) {
            this.envelopeReset = false;
            this.envelopeCounter = 0x0f;
            this.envelopeDivider = this.regs[REG_STATUS] & 0x0f;
            return;
        }
        const DEC = 2;
        if (this.envelopeDivider >= DEC) {
            this.envelopeDivider -= DEC;
        }
        else {
            if (this.envelopeCounter > 0) {
                --this.envelopeCounter;
                this.envelopeDivider += this.regs[REG_STATUS] & 0x0f;
            }
            else {
                this.envelopeCounter = 0;
                if ((this.regs[REG_STATUS] & ENVELOPE_LOOP) !== 0) {
                    this.envelopeCounter = 0x0f;
                    this.envelopeDivider += this.regs[REG_STATUS] & 0x0f;
                }
            }
        }
    }
    // APU Sweep: http://wiki.nesdev.com/w/index.php/APU_Sweep
    sweep() {
        const sweep = this.regs[REG_SWEEP];
        if ((sweep & 0x80) === 0) // Not enabled.
            return;
        let c = this.sweepCounter;
        c += 2; // 2 sequences per frame.
        const count = (sweep >> 4) & 7;
        if (c >= count) {
            c -= count;
            let freq = this.regs[REG_TIMER_L] + ((this.regs[REG_TIMER_H] & 7) << 8);
            const shift = sweep & 7;
            if (shift > 0) {
                const add = freq >> shift;
                if ((sweep & 0x08) === 0) {
                    freq += add;
                    if (freq > 0x07ff)
                        this.stopped = true;
                }
                else {
                    freq -= add;
                    if (freq < 8)
                        this.stopped = true;
                }
                this.regs[REG_TIMER_L] = freq & 0xff;
                this.regs[REG_TIMER_H] = (this.regs[REG_TIMER_H] & ~7) | ((freq & 0x0700) >> 8);
            }
            c -= 2; // 2 sequences per frame
            if (c <= 0) {
                this.sweepCounter = ((sweep >> 4) & 7) + c;
            }
        }
        this.sweepCounter = c;
    }
}
class TriangleChannel extends Channel {
    constructor() {
        super(...arguments);
        this.lengthCounter = 0;
    }
    write(reg, value) {
        super.write(reg, value);
        switch (reg) {
            case REG_STATUS:
            case REG_TIMER_H:
                this.lengthCounter = this.regs[REG_STATUS] & 0x7f;
                this.stopped = this.lengthCounter <= 0;
                break;
            default:
                break;
        }
    }
    getVolume() {
        if (this.stopped)
            return 0;
        return 1;
    }
    getFrequency() {
        const value = this.regs[REG_TIMER_L] + ((this.regs[REG_TIMER_H] & 7) << 8);
        return ((CPU_CLOCK / 32) / (value + 1)) | 0;
    }
    update() {
        if (this.stopped)
            return;
        this.updateLength();
    }
    updateLength() {
        let v = this.regs[REG_STATUS];
        if ((v & LENGTH_COUNTER_HALT_TRI) !== 0)
            return;
        let l = this.lengthCounter;
        if (l <= 0) {
            l = 0;
            this.stopped = true;
        }
        else {
            l -= 4;
            if (l <= 0)
                l = 0;
        }
        this.lengthCounter = l;
    }
}
class NoiseChannel extends Channel {
    constructor() {
        super(...arguments);
        this.lengthCounter = 0;
    }
    write(reg, value) {
        super.write(reg, value);
        switch (reg) {
            case REG_TIMER_H: // Set length.
                this.lengthCounter = kLengthTable[value >> 3];
                this.stopped = false;
                break;
            default:
                break;
        }
    }
    getVolume() {
        if (this.stopped)
            return 0;
        let v = this.regs[REG_STATUS];
        if ((v & CONSTANT_VOLUME) !== 0)
            return (v & 15) / 15;
        return 1;
    }
    getFrequency() {
        const period = this.regs[REG_TIMER_L] & 15;
        return kNoiseFrequencies[period];
    }
    update() {
        if (this.stopped)
            return;
        this.updateLength();
    }
    updateLength() {
        let v = this.regs[REG_STATUS];
        if ((v & LENGTH_COUNTER_HALT) !== 0)
            return;
        let l = this.lengthCounter;
        if (l <= 0) {
            l = 0;
            if ((this.regs[2] & 0x80) === 0) {
                this.stopped = true;
            }
        }
        else {
            l -= 1;
            if (l < 0)
                l = 0;
        }
        this.lengthCounter = l;
    }
}
class DmcChannel extends Channel {
    constructor(triggerIrq) {
        super();
        this.triggerIrq = triggerIrq;
        this.regsLengthCounter = 1;
        this.dmaLengthCounter = 0;
    }
    setEnable(value) {
        this.stopped = !value;
        if (value) {
            if (this.dmaLengthCounter === 0) {
                this.dmaLengthCounter = this.regsLengthCounter;
            }
        }
        else {
            this.dmaLengthCounter = 0;
        }
    }
    write(reg, value) {
        super.write(reg, value);
        switch (reg) {
            case REG_TIMER_H: // Set length.
                this.regsLengthCounter = ((value << 4) + 1) * 8;
                this.stopped = false;
                break;
            default:
                break;
        }
    }
    getVolume() {
        if (this.stopped)
            return 0;
        let v = this.regs[REG_STATUS];
        if ((v & CONSTANT_VOLUME) !== 0)
            return (v & 15) / 15;
        return 1;
    }
    getFrequency() {
        const period = this.regs[REG_TIMER_L] & 15;
        return kNoiseFrequencies[period];
    }
    update() {
        if (this.stopped)
            return;
    }
    onHblank(_hcount) {
        this.updateLength();
    }
    updateLength() {
        if (this.stopped)
            return;
        let l = this.dmaLengthCounter;
        if (l <= 0) {
            l = 0;
            if ((this.regs[0] & 0x40) === 0) {
                this.stopped = true;
                if ((this.regs[0] & DMC_IRQ_ENABLE) !== 0)
                    this.triggerIrq();
            }
            else {
                l = this.regsLengthCounter;
            }
        }
        else {
            l -= 1;
            if (l < 0)
                l = 0;
        }
        this.dmaLengthCounter = l;
    }
}
// ================================================================
// Apu
class Apu {
    constructor(triggerIrq) {
        this.triggerIrq = triggerIrq;
        this.regs = new Uint8Array(0x20);
        this.channels = new Array(CHANNEL_COUNT);
        this.frameInterrupt = 0; // 0=not occurred, 0x40=occurred
        this.dmcInterrupt = 0x80; // 0=not occurred, 0x80=occurred
        this.gamePad = new GamePad();
        this.channels[CH_PULSE1] = new PulseChannel();
        this.channels[CH_PULSE2] = new PulseChannel();
        this.channels[CH_TRIANGLE] = new TriangleChannel();
        this.channels[CH_NOISE] = new NoiseChannel();
        this.channels[CH_DMC] = new DmcChannel(triggerIrq);
    }
    getChannelTypes() {
        return kChannelTypes;
    }
    reset() {
        this.regs.fill(0);
        this.regs[FRAME_COUNTER] = IRQ_INHIBIT;
        this.frameInterrupt = 0;
        this.dmcInterrupt = 0x80; // TODO: Implement
        this.channels.forEach(channel => { channel.reset(); });
    }
    save() {
        return {
            regs: _util_util__WEBPACK_IMPORTED_MODULE_0__["default"].convertUint8ArrayToBase64String(this.regs),
        };
    }
    load(saveData) {
        this.regs = _util_util__WEBPACK_IMPORTED_MODULE_0__["default"].convertBase64StringToUint8Array(saveData.regs);
    }
    read(adr) {
        const reg = adr - BASE;
        switch (reg) {
            case STATUS_REG:
                {
                    // TODO: Implement.
                    let result = this.dmcInterrupt | this.frameInterrupt;
                    for (let ch = 0; ch < CHANNEL_COUNT; ++ch) {
                        if (this.channels[ch].isPlaying())
                            result |= 1 << ch;
                    }
                    // Reading this register clears the frame interrupt flag (but not the DMC interrupt flag).
                    this.frameInterrupt = 0;
                    return result;
                }
            case PAD1_REG:
            case PAD2_REG:
                return this.gamePad.shift(reg - PAD1_REG);
            default:
                return 0;
        }
    }
    write(adr, value) {
        const reg = adr - BASE;
        if (reg >= 0x20)
            return;
        this.regs[reg] = value;
        if (reg < 0x14) { // Sound
            const ch = reg >> 2;
            const r = reg & 3;
            this.channels[ch].write(r, value);
        }
        switch (reg) {
            case STATUS_REG:
                this.dmcInterrupt = 0; // Writing to this register clears the DMC interrupt flag.
                for (let ch = 0; ch < CHANNEL_COUNT; ++ch)
                    this.channels[ch].setEnable((value & (1 << ch)) !== 0);
                break;
            case PAD1_REG: // Pad status. bit0 = Controller shift register strobe
                if ((value & 1) === 0) {
                    this.gamePad.latch();
                }
                break;
            default:
                break;
        }
    }
    getVolume(ch) {
        if ((this.regs[STATUS_REG] & (1 << ch)) === 0)
            return 0;
        return this.channels[ch].getVolume();
    }
    getFrequency(ch) {
        return this.channels[ch].getFrequency();
    }
    getDutyRatio(ch) {
        return this.channels[ch].getDutyRatio();
    }
    setPadStatus(no, status) {
        this.gamePad.setStatus(no, status);
    }
    onHblank(hcount) {
        this.channels[CH_DMC].onHblank(hcount);
        switch (hcount) {
            case VBLANK_START:
                this.channels.forEach(channel => { channel.update(); });
                if (this.isIrqEnabled()) {
                    this.frameInterrupt = 0x40;
                    this.triggerIrq();
                }
                break;
            default:
                break;
        }
    }
    isIrqEnabled() {
        // http://wiki.nesdev.com/w/index.php/IRQ
        // Enable: $4017 write with bits 7-6 = 00
        return (this.regs[FRAME_COUNTER] & (IRQ_INHIBIT | SEQUENCER_MODE)) === 0;
    }
}


/***/ }),

/***/ "./src/nes/bus.ts":
/*!************************!*\
  !*** ./src/nes/bus.ts ***!
  \************************/
/*! exports provided: Bus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bus", function() { return Bus; });
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/util */ "./src/util/util.ts");

const BLOCK_SIZE = 0x2000;
class Bus {
    constructor() {
        this.readerFuncTable = new Array(0x10000 / BLOCK_SIZE);
        this.writerFuncTable = new Array(0x10000 / BLOCK_SIZE);
        this.readErrorReported = false;
        this.writeErrorReported = false;
        this.clearMemoryMap();
    }
    clearMemoryMap() {
        this.readerFuncTable.fill(_adr => 0xff);
        this.writerFuncTable.fill((_adr, _value) => { });
    }
    setReadMemory(start, end, func) {
        const startBlock = (start / BLOCK_SIZE) | 0;
        const endBlock = (end / BLOCK_SIZE) | 0;
        for (let i = startBlock; i <= endBlock; ++i)
            this.readerFuncTable[i] = func;
    }
    setWriteMemory(start, end, func) {
        const startBlock = (start / BLOCK_SIZE) | 0;
        const endBlock = (end / BLOCK_SIZE) | 0;
        for (let i = startBlock; i <= endBlock; ++i)
            this.writerFuncTable[i] = func;
    }
    read8(adr) {
        const block = (adr / BLOCK_SIZE) | 0;
        const reader = this.readerFuncTable[block];
        if (!reader) {
            if (!this.readErrorReported) {
                console.error(`Illegal read at ${_util_util__WEBPACK_IMPORTED_MODULE_0__["default"].hex(adr, 4)}`);
                this.readErrorReported = true;
            }
            return 0xbf; // Returns dummy value (undefined opcode, non plausible value).
        }
        return reader(adr);
    }
    write8(adr, value) {
        const block = (adr / BLOCK_SIZE) | 0;
        const writer = this.writerFuncTable[block];
        if (!writer) {
            if (!this.writeErrorReported) {
                const sadr = _util_util__WEBPACK_IMPORTED_MODULE_0__["default"].hex(adr, 4), sv = _util_util__WEBPACK_IMPORTED_MODULE_0__["default"].hex(value, 2);
                console.error(`Illegal write at ${sadr}, ${sv}`);
                this.writeErrorReported = true;
            }
            return;
        }
        return writer(adr, value);
    }
    dump(start, count) {
        const mem = new Array();
        for (let i = 0; i < count; ++i) {
            mem.push(this.read8(i + start));
        }
        for (let i = 0; i < count; i += 16) {
            const line = mem.splice(0, 16).map(x => _util_util__WEBPACK_IMPORTED_MODULE_0__["default"].hex(x, 2)).join(' ');
            console.log(`${_util_util__WEBPACK_IMPORTED_MODULE_0__["default"].hex(start + i, 4)}: ${line}`);
        }
    }
}


/***/ }),

/***/ "./src/nes/const.ts":
/*!**************************!*\
  !*** ./src/nes/const.ts ***!
  \**************************/
/*! exports provided: Const */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Const", function() { return Const; });
var Const;
(function (Const) {
    Const.WIDTH = 256;
    Const.HEIGHT = 240;
})(Const || (Const = {}));


/***/ }),

/***/ "./src/nes/cpu/cpu.ts":
/*!****************************!*\
  !*** ./src/nes/cpu/cpu.ts ***!
  \****************************/
/*! exports provided: Cpu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cpu", function() { return Cpu; });
/* harmony import */ var _inst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inst */ "./src/nes/cpu/inst.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/util */ "./src/util/util.ts");
/* harmony import */ var _disasm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disasm */ "./src/nes/cpu/disasm.ts");
// CPU: MOS 6502



const CARRY_BIT = 0;
const ZERO_BIT = 1;
const IRQBLK_BIT = 2;
const DECIMAL_BIT = 3;
const BREAK_BIT = 4;
const RESERVED_BIT = 5;
const OVERFLOW_BIT = 6;
const NEGATIVE_BIT = 7;
const BREAK_FLAG = 1 << BREAK_BIT;
const RESERVED_FLAG = 1 << RESERVED_BIT;
const VEC_NMI = 0xfffa;
const VEC_RESET = 0xfffc;
const VEC_IRQ = 0xfffe;
const MAX_STEP_LOG = 200;
function inc8(value) {
    return (value + 1) & 0xff;
}
function dec8(value) {
    return (value - 1) & 0xff;
}
function toSigned(value) {
    return value < 0x80 ? value : value - 0x0100;
}
class Cpu {
    constructor(bus) {
        this.bus = bus;
        // Status register [NVRBDIZC], 0|1 as a boolean
        this.negative = 0;
        this.overflow = 0;
        this.breakmode = 0;
        this.decimal = 0;
        this.irqBlocked = 0;
        this.reservedFlag = 0;
        this.zero = 0;
        this.carry = 0;
        this.breakPoints = {};
        this.watchRead = {};
        this.watchWrite = {};
        this.paused = false;
        this.irqDetected = false;
        this.stepLogs = [];
        this.$DEBUG = typeof window !== 'undefined' && !!window.$DEBUG; // Accessing global variable!!!
        this.a = this.x = this.y = this.s = 0;
        this.pc = 0;
    }
    reset() {
        this.s = (this.s - 3) & 0xff;
        this.pc = this.read16(VEC_RESET);
        this.negative = this.overflow = this.decimal = this.zero = this.carry = 0;
        this.irqBlocked = this.breakmode = 1;
        this.stepLogs.length = 0;
    }
    getRegs() {
        return {
            a: this.a,
            x: this.x,
            y: this.y,
            s: this.s,
            p: this.getStatusReg(),
            pc: this.pc,
        };
    }
    save() {
        return this.getRegs();
    }
    load(saveData) {
        this.a = saveData.a;
        this.x = saveData.x;
        this.y = saveData.y;
        this.s = saveData.s;
        this.pc = saveData.pc;
        this.setStatusReg(saveData.p);
    }
    deleteAllBreakPoints() {
        this.breakPoints = {};
        this.watchRead = {};
        this.watchWrite = {};
    }
    pause(value) {
        this.paused = value;
    }
    isPaused() {
        return this.paused;
    }
    // Non-maskable interrupt
    nmi() {
        const vector = this.read16(VEC_NMI);
        if (this.breakPoints.nmi) {
            this.paused = true;
            console.warn(`paused because NMI: ${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(this.pc, 4)}, ${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(vector, 4)}`);
        }
        if (this.$DEBUG) {
            this.addStepLog(`NMI occurred at pc=${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(this.pc, 4)}`);
        }
        this.push16(this.pc);
        this.push(this.getStatusReg() & ~BREAK_FLAG);
        this.pc = vector;
        this.irqBlocked = 1;
    }
    requestIrq() {
        this.irqDetected = true;
    }
    step() {
        if (this.irqDetected && this.irqBlocked === 0) {
            this.irqDetected = false;
            this.handleIrq();
        }
        let pc = this.pc;
        if (this.$DEBUG) {
            this.addStepLog(Object(_disasm__WEBPACK_IMPORTED_MODULE_2__["disasm"])(this.bus, pc));
        }
        const op = this.read8(pc++);
        const inst = _inst__WEBPACK_IMPORTED_MODULE_0__["kInstTable"][op];
        if (inst == null) {
            console.error(`Unhandled OPCODE, ${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(this.pc - 1, 4)}: ${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(op, 2)}`);
            this.paused = true;
            return 0;
        }
        this.pc += inst.bytes;
        const adr = this.getAdr(pc, inst.addressing);
        let cycle = inst.cycle;
        // ========================================================
        // Dispatch
        switch (inst.opType) {
            default:
            case 0 /* UNKNOWN */:
                break;
            case 1 /* NOP */:
                break;
            case 2 /* LDA */:
                this.a = this.read8(adr);
                this.setNZFlag(this.a);
                break;
            case 3 /* STA */:
                this.write8(adr, this.a);
                break;
            case 4 /* LDX */:
                this.x = this.read8(adr);
                this.setNZFlag(this.x);
                break;
            case 5 /* STX */:
                this.write8(adr, this.x);
                break;
            case 6 /* LDY */:
                this.y = this.read8(adr);
                this.setNZFlag(this.y);
                break;
            case 7 /* STY */:
                this.write8(adr, this.y);
                break;
            case 8 /* TAX */:
                this.x = this.a;
                this.setNZFlag(this.x);
                break;
            case 9 /* TAY */:
                this.y = this.a;
                this.setNZFlag(this.y);
                break;
            case 10 /* TXA */:
                this.a = this.x;
                this.setNZFlag(this.a);
                break;
            case 11 /* TYA */:
                this.a = this.y;
                this.setNZFlag(this.a);
                break;
            case 12 /* TXS */:
                this.s = this.x;
                break;
            case 13 /* TSX */:
                this.x = this.s;
                this.setNZFlag(this.x);
                break;
            case 14 /* ADC */:
                {
                    const carry = this.carry;
                    const operand = this.read8(adr);
                    const result = this.a + operand + carry;
                    const overflow = ((this.a ^ result) & (operand ^ result) & 0x80) !== 0;
                    this.a = result & 0xff;
                    this.setNZCFlag(this.a, result >= 0x0100);
                    this.setOverFlow(overflow);
                }
                break;
            case 15 /* SBC */:
                // The 6502 overflow flag explained mathematically
                // http://www.righto.com/2012/12/the-6502-overflow-flag-explained.html
                {
                    const carry = this.carry;
                    const operand = 255 - this.read8(adr);
                    const result = this.a + operand + carry;
                    const overflow = ((this.a ^ result) & (operand ^ result) & 0x80) !== 0;
                    this.a = result & 0xff;
                    this.setNZCFlag(this.a, result >= 0x0100);
                    this.setOverFlow(overflow);
                }
                break;
            case 16 /* INX */:
                this.x = inc8(this.x);
                this.setNZFlag(this.x);
                break;
            case 17 /* INY */:
                this.y = inc8(this.y);
                this.setNZFlag(this.y);
                break;
            case 18 /* INC */:
                {
                    const value = inc8(this.read8(adr));
                    this.write8(adr, value);
                    this.setNZFlag(value);
                }
                break;
            case 19 /* DEX */:
                this.x = dec8(this.x);
                this.setNZFlag(this.x);
                break;
            case 20 /* DEY */:
                this.y = dec8(this.y);
                this.setNZFlag(this.y);
                break;
            case 21 /* DEC */:
                {
                    const value = dec8(this.read8(adr));
                    this.write8(adr, value);
                    this.setNZFlag(value);
                }
                break;
            case 22 /* AND */:
                {
                    const value = this.read8(adr);
                    this.a &= value;
                    this.setNZFlag(this.a);
                }
                break;
            case 23 /* ORA */:
                {
                    const value = this.read8(adr);
                    this.a |= value;
                    this.setNZFlag(this.a);
                }
                break;
            case 24 /* EOR */:
                {
                    const value = this.read8(adr);
                    this.a ^= value;
                    this.setNZFlag(this.a);
                }
                break;
            case 25 /* ROL */:
                {
                    const isAcc = inst.addressing === 2 /* ACCUMULATOR */;
                    const value = isAcc ? this.a : this.read8(adr);
                    const oldCarry = this.carry;
                    const newCarry = value >= 0x80;
                    const newValue = ((value << 1) | oldCarry) & 0xff;
                    if (isAcc)
                        this.a = newValue;
                    else
                        this.write8(adr, newValue);
                    this.setNZCFlag(newValue, newCarry);
                }
                break;
            case 26 /* ROR */:
                {
                    const isAcc = inst.addressing === 2 /* ACCUMULATOR */;
                    const value = isAcc ? this.a : this.read8(adr);
                    const oldCarry = this.carry;
                    const newCarry = (value & 0x01) !== 0;
                    const newValue = (value >> 1) | (oldCarry << 7);
                    if (isAcc)
                        this.a = newValue;
                    else
                        this.write8(adr, newValue);
                    this.setNZCFlag(newValue, newCarry);
                }
                break;
            case 27 /* ASL */:
                {
                    const isAcc = inst.addressing === 2 /* ACCUMULATOR */;
                    const value = isAcc ? this.a : this.read8(adr);
                    const newCarry = value >= 0x80;
                    const newValue = (value << 1) & 0xff;
                    if (isAcc)
                        this.a = newValue;
                    else
                        this.write8(adr, newValue);
                    this.setNZCFlag(newValue, newCarry);
                }
                break;
            case 28 /* LSR */:
                {
                    const isAcc = inst.addressing === 2 /* ACCUMULATOR */;
                    const value = isAcc ? this.a : this.read8(adr);
                    const newCarry = (value & 0x01) !== 0;
                    const newValue = (value >> 1) & 0xff;
                    if (isAcc)
                        this.a = newValue;
                    else
                        this.write8(adr, newValue);
                    this.setNZCFlag(newValue, newCarry);
                }
                break;
            case 29 /* BIT */:
                {
                    const value = this.read8(adr);
                    const result = this.a & value;
                    this.zero = result === 0 ? 1 : 0;
                    this.negative = (value >> NEGATIVE_BIT) & 1;
                    this.overflow = (value >> OVERFLOW_BIT) & 1;
                }
                break;
            case 30 /* CMP */:
                {
                    const value = this.read8(adr);
                    const result = this.a - value;
                    this.setNZCFlag(result & 255, result >= 0);
                }
                break;
            case 31 /* CPX */:
                {
                    const value = this.read8(adr);
                    const result = this.x - value;
                    this.setNZCFlag(result & 255, result >= 0);
                }
                break;
            case 32 /* CPY */:
                {
                    const value = this.read8(adr);
                    const result = this.y - value;
                    this.setNZCFlag(result & 255, result >= 0);
                }
                break;
            case 33 /* JMP */:
                this.pc = adr;
                break;
            case 34 /* JSR */:
                this.push16(this.pc - 1);
                this.pc = adr;
                break;
            case 35 /* RTS */:
                this.pc = this.pop16() + 1;
                break;
            case 36 /* RTI */:
                this.setStatusReg(this.pop() | RESERVED_FLAG);
                this.pc = this.pop16();
                break;
            case 37 /* BCC */:
                cycle += this.branch(adr, this.carry === 0);
                break;
            case 38 /* BCS */:
                cycle += this.branch(adr, this.carry !== 0);
                break;
            case 39 /* BPL */:
                cycle += this.branch(adr, this.negative === 0);
                break;
            case 40 /* BMI */:
                cycle += this.branch(adr, this.negative !== 0);
                break;
            case 41 /* BNE */:
                cycle += this.branch(adr, this.zero === 0);
                break;
            case 42 /* BEQ */:
                cycle += this.branch(adr, this.zero !== 0);
                break;
            case 43 /* BVC */:
                cycle += this.branch(adr, this.overflow === 0);
                break;
            case 44 /* BVS */:
                cycle += this.branch(adr, this.overflow !== 0);
                break;
            case 45 /* PHA */:
                this.push(this.a);
                break;
            case 46 /* PHP */:
                this.push(this.getStatusReg() | BREAK_FLAG);
                break;
            case 47 /* PLA */:
                this.a = this.pop();
                this.setNZFlag(this.a);
                break;
            case 48 /* PLP */:
                this.setStatusReg(this.pop() | RESERVED_FLAG);
                break;
            case 49 /* CLC */:
                this.carry = 0;
                break;
            case 50 /* SEC */:
                this.carry = 1;
                break;
            case 51 /* SEI */:
                this.irqBlocked = 1;
                break;
            case 52 /* CLI */:
                this.irqBlocked = 0;
                break;
            case 53 /* CLV */:
                this.overflow = 0;
                break;
            case 54 /* SED */:
                // SED: normal to BCD mode
                // not implemented on NES
                this.decimal = 1;
                break;
            case 55 /* CLD */:
                // CLD: BCD to normal mode
                // not implemented on NES
                this.decimal = 0;
                break;
            case 56 /* BRK */:
                this.push16(this.pc + 1);
                this.push(this.getStatusReg() | BREAK_FLAG);
                this.pc = this.read16(VEC_IRQ);
                this.irqBlocked = 1;
                break;
        }
        // ========================================================
        if (this.breakPoints[this.pc]) {
            this.paused = true;
            console.warn(`paused because PC matched break point: ${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(this.pc, 4)}`);
        }
        return cycle;
    }
    getStatusReg() {
        return ((this.negative << NEGATIVE_BIT) |
            (this.overflow << OVERFLOW_BIT) |
            (this.reservedFlag << RESERVED_BIT) |
            (this.breakmode << BREAK_BIT) |
            (this.decimal << DECIMAL_BIT) |
            (this.irqBlocked << IRQBLK_BIT) |
            (this.zero << ZERO_BIT) |
            (this.carry << CARRY_BIT));
    }
    setStatusReg(p) {
        this.negative = (p >> NEGATIVE_BIT) & 1;
        this.overflow = (p >> OVERFLOW_BIT) & 1;
        this.reservedFlag = (p >> RESERVED_BIT) & 1;
        this.breakmode = (p >> BREAK_BIT) & 1;
        this.decimal = (p >> DECIMAL_BIT) & 1;
        this.irqBlocked = (p >> IRQBLK_BIT) & 1;
        this.zero = (p >> ZERO_BIT) & 1;
        this.carry = (p >> CARRY_BIT) & 1;
    }
    read8(adr) {
        const value = this.bus.read8(adr);
        if (this.watchRead[adr]) {
            this.paused = true;
            console.warn(`Break because watched point read: adr=${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(adr, 4)}, value=${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(value, 2)}`);
        }
        return value;
    }
    read16(adr) {
        const lo = this.read8(adr);
        const hi = this.read8(adr + 1);
        return (hi << 8) | lo;
    }
    read16Indirect(adr) {
        const lo = this.read8(adr);
        const hi = this.read8((adr & 0xff00) + ((adr + 1) & 0xff));
        return (hi << 8) | lo;
    }
    write8(adr, value) {
        this.bus.write8(adr, value);
        if (this.watchWrite[adr]) {
            this.paused = true;
            console.warn(`Break because watched point write: adr=${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(adr, 4)}, value=${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(value, 2)}`);
        }
    }
    push(value) {
        this.write8(0x0100 + this.s, value);
        this.s = dec8(this.s);
    }
    push16(value) {
        let s = this.s;
        this.write8(0x0100 + s, value >> 8);
        s = dec8(s);
        this.write8(0x0100 + s, value & 0xff);
        this.s = dec8(s);
    }
    pop() {
        this.s = inc8(this.s);
        return this.read8(0x0100 + this.s);
    }
    pop16() {
        let s = this.s;
        s = inc8(s);
        const l = this.read8(0x0100 + s);
        s = inc8(s);
        const h = this.read8(0x0100 + s);
        this.s = s;
        return (h << 8) | l;
    }
    // Set N and Z flag for the given value.
    setNZFlag(nz) {
        this.zero = nz === 0 ? 1 : 0;
        this.negative = nz >= 0x80 ? 1 : 0;
    }
    // Set N, Z and C flag for the given value.
    setNZCFlag(nz, carry) {
        this.zero = nz === 0 ? 1 : 0;
        this.negative = nz >= 0x80 ? 1 : 0;
        this.carry = carry ? 1 : 0;
    }
    setOverFlow(value) {
        this.overflow = value ? 1 : 0;
    }
    addStepLog(line) {
        if (this.stepLogs.length < MAX_STEP_LOG) {
            this.stepLogs.push(line);
        }
        else {
            for (let i = 1; i < MAX_STEP_LOG; ++i)
                this.stepLogs[i - 1] = this.stepLogs[i];
            this.stepLogs[MAX_STEP_LOG - 1] = line;
        }
    }
    getAdr(pc, addressing) {
        switch (addressing) {
            case 2 /* ACCUMULATOR */:
            case 1 /* IMPLIED */:
                return 0; // Dummy.
            case 3 /* IMMEDIATE */:
            case 14 /* RELATIVE */:
                return pc;
            case 5 /* ZEROPAGE */:
                return this.read8(pc);
            case 6 /* ZEROPAGE_X */:
                return (this.read8(pc) + this.x) & 0xff;
            case 7 /* ZEROPAGE_Y */:
                return (this.read8(pc) + this.y) & 0xff;
            case 8 /* ABSOLUTE */:
                return this.read16(pc);
            case 9 /* ABSOLUTE_X */:
                return (this.read16(pc) + this.x) & 0xffff;
            case 10 /* ABSOLUTE_Y */:
                return (this.read16(pc) + this.y) & 0xffff;
            case 12 /* INDIRECT_X */:
                {
                    const zeroPageAdr = this.read8(pc);
                    return this.read16Indirect((zeroPageAdr + this.x) & 0xff);
                }
            case 13 /* INDIRECT_Y */:
                {
                    const zeroPageAdr = this.read8(pc);
                    const base = this.read16Indirect(zeroPageAdr);
                    return (base + this.y) & 0xffff;
                }
            case 11 /* INDIRECT */:
                {
                    const adr = this.read16(pc);
                    return this.read16Indirect(adr);
                }
            default:
                console.error(`Illegal addressing: ${addressing}`);
                this.paused = true;
                return 0;
        }
    }
    branch(adr, cond) {
        if (!cond)
            return 0;
        const pc = this.pc;
        const newPc = (pc + toSigned(this.read8(adr))) & 0xffff;
        this.pc = newPc;
        return ((pc ^ newPc) & 0x0100) > 0 ? 2 : 1;
    }
    handleIrq() {
        if (this.$DEBUG) {
            this.addStepLog(`IRQ occurred at pc=${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(this.pc, 4)}`);
        }
        this.push16(this.pc);
        this.push(this.getStatusReg() & ~BREAK_FLAG);
        this.pc = this.read16(VEC_IRQ);
        this.irqBlocked = 1;
        return true;
    }
}


/***/ }),

/***/ "./src/nes/cpu/disasm.ts":
/*!*******************************!*\
  !*** ./src/nes/cpu/disasm.ts ***!
  \*******************************/
/*! exports provided: kOpcode, disassemble, disasm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kOpcode", function() { return kOpcode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disassemble", function() { return disassemble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disasm", function() { return disasm; });
/* harmony import */ var _inst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inst */ "./src/nes/cpu/inst.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/util */ "./src/util/util.ts");


const kOpcode = {
    [2 /* LDA */]: 'LDA',
    [3 /* STA */]: 'STA',
    [4 /* LDX */]: 'LDX',
    [5 /* STX */]: 'STX',
    [6 /* LDY */]: 'LDY',
    [7 /* STY */]: 'STY',
    [8 /* TAX */]: 'TAX',
    [9 /* TAY */]: 'TAY',
    [10 /* TXA */]: 'TXA',
    [11 /* TYA */]: 'TYA',
    [12 /* TXS */]: 'TXS',
    [13 /* TSX */]: 'TSX',
    [14 /* ADC */]: 'ADC',
    [15 /* SBC */]: 'SBC',
    [16 /* INX */]: 'INX',
    [17 /* INY */]: 'INY',
    [18 /* INC */]: 'INC',
    [19 /* DEX */]: 'DEX',
    [20 /* DEY */]: 'DEY',
    [21 /* DEC */]: 'DEC',
    [22 /* AND */]: 'AND',
    [23 /* ORA */]: 'ORA',
    [24 /* EOR */]: 'EOR',
    [25 /* ROL */]: 'ROL',
    [26 /* ROR */]: 'ROR',
    [27 /* ASL */]: 'ASL',
    [28 /* LSR */]: 'LSR',
    [29 /* BIT */]: 'BIT',
    [30 /* CMP */]: 'CMP',
    [31 /* CPX */]: 'CPX',
    [32 /* CPY */]: 'CPY',
    [33 /* JMP */]: 'JMP',
    [34 /* JSR */]: 'JSR',
    [35 /* RTS */]: 'RTS',
    [36 /* RTI */]: 'RTI',
    [37 /* BCC */]: 'BCC',
    [38 /* BCS */]: 'BCS',
    [39 /* BPL */]: 'BPL',
    [40 /* BMI */]: 'BMI',
    [41 /* BNE */]: 'BNE',
    [42 /* BEQ */]: 'BEQ',
    [43 /* BVC */]: 'BVC',
    [44 /* BVS */]: 'BVS',
    [45 /* PHA */]: 'PHA',
    [46 /* PHP */]: 'PHP',
    [47 /* PLA */]: 'PLA',
    [48 /* PLP */]: 'PLP',
    [49 /* CLC */]: 'CLC',
    [50 /* SEC */]: 'SEC',
    [51 /* SEI */]: 'SEI',
    [52 /* CLI */]: 'CLI',
    [53 /* CLV */]: 'CLV',
    [54 /* SED */]: 'SED',
    [55 /* CLD */]: 'CLD',
    [56 /* BRK */]: 'BRK',
    [1 /* NOP */]: 'NOP',
};
function disassemble(inst, mem, start, pc) {
    let operand = '';
    switch (inst.addressing) {
        case 1 /* IMPLIED */:
        case 2 /* ACCUMULATOR */:
            break;
        case 3 /* IMMEDIATE */:
            operand = ` #$${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(mem[start], 2)}`;
            break;
        case 4 /* IMMEDIATE16 */:
            operand = ` #$${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(mem[start] | (mem[start + 1] << 8), 4)}`;
            break;
        case 5 /* ZEROPAGE */:
            operand = ` $${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(mem[start], 2)}`;
            break;
        case 6 /* ZEROPAGE_X */:
            operand = ` $${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(mem[start], 2)}, X`;
            break;
        case 7 /* ZEROPAGE_Y */:
            operand = ` $${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(mem[start], 2)}, Y`;
            break;
        case 8 /* ABSOLUTE */:
            operand = ` $${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(mem[start] | (mem[start + 1] << 8), 4)}`;
            break;
        case 9 /* ABSOLUTE_X */:
            operand = ` $${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(mem[start] | (mem[start + 1] << 8), 4)}, X`;
            break;
        case 10 /* ABSOLUTE_Y */:
            operand = ` $${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(mem[start] | (mem[start + 1] << 8), 4)}, Y`;
            break;
        case 11 /* INDIRECT */:
            operand = ` (\$${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(mem[start] | (mem[start + 1] << 8), 4)})`;
            break;
        case 12 /* INDIRECT_X */:
            operand = ` (\$${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(mem[start], 2)}, X)`;
            break;
        case 13 /* INDIRECT_Y */:
            operand = ` (\$${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(mem[start], 2)}), Y`;
            break;
        case 14 /* RELATIVE */:
            {
                const offset = mem[start];
                if (offset < 0x80)
                    operand = ` +${offset}  ; $${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(pc + inst.bytes + offset, 4)}`;
                else
                    operand = ` ${offset - 256}  ; \$${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(pc + inst.bytes + offset - 256, 4)}`;
            }
            break;
        default:
            console.error(`Unhandled addressing: ${inst.addressing}`);
            break;
    }
    return `${kOpcode[inst.opType]}${operand}`;
}
const tmpmem = new Uint8Array(3);
const bins = new Array(3);
function disasm(bus, pc) {
    const op = bus.read8(pc);
    const inst = _inst__WEBPACK_IMPORTED_MODULE_0__["kInstTable"][op] || _inst__WEBPACK_IMPORTED_MODULE_0__["kIllegalInstruction"];
    for (let i = 0; i < inst.bytes; ++i) {
        const m = bus.read8(pc + i);
        tmpmem[i] = m;
        bins[i] = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(m, 2);
    }
    for (let i = inst.bytes; i < 3; ++i)
        bins[i] = '  ';
    const pcStr = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(pc, 4);
    const binStr = bins.join(' ');
    const asmStr = disassemble(inst, tmpmem, 1, pc);
    return `${pcStr}: ${binStr}   ${asmStr}`;
}


/***/ }),

/***/ "./src/nes/cpu/inst.ts":
/*!*****************************!*\
  !*** ./src/nes/cpu/inst.ts ***!
  \*****************************/
/*! exports provided: Addressing, OpType, kIllegalInstruction, kInstTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addressing", function() { return Addressing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpType", function() { return OpType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kIllegalInstruction", function() { return kIllegalInstruction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kInstTable", function() { return kInstTable; });
// Instruction definitions
var Addressing;
(function (Addressing) {
    Addressing[Addressing["UNKNOWN"] = 0] = "UNKNOWN";
    Addressing[Addressing["IMPLIED"] = 1] = "IMPLIED";
    Addressing[Addressing["ACCUMULATOR"] = 2] = "ACCUMULATOR";
    Addressing[Addressing["IMMEDIATE"] = 3] = "IMMEDIATE";
    Addressing[Addressing["IMMEDIATE16"] = 4] = "IMMEDIATE16";
    Addressing[Addressing["ZEROPAGE"] = 5] = "ZEROPAGE";
    Addressing[Addressing["ZEROPAGE_X"] = 6] = "ZEROPAGE_X";
    Addressing[Addressing["ZEROPAGE_Y"] = 7] = "ZEROPAGE_Y";
    Addressing[Addressing["ABSOLUTE"] = 8] = "ABSOLUTE";
    Addressing[Addressing["ABSOLUTE_X"] = 9] = "ABSOLUTE_X";
    Addressing[Addressing["ABSOLUTE_Y"] = 10] = "ABSOLUTE_Y";
    Addressing[Addressing["INDIRECT"] = 11] = "INDIRECT";
    Addressing[Addressing["INDIRECT_X"] = 12] = "INDIRECT_X";
    Addressing[Addressing["INDIRECT_Y"] = 13] = "INDIRECT_Y";
    Addressing[Addressing["RELATIVE"] = 14] = "RELATIVE";
})(Addressing || (Addressing = {}));
var OpType;
(function (OpType) {
    OpType[OpType["UNKNOWN"] = 0] = "UNKNOWN";
    OpType[OpType["NOP"] = 1] = "NOP";
    OpType[OpType["LDA"] = 2] = "LDA";
    OpType[OpType["STA"] = 3] = "STA";
    OpType[OpType["LDX"] = 4] = "LDX";
    OpType[OpType["STX"] = 5] = "STX";
    OpType[OpType["LDY"] = 6] = "LDY";
    OpType[OpType["STY"] = 7] = "STY";
    OpType[OpType["TAX"] = 8] = "TAX";
    OpType[OpType["TAY"] = 9] = "TAY";
    OpType[OpType["TXA"] = 10] = "TXA";
    OpType[OpType["TYA"] = 11] = "TYA";
    OpType[OpType["TXS"] = 12] = "TXS";
    OpType[OpType["TSX"] = 13] = "TSX";
    OpType[OpType["ADC"] = 14] = "ADC";
    OpType[OpType["SBC"] = 15] = "SBC";
    OpType[OpType["INX"] = 16] = "INX";
    OpType[OpType["INY"] = 17] = "INY";
    OpType[OpType["INC"] = 18] = "INC";
    OpType[OpType["DEX"] = 19] = "DEX";
    OpType[OpType["DEY"] = 20] = "DEY";
    OpType[OpType["DEC"] = 21] = "DEC";
    OpType[OpType["AND"] = 22] = "AND";
    OpType[OpType["ORA"] = 23] = "ORA";
    OpType[OpType["EOR"] = 24] = "EOR";
    OpType[OpType["ROL"] = 25] = "ROL";
    OpType[OpType["ROR"] = 26] = "ROR";
    OpType[OpType["ASL"] = 27] = "ASL";
    OpType[OpType["LSR"] = 28] = "LSR";
    OpType[OpType["BIT"] = 29] = "BIT";
    OpType[OpType["CMP"] = 30] = "CMP";
    OpType[OpType["CPX"] = 31] = "CPX";
    OpType[OpType["CPY"] = 32] = "CPY";
    OpType[OpType["JMP"] = 33] = "JMP";
    OpType[OpType["JSR"] = 34] = "JSR";
    OpType[OpType["RTS"] = 35] = "RTS";
    OpType[OpType["RTI"] = 36] = "RTI";
    OpType[OpType["BCC"] = 37] = "BCC";
    OpType[OpType["BCS"] = 38] = "BCS";
    OpType[OpType["BPL"] = 39] = "BPL";
    OpType[OpType["BMI"] = 40] = "BMI";
    OpType[OpType["BNE"] = 41] = "BNE";
    OpType[OpType["BEQ"] = 42] = "BEQ";
    OpType[OpType["BVC"] = 43] = "BVC";
    OpType[OpType["BVS"] = 44] = "BVS";
    OpType[OpType["PHA"] = 45] = "PHA";
    OpType[OpType["PHP"] = 46] = "PHP";
    OpType[OpType["PLA"] = 47] = "PLA";
    OpType[OpType["PLP"] = 48] = "PLP";
    OpType[OpType["CLC"] = 49] = "CLC";
    OpType[OpType["SEC"] = 50] = "SEC";
    OpType[OpType["SEI"] = 51] = "SEI";
    OpType[OpType["CLI"] = 52] = "CLI";
    OpType[OpType["CLV"] = 53] = "CLV";
    OpType[OpType["SED"] = 54] = "SED";
    OpType[OpType["CLD"] = 55] = "CLD";
    OpType[OpType["BRK"] = 56] = "BRK";
})(OpType || (OpType = {}));
const kTable = [
    [0xea, 1 /* NOP */, 1 /* IMPLIED */, 1, 2],
    // LDA
    [0xa9, 2 /* LDA */, 3 /* IMMEDIATE */, 2, 2],
    [0xa5, 2 /* LDA */, 5 /* ZEROPAGE */, 2, 3],
    [0xb5, 2 /* LDA */, 6 /* ZEROPAGE_X */, 2, 4],
    [0xad, 2 /* LDA */, 8 /* ABSOLUTE */, 3, 4],
    [0xbd, 2 /* LDA */, 9 /* ABSOLUTE_X */, 3, 4],
    [0xb9, 2 /* LDA */, 10 /* ABSOLUTE_Y */, 3, 4],
    [0xa1, 2 /* LDA */, 12 /* INDIRECT_X */, 2, 6],
    [0xb1, 2 /* LDA */, 13 /* INDIRECT_Y */, 2, 5],
    // STA
    [0x85, 3 /* STA */, 5 /* ZEROPAGE */, 2, 3],
    [0x95, 3 /* STA */, 6 /* ZEROPAGE_X */, 2, 4],
    [0x8d, 3 /* STA */, 8 /* ABSOLUTE */, 3, 4],
    [0x9d, 3 /* STA */, 9 /* ABSOLUTE_X */, 3, 5],
    [0x99, 3 /* STA */, 10 /* ABSOLUTE_Y */, 3, 5],
    [0x95, 3 /* STA */, 6 /* ZEROPAGE_X */, 2, 4],
    [0x81, 3 /* STA */, 12 /* INDIRECT_X */, 2, 6],
    [0x91, 3 /* STA */, 13 /* INDIRECT_Y */, 2, 6],
    // LDX
    [0xa2, 4 /* LDX */, 3 /* IMMEDIATE */, 2, 2],
    [0xa6, 4 /* LDX */, 5 /* ZEROPAGE */, 2, 3],
    [0xb6, 4 /* LDX */, 7 /* ZEROPAGE_Y */, 2, 4],
    [0xae, 4 /* LDX */, 8 /* ABSOLUTE */, 3, 4],
    [0xbe, 4 /* LDX */, 10 /* ABSOLUTE_Y */, 3, 4],
    // STX
    [0x86, 5 /* STX */, 5 /* ZEROPAGE */, 2, 3],
    [0x96, 5 /* STX */, 7 /* ZEROPAGE_Y */, 2, 4],
    [0x8e, 5 /* STX */, 8 /* ABSOLUTE */, 3, 4],
    // LDY
    [0xa0, 6 /* LDY */, 3 /* IMMEDIATE */, 2, 2],
    [0xa4, 6 /* LDY */, 5 /* ZEROPAGE */, 2, 3],
    [0xb4, 6 /* LDY */, 6 /* ZEROPAGE_X */, 2, 4],
    [0xac, 6 /* LDY */, 8 /* ABSOLUTE */, 3, 4],
    [0xbc, 6 /* LDY */, 9 /* ABSOLUTE_X */, 3, 4],
    // STY
    [0x84, 7 /* STY */, 5 /* ZEROPAGE */, 2, 3],
    [0x94, 7 /* STY */, 6 /* ZEROPAGE_X */, 2, 4],
    [0x8c, 7 /* STY */, 8 /* ABSOLUTE */, 3, 4],
    //// T??
    [0xaa, 8 /* TAX */, 1 /* IMPLIED */, 1, 2],
    [0xa8, 9 /* TAY */, 1 /* IMPLIED */, 1, 2],
    [0x8a, 10 /* TXA */, 1 /* IMPLIED */, 1, 2],
    [0x98, 11 /* TYA */, 1 /* IMPLIED */, 1, 2],
    [0x9a, 12 /* TXS */, 1 /* IMPLIED */, 1, 2],
    [0xba, 13 /* TSX */, 1 /* IMPLIED */, 1, 2],
    // ADC
    [0x69, 14 /* ADC */, 3 /* IMMEDIATE */, 2, 2],
    [0x65, 14 /* ADC */, 5 /* ZEROPAGE */, 2, 3],
    [0x75, 14 /* ADC */, 6 /* ZEROPAGE_X */, 2, 4],
    [0x6d, 14 /* ADC */, 8 /* ABSOLUTE */, 3, 4],
    [0x7d, 14 /* ADC */, 9 /* ABSOLUTE_X */, 3, 4],
    [0x79, 14 /* ADC */, 10 /* ABSOLUTE_Y */, 3, 4],
    [0x61, 14 /* ADC */, 12 /* INDIRECT_X */, 2, 6],
    [0x71, 14 /* ADC */, 13 /* INDIRECT_Y */, 2, 5],
    // SBC
    [0xe9, 15 /* SBC */, 3 /* IMMEDIATE */, 2, 2],
    [0xe5, 15 /* SBC */, 5 /* ZEROPAGE */, 2, 3],
    [0xf5, 15 /* SBC */, 6 /* ZEROPAGE_X */, 2, 4],
    [0xed, 15 /* SBC */, 8 /* ABSOLUTE */, 3, 4],
    [0xfd, 15 /* SBC */, 9 /* ABSOLUTE_X */, 3, 4],
    [0xf9, 15 /* SBC */, 10 /* ABSOLUTE_Y */, 3, 4],
    [0xe1, 15 /* SBC */, 12 /* INDIRECT_X */, 2, 6],
    [0xf1, 15 /* SBC */, 13 /* INDIRECT_Y */, 2, 5],
    // CMP
    [0xc9, 30 /* CMP */, 3 /* IMMEDIATE */, 2, 2],
    [0xc5, 30 /* CMP */, 5 /* ZEROPAGE */, 2, 3],
    [0xd5, 30 /* CMP */, 6 /* ZEROPAGE_X */, 2, 4],
    [0xcd, 30 /* CMP */, 8 /* ABSOLUTE */, 3, 4],
    [0xdd, 30 /* CMP */, 9 /* ABSOLUTE_X */, 3, 4],
    [0xd9, 30 /* CMP */, 10 /* ABSOLUTE_Y */, 3, 4],
    [0xc1, 30 /* CMP */, 12 /* INDIRECT_X */, 2, 6],
    [0xd1, 30 /* CMP */, 13 /* INDIRECT_Y */, 2, 5],
    // CPX
    [0xe0, 31 /* CPX */, 3 /* IMMEDIATE */, 2, 2],
    [0xe4, 31 /* CPX */, 5 /* ZEROPAGE */, 2, 3],
    [0xec, 31 /* CPX */, 8 /* ABSOLUTE */, 3, 4],
    // CPY
    [0xc0, 32 /* CPY */, 3 /* IMMEDIATE */, 2, 2],
    [0xc4, 32 /* CPY */, 5 /* ZEROPAGE */, 2, 3],
    [0xcc, 32 /* CPY */, 8 /* ABSOLUTE */, 3, 4],
    // INX
    [0xe8, 16 /* INX */, 1 /* IMPLIED */, 1, 2],
    // INY
    [0xc8, 17 /* INY */, 1 /* IMPLIED */, 1, 2],
    // INC
    [0xe6, 18 /* INC */, 5 /* ZEROPAGE */, 2, 5],
    [0xf6, 18 /* INC */, 6 /* ZEROPAGE_X */, 2, 6],
    [0xee, 18 /* INC */, 8 /* ABSOLUTE */, 3, 6],
    [0xfe, 18 /* INC */, 9 /* ABSOLUTE_X */, 3, 7],
    // DEX
    [0xca, 19 /* DEX */, 1 /* IMPLIED */, 1, 2],
    // DEY
    [0x88, 20 /* DEY */, 1 /* IMPLIED */, 1, 2],
    // DEC
    [0xc6, 21 /* DEC */, 5 /* ZEROPAGE */, 2, 5],
    [0xd6, 21 /* DEC */, 6 /* ZEROPAGE_X */, 2, 6],
    [0xce, 21 /* DEC */, 8 /* ABSOLUTE */, 3, 6],
    [0xde, 21 /* DEC */, 9 /* ABSOLUTE_X */, 3, 7],
    // AND
    [0x29, 22 /* AND */, 3 /* IMMEDIATE */, 2, 2],
    [0x25, 22 /* AND */, 5 /* ZEROPAGE */, 2, 3],
    [0x35, 22 /* AND */, 6 /* ZEROPAGE_X */, 2, 4],
    [0x2d, 22 /* AND */, 8 /* ABSOLUTE */, 3, 4],
    [0x3d, 22 /* AND */, 9 /* ABSOLUTE_X */, 3, 4],
    [0x39, 22 /* AND */, 10 /* ABSOLUTE_Y */, 3, 4],
    [0x21, 22 /* AND */, 12 /* INDIRECT_X */, 2, 6],
    [0x31, 22 /* AND */, 13 /* INDIRECT_Y */, 2, 5],
    // ORA
    [0x09, 23 /* ORA */, 3 /* IMMEDIATE */, 2, 2],
    [0x05, 23 /* ORA */, 5 /* ZEROPAGE */, 2, 3],
    [0x15, 23 /* ORA */, 6 /* ZEROPAGE_X */, 2, 4],
    [0x0d, 23 /* ORA */, 8 /* ABSOLUTE */, 3, 4],
    [0x1d, 23 /* ORA */, 9 /* ABSOLUTE_X */, 3, 4],
    [0x19, 23 /* ORA */, 10 /* ABSOLUTE_Y */, 3, 4],
    [0x01, 23 /* ORA */, 12 /* INDIRECT_X */, 2, 6],
    [0x11, 23 /* ORA */, 13 /* INDIRECT_Y */, 2, 5],
    // EOR
    [0x49, 24 /* EOR */, 3 /* IMMEDIATE */, 2, 2],
    [0x45, 24 /* EOR */, 5 /* ZEROPAGE */, 2, 3],
    [0x55, 24 /* EOR */, 6 /* ZEROPAGE_X */, 2, 4],
    [0x4d, 24 /* EOR */, 8 /* ABSOLUTE */, 3, 4],
    [0x5d, 24 /* EOR */, 9 /* ABSOLUTE_X */, 3, 4],
    [0x59, 24 /* EOR */, 10 /* ABSOLUTE_Y */, 3, 4],
    [0x41, 24 /* EOR */, 12 /* INDIRECT_X */, 2, 6],
    [0x51, 24 /* EOR */, 13 /* INDIRECT_Y */, 2, 5],
    // ROL
    [0x2a, 25 /* ROL */, 2 /* ACCUMULATOR */, 1, 2],
    [0x26, 25 /* ROL */, 5 /* ZEROPAGE */, 2, 5],
    [0x36, 25 /* ROL */, 6 /* ZEROPAGE_X */, 2, 6],
    [0x2e, 25 /* ROL */, 8 /* ABSOLUTE */, 3, 6],
    [0x3e, 25 /* ROL */, 9 /* ABSOLUTE_X */, 3, 7],
    // ROR
    [0x6a, 26 /* ROR */, 2 /* ACCUMULATOR */, 1, 2],
    [0x66, 26 /* ROR */, 5 /* ZEROPAGE */, 2, 5],
    [0x76, 26 /* ROR */, 6 /* ZEROPAGE_X */, 2, 6],
    [0x6e, 26 /* ROR */, 8 /* ABSOLUTE */, 3, 6],
    [0x7e, 26 /* ROR */, 9 /* ABSOLUTE_X */, 3, 7],
    // ASL
    [0x0a, 27 /* ASL */, 2 /* ACCUMULATOR */, 1, 2],
    [0x06, 27 /* ASL */, 5 /* ZEROPAGE */, 2, 5],
    [0x16, 27 /* ASL */, 6 /* ZEROPAGE_X */, 2, 6],
    [0x0e, 27 /* ASL */, 8 /* ABSOLUTE */, 3, 6],
    [0x1e, 27 /* ASL */, 9 /* ABSOLUTE_X */, 3, 7],
    // LSR
    [0x4a, 28 /* LSR */, 2 /* ACCUMULATOR */, 1, 2],
    [0x46, 28 /* LSR */, 5 /* ZEROPAGE */, 2, 5],
    [0x56, 28 /* LSR */, 6 /* ZEROPAGE_X */, 2, 6],
    [0x4e, 28 /* LSR */, 8 /* ABSOLUTE */, 3, 6],
    [0x5e, 28 /* LSR */, 9 /* ABSOLUTE_X */, 3, 7],
    // BIT
    [0x24, 29 /* BIT */, 5 /* ZEROPAGE */, 2, 3],
    [0x2c, 29 /* BIT */, 8 /* ABSOLUTE */, 3, 4],
    // JMP
    [0x4c, 33 /* JMP */, 8 /* ABSOLUTE */, 3, 3],
    [0x6c, 33 /* JMP */, 11 /* INDIRECT */, 3, 5],
    // JSR
    [0x20, 34 /* JSR */, 8 /* ABSOLUTE */, 3, 6],
    // RTS
    [0x60, 35 /* RTS */, 1 /* IMPLIED */, 1, 6],
    // RTI
    [0x40, 36 /* RTI */, 1 /* IMPLIED */, 1, 6],
    // Branch
    [0x90, 37 /* BCC */, 14 /* RELATIVE */, 2, 2],
    [0xb0, 38 /* BCS */, 14 /* RELATIVE */, 2, 2],
    [0x10, 39 /* BPL */, 14 /* RELATIVE */, 2, 2],
    [0x30, 40 /* BMI */, 14 /* RELATIVE */, 2, 2],
    [0xd0, 41 /* BNE */, 14 /* RELATIVE */, 2, 2],
    [0xf0, 42 /* BEQ */, 14 /* RELATIVE */, 2, 2],
    [0x50, 43 /* BVC */, 14 /* RELATIVE */, 2, 2],
    [0x70, 44 /* BVS */, 14 /* RELATIVE */, 2, 2],
    // Push, Pop
    [0x48, 45 /* PHA */, 1 /* IMPLIED */, 1, 3],
    [0x08, 46 /* PHP */, 1 /* IMPLIED */, 1, 3],
    [0x68, 47 /* PLA */, 1 /* IMPLIED */, 1, 4],
    [0x28, 48 /* PLP */, 1 /* IMPLIED */, 1, 4],
    [0x18, 49 /* CLC */, 1 /* IMPLIED */, 1, 2],
    [0x38, 50 /* SEC */, 1 /* IMPLIED */, 1, 2],
    [0x78, 51 /* SEI */, 1 /* IMPLIED */, 1, 2],
    [0x58, 52 /* CLI */, 1 /* IMPLIED */, 1, 2],
    [0xb8, 53 /* CLV */, 1 /* IMPLIED */, 1, 2],
    [0xf8, 54 /* SED */, 1 /* IMPLIED */, 1, 2],
    [0xd8, 55 /* CLD */, 1 /* IMPLIED */, 1, 2],
    [0x00, 56 /* BRK */, 1 /* IMPLIED */, 1, 7],
];
const kIllegalInstruction = {
    opType: 0 /* UNKNOWN */,
    addressing: 0 /* UNKNOWN */,
    bytes: 1,
    cycle: 0,
};
const kInstTable = (() => {
    const table = new Array(256);
    table.fill(kIllegalInstruction);
    kTable.forEach(inst => {
        const [code, opType, addressing, bytes, cycle] = inst;
        table[code] = { opType, addressing, bytes, cycle };
    });
    return table;
})();


/***/ }),

/***/ "./src/nes/fds/fds.ts":
/*!****************************!*\
  !*** ./src/nes/fds/fds.ts ***!
  \****************************/
/*! exports provided: Fds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fds", function() { return Fds; });
/* harmony import */ var _mapper020__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper020 */ "./src/nes/fds/mapper020.ts");

// Famicom Disk System
class Fds {
    constructor(biosData, nes) {
        this.nes = nes;
        const bus = this.nes.getBus();
        const cpu = this.nes.getCpu();
        const ppu = this.nes.getPpu();
        this.mapper = new _mapper020__WEBPACK_IMPORTED_MODULE_0__["Mapper020"](biosData, {
            bus,
            cpu,
            ppu,
            prgBankCtrl: this,
            prgSize: biosData.length,
        });
        this.mapper.setUp(nes);
        this.nes.setMapper(this.mapper);
    }
    setImage(image) {
        this.mapper.setImage(image);
        return true;
    }
    getSideCount() {
        return this.mapper.getSideCount();
    }
    eject() {
        this.mapper.eject();
    }
    setSide(side) {
        this.mapper.setSide(side);
    }
    setPrgBank(_bank, _page) {
        // Dummy
    }
}


/***/ }),

/***/ "./src/nes/fds/mapper020.ts":
/*!**********************************!*\
  !*** ./src/nes/fds/mapper020.ts ***!
  \**********************************/
/*! exports provided: Mapper020 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper020", function() { return Mapper020; });
/* harmony import */ var _mapper_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mapper/mapper */ "./src/nes/mapper/mapper.ts");
// For disk image
// https://wiki.nesdev.com/w/index.php/Family_Computer_Disk_System
// https://wiki.nesdev.com/w/index.php/FDS_BIOS

// $402x: write-only registers
const IRQ_RELOAD_L = 0;
const IRQ_RELOAD_H = 1;
const IRQ_CTRL = 2;
const MASTER_IO_ENABLE = 3;
const WRITE_DATA = 4;
const FDS_CTRL = 5;
const EXTERNAL_CONNECTOR_W = 6;
// $403x: read-only registers
const DISK_STATUS = 0;
const READ_DATA = 1;
const DRIVE_STATUS = 2;
const EXTERNAL_CONNECTOR_R = 3;
const IRQ_CTRL_REPEAT = 0 << 1;
const IRQ_CTRL_ENABLED = 1 << 1;
const MASTER_IO_ENABLE_DISK = 1 << 0;
//const MASTER_IO_ENABLE_SOUND = 1 << 1
const FDS_CTRL_MOTOR_ON = 1 << 0;
const FDS_CTRL_TRANSFER_RESET = 1 << 1;
const FDS_CTRL_READ = 1 << 2;
const FDS_CTRL_MIRROR_HORZ = 1 << 3;
// const FDS_CTRL_CRC_CTRL                    = 1 << 4
// const FDS_CTRL_READ_WRITE_START            = 1 << 6
const FDS_CTRL_ENABLE_IRQ_WHEN_DRIVE_READY = 1 << 7;
const DISK_STATUS_TIMER_INTERRUPT = 1 << 0;
const DISK_STATUS_BYTE_TRANSFER = 1 << 1;
const DISK_STATUS_READ_WRITE_ENABLE = 1 << 7;
const DRIVE_STATUS_DISK_NOT_INSERTED = 1 << 0;
const DRIVE_STATUS_DISK_NOT_READY = 1 << 1;
const DRIVE_STATUS_DISK_PROTECTED = 1 << 2;
//const EXTERNAL_CONNECTOR_R_BATTERY_GOOD = 1 << 7
// Insert CRC info...
function loadFdsImage(image) {
    const SIDE_LENGTH = 65500;
    const sides = image.length / SIDE_LENGTH;
    const blocks = [];
    const diskSideImages = new Array();
    for (let i = 0; i < sides; ++i) {
        const start = i * SIDE_LENGTH;
        blocks.length = 0;
        let imageLen = 0;
        for (let p = 0; p < SIDE_LENGTH;) {
            const type = image[p + start];
            let len = -1;
            switch (type) {
                case 0x01:
                    len = 56;
                    break;
                case 0x02:
                    len = 2;
                    break;
                case 0x03:
                    len = 16;
                    break;
                case 0x04:
                    len = 1 + ((image[p - 2 + start] << 8) | image[p - 3 + start]);
                    break;
                default: break;
            }
            if (len <= 0)
                break;
            blocks.push([p + start, len]);
            imageLen += len;
            p += len;
        }
        const totalLen = imageLen + blocks.length * 2 + 1;
        const sideImage = new Uint8Array(totalLen);
        let dst = 0;
        for (let [p, len] of blocks) {
            for (let j = 0; j < len; ++j)
                sideImage[dst + j] = image[p + j];
            dst += len;
            sideImage[dst + 0] = sideImage[dst + 1] = 0x00; // Dummy CRC
            dst += 2;
        }
        sideImage[dst - 1] = 0; // End of blocks
        diskSideImages.push(sideImage);
    }
    return diskSideImages;
}
class Mapper020 extends _mapper_mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(biosData, options) {
        super();
        this.biosData = biosData;
        this.options = options;
        this.ram = new Uint8Array(0xe000 - 0x6000);
        this.regs = new Uint8Array(16);
        this.diskSideImages = new Array();
        this.headPointer = 0;
        this.irqCounter = 0;
        this.timerIrqOccurred = false;
        this.transferComplete = false;
        this.endOfHead = true;
        this.scanningDisk = false;
        //private gapEnded = false
        this.delay = 0;
        this.readData = 0;
        this.options.ppu.setChrData(Uint8Array.from([]));
        this.options.ppu.setMirrorMode(0 /* HORZ */);
        // BIOS ROM
        this.options.bus.setReadMemory(0xe000, 0xffff, (adr) => {
            adr = adr | 0;
            return this.biosData[adr - 0xe000] | 0;
        });
        this.reset();
    }
    reset() {
        this.headPointer = 0;
        this.irqCounter = 0;
        this.regs.fill(0);
        this.timerIrqOccurred = false;
        this.transferComplete = false;
        this.readData = 0;
        this.endOfHead = true;
        this.scanningDisk = false;
        //this.gapEnded = false
        this.delay = 0;
    }
    setUp(nes) {
        this.nes = nes;
        this.options.bus.setReadMemory(0x4000, 0x5fff, (adr) => {
            if (0x4030 <= adr && adr <= 0x403f)
                return this.readDiskReg(adr);
            return this.nes.readFromApu(adr);
        });
        this.options.bus.setWriteMemory(0x4000, 0x5fff, (adr, value) => {
            if (0x4020 <= adr && adr <= 0x402f)
                return this.writeDiskReg(adr, value);
            this.nes.writeToApu(adr, value);
        });
        // PRG RAM
        this.ram.fill(0xbf);
        this.options.bus.setReadMemory(0x6000, 0xdfff, (adr) => this.ram[adr - 0x6000]);
        this.options.bus.setWriteMemory(0x6000, 0xdfff, (adr, value) => { this.ram[adr - 0x6000] = value; });
    }
    setImage(image) {
        if (image[0] === 0x46 && image[1] === 0x44 && image[2] === 0x53 && image[3] === 0x1a) {
            // Skip FDS header.
            image = image.slice(16);
        }
        this.diskSideImages = loadFdsImage(image);
        this.image = this.diskSideImages[0];
        return true;
    }
    getSideCount() {
        return this.diskSideImages.length;
    }
    onHblank(_hcount) {
        if ((this.regs[IRQ_CTRL] & IRQ_CTRL_ENABLED) !== 0 &&
            (this.regs[MASTER_IO_ENABLE] & MASTER_IO_ENABLE_DISK) !== 0) {
            this.irqCounter -= 185; // TODO: Calculate
            if (this.irqCounter <= 0) {
                this.options.cpu.requestIrq();
                this.timerIrqOccurred = true;
                console.log(`IRQ!, repeat=${(this.regs[IRQ_CTRL] & IRQ_CTRL_REPEAT) !== 0}, nextCounter=${(this.regs[IRQ_RELOAD_H] << 8) | this.regs[IRQ_RELOAD_L]}`);
                if ((this.regs[IRQ_CTRL] & IRQ_CTRL_REPEAT) !== 0) {
                    this.irqCounter = (this.regs[IRQ_RELOAD_H] << 8) | this.regs[IRQ_RELOAD_L];
                }
                else {
                    this.irqCounter = 0;
                    this.regs[IRQ_CTRL] &= ~IRQ_CTRL_ENABLED;
                }
            }
        }
        if (this.image == null || (this.regs[FDS_CTRL] & FDS_CTRL_MOTOR_ON) === 0) {
            this.endOfHead = true;
            this.scanningDisk = false;
            return;
        }
        if ((this.regs[FDS_CTRL] & FDS_CTRL_TRANSFER_RESET) !== 0 && !this.scanningDisk) {
            return;
        }
        if (this.endOfHead) {
            this.delay = 50000 / 10000; // ?
            this.endOfHead = false;
            this.headPointer = 0;
            //this.gapEnded = false
            return;
        }
        if (this.delay > 0) {
            --this.delay;
        }
        else {
            this.scanningDisk = true;
            let needIrq = (this.regs[FDS_CTRL] & FDS_CTRL_ENABLE_IRQ_WHEN_DRIVE_READY) !== 0;
            //console.log(`  read from disk: ${Util.hex(this.headPointer, 4)}: ${Util.hex(this.image[this.headPointer])}`)
            const diskData = this.image[this.headPointer];
            //if ((this.regs[FDS_CTRL] & FDS_CTRL_READ_WRITE_START) === 0) {
            //  this.gapEnded = false
            //} else if (diskData !== 0 && !this.gapEnded) {
            //  this.gapEnded = true
            //  needIrq = false
            //}
            //if (this.gapEnded) {
            this.transferComplete = true;
            this.readData = diskData;
            if (needIrq) {
                this.options.cpu.requestIrq();
            }
            //}
            //++this.headPointer
            //if (this.headPointer >= this.image.length) {
            //  this.regs[FDS_CTRL] &= ~FDS_CTRL_MOTOR_ON
            //} else {
            //  this.delay = 150 //150  // ?
            //}
        }
    }
    eject() {
        delete this.image;
        this.headPointer = 0;
    }
    setSide(side) {
        this.image = this.diskSideImages[side % this.diskSideImages.length];
        //this.reset()
    }
    readDiskReg(adr) {
        const reg = (adr - 0x4030) | 0;
        //console.log(`read: ${Util.hex(adr, 4)}`)
        switch (reg) {
            case DISK_STATUS:
                {
                    let val = 0;
                    if (this.image) {
                        val = DISK_STATUS_READ_WRITE_ENABLE;
                        if (this.timerIrqOccurred) {
                            val |= DISK_STATUS_TIMER_INTERRUPT;
                            this.timerIrqOccurred = false;
                        }
                        if (this.transferComplete) {
                            val |= DISK_STATUS_BYTE_TRANSFER;
                            this.transferComplete = false;
                        }
                    }
                    return val;
                }
            case READ_DATA:
                //console.log(`READ_DATA: ${Util.hex(this.readData, 2)}, pointer=${Util.hex(this.headPointer, 4)}, CRC=${(this.regs[FDS_CTRL] & FDS_CTRL_CRC_CTRL) !== 0}`)
                {
                    let result = 0;
                    if ((this.regs[FDS_CTRL] & FDS_CTRL_READ) !== 0) {
                        //if ((this.regs[FDS_CTRL] & FDS_CTRL_CRC_CTRL) === 0) {
                        result = this.readData;
                        ++this.headPointer;
                        if (this.headPointer >= this.image.length) {
                            this.regs[FDS_CTRL] &= ~FDS_CTRL_MOTOR_ON;
                        }
                        //} else {
                        //  console.log('CRC')
                        //}
                    }
                    else {
                        console.log('READ_DATA with write');
                    }
                    this.transferComplete = false;
                    return result;
                }
            case DRIVE_STATUS:
                {
                    let val = DRIVE_STATUS_DISK_NOT_INSERTED | DRIVE_STATUS_DISK_NOT_READY | DRIVE_STATUS_DISK_PROTECTED;
                    if (this.image != null) {
                        val = 0;
                        if (!this.scanningDisk)
                            val |= DRIVE_STATUS_DISK_NOT_READY;
                    }
                    return val;
                }
            case EXTERNAL_CONNECTOR_R:
                //return EXTERNAL_CONNECTOR_R_BATTERY_GOOD | (this.regs[EXTERNAL_CONNECTOR_W] & 0x7f)
                return this.regs[EXTERNAL_CONNECTOR_W];
            default:
                break;
        }
        return 0;
    }
    writeDiskReg(adr, value) {
        const reg = (adr - 0x4020) | 0;
        //console.log(`write: ${Util.hex(adr, 4)} = ${Util.hex(value)}`)
        this.regs[reg] = value;
        switch (reg) {
            case IRQ_CTRL:
                //if ((this.regs[MASTER_IO_ENABLE] & MASTER_IO_ENABLE_DISK) !== 0) {
                if ((value & IRQ_CTRL_ENABLED) !== 0) {
                    this.irqCounter = (this.regs[IRQ_RELOAD_H] << 8) | this.regs[IRQ_RELOAD_L];
                }
                else {
                    this.irqCounter = 0;
                    this.timerIrqOccurred = false;
                }
                //}
                break;
            case MASTER_IO_ENABLE:
                if ((value & MASTER_IO_ENABLE_DISK) === 0) {
                    this.irqCounter = 0;
                    this.timerIrqOccurred = false;
                }
                break;
            case WRITE_DATA:
                this.transferComplete = false;
                break;
            case FDS_CTRL:
                this.options.ppu.setMirrorMode((value & FDS_CTRL_MIRROR_HORZ) !== 0 ? 0 /* HORZ */ : 1 /* VERT */);
                if ((value & FDS_CTRL_MOTOR_ON) === 0) {
                    this.endOfHead = true;
                    this.scanningDisk = false;
                }
                break;
            default:
                break;
        }
    }
}


/***/ }),

/***/ "./src/nes/mapper/mapper.ts":
/*!**********************************!*\
  !*** ./src/nes/mapper/mapper.ts ***!
  \**********************************/
/*! exports provided: Mapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper", function() { return Mapper; });
class Mapper {
    reset() {
    }
    onHblank(_hcount) {
    }
    save() {
        return {};
    }
    load(_saveData) {
    }
    getExtraSoundChannelTypes() {
        return [];
    }
    getSoundVolume(_channel) {
        return 0;
    }
    getSoundFrequency(_channel) {
        return 0;
    }
    getSoundDutyRatio(_channel) {
        return 0.5;
    }
}


/***/ }),

/***/ "./src/nes/mapper/mapper000.ts":
/*!*************************************!*\
  !*** ./src/nes/mapper/mapper000.ts ***!
  \*************************************/
/*! exports provided: Mapper000 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper000", function() { return Mapper000; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./src/nes/mapper/mapper.ts");

class Mapper000 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    static create(_options) {
        return new Mapper000();
    }
}


/***/ }),

/***/ "./src/nes/mapper/mapper001.ts":
/*!*************************************!*\
  !*** ./src/nes/mapper/mapper001.ts ***!
  \*************************************/
/*! exports provided: Mapper001 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper001", function() { return Mapper001; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./src/nes/mapper/mapper.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/util */ "./src/util/util.ts");
// MMC1


const kMirrorTable = [
    2 /* SINGLE0 */,
    3 /* SINGLE1 */,
    1 /* VERT */,
    0 /* HORZ */,
];
class Mapper001 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        this.maxPrg = 0;
        this.ram = new Uint8Array(0x2000);
        this.register = 0;
        this.counter = 0;
        this.prgBankMode = 3;
        this.prgReg = 0;
        this.chrBank4k = true;
        this.chrBank = [0 << 2, 1 << 2];
        const BANK_BIT = 14; // 16KB
        this.maxPrg = (options.prgSize >> BANK_BIT) - 1;
        // Serial: 5bits.
        this.options.bus.setWriteMemory(0x8000, 0xffff, (adr, value) => {
            if ((value & 0x80) !== 0) { // Reset
                this.resetRegister();
                return;
            }
            this.register |= (value & 1) << this.counter;
            if (++this.counter < 5)
                return;
            // Register filled: branch according to bit 13~14.
            switch (adr & 0xe000) {
                case 0x8000: // Control
                    {
                        this.options.ppu.setMirrorMode(kMirrorTable[this.register & 3]);
                        this.prgBankMode = (this.register >> 2) & 3;
                        this.setPrgBank(this.prgReg, this.chrBank[0]);
                        const newChrBank4k = (this.register & 0x10) !== 0;
                        if (this.chrBank4k !== newChrBank4k) {
                            this.chrBank4k = newChrBank4k;
                            this.setChrBank(0, this.chrBank[0]);
                            this.setChrBank(1, this.chrBank[1]);
                        }
                    }
                    break;
                case 0xa000: // CHR bank 0
                    {
                        const bank = this.register;
                        if (this.chrBank[0] !== bank)
                            this.setChrBank(0, bank);
                        this.setPrgBank(this.prgReg, bank);
                    }
                    break;
                case 0xc000: // CHR bank 1
                    {
                        const bank = this.register;
                        if (this.chrBank[1] !== bank)
                            this.setChrBank(1, bank);
                    }
                    break;
                case 0xe000: // PRG bank
                    this.setPrgBank(this.register, this.chrBank[0]);
                    break;
                default:
                    break;
            }
            this.resetRegister();
        });
        // PRG RAM
        this.ram.fill(0xbf);
        this.options.bus.setReadMemory(0x6000, 0x7fff, (adr) => this.ram[adr & 0x1fff]);
        this.options.bus.setWriteMemory(0x6000, 0x7fff, (adr, value) => { this.ram[adr & 0x1fff] = value; });
        this.setPrgBank(0, 0xff);
    }
    static create(options) {
        return new Mapper001(options);
    }
    save() {
        return {
            ram: _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertUint8ArrayToBase64String(this.ram),
            register: this.register,
            counter: this.counter,
            prgBankMode: this.prgBankMode,
            prgReg: this.prgReg,
            chrBank4k: this.chrBank4k,
            chrBank: this.chrBank,
        };
    }
    load(saveData) {
        this.ram = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertBase64StringToUint8Array(saveData.ram);
        this.register = saveData.register;
        this.counter = saveData.counter;
        this.prgBankMode = saveData.prgBankMode;
        this.chrBank4k = saveData.chrBank4k;
        for (let i = 0; i < 2; ++i)
            this.setChrBank(i, saveData.chrBank[i]);
        this.setPrgBank(saveData.prgReg, this.chrBank[0]);
    }
    resetRegister() {
        this.register = 0;
        this.counter = 0;
    }
    setChrBank(hilo, bank) {
        if (this.chrBank4k) {
            const chr = hilo << 2;
            const b = bank << 2;
            for (let i = 0; i < 4; ++i)
                this.options.ppu.setChrBankOffset(chr + i, b + i);
        }
        else {
            if (hilo === 0)
                this.options.ppu.setChrBank(bank >> 1);
        }
        this.chrBank[hilo] = bank;
    }
    setPrgBank(reg, chrBank0) {
        this.prgReg = reg;
        const highBit = chrBank0 & (0x10 & this.maxPrg);
        const bank = ((reg & 0x0f) | highBit) & this.maxPrg;
        let p0, p1;
        switch (this.prgBankMode) {
            case 0:
            case 1:
                p0 = bank & ~1;
                p1 = bank | 1;
                break;
            case 2:
                p0 = 0;
                p1 = bank;
                break;
            case 3:
                p0 = bank;
                p1 = (this.maxPrg & 0x0f) | highBit;
                break;
            default:
                return;
        }
        this.options.prgBankCtrl.setPrgBank(0, p0 << 1);
        this.options.prgBankCtrl.setPrgBank(1, (p0 << 1) + 1);
        this.options.prgBankCtrl.setPrgBank(2, p1 << 1);
        this.options.prgBankCtrl.setPrgBank(3, (p1 << 1) + 1);
    }
}


/***/ }),

/***/ "./src/nes/mapper/mapper002.ts":
/*!*************************************!*\
  !*** ./src/nes/mapper/mapper002.ts ***!
  \*************************************/
/*! exports provided: Mapper002, Mapper093 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper002", function() { return Mapper002; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper093", function() { return Mapper093; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./src/nes/mapper/mapper.ts");
// UxROM

class Mapper002Base extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(prgBankShift, options) {
        super();
        this.options = options;
        this.bank = 0;
        const BANK_BIT = 14;
        const count = options.prgSize >> BANK_BIT;
        this.options.prgBankCtrl.setPrgBank(0, 0);
        this.options.prgBankCtrl.setPrgBank(1, 1);
        this.options.prgBankCtrl.setPrgBank(2, count * 2 - 2);
        this.options.prgBankCtrl.setPrgBank(3, count * 2 - 1);
        // PRG ROM bank
        this.options.bus.setWriteMemory(0x8000, 0xffff, (_adr, value) => {
            const bank = (value >> prgBankShift) << 1;
            this.setBank(bank);
        });
    }
    save() {
        return {
            bank: this.bank,
        };
    }
    load(saveData) {
        this.setBank(saveData.bank);
    }
    setBank(bank) {
        this.bank = bank;
        this.options.prgBankCtrl.setPrgBank(0, bank);
        this.options.prgBankCtrl.setPrgBank(1, bank + 1);
    }
}
class Mapper002 extends Mapper002Base {
    static create(options) {
        return new Mapper002(options);
    }
    constructor(options) {
        super(0, options);
    }
}
// INES Mapper 093: Sunsoft-2 IC
// http://wiki.nesdev.com/w/index.php/INES_Mapper_093
// This mapper is deprecated for new development. Homebrew projects other than mapper tests should
// use UxROM (iNES Mapper 002) instead.
class Mapper093 extends Mapper002Base {
    static create(options) {
        return new Mapper093(options);
    }
    constructor(options) {
        super(4, options);
    }
}


/***/ }),

/***/ "./src/nes/mapper/mapper003.ts":
/*!*************************************!*\
  !*** ./src/nes/mapper/mapper003.ts ***!
  \*************************************/
/*! exports provided: Mapper003, Mapper185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper003", function() { return Mapper003; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper185", function() { return Mapper185; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./src/nes/mapper/mapper.ts");

class Mapper003 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        this.chrBank = 0;
        // Chr ROM bank
        this.options.bus.setWriteMemory(0x8000, 0xffff, (_adr, value) => {
            this.chrBank = value;
            this.options.ppu.setChrBank(this.chrBank);
        });
    }
    static create(options) {
        return new Mapper003(options);
    }
    save() {
        return {
            chrBank: this.chrBank,
        };
    }
    load(saveData) {
        this.chrBank = saveData.chrBank;
        this.options.ppu.setChrBank(this.chrBank);
    }
}
class Mapper185 extends Mapper003 {
    static create(options) {
        return new Mapper185(options);
    }
    constructor(options) {
        super(options);
        options.ppu.writePpuDirect(0x0000, 1); // For "Mighty bomb jack(J)"
    }
}


/***/ }),

/***/ "./src/nes/mapper/mapper004.ts":
/*!*************************************!*\
  !*** ./src/nes/mapper/mapper004.ts ***!
  \*************************************/
/*! exports provided: Mapper004, Mapper088, Mapper095, Mapper118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper004", function() { return Mapper004; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper088", function() { return Mapper088; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper095", function() { return Mapper095; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper118", function() { return Mapper118; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./src/nes/mapper/mapper.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/util */ "./src/util/util.ts");
// MMC3


const VRETURN = 262;
class Mapper004 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        this.regs = new Uint8Array(8);
        this.ram = new Uint8Array(0x2000); // PRG RAM
        this.maxPrg = 0;
        this.bankSelect = 0;
        this.irqHlineEnable = false;
        this.irqHlineValue = -1;
        this.irqHlineCounter = -1;
        this.irqLatch = 0;
        const BANK_BIT = 13; // 0x2000
        this.maxPrg = (options.prgSize >> BANK_BIT) - 1;
        this.options.prgBankCtrl.setPrgBank(3, this.maxPrg);
        this.ram.fill(0xff);
        this.options.bus.setReadMemory(0x6000, 0x7fff, (adr) => this.ram[adr & 0x1fff]);
        this.options.bus.setWriteMemory(0x6000, 0x7fff, (adr, value) => { this.ram[adr & 0x1fff] = value; });
        // Select
        this.options.bus.setWriteMemory(0x8000, 0x9fff, (adr, value) => {
            if ((adr & 1) === 0) {
                this.bankSelect = value;
                this.setPrgBank(this.bankSelect);
                this.setChrBank(this.bankSelect);
            }
            else {
                const reg = this.bankSelect & 0x07;
                this.regs[reg] = value;
                if (reg < 6) // CHR
                    this.setChrBank(this.bankSelect);
                else // PRG
                    this.setPrgBank(this.bankSelect);
            }
        });
        // Mirroring
        this.options.bus.setWriteMemory(0xa000, 0xbfff, (adr, value) => {
            if ((adr & 1) === 0) {
                this.options.ppu.setMirrorMode((value & 1) === 0 ? 1 /* VERT */ : 0 /* HORZ */);
            }
            else {
                // PRG RAM protect, TODO: Implement.
            }
        });
        // IRQ
        this.options.bus.setWriteMemory(0xc000, 0xdfff, (adr, value) => {
            if ((adr & 1) === 0) {
                this.irqLatch = value;
                this.setIrqHlineValue(this.irqLatch);
            }
            else {
                this.setIrqHlineValue(this.irqLatch);
            }
        });
        this.options.bus.setWriteMemory(0xe000, 0xffff, (adr, _value) => {
            if ((adr & 1) === 0) {
                this.enableIrqHline(false);
                this.resetIrqHlineCounter();
            }
            else {
                this.enableIrqHline(true);
            }
        });
        this.setPrgBank(this.bankSelect); // Initial
        // http://wiki.nesdev.com/w/index.php/INES#Flags_6
        // iNes header, flags 6
        // > Some mappers, such as MMC1, MMC3, and AxROM, can control nametable mirroring.
        // > They ignore bit 0
        let mirror = 1 /* VERT */;
        // Dirty hack: detect mirror mode from ROM hash.
        switch (this.options.romHash) {
            case '6c0cd447297e95e45db35a4373dbeae1': // Babel no Tou
            case 'e791b12fc3419a2e2f8a5ed64b210d72': // Dragon Spirit
            case '44c206c61ff37406815f21b922e105c7': // Family Pinball
                mirror = 0 /* HORZ */;
                break;
            default:
                break;
        }
        this.options.ppu.setMirrorMode(mirror); // Default vertical mirroring?
    }
    static create(options) {
        return new Mapper004(options);
    }
    reset() {
        this.irqHlineEnable = false;
        this.irqHlineValue = this.irqHlineCounter = -1;
    }
    save() {
        return {
            regs: _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertUint8ArrayToBase64String(this.regs),
            ram: _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertUint8ArrayToBase64String(this.ram),
            bankSelect: this.bankSelect,
            irqHlineEnable: this.irqHlineEnable,
            irqHlineValue: this.irqHlineValue,
            irqHlineCounter: this.irqHlineCounter,
            irqLatch: this.irqLatch,
        };
    }
    load(saveData) {
        this.regs = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertBase64StringToUint8Array(saveData.regs);
        this.ram = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertBase64StringToUint8Array(saveData.ram);
        this.bankSelect = saveData.bankSelect;
        this.irqHlineEnable = saveData.irqHlineEnable;
        this.irqHlineValue = saveData.irqHlineValue;
        this.irqHlineCounter = saveData.irqHlineCounter;
        this.irqLatch = saveData.irqLatch;
        this.setPrgBank(this.bankSelect);
        this.setChrBank(this.bankSelect);
    }
    onHblank(hcount) {
        // http://bobrost.com/nes/files/mmc3irqs.txt
        // Note: BGs OR sprites MUST be enabled in $2001 (bits 3 and 4)
        // in order for the countdown to occur.
        if ((this.options.ppu.getReg(1) & 0x18) !== 0) {
            if (--this.irqHlineCounter === 0 && this.irqHlineEnable) {
                this.options.cpu.requestIrq();
            }
        }
        switch (hcount) {
            case VRETURN:
                this.irqHlineCounter = this.irqHlineValue;
                break;
            default:
                break;
        }
    }
    setPrgBank(swap) {
        if ((swap & 0x40) === 0) {
            this.options.prgBankCtrl.setPrgBank(0, this.regs[6]);
            this.options.prgBankCtrl.setPrgBank(1, this.regs[7]);
            this.options.prgBankCtrl.setPrgBank(2, this.maxPrg - 1);
        }
        else {
            this.options.prgBankCtrl.setPrgBank(2, this.regs[6]);
            this.options.prgBankCtrl.setPrgBank(1, this.regs[7]);
            this.options.prgBankCtrl.setPrgBank(0, this.maxPrg - 1);
        }
    }
    setChrBank(swap) {
        if ((swap & 0x80) === 0) {
            this.options.ppu.setChrBankOffset(0, this.regs[0] & 0xfe);
            this.options.ppu.setChrBankOffset(1, this.regs[0] | 1);
            this.options.ppu.setChrBankOffset(2, this.regs[1] & 0xfe);
            this.options.ppu.setChrBankOffset(3, this.regs[1] | 1);
            this.options.ppu.setChrBankOffset(4, this.regs[2]);
            this.options.ppu.setChrBankOffset(5, this.regs[3]);
            this.options.ppu.setChrBankOffset(6, this.regs[4]);
            this.options.ppu.setChrBankOffset(7, this.regs[5]);
        }
        else {
            this.options.ppu.setChrBankOffset(4, this.regs[0] & 0xfe);
            this.options.ppu.setChrBankOffset(5, this.regs[0] | 1);
            this.options.ppu.setChrBankOffset(6, this.regs[1] & 0xfe);
            this.options.ppu.setChrBankOffset(7, this.regs[1] | 1);
            this.options.ppu.setChrBankOffset(0, this.regs[2]);
            this.options.ppu.setChrBankOffset(1, this.regs[3]);
            this.options.ppu.setChrBankOffset(2, this.regs[4]);
            this.options.ppu.setChrBankOffset(3, this.regs[5]);
        }
    }
    setIrqHlineValue(line) {
        this.irqHlineValue = line;
        this.irqHlineCounter = this.irqHlineValue;
    }
    enableIrqHline(value) {
        this.irqHlineEnable = value;
    }
    resetIrqHlineCounter() {
        this.irqHlineCounter = 0;
    }
}
class Mapper088 extends Mapper004 {
    constructor(options) {
        super(options);
        this.options = options;
        // Select
        this.options.bus.setWriteMemory(0x8000, 0x9fff, (adr, value) => {
            if ((adr & 1) === 0) {
                this.bankSelect = value & 0x07;
                this.setPrgBank(this.bankSelect);
                this.setChrBank(this.bankSelect);
            }
            else {
                const reg = this.bankSelect & 0x07;
                if (reg < 6) { // CHR
                    value &= 0x3f;
                    if (reg >= 2)
                        value |= 0x40;
                    this.regs[reg] = value;
                    this.setChrBank(this.bankSelect);
                }
                else { // PRG
                    this.regs[reg] = value;
                    this.setPrgBank(this.bankSelect);
                }
            }
        });
    }
    static create(options) {
        return new Mapper088(options);
    }
}
const kMirrorModeTable95 = [
    2 /* SINGLE0 */, 4 /* REVERSE_HORZ */,
    0 /* HORZ */, 3 /* SINGLE1 */,
];
class Mapper095 extends Mapper004 {
    constructor(options) {
        super(options);
        this.options = options;
        // Select
        this.options.bus.setWriteMemory(0x8000, 0x9fff, (adr, value) => {
            if ((adr & 1) === 0) {
                this.bankSelect = value & 7;
            }
            else {
                const reg = this.bankSelect & 0x07;
                if (reg < 6) { // CHR
                    this.regs[reg] = value & 0x3f;
                    this.setChrBank(0x00);
                    if (reg === 0 || reg === 1) {
                        const n1 = (this.regs[0] >> 5) & 1;
                        const n2 = (this.regs[1] >> 4) & 2;
                        this.options.ppu.setMirrorMode(kMirrorModeTable95[n2 | n1]);
                    }
                }
                else { // PRG
                    this.regs[reg] = value & 0x1f;
                    this.setPrgBank(0x00);
                }
            }
        });
    }
    static create(options) {
        return new Mapper095(options);
    }
}
class Mapper118 extends Mapper004 {
    static create(options) {
        return new Mapper118(options);
    }
    constructor(options) {
        super(options);
        // Select
        this.options.bus.setWriteMemory(0x8000, 0x9fff, (adr, value) => {
            if ((adr & 1) === 0) {
                this.bankSelect = value;
                this.setPrgBank(this.bankSelect);
                this.setChrBank(this.bankSelect);
            }
            else {
                const reg = this.bankSelect & 0x07;
                this.regs[reg] = value & 0x7f;
                if (reg < 6) { // CHR
                    this.setChrBank(this.bankSelect);
                }
                else { // PRG
                    this.setPrgBank(this.bankSelect);
                }
                const chrA12 = this.regs[0] & 0x80;
                const bank = this.regs[0] & 7;
                if ((chrA12 === 0 && bank < 2) || (chrA12 !== 0 && bank >= 2 && bank < 6))
                    this.options.ppu.setMirrorMode((value & 0x80) === 0 ? 2 /* SINGLE0 */ : 3 /* SINGLE1 */);
            }
        });
    }
}


/***/ }),

/***/ "./src/nes/mapper/mapper007.ts":
/*!*************************************!*\
  !*** ./src/nes/mapper/mapper007.ts ***!
  \*************************************/
/*! exports provided: Mapper007 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper007", function() { return Mapper007; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./src/nes/mapper/mapper.ts");
// AxROM

const kMirrorTable = [2 /* SINGLE0 */, 3 /* SINGLE1 */];
class Mapper007 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        // 32KB switchable PRG ROM bank
        // const BANK_BIT = 15
        // const count = prgSize >> BANK_BIT
        // PRG ROM bank
        this.options.bus.setWriteMemory(0x8000, 0xffff, (_adr, value) => {
            const bank = value << 2;
            for (let i = 0; i < 4; ++i)
                this.options.prgBankCtrl.setPrgBank(i, bank + i);
            const namePage = (value >> 4) & 1;
            this.options.ppu.setMirrorMode(kMirrorTable[namePage]);
        });
    }
    static create(options) {
        return new Mapper007(options);
    }
}


/***/ }),

/***/ "./src/nes/mapper/mapper010.ts":
/*!*************************************!*\
  !*** ./src/nes/mapper/mapper010.ts ***!
  \*************************************/
/*! exports provided: Mapper010 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper010", function() { return Mapper010; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./src/nes/mapper/mapper.ts");
// MMC4 (FxROM)

class Mapper010 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        // const BANK_BIT = 14
        // const count = prgSize >> BANK_BIT
        // PRG ROM bank
        this.options.bus.setWriteMemory(0xa000, 0xbfff, (adr, value) => {
            if (adr < 0xb000) {
                const prgBank = value << 1;
                this.options.prgBankCtrl.setPrgBank(0, prgBank);
                this.options.prgBankCtrl.setPrgBank(1, prgBank + 1);
            }
            else {
                this.options.ppu.setChrBank(value);
            }
        });
        // TODO: Implement latch to switch CHR bank.
        this.options.bus.setWriteMemory(0xe000, 0xf000, (adr, value) => {
            if (adr >= 0xf000)
                this.options.ppu.setMirrorMode((value & 1) === 0 ? 1 /* VERT */ : 0 /* HORZ */);
        });
        // PRG RAM
        const ram = new Uint8Array(0x2000);
        ram.fill(0xbf);
        this.options.bus.setReadMemory(0x6000, 0x7fff, (adr) => ram[adr & 0x1fff]);
        this.options.bus.setWriteMemory(0x6000, 0x7fff, (adr, value) => { ram[adr & 0x1fff] = value; });
    }
    static create(options) {
        return new Mapper010(options);
    }
}


/***/ }),

/***/ "./src/nes/mapper/mapper016.ts":
/*!*************************************!*\
  !*** ./src/nes/mapper/mapper016.ts ***!
  \*************************************/
/*! exports provided: Mapper016 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper016", function() { return Mapper016; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./src/nes/mapper/mapper.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/util */ "./src/util/util.ts");
// Bandai FCG board


const kMirrorTable = [
    1 /* VERT */,
    0 /* HORZ */,
    2 /* SINGLE0 */,
    3 /* SINGLE1 */,
];
class Mapper016 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        this.prgBank = 0;
        this.chrBank = new Uint8Array(8);
        this.irqEnable = false;
        this.irqValue = 0;
        this.irqCounter = 0;
        const BANK_BIT = 14;
        const BANK_SIZE = 1 << BANK_BIT;
        const size = options.prgSize;
        const count = size / BANK_SIZE;
        this.options.prgBankCtrl.setPrgBank(2, count * 2 - 2);
        this.options.prgBankCtrl.setPrgBank(3, count * 2 - 1);
        this.setPrgBank(0);
        this.options.bus.setWriteMemory(0x6000, 0xffff, (adr, value) => {
            const a = adr & 0x0f;
            switch (a) {
                // CHR-ROM bank select.
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    this.chrBank[a] = value;
                    this.setChrBank(a, value);
                    break;
                case 8: // PRG-ROM bank select.
                    this.prgBank = value & (count - 1);
                    this.setPrgBank(this.prgBank);
                    break;
                case 9: // Nametable mirroring type select.
                    this.options.ppu.setMirrorMode(kMirrorTable[value & 3]);
                    break;
                case 0x0a: // IRQ Control.
                    this.irqEnable = (value & 1) !== 0;
                    break;
                case 0x0b:
                case 0x0c: // IRQ latch/counter.
                    {
                        const shift = (a - 0x0b) * 8;
                        this.irqValue = (this.irqValue & (0xff00 >> shift)) | (value << shift);
                        this.irqCounter = this.irqValue;
                    }
                    break;
                default:
                    console.log(`Write ${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(adr, 4)}, ${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(value, 2)}`);
                    break;
            }
        });
    }
    static create(options) {
        return new Mapper016(options);
    }
    reset() {
        this.irqEnable = false;
        this.irqValue = this.irqCounter = 0;
    }
    save() {
        return {
            prgBank: this.prgBank,
            chrBank: _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertUint8ArrayToBase64String(this.chrBank),
            irqEnable: this.irqEnable,
            irqValue: this.irqValue,
            irqCounter: this.irqCounter,
        };
    }
    load(saveData) {
        this.prgBank = saveData.prgBank;
        this.chrBank = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertBase64StringToUint8Array(saveData.chrBank);
        this.irqEnable = saveData.irqEnable;
        this.irqValue = saveData.irqValue;
        this.irqCounter = saveData.irqCounter;
        this.setPrgBank(this.prgBank);
        for (let i = 0; i < this.chrBank.length; ++i)
            this.setChrBank(i, this.chrBank[i]);
    }
    onHblank(_hcount) {
        if (this.irqEnable) {
            this.irqCounter -= 115;
            if (this.irqCounter <= 0) {
                this.irqCounter += this.irqValue;
                this.options.cpu.requestIrq();
            }
        }
    }
    setPrgBank(bank) {
        this.options.prgBankCtrl.setPrgBank(0, bank * 2);
        this.options.prgBankCtrl.setPrgBank(1, bank * 2 + 1);
    }
    setChrBank(bank, value) {
        this.options.ppu.setChrBankOffset(bank, value);
    }
}


/***/ }),

/***/ "./src/nes/mapper/mapper019.ts":
/*!*************************************!*\
  !*** ./src/nes/mapper/mapper019.ts ***!
  \*************************************/
/*! exports provided: Mapper019 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper019", function() { return Mapper019; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./src/nes/mapper/mapper.ts");
// Namco 163

class Mapper019 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        // const BANK_BIT = 13
        // const count = prgSize >> BANK_BIT
        // CHR ROM bank
        this.options.bus.setWriteMemory(0x8000, 0xbfff, (adr, value) => {
            const bank = (adr >> 11) & 7;
            this.options.ppu.setChrBankOffset(bank, value);
        });
        // PRG ROM bank
        this.options.bus.setWriteMemory(0xe000, 0xffff, (adr, value) => {
            if (adr <= 0xf7ff) {
                const bank = (adr - 0xe000) / 0x800;
                this.options.prgBankCtrl.setPrgBank(bank, value);
            }
        });
    }
    static create(options) {
        return new Mapper019(options);
    }
}


/***/ }),

/***/ "./src/nes/mapper/mapper023.ts":
/*!*************************************!*\
  !*** ./src/nes/mapper/mapper023.ts ***!
  \*************************************/
/*! exports provided: Mapper023, Mapper025 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper023", function() { return Mapper023; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper025", function() { return Mapper025; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./src/nes/mapper/mapper.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/util */ "./src/util/util.ts");
// VRC4e
// http://wiki.nesdev.com/w/index.php/INES_Mapper_023


const IRQ_ENABLE_AFTER = 1 << 0;
const IRQ_ENABLE = 1 << 1;
const IRQ_MODE = 1 << 2;
const kMirrorTable = [1 /* VERT */, 0 /* HORZ */, 2 /* SINGLE0 */, 3 /* SINGLE1 */];
class Mapper023Base extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options, mapping) {
        super();
        this.options = options;
        this.ram = new Uint8Array(0x2000);
        this.prgBankMode = 0;
        this.prgBank = new Array(4);
        this.chrBank = new Array(8);
        this.irqControl = 0;
        this.irqLatch = 0;
        this.irqCounter = 0;
        const BANK_BIT = 13;
        const prgCount = options.prgSize >> BANK_BIT;
        this.setPrgBank(0, 0);
        this.setPrgBank(1, 1);
        this.setPrgBank(2, prgCount - 2);
        this.setPrgBank(3, prgCount - 1);
        // PRG ROM bank
        this.options.bus.setWriteMemory(0x8000, 0x9fff, (adr, value) => {
            if (0x8000 <= adr && adr <= 0x8006) {
                switch (this.prgBankMode) {
                    case 0:
                        this.setPrgBank(0, value);
                        break;
                    case 1:
                        this.setPrgBank(2, value);
                        break;
                }
            }
            else if ((adr & 0xff00) === 0x9000) {
                const reg = mapping[adr & 0xff];
                if (reg === 0 || reg === 2) { // Mirroring Control.
                    const mirrorMode = value & 3;
                    this.options.ppu.setMirrorMode(kMirrorTable[mirrorMode]);
                }
                else if (reg === 4 || reg === 6) { // PRG Swap Mode control.
                    this.prgBankMode = (value >> 1) & 1;
                    switch (this.prgBankMode) {
                        case 0:
                            this.setPrgBank(2, prgCount - 2);
                            break;
                        case 1:
                            this.setPrgBank(0, prgCount - 2);
                            break;
                    }
                }
            }
        });
        this.options.bus.setWriteMemory(0xa000, 0xbfff, (adr, value) => {
            if (0xa000 <= adr && adr <= 0xa006) {
                this.setPrgBank(1, value & (prgCount - 1));
            }
            else if ((adr & 0xff00) === 0xb000) {
                const reg = mapping[adr & 0xff];
                if (reg === 0) { // CHR Select 0
                    this.setChrBankOffset(0, (this.chrBank[0] & ~0x0f) | (value & 0x0f));
                }
                else if (reg === 2) {
                    this.setChrBankOffset(0, (this.chrBank[0] & ~0x1f0) | ((value & 0x1f) << 4));
                }
                else if (reg === 4) { // CHR Select 1
                    this.setChrBankOffset(1, (this.chrBank[1] & ~0x0f) | (value & 0x0f));
                }
                else if (reg === 6) {
                    this.setChrBankOffset(1, (this.chrBank[1] & ~0x1f0) | ((value & 0x1f) << 4));
                }
            }
        });
        this.options.bus.setWriteMemory(0xc000, 0xffff, (adr, value) => {
            if (0xc000 <= adr && adr <= 0xefff) { // CHR Select 2...7
                const reg = mapping[adr & 0xff];
                let ofs = 0, hi = false;
                if (reg === 0) {
                    ofs = 0;
                }
                else if (reg === 2) {
                    ofs = 0;
                    hi = true;
                }
                else if (reg === 4) {
                    ofs = 1;
                }
                else if (reg === 6) {
                    ofs = 1;
                    hi = true;
                }
                else {
                    return;
                }
                const bank = ((adr & 0x3000) >> 11) + 2 + ofs;
                let newValue;
                if (hi)
                    newValue = (this.chrBank[bank] & ~0x1f0) | ((value & 0x1f) << 4);
                else
                    newValue = (this.chrBank[bank] & ~0x0f) | (value & 0x0f);
                this.setChrBankOffset(bank, newValue);
            }
            else { // IRQ
                const reg = mapping[adr & 0xff];
                if (reg === 0) { // IRQ Latch: low 4 bits
                    this.irqLatch = (this.irqLatch & ~0x0f) | (value & 0x0f);
                }
                else if (reg === 2) { // IRQ Latch: high 4 bits
                    this.irqLatch = (this.irqLatch & ~0xf0) | ((value & 0x0f) << 4);
                }
                else if (reg === 4) { // IRQ Control
                    this.irqControl = value;
                    if ((this.irqControl & IRQ_ENABLE) !== 0) {
                        this.irqCounter = this.irqLatch;
                    }
                }
                else if (reg === 6) { // IRQ Acknowledge
                    // Copy to enable
                    const ea = this.irqControl & IRQ_ENABLE_AFTER;
                    this.irqControl = (this.irqControl & ~IRQ_ENABLE) | (ea << 1);
                }
            }
        });
        // PRG RAM
        this.ram.fill(0xff);
        this.options.bus.setReadMemory(0x6000, 0x7fff, (adr) => this.ram[adr & 0x1fff]);
        this.options.bus.setWriteMemory(0x6000, 0x7fff, (adr, value) => { this.ram[adr & 0x1fff] = value; });
    }
    reset() {
        this.irqControl = 0;
        this.irqLatch = this.irqCounter = 0;
    }
    save() {
        return {
            ram: _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertUint8ArrayToBase64String(this.ram),
            prgBankMode: this.prgBankMode,
            prgBank: this.prgBank,
            chrBank: this.chrBank,
            irqControl: this.irqControl,
            irqLatch: this.irqLatch,
            irqCounter: this.irqCounter,
        };
    }
    load(saveData) {
        this.ram = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertBase64StringToUint8Array(saveData.ram);
        this.prgBankMode = saveData.prgBankMode;
        // this.prgBank = saveData.prgBank
        // this.chrBank = saveData.chrBank
        this.irqControl = saveData.irqControl;
        this.irqLatch = saveData.irqLatch;
        this.irqCounter = saveData.irqCounter;
        for (let i = 0; i < 4; ++i)
            this.setPrgBank(i, saveData.prgBank[i]);
        for (let i = 0; i < 8; ++i)
            this.setChrBankOffset(i, saveData.chrBank[i]);
    }
    onHblank(_hcount) {
        if ((this.irqControl & IRQ_ENABLE) !== 0) {
            let c = this.irqCounter;
            if ((this.irqControl & IRQ_MODE) === 0) { // scanline mode
                c += 1;
            }
            else { // cycle mode
                c += 185; // TODO: Calculate.
            }
            if (c > 255) {
                c = this.irqLatch;
                this.options.cpu.requestIrq();
            }
            this.irqCounter = c;
        }
    }
    setPrgBank(bank, value) {
        this.prgBank[bank] = value;
        this.options.prgBankCtrl.setPrgBank(bank, value);
    }
    setChrBankOffset(bank, value) {
        this.chrBank[bank] = value;
        this.options.ppu.setChrBankOffset(bank, value);
    }
}
class Mapper023 extends Mapper023Base {
    static create(options) {
        return new Mapper023(options);
    }
    constructor(options) {
        super(options, {
            0: 0,
            4: 2,
            8: 4,
            0x0c: 6,
            1: 2,
            2: 4,
            3: 6,
        });
    }
}
class Mapper025 extends Mapper023Base {
    static create(options) {
        return new Mapper025(options);
    }
    constructor(options) {
        super(options, {
            0: 0,
            1: 4,
            2: 2,
            3: 6,
        });
    }
}


/***/ }),

/***/ "./src/nes/mapper/mapper024.ts":
/*!*************************************!*\
  !*** ./src/nes/mapper/mapper024.ts ***!
  \*************************************/
/*! exports provided: Mapper024, Mapper026 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper024", function() { return Mapper024; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper026", function() { return Mapper026; });
/* harmony import */ var _nes_apu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../nes/apu */ "./src/nes/apu.ts");
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapper */ "./src/nes/mapper/mapper.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/util */ "./src/util/util.ts");
// VRC6
// http://wiki.nesdev.com/w/index.php/VRC6



const IRQ_ENABLE_AFTER = 1 << 0;
const IRQ_ENABLE = 1 << 1;
const IRQ_MODE = 1 << 2;
const CPU_CLOCK = 1789773; // Hz
const VBLANK_START = 241;
const kMirrorTable = [1 /* VERT */, 0 /* HORZ */, 2 /* SINGLE0 */, 3 /* SINGLE1 */];
const kChrBankTable = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 0, 1, 1, 2, 2, 3, 3],
    [0, 1, 2, 3, 4, 4, 5, 5],
    [0, 1, 2, 3, 4, 4, 5, 5],
];
const kChannelTypes = [
    _nes_apu__WEBPACK_IMPORTED_MODULE_0__["ChannelType"].PULSE,
    _nes_apu__WEBPACK_IMPORTED_MODULE_0__["ChannelType"].PULSE,
    _nes_apu__WEBPACK_IMPORTED_MODULE_0__["ChannelType"].SAWTOOTH,
];
class Channel {
    constructor() {
        this.regs = new Array(4);
    }
    write(reg, value) {
        this.regs[reg] = value;
    }
    update() { }
    getVolume() { return 0; }
    getFrequency() { return 0; }
}
class PulseChannel extends Channel {
    getVolume() {
        if ((this.regs[2] & 0x80) === 0)
            return 0;
        return (this.regs[0] & 15) / 15;
    }
    getFrequency() {
        const f = this.regs[1] | ((this.regs[2] & 0x0f) << 8);
        return ((CPU_CLOCK / 16) / (f + 1)) | 0;
    }
}
class SawToothChannel extends Channel {
    constructor() {
        super(...arguments);
        this.acc = 0;
        this.count = 0;
    }
    write(reg, value) {
        super.write(reg, value);
        switch (reg) {
            case 2:
                this.count = 0;
                if ((value & 0x80) === 0) {
                    this.acc = 0;
                }
                break;
        }
    }
    update() {
        if ((this.regs[2] & 0x80) !== 0) {
            this.acc += (this.regs[0] & 0x3f) * 2;
            if (this.acc >= 256) {
                this.acc -= 256;
                this.count = 0;
            }
            ++this.count;
            if (this.count >= 7) {
                this.acc = 0;
                this.count = 0;
            }
        }
        else {
            this.acc = 0;
        }
    }
    getVolume() {
        if ((this.regs[2] & 0x80) === 0)
            return 0;
        // return (this.acc >> (8 - 3)) / 0x1f
        return 1;
    }
    getFrequency() {
        const f = this.regs[1] | ((this.regs[2] & 0x0f) << 8);
        return ((CPU_CLOCK / 14) / (f + 1)) | 0;
    }
}
class Mapper024Base extends _mapper__WEBPACK_IMPORTED_MODULE_1__["Mapper"] {
    constructor(options, mapping) {
        super();
        this.options = options;
        this.ram = new Uint8Array(0x2000);
        this.chrRegs = new Uint8Array(8);
        this.prgCount = 0;
        this.prgBank = 0;
        this.ppuBankMode = 0;
        this.mirrorMode = 0;
        this.irqControl = 0;
        this.irqLatch = 0;
        this.irqCounter = 0;
        this.channels = new Array(kChannelTypes.length);
        this.frequencyScaling = 0;
        const BANK_BIT = 13;
        this.prgCount = options.prgSize >> BANK_BIT;
        this.options.prgBankCtrl.setPrgBank(0, 0);
        this.options.prgBankCtrl.setPrgBank(1, 1);
        this.setPrgBank(this.prgCount - 2);
        // PRG ROM bank
        this.options.bus.setWriteMemory(0x8000, 0x9fff, (adr, value) => {
            if (0x8000 <= adr && adr <= 0x8003) {
                this.setPrgBank((value & (this.prgCount / 2 - 1)) << 1);
            }
            else if (0x9000 <= adr && adr <= 0x9002) {
                this.writeSound(0, adr & 3, value);
            }
            else if (adr === 0x9003) {
                this.frequencyScaling = value;
            }
        });
        this.options.bus.setWriteMemory(0xc000, 0xdfff, (adr, value) => {
            if (0xc000 <= adr && adr <= 0xc003) {
                this.options.prgBankCtrl.setPrgBank(2, value);
            }
        });
        // CHR ROM bank
        const b003 = 0xb000 | mapping[3];
        this.options.bus.setWriteMemory(0xa000, 0xbfff, (adr, value) => {
            if ((adr & 0xf0ff) === b003) {
                this.ppuBankMode = value & 3;
                this.setChrBank();
                this.mirrorMode = (value >> 2) & 3;
                this.options.ppu.setMirrorMode(kMirrorTable[this.mirrorMode]);
            }
            else if (0xa000 <= adr && adr <= 0xa002) {
                this.writeSound(1, adr & 3, value);
            }
            else if (0xb000 <= adr && adr <= 0xb002) {
                this.writeSound(2, adr & 3, value);
            }
        });
        this.options.bus.setWriteMemory(0xd000, 0xffff, (adr, value) => {
            if (0xd000 <= adr && adr <= 0xefff) {
                const high = ((adr - 0xd000) >> 10) & 4;
                const low = adr & 0x0f;
                if (low < 4) {
                    const reg = mapping[low] + high;
                    this.chrRegs[reg] = value;
                    this.setChrBank();
                }
            }
            else {
                const low = adr & 0xff;
                switch (low) {
                    case 0: // IRQ Latch: low 4 bits
                        this.irqLatch = value;
                        break;
                    case 1: // IRQ Control
                        this.irqControl = value;
                        if ((this.irqControl & IRQ_ENABLE) !== 0) {
                            this.irqCounter = this.irqLatch;
                        }
                        break;
                    case 2: // IRQ Acknowledge
                        // Copy to enable
                        const ea = this.irqControl & IRQ_ENABLE_AFTER;
                        this.irqControl = (this.irqControl & ~IRQ_ENABLE) | (ea << 1);
                        break;
                    default:
                        break;
                }
            }
        });
        // PRG RAM
        this.ram.fill(0xff);
        this.options.bus.setReadMemory(0x6000, 0x7fff, (adr) => this.ram[adr & 0x1fff]);
        this.options.bus.setWriteMemory(0x6000, 0x7fff, (adr, value) => { this.ram[adr & 0x1fff] = value; });
        this.setupAudio();
    }
    reset() {
        this.irqControl = 0;
        this.irqLatch = this.irqCounter = 0;
    }
    save() {
        return {
            ram: _util_util__WEBPACK_IMPORTED_MODULE_2__["default"].convertUint8ArrayToBase64String(this.ram),
            chrRegs: _util_util__WEBPACK_IMPORTED_MODULE_2__["default"].convertUint8ArrayToBase64String(this.chrRegs),
            prgCount: this.prgCount,
            prgBank: this.prgBank,
            ppuBankMode: this.ppuBankMode,
            mirrorMode: this.mirrorMode,
            irqControl: this.irqControl,
            irqLatch: this.irqLatch,
            irqCounter: this.irqCounter,
        };
    }
    load(saveData) {
        this.ram = _util_util__WEBPACK_IMPORTED_MODULE_2__["default"].convertBase64StringToUint8Array(saveData.ram);
        this.chrRegs = _util_util__WEBPACK_IMPORTED_MODULE_2__["default"].convertBase64StringToUint8Array(saveData.chrRegs);
        this.prgCount = saveData.prgCount;
        // this.prgBank = saveData.prgBank
        this.ppuBankMode = saveData.ppuBankMode;
        this.mirrorMode = saveData.mirrorMode;
        this.irqControl = saveData.irqControl;
        this.irqLatch = saveData.irqLatch;
        this.irqCounter = saveData.irqCounter;
        this.setPrgBank(saveData.prgBank);
        this.setChrBank();
    }
    onHblank(hcount) {
        if ((this.irqControl & IRQ_ENABLE) !== 0) {
            let c = this.irqCounter;
            if ((this.irqControl & IRQ_MODE) === 0) { // scanline mode
                c += 1;
            }
            else { // cycle mode
                c += 185; // TODO: Calculate.
            }
            if (c >= 255) {
                c = this.irqLatch;
                this.options.cpu.requestIrq();
            }
            this.irqCounter = c;
        }
        if (hcount === VBLANK_START)
            this.updateSound();
    }
    getExtraSoundChannelTypes() {
        return kChannelTypes;
    }
    getSoundVolume(channel) {
        const halt = (this.frequencyScaling & 0x01) !== 0;
        if (halt)
            return 0;
        return this.channels[channel].getVolume();
    }
    getSoundFrequency(channel) {
        let f = this.channels[channel].getFrequency();
        if ((this.frequencyScaling & 0x02) !== 0)
            f *= 16;
        if ((this.frequencyScaling & 0x04) !== 0)
            f *= 256;
        return f;
    }
    setPrgBank(prgBank) {
        this.prgBank = prgBank;
        this.options.prgBankCtrl.setPrgBank(0, prgBank);
        this.options.prgBankCtrl.setPrgBank(1, prgBank + 1);
    }
    setChrBank() {
        const table = kChrBankTable[this.ppuBankMode];
        for (let i = 0; i < 8; ++i)
            this.options.ppu.setChrBankOffset(i, this.chrRegs[table[i]]);
    }
    writeSound(channel, reg, value) {
        this.channels[channel].write(reg, value);
    }
    setupAudio() {
        for (let i = 0; i < this.channels.length; ++i) {
            const type = kChannelTypes[i];
            let channel;
            switch (type) {
                case _nes_apu__WEBPACK_IMPORTED_MODULE_0__["ChannelType"].PULSE:
                    channel = new PulseChannel();
                    break;
                case _nes_apu__WEBPACK_IMPORTED_MODULE_0__["ChannelType"].SAWTOOTH:
                    channel = new SawToothChannel();
                    break;
                default:
                    continue;
            }
            this.channels[i] = channel;
        }
    }
    updateSound() {
        for (let channel of this.channels) {
            channel.update();
        }
    }
}
class Mapper024 extends Mapper024Base {
    static create(options) {
        return new Mapper024(options);
    }
    constructor(options) {
        super(options, {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
        });
    }
}
class Mapper026 extends Mapper024Base {
    static create(options) {
        return new Mapper026(options);
    }
    constructor(options) {
        super(options, {
            0: 0,
            1: 2,
            2: 1,
            3: 3,
        });
    }
}


/***/ }),

/***/ "./src/nes/mapper/mapper032.ts":
/*!*************************************!*\
  !*** ./src/nes/mapper/mapper032.ts ***!
  \*************************************/
/*! exports provided: Mapper032 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper032", function() { return Mapper032; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./src/nes/mapper/mapper.ts");
// Irem's G-101

const kMirrorTable = [1 /* VERT */, 0 /* HORZ */];
class Mapper032 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        const BANK_BIT = 13; // 0x2000
        const maxPrg = (options.prgSize >> BANK_BIT) - 1;
        const kLast2Bank = maxPrg - 1;
        let prgReg = [0, 1 << BANK_BIT];
        let prgMode = 0;
        const setPrgBank = () => {
            let p0, p1, p2;
            if (prgMode === 0) {
                p0 = prgReg[0];
                p1 = prgReg[1];
                p2 = kLast2Bank;
            }
            else {
                p2 = prgReg[0];
                p1 = prgReg[1];
                p0 = kLast2Bank;
            }
            this.options.prgBankCtrl.setPrgBank(0, p0);
            this.options.prgBankCtrl.setPrgBank(1, p1);
            this.options.prgBankCtrl.setPrgBank(2, p2);
        };
        // PRG RAM
        const ram = new Uint8Array(0x2000);
        ram.fill(0xbf);
        this.options.bus.setReadMemory(0x6000, 0x7fff, (adr) => ram[adr & 0x1fff]);
        this.options.bus.setWriteMemory(0x6000, 0x7fff, (adr, value) => { ram[adr & 0x1fff] = value; });
        // Select
        this.options.bus.setWriteMemory(0x8000, 0x9fff, (adr, value) => {
            if (adr <= 0x8fff) {
                prgReg[0] = value;
                setPrgBank();
            }
            else {
                this.options.ppu.setMirrorMode(kMirrorTable[value & 1]);
                prgMode = (value >> 1) & 1;
                setPrgBank();
            }
        });
        this.options.bus.setWriteMemory(0xa000, 0xbfff, (adr, value) => {
            if (adr <= 0xafff) {
                prgReg[1] = value;
                setPrgBank();
            }
            else {
                this.options.ppu.setChrBankOffset(adr & 7, value);
            }
        });
    }
    static create(options) {
        return new Mapper032(options);
    }
}


/***/ }),

/***/ "./src/nes/mapper/mapper069.ts":
/*!*************************************!*\
  !*** ./src/nes/mapper/mapper069.ts ***!
  \*************************************/
/*! exports provided: Mapper069 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper069", function() { return Mapper069; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./src/nes/mapper/mapper.ts");
// Sunsoft FME-7

const kMirrorTable = [
    1 /* VERT */, 0 /* HORZ */, 2 /* SINGLE0 */, 3 /* SINGLE1 */,
];
class Mapper069 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        // const BANK_BIT = 13
        // const count = prgSize >> BANK_BIT
        // CHR ROM bank
        let command = 0;
        this.options.bus.setWriteMemory(0x8000, 0x9fff, (_adr, value) => {
            command = value & 0x0f;
        });
        this.options.bus.setWriteMemory(0xa000, 0xbfff, (_adr, value) => {
            switch (command) {
                case 0x00:
                case 0x01:
                case 0x02:
                case 0x03:
                case 0x04:
                case 0x05:
                case 0x06:
                case 0x07:
                    this.options.ppu.setChrBankOffset(command, value);
                    break;
                case 0x09:
                case 0x0a:
                case 0x0b:
                    this.options.prgBankCtrl.setPrgBank(command - 9, value);
                    break;
                case 0x0c:
                    {
                        this.options.ppu.setMirrorMode(kMirrorTable[value & 3]);
                    }
                    break;
            }
        });
        // PRG RAM
        const ram = new Uint8Array(0x2000);
        ram.fill(0xbf);
        this.options.bus.setReadMemory(0x6000, 0x7fff, (adr) => ram[adr & 0x1fff]);
        this.options.bus.setWriteMemory(0x6000, 0x7fff, (adr, value) => { ram[adr & 0x1fff] = value; });
    }
    static create(options) {
        return new Mapper069(options);
    }
}


/***/ }),

/***/ "./src/nes/mapper/mapper073.ts":
/*!*************************************!*\
  !*** ./src/nes/mapper/mapper073.ts ***!
  \*************************************/
/*! exports provided: Mapper073 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper073", function() { return Mapper073; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./src/nes/mapper/mapper.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/util */ "./src/util/util.ts");
// VRC3
// http://wiki.nesdev.com/w/index.php/VRC3


class Mapper073 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        this.ram = new Uint8Array(0x2000);
        this.prgBank = 0;
        this.irqEnable = false;
        this.irqValue = this.irqCounter = -1;
        const BANK_BIT = 14;
        const prgCount = options.prgSize >> BANK_BIT;
        this.options.prgBankCtrl.setPrgBank(0, 0);
        this.options.prgBankCtrl.setPrgBank(1, 1);
        this.setPrgBank((prgCount - 1) * 2);
        // PRG ROM bank
        this.options.bus.setWriteMemory(0xf000, 0xffff, (_adr, value) => {
            this.setPrgBank(value << 1);
        });
        // IRQ Latch 0, 1
        this.options.bus.setWriteMemory(0x8000, 0x9fff, (adr, value) => {
            if (adr < 0x9000)
                this.irqValue = (this.irqValue & 0xfff0) | (value & 0x0f);
            else
                this.irqValue = (this.irqValue & 0xff0f) | ((value & 0x0f) << 4);
        });
        // IRQ Latch 2, 3
        this.options.bus.setWriteMemory(0xa000, 0xbfff, (adr, value) => {
            if (adr < 0xb000)
                this.irqValue = (this.irqValue & 0xf0ff) | ((value & 0x0f) << 8);
            else
                this.irqValue = (this.irqValue & 0x0fff) | ((value & 0x0f) << 12);
        });
        this.options.bus.setWriteMemory(0xc000, 0xdfff, (adr, value) => {
            if (adr < 0xd000) {
                // IRQ Control
                this.enableIrq((value & 2) !== 0);
                this.irqCounter = this.irqValue;
            }
            else {
                // IRQ Acknowledge
            }
        });
        // PRG RAM
        this.ram.fill(0xff);
        this.options.bus.setReadMemory(0x6000, 0x7fff, (adr) => this.ram[adr & 0x1fff]);
        this.options.bus.setWriteMemory(0x6000, 0x7fff, (adr, value) => { this.ram[adr & 0x1fff] = value; });
    }
    static create(options) {
        return new Mapper073(options);
    }
    reset() {
        this.irqEnable = false;
        this.irqValue = this.irqCounter = -1;
    }
    save() {
        return {
            ram: _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertUint8ArrayToBase64String(this.ram),
            prgBank: this.prgBank,
            irqEnable: this.irqEnable,
            irqValue: this.irqValue,
            irqCounter: this.irqCounter,
        };
    }
    load(saveData) {
        this.ram = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertBase64StringToUint8Array(saveData.ram);
        // this.prgBank = saveData.prgBank
        this.irqEnable = saveData.irqEnable;
        this.irqValue = saveData.irqValue;
        this.irqCounter = saveData.irqCounter;
        this.setPrgBank(saveData.prgBank);
    }
    onHblank(_hcount) {
        if (this.irqEnable && this.irqCounter > 0) {
            this.irqCounter -= 185; // TODO: Calculate.
            if (this.irqCounter < 0) {
                this.irqCounter = 0;
                this.options.cpu.requestIrq();
            }
        }
    }
    setPrgBank(prgBank) {
        this.prgBank = prgBank;
        this.options.prgBankCtrl.setPrgBank(0, prgBank);
        this.options.prgBankCtrl.setPrgBank(1, prgBank + 1);
    }
    enableIrq(value) {
        this.irqEnable = value;
    }
}


/***/ }),

/***/ "./src/nes/mapper/mapper075.ts":
/*!*************************************!*\
  !*** ./src/nes/mapper/mapper075.ts ***!
  \*************************************/
/*! exports provided: Mapper075 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper075", function() { return Mapper075; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./src/nes/mapper/mapper.ts");
// VRC1

class Mapper075 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        const BANK_BIT = 13;
        const count = options.prgSize >> BANK_BIT;
        for (let i = 0; i < 4; ++i)
            this.options.prgBankCtrl.setPrgBank(i, count - 1);
        const chrBank = [0, 0];
        const setChrBank = (bank, value) => {
            chrBank[bank] = value;
            const b = bank << 2;
            const ofs = value << 2;
            for (let i = 0; i < 4; ++i)
                this.options.ppu.setChrBankOffset(b + i, ofs + i);
        };
        // PRG ROM bank
        this.options.bus.setWriteMemory(0x8000, 0x9fff, (adr, value) => {
            if (adr < 0x9000)
                this.options.prgBankCtrl.setPrgBank(0, value);
            else {
                this.options.ppu.setMirrorMode((value & 1) === 0 ? 1 /* VERT */ : 0 /* HORZ */);
                setChrBank(0, (chrBank[0] & 0x0f) | ((value & 2) << 3));
                setChrBank(1, (chrBank[1] & 0x0f) | ((value & 4) << 2));
            }
        });
        this.options.bus.setWriteMemory(0xa000, 0xbfff, (adr, value) => {
            if (adr < 0xb000)
                this.options.prgBankCtrl.setPrgBank(1, value);
        });
        this.options.bus.setWriteMemory(0xc000, 0xdfff, (adr, value) => {
            if (adr < 0xd000)
                this.options.prgBankCtrl.setPrgBank(2, value);
        });
        // CHR ROM bank
        this.options.bus.setWriteMemory(0xe000, 0xffff, (adr, value) => {
            const bank = (adr >> 12) & 1;
            setChrBank(bank, (chrBank[bank] & 0x10) | (value & 0x0f));
        });
        // PRG RAM
        const ram = new Uint8Array(0x2000);
        ram.fill(0xbf);
        this.options.bus.setReadMemory(0x6000, 0x7fff, (adr) => ram[adr & 0x1fff]);
        this.options.bus.setWriteMemory(0x6000, 0x7fff, (adr, value) => { ram[adr & 0x1fff] = value; });
    }
    static create(options) {
        return new Mapper075(options);
    }
}


/***/ }),

/***/ "./src/nes/mapper/mapper087.ts":
/*!*************************************!*\
  !*** ./src/nes/mapper/mapper087.ts ***!
  \*************************************/
/*! exports provided: Mapper087 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper087", function() { return Mapper087; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./src/nes/mapper/mapper.ts");

class Mapper087 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        // PRG ROM bank
        this.options.bus.setWriteMemory(0x6000, 0x7fff, (_adr, value) => {
            const bank = ((value & 2) >> 1) | ((value & 1) << 1);
            this.options.ppu.setChrBank(bank);
        });
    }
    static create(options) {
        return new Mapper087(options);
    }
}


/***/ }),

/***/ "./src/nes/mapper/mapper184.ts":
/*!*************************************!*\
  !*** ./src/nes/mapper/mapper184.ts ***!
  \*************************************/
/*! exports provided: Mapper184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper184", function() { return Mapper184; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./src/nes/mapper/mapper.ts");
// Sunsoft-1 mapper

class Mapper184 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        // CHR ROM bank
        this.options.bus.setWriteMemory(0x6000, 0x7fff, (_adr, value) => {
            const hi = ((value >> (4 - 2)) & (7 << 2)) + (4 << 2);
            const lo = (value & 7) << 2;
            for (let i = 0; i < 4; ++i)
                this.options.ppu.setChrBankOffset(i + 4, hi + i);
            for (let i = 0; i < 4; ++i)
                this.options.ppu.setChrBankOffset(i, lo + i);
        });
    }
    static create(options) {
        return new Mapper184(options);
    }
}


/***/ }),

/***/ "./src/nes/mapper/mapper_table.ts":
/*!****************************************!*\
  !*** ./src/nes/mapper/mapper_table.ts ***!
  \****************************************/
/*! exports provided: kMapperTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kMapperTable", function() { return kMapperTable; });
/* harmony import */ var _mapper000__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper000 */ "./src/nes/mapper/mapper000.ts");
/* harmony import */ var _mapper001__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapper001 */ "./src/nes/mapper/mapper001.ts");
/* harmony import */ var _mapper002__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapper002 */ "./src/nes/mapper/mapper002.ts");
/* harmony import */ var _mapper003__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapper003 */ "./src/nes/mapper/mapper003.ts");
/* harmony import */ var _mapper004__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapper004 */ "./src/nes/mapper/mapper004.ts");
/* harmony import */ var _mapper007__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapper007 */ "./src/nes/mapper/mapper007.ts");
/* harmony import */ var _mapper010__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapper010 */ "./src/nes/mapper/mapper010.ts");
/* harmony import */ var _mapper016_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mapper016.ts */ "./src/nes/mapper/mapper016.ts");
/* harmony import */ var _mapper019__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mapper019 */ "./src/nes/mapper/mapper019.ts");
/* harmony import */ var _mapper023__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mapper023 */ "./src/nes/mapper/mapper023.ts");
/* harmony import */ var _mapper024__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mapper024 */ "./src/nes/mapper/mapper024.ts");
/* harmony import */ var _mapper032__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mapper032 */ "./src/nes/mapper/mapper032.ts");
/* harmony import */ var _mapper069__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mapper069 */ "./src/nes/mapper/mapper069.ts");
/* harmony import */ var _mapper073__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mapper073 */ "./src/nes/mapper/mapper073.ts");
/* harmony import */ var _mapper087__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mapper087 */ "./src/nes/mapper/mapper087.ts");
/* harmony import */ var _mapper075__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mapper075 */ "./src/nes/mapper/mapper075.ts");
/* harmony import */ var _mapper184__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mapper184 */ "./src/nes/mapper/mapper184.ts");

















const kMapperTable = {
    0: _mapper000__WEBPACK_IMPORTED_MODULE_0__["Mapper000"].create,
    1: _mapper001__WEBPACK_IMPORTED_MODULE_1__["Mapper001"].create,
    2: _mapper002__WEBPACK_IMPORTED_MODULE_2__["Mapper002"].create,
    3: _mapper003__WEBPACK_IMPORTED_MODULE_3__["Mapper003"].create,
    4: _mapper004__WEBPACK_IMPORTED_MODULE_4__["Mapper004"].create,
    7: _mapper007__WEBPACK_IMPORTED_MODULE_5__["Mapper007"].create,
    10: _mapper010__WEBPACK_IMPORTED_MODULE_6__["Mapper010"].create,
    16: _mapper016_ts__WEBPACK_IMPORTED_MODULE_7__["Mapper016"].create,
    19: _mapper019__WEBPACK_IMPORTED_MODULE_8__["Mapper019"].create,
    23: _mapper023__WEBPACK_IMPORTED_MODULE_9__["Mapper023"].create,
    24: _mapper024__WEBPACK_IMPORTED_MODULE_10__["Mapper024"].create,
    25: _mapper023__WEBPACK_IMPORTED_MODULE_9__["Mapper025"].create,
    26: _mapper024__WEBPACK_IMPORTED_MODULE_10__["Mapper026"].create,
    32: _mapper032__WEBPACK_IMPORTED_MODULE_11__["Mapper032"].create,
    69: _mapper069__WEBPACK_IMPORTED_MODULE_12__["Mapper069"].create,
    73: _mapper073__WEBPACK_IMPORTED_MODULE_13__["Mapper073"].create,
    75: _mapper075__WEBPACK_IMPORTED_MODULE_15__["Mapper075"].create,
    87: _mapper087__WEBPACK_IMPORTED_MODULE_14__["Mapper087"].create,
    88: _mapper004__WEBPACK_IMPORTED_MODULE_4__["Mapper088"].create,
    93: _mapper002__WEBPACK_IMPORTED_MODULE_2__["Mapper093"].create,
    95: _mapper004__WEBPACK_IMPORTED_MODULE_4__["Mapper095"].create,
    118: _mapper004__WEBPACK_IMPORTED_MODULE_4__["Mapper118"].create,
    184: _mapper184__WEBPACK_IMPORTED_MODULE_16__["Mapper184"].create,
    185: _mapper003__WEBPACK_IMPORTED_MODULE_3__["Mapper185"].create,
    206: _mapper004__WEBPACK_IMPORTED_MODULE_4__["Mapper004"].create,
};


/***/ }),

/***/ "./src/nes/nes.ts":
/*!************************!*\
  !*** ./src/nes/nes.ts ***!
  \************************/
/*! exports provided: Nes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nes", function() { return Nes; });
/* harmony import */ var _apu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apu */ "./src/nes/apu.ts");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bus */ "./src/nes/bus.ts");
/* harmony import */ var _cpu_cpu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cpu/cpu */ "./src/nes/cpu/cpu.ts");
/* harmony import */ var _ppu_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ppu/const */ "./src/nes/ppu/const.ts");
/* harmony import */ var _ppu_ppu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ppu/ppu */ "./src/nes/ppu/ppu.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/util */ "./src/util/util.ts");
/* harmony import */ var _mapper_mapper_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapper/mapper_table */ "./src/nes/mapper/mapper_table.ts");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_7__);
// NES: Nintendo Entertainment System








const RAM_SIZE = 0x0800;
const VBLANK_START = 241;
const VBLANK_NMI = 242;
const VBLANK_END = 261;
const VRETURN = 262;
const VCYCLE = (VRETURN * 341 / 3) | 0;
const OAMDMA = 0x4014;
function getHblankCount(cpuCycle) {
    return (cpuCycle * (3 / 341)) | 0;
}
function isRomValid(romData) {
    // Check header.
    if (!(romData[0] === 0x4e && romData[1] === 0x45 && romData[2] === 0x53 &&
        romData[3] === 0x1a))
        return false;
    return true;
}
function getMapperNo(romData) {
    return ((romData[6] >> 4) & 0x0f) | (romData[7] & 0xf0);
}
function loadPrgRom(romData) {
    const start = 16, size = romData[4] * (16 * 1024);
    const prg = romData.slice(start, start + size);
    return new Uint8Array(prg);
}
function loadChrRom(romData) {
    const start = 16 + romData[4] * (16 * 1024), size = romData[5] * (8 * 1024);
    const chr = romData.slice(start, start + size);
    return new Uint8Array(chr);
}
class Nes {
    constructor() {
        this.ram = new Uint8Array(RAM_SIZE);
        this.cycleCount = 0;
        this.prgRom = new Uint8Array(0);
        this.prgBank = [];
        this.apuChannelCount = 0;
        this.bus = new _bus__WEBPACK_IMPORTED_MODULE_1__["Bus"]();
        this.cpu = new _cpu_cpu__WEBPACK_IMPORTED_MODULE_2__["Cpu"](this.bus);
        this.ppu = new _ppu_ppu__WEBPACK_IMPORTED_MODULE_4__["Ppu"]();
        this.apu = new _apu__WEBPACK_IMPORTED_MODULE_0__["Apu"](() => { this.cpu.requestIrq(); });
        this.vblankCallback = (_leftV) => { };
        this.breakPointCallback = () => { };
        const mapperNo = 0;
        this.mapper = this.createMapper(mapperNo, -1);
        this.setMemoryMap();
    }
    static create() {
        return new Nes();
    }
    getPaletColorTable() {
        return _ppu_const__WEBPACK_IMPORTED_MODULE_3__["kColors"];
    }
    getBus() { return this.bus; }
    getCpu() { return this.cpu; }
    getPpu() { return this.ppu; }
    getCycleCount() { return this.cycleCount; }
    setVblankCallback(callback) {
        this.vblankCallback = callback;
    }
    setBreakPointCallback(callback) {
        this.breakPointCallback = callback;
    }
    setRomData(romData) {
        if (!isRomValid(romData))
            return 'Invalid format';
        const mapperNo = getMapperNo(romData);
        if (!(mapperNo in _mapper_mapper_table__WEBPACK_IMPORTED_MODULE_6__["kMapperTable"]))
            return `Mapper ${mapperNo} not supported`;
        this.prgRom = loadPrgRom(romData);
        this.ppu.setChrData(loadChrRom(romData));
        this.ppu.setMirrorMode((romData[6] & 1) === 0 ? 0 /* HORZ */ : 1 /* VERT */);
        this.cpu.deleteAllBreakPoints();
        this.setMemoryMap();
        const romHash = md5__WEBPACK_IMPORTED_MODULE_7__(romData);
        this.mapper = this.createMapper(mapperNo, this.prgRom.length, romHash);
        return true;
    }
    setMapper(mapper) {
        this.mapper = mapper;
    }
    save() {
        return {
            cpu: this.cpu.save(),
            ppu: this.ppu.save(),
            apu: this.apu.save(),
            mapper: this.mapper != null ? this.mapper.save() : null,
            ram: _util_util__WEBPACK_IMPORTED_MODULE_5__["default"].convertUint8ArrayToBase64String(this.ram),
        };
    }
    load(saveData) {
        this.reset();
        this.cpu.load(saveData.cpu);
        this.ppu.load(saveData.ppu);
        this.apu.load(saveData.apu);
        this.mapper.load(saveData.mapper);
        this.ram = _util_util__WEBPACK_IMPORTED_MODULE_5__["default"].convertBase64StringToUint8Array(saveData.ram);
    }
    reset() {
        this.ram.fill(0xff);
        this.cpu.reset();
        this.ppu.reset();
        this.apu.reset();
        this.cycleCount = 0;
        if (this.mapper != null)
            this.mapper.reset();
    }
    setPadStatus(no, status) {
        this.apu.setPadStatus(no, status);
    }
    runCycles(cycles) {
        try {
            let leftCycles = cycles;
            while (leftCycles > 0) {
                const c = this.step(leftCycles);
                leftCycles -= c;
                if (this.cpu.isPaused()) { // Hit break point.
                    this.breakPointCallback();
                    return 0;
                }
            }
            return -cycles;
        }
        catch (e) {
            this.cpu.pause(true);
            throw e;
        }
    }
    step(leftCycles) {
        const cycle = this.cpu.step();
        this.cycleCount = this.tryHblankEvent(this.cycleCount, cycle, leftCycles);
        return cycle;
    }
    getSoundChannelTypes() {
        const channels = this.apu.getChannelTypes();
        const extras = this.mapper.getExtraSoundChannelTypes();
        this.apuChannelCount = channels.length;
        return channels.concat(extras);
    }
    getSoundVolume(channel) {
        if (channel < this.apuChannelCount)
            return this.apu.getVolume(channel);
        return this.mapper.getSoundVolume(channel - this.apuChannelCount);
    }
    getSoundFrequency(channel) {
        if (channel < this.apuChannelCount)
            return this.apu.getFrequency(channel);
        return this.mapper.getSoundFrequency(channel - this.apuChannelCount);
    }
    getSoundDutyRatio(channel) {
        if (channel < this.apuChannelCount)
            return this.apu.getDutyRatio(channel);
        return this.mapper.getSoundDutyRatio(channel - this.apuChannelCount);
    }
    render(pixels) {
        this.ppu.render(pixels);
    }
    renderNameTable1(pixels, lineWidth, startX, startY, page) {
        this.ppu.renderNameTable1(pixels, lineWidth, startX, startY, page << 10);
    }
    renderPatternTable(pixels, lineWidth, colorGroups) {
        this.ppu.renderPattern(pixels, lineWidth, colorGroups);
    }
    setPrgBank(bank, page) {
        this.prgBank[bank] = page << 13;
    }
    createMapper(mapperNo, prgSize, romHash) {
        const mapperFunc = _mapper_mapper_table__WEBPACK_IMPORTED_MODULE_6__["kMapperTable"][mapperNo];
        return mapperFunc({
            bus: this.bus,
            cpu: this.cpu,
            ppu: this.ppu,
            prgBankCtrl: this,
            prgSize,
            romHash,
        });
    }
    readFromApu(adr) {
        return this.apu.read(adr);
    }
    writeToApu(adr, value) {
        switch (adr) {
            case OAMDMA:
                if (0 <= value && value <= 0x1f) { // RAM
                    this.ppu.copyWithDma(this.ram, value << 8);
                    // TODO: Consume CPU or GPU cycles.
                }
                else {
                    console.error(`OAMDMA not implemented except for RAM: ${_util_util__WEBPACK_IMPORTED_MODULE_5__["default"].hex(value, 2)}`);
                }
                break;
            default:
                this.apu.write(adr, value);
                break;
        }
    }
    setMemoryMap() {
        const bus = this.bus;
        bus.clearMemoryMap();
        bus.setReadMemory(0x2000, 0x3fff, (adr) => {
            const reg = adr & 7;
            return this.ppu.read(reg);
        });
        bus.setWriteMemory(0x2000, 0x3fff, (adr, value) => {
            const reg = adr & 7;
            this.ppu.write(reg, value);
        });
        bus.setReadMemory(0x4000, 0x5fff, (adr) => this.readFromApu(adr)); // APU
        bus.setWriteMemory(0x4000, 0x5fff, (adr, value) => this.writeToApu(adr, value)); // APU
        // PRG ROM
        const prgMask = (this.prgRom.length - 1) | 0;
        this.prgBank = [0x0000,
            0x2000,
            -0x4000 & prgMask,
            -0x2000 & prgMask]; // 0xe000~
        bus.setReadMemory(0x8000, 0xffff, (adr) => {
            adr = adr | 0;
            const bank = (adr - 0x8000) >> 13;
            const offset = (adr & ((1 << 13) - 1)) | 0;
            return this.prgRom[((this.prgBank[bank] | 0) + offset) & prgMask] | 0;
        });
        // RAM
        bus.setReadMemory(0x0000, 0x1fff, (adr) => this.ram[adr & (RAM_SIZE - 1)]);
        bus.setWriteMemory(0x0000, 0x1fff, (adr, value) => { this.ram[adr & (RAM_SIZE - 1)] = value; });
    }
    tryHblankEvent(cycleCount, cycle, leftCycles) {
        let cycleCount2 = cycleCount + cycle;
        const beforeHcount = getHblankCount(cycleCount);
        let hcount = getHblankCount(cycleCount2);
        if (hcount > beforeHcount) {
            this.ppu.setHcount(hcount);
            this.apu.onHblank(hcount);
            switch (hcount) {
                case VBLANK_START:
                    this.ppu.setVBlank();
                    this.vblankCallback((leftCycles / VCYCLE) | 0);
                    break;
                case VBLANK_NMI:
                    this.interruptVBlank();
                    break;
                case VBLANK_END:
                    this.ppu.clearVBlank();
                    break;
                case VRETURN:
                    cycleCount2 -= (VRETURN * 341 / 3) | 0;
                    this.ppu.setHcount(0);
                    break;
                default:
                    break;
            }
            this.mapper.onHblank(hcount);
        }
        return cycleCount2;
    }
    interruptVBlank() {
        if (!this.ppu.interruptEnable())
            return;
        this.interruptNmi();
    }
    interruptNmi() {
        this.cpu.nmi();
    }
}


/***/ }),

/***/ "./src/nes/ppu/const.ts":
/*!******************************!*\
  !*** ./src/nes/ppu/const.ts ***!
  \******************************/
/*! exports provided: kColors, kStaggered, kFlipXBits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kColors", function() { return kColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kStaggered", function() { return kStaggered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kFlipXBits", function() { return kFlipXBits; });
const kColors = Uint8Array.from([
    124, 124, 124,
    0, 0, 252,
    0, 0, 188,
    68, 40, 188,
    148, 0, 132,
    168, 0, 32,
    168, 16, 0,
    136, 20, 0,
    80, 48, 0,
    0, 120, 0,
    0, 104, 0,
    0, 88, 0,
    0, 64, 88,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    188, 188, 188,
    0, 120, 248,
    0, 88, 248,
    104, 68, 252,
    216, 0, 204,
    228, 0, 88,
    248, 56, 0,
    228, 92, 16,
    172, 124, 0,
    0, 184, 0,
    0, 168, 0,
    0, 168, 68,
    0, 136, 136,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    248, 248, 248,
    60, 188, 252,
    104, 136, 252,
    152, 120, 248,
    248, 120, 248,
    248, 88, 152,
    248, 120, 88,
    252, 160, 68,
    248, 184, 0,
    184, 248, 24,
    88, 216, 84,
    88, 248, 152,
    0, 232, 216,
    120, 120, 120,
    0, 0, 0,
    0, 0, 0,
    252, 252, 252,
    164, 228, 252,
    184, 184, 248,
    216, 184, 248,
    248, 184, 248,
    248, 164, 192,
    240, 208, 176,
    252, 224, 168,
    248, 216, 120,
    216, 248, 120,
    184, 248, 184,
    184, 248, 216,
    0, 252, 252,
    248, 216, 248,
    0, 0, 0,
    0, 0, 0,
]);
// Insert 0 between each bits: abcdefgh -> 0a0b0c0d0e0f0g0h
const kStaggered = (() => {
    const NBIT = 8;
    const N = 1 << NBIT;
    const array = new Uint16Array(N);
    for (let i = 0; i < N; ++i) {
        let d = 0;
        for (let j = 0; j < NBIT; ++j) {
            d <<= 2;
            if ((i & (1 << (NBIT - 1 - j))) !== 0)
                d |= 1;
        }
        array[i] = d;
    }
    return array;
})();
// Flip 8 bits horizontally: abcdefgh -> hgfedcba
const kFlipXBits = (() => {
    const NBIT = 8;
    const N = 1 << NBIT;
    const array = new Uint8Array(N);
    for (let i = 0; i < N; ++i) {
        let d = 0;
        for (let j = 0; j < NBIT; ++j) {
            d <<= 1;
            if ((i & (1 << j)) !== 0)
                d |= 1;
        }
        array[i] = d;
    }
    return array;
})();


/***/ }),

/***/ "./src/nes/ppu/hevent.ts":
/*!*******************************!*\
  !*** ./src/nes/ppu/hevent.ts ***!
  \*******************************/
/*! exports provided: HEventType, HEvents, HStatus, HStatusMgr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEventType", function() { return HEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEvents", function() { return HEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HStatus", function() { return HStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HStatusMgr", function() { return HStatusMgr; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/nes/const.ts");
// Horizontal line event, used in PPU.

var HEventType;
(function (HEventType) {
    HEventType[HEventType["DUMMY"] = 0] = "DUMMY";
    HEventType[HEventType["PPU_CTRL"] = 1] = "PPU_CTRL";
    HEventType[HEventType["PPU_MASK"] = 2] = "PPU_MASK";
    HEventType[HEventType["CHR_BANK_OFFSET"] = 3] = "CHR_BANK_OFFSET";
    HEventType[HEventType["MIRROR_MODE_BIT"] = 4] = "MIRROR_MODE_BIT";
    HEventType[HEventType["SCROLL_CURR"] = 5] = "SCROLL_CURR";
    HEventType[HEventType["SCROLL_FINE_X"] = 6] = "SCROLL_FINE_X";
})(HEventType || (HEventType = {}));
class HEventBuf {
    constructor() {
        this.count = 0;
        this.events = new Array();
    }
    clear() {
        this.count = 0;
    }
    add(hcount, type, value, index = -1) {
        const n = this.count;
        // Search an event which has same type at the hcount.
        for (let i = n; --i >= 0;) {
            const hevent = this.events[i];
            if (hevent.hcount !== hcount)
                break;
            if (hevent.type === type && hevent.index === index) {
                // Move to the last
                for (let j = i; ++j < n;)
                    this.events[j - 1] = this.events[j];
                this.events[n - 1] = hevent;
                hevent.value = value;
                return;
            }
        }
        if (n >= this.events.length) {
            const hevent = {
                type,
                value,
                index,
                hcount,
            };
            this.events.push(hevent);
        }
        else {
            const hevent = this.events[n];
            hevent.type = type;
            hevent.value = value;
            hevent.index = index;
            hevent.hcount = hcount;
        }
        ++this.count;
    }
}
class HEvents {
    constructor() {
        this.renderBuf = new HEventBuf();
        this.nextBuf = new HEventBuf();
    }
    clear() {
        this.renderBuf.clear();
        this.nextBuf.clear();
    }
    swap() {
        // Add sentinel: Ensure that current frame has an event at hline 240.
        this.nextBuf.add(_const__WEBPACK_IMPORTED_MODULE_0__["Const"].HEIGHT, 0 /* DUMMY */, 0);
        const tmp = this.renderBuf;
        this.renderBuf = this.nextBuf;
        this.nextBuf = tmp;
        this.nextBuf.clear();
        this.nextBuf.add(0, 0 /* DUMMY */, 0); // Ensure that next frame has an event at hline 0.
    }
    getCount() {
        return this.renderBuf.count - 1; // Last one is sentinel, so -1
    }
    getEvent(index) {
        return this.renderBuf.events[index];
    }
    getLastHcount() {
        const n = this.nextBuf.count;
        if (n <= 0)
            return -1;
        return this.nextBuf.events[n - 1].hcount;
    }
    add(hcount, type, value, index = -1) {
        this.nextBuf.add(hcount, type, value, index);
    }
}
class HStatus {
    constructor() {
        this.ppuCtrl = 0;
        this.ppuMask = 0;
        this.chrBankOffset = new Array(8);
        this.mirrorModeBit = 0x44; // 2bit x 4screen
        this.scrollCurr = 0;
        this.scrollFineX = 0;
        this.reset();
    }
    reset() {
        this.ppuCtrl = 0;
        this.ppuMask = 0;
        this.scrollCurr = 0;
        this.scrollFineX = 0;
        for (let i = 0; i < 8; ++i)
            this.chrBankOffset[i] = i << 10;
    }
    copy(h) {
        this.ppuCtrl = h.ppuCtrl;
        this.ppuMask = h.ppuMask;
        this.mirrorModeBit = h.mirrorModeBit;
        for (let i = 0; i < 8; ++i)
            this.chrBankOffset[i] = h.chrBankOffset[i];
        this.scrollCurr = h.scrollCurr;
        this.scrollFineX = h.scrollFineX;
    }
    set(type, value, index) {
        switch (type) {
            case 0 /* DUMMY */:
                break;
            case 1 /* PPU_CTRL */:
                if (this.ppuCtrl === value)
                    return false;
                this.ppuCtrl = value;
                break;
            case 2 /* PPU_MASK */:
                if (this.ppuMask === value)
                    return false;
                this.ppuMask = value;
                break;
            case 3 /* CHR_BANK_OFFSET */:
                if (this.chrBankOffset[index] === value)
                    return false;
                this.chrBankOffset[index] = value;
                break;
            case 4 /* MIRROR_MODE_BIT */:
                if (this.mirrorModeBit === value)
                    return false;
                this.mirrorModeBit = value;
                break;
            case 5 /* SCROLL_CURR */:
                if (this.scrollCurr === value)
                    return false;
                this.scrollCurr = value;
                break;
            case 6 /* SCROLL_FINE_X */:
                if (this.scrollFineX === value)
                    return false;
                this.scrollFineX = value;
                break;
            default:
                console.error(`ERROR: type=${type}`);
                return false;
        }
        return true;
    }
}
class HStatusMgr {
    constructor() {
        this.current = new HStatus();
        this.lastFrame = new HStatus();
        this.save = new HStatus();
    }
    reset() {
        this.current.reset();
        this.lastFrame.reset();
        this.save.reset();
    }
    swap() {
        // Move save to lastFrame,
        // and keep current status into save as a next frame's start status.
        const tmp = this.lastFrame;
        this.lastFrame = this.save;
        this.save = tmp;
        this.save.copy(this.current);
    }
}


/***/ }),

/***/ "./src/nes/ppu/ppu.ts":
/*!****************************!*\
  !*** ./src/nes/ppu/ppu.ts ***!
  \****************************/
/*! exports provided: Ppu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ppu", function() { return Ppu; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/nes/const.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./src/nes/ppu/const.ts");
/* harmony import */ var _hevent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hevent */ "./src/nes/ppu/hevent.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/util */ "./src/util/util.ts");
// PPU: Picutre Processing Unit
// PPU scrolling
// https://wiki.nesdev.com/w/index.php/PPU_scrolling




const REGISTER_COUNT = 8;
const VRAM_SIZE = 0x4000;
const OAM_SIZE = 0x0100;
const MAX_SPRITE_ON_SCANLINE = 8;
var PpuReg;
(function (PpuReg) {
    PpuReg[PpuReg["CTRL"] = 0] = "CTRL";
    PpuReg[PpuReg["MASK"] = 1] = "MASK";
    PpuReg[PpuReg["STATUS"] = 2] = "STATUS";
    PpuReg[PpuReg["OAMADDR"] = 3] = "OAMADDR";
    PpuReg[PpuReg["OAMDATA"] = 4] = "OAMDATA";
    PpuReg[PpuReg["SCROLL"] = 5] = "SCROLL";
    PpuReg[PpuReg["ADDR"] = 6] = "ADDR";
    PpuReg[PpuReg["DATA"] = 7] = "DATA";
})(PpuReg || (PpuReg = {}));
// PPUCTRL ($2000)
const VINT_ENABLE = 0x80; // V: 1=Trigger NMI when VBLANK start
const SPRITE_SIZE = 0x20;
const BG_PATTERN_TABLE_ADDRESS = 0x10;
const SPRITE_PATTERN_TABLE_ADDRESS = 0x08;
const INCREMENT_MODE = 0x04; // I: 1=+32, 0=+1
const BASE_NAMETABLE_ADDRESS = 0x03;
// PPUMASK ($2001)
const SHOW_SPRITE = 0x10;
const SHOW_BG = 0x08;
const SHOW_SPRITE_LEFT_8PX = 0x04;
const SHOW_BG_LEFT_8PX = 0x02;
const GREYSCALE = 0x01;
// PPUSTATUS ($2002)
const VBLANK = 0x80;
const SPRITE0HIT = 0x40;
const SPRITE_OVERFLOW = 0x20;
// OAMADDR ($2003)
// OAMDATA ($2004)
const MAX_SPRITE = 64;
// PPUSCROLL ($2005)
// PPUADDR ($2006)
// PPUDATA ($2007)
// Sprite
const FLIP_HORZ = 0x40;
const FLIP_VERT = 0x80;
// Palette
const PALET_ADR = 0x3f00;
const PALET_END_ADR = 0x3fff;
const kMirrorModeBitTable = [0x50, 0x44, 0x00, 0x55, 0x05];
const kInitialPalette = [
    0x09, 0x01, 0x00, 0x01, 0x00, 0x02, 0x02, 0x0d, 0x08, 0x10, 0x08, 0x24, 0x00, 0x00, 0x04, 0x2c,
    0x09, 0x01, 0x34, 0x03, 0x00, 0x04, 0x00, 0x14, 0x08, 0x3a, 0x00, 0x02, 0x00, 0x20, 0x2c, 0x08,
];
const SPRITE_MASK = 0x80;
const kSpritePriorityMask = [SPRITE_MASK, 0xff];
function getNameTable(baseNameTable, bx, by, mirrorModeBit) {
    const page = (((bx >> 5) & 1) + (((by / 30) & 1) << 1)) ^ baseNameTable; // 0~3
    const m = (mirrorModeBit << (10 - (page << 1))) & 0x0c00;
    return (0x2000 + m) | 0;
}
function getPpuAddr(adr, mirrorModeBit) {
    adr &= 0x3fff;
    if (0x3000 <= adr && adr < 0x3f00)
        adr -= 0x1000; // Map 0x3000~3eff to 0x2000~
    if (0x2000 <= adr && adr < 0x3000) {
        const page = (adr >> 10) & 3;
        const m = (mirrorModeBit << (10 - (page << 1))) & 0x0c00;
        return (adr & 0xf3ff) | m;
    }
    if (PALET_ADR <= adr && adr <= PALET_END_ADR) {
        adr &= 0xff1f; // Repeat 0x3f00~0x3f1f --> 0x3fff
        // "Addresses $3F10/$3F14/$3F18/$3F1C are mirrors of $3F00/$3F04/$3F08/$3F0C."
        // http://wiki.nesdev.com/w/index.php/PPU_palettes#Memory_Map
        if ((adr & 0xfff3) === 0x3f10)
            adr &= 0xffef;
    }
    return adr;
}
function incPpuAddr(ppuAddr, ppuCtrl) {
    const add = ((ppuCtrl & INCREMENT_MODE) !== 0) ? 32 : 1;
    return (ppuAddr + add) & (VRAM_SIZE - 1);
}
function getBgPatternTableAddress(ppuCtrl) {
    return (ppuCtrl & BG_PATTERN_TABLE_ADDRESS) << 8;
}
function getBgPat(chrData, chridx, py, chrBankOffset) {
    const idx = chridx + py;
    const bank = (idx >> 10) & 7;
    const p = chrBankOffset[bank] + (idx & 0x03ff);
    return _const__WEBPACK_IMPORTED_MODULE_1__["kStaggered"][chrData[p]] | (_const__WEBPACK_IMPORTED_MODULE_1__["kStaggered"][chrData[p + 8]] << 1);
}
function getSpritePat(chrData, chridx, py, flipHorz, chrBankOffset) {
    const idx = chridx + (py & 7) + ((py & 8) << 1);
    const bank = (idx >> 10) & 7;
    const p = chrBankOffset[bank] + (idx & 0x03ff);
    let patHi = chrData[p + 8];
    let patLo = chrData[p];
    if (flipHorz) {
        patHi = _const__WEBPACK_IMPORTED_MODULE_1__["kFlipXBits"][patHi];
        patLo = _const__WEBPACK_IMPORTED_MODULE_1__["kFlipXBits"][patLo];
    }
    return _const__WEBPACK_IMPORTED_MODULE_1__["kStaggered"][patLo] | (_const__WEBPACK_IMPORTED_MODULE_1__["kStaggered"][patHi] << 1);
}
function clearBg(offscreen, hline0, hline1, x) {
    const LINE_BYTES = _const__WEBPACK_IMPORTED_MODULE_0__["Const"].WIDTH;
    for (let i = hline0; i < hline1; ++i) {
        let index = i * LINE_BYTES;
        for (let j = 0; j < x; ++j)
            offscreen[index + j] = 0;
    }
}
function copyOffscreenToPixels(offscreen, pixels, greyscale, vram) {
    const n = _const__WEBPACK_IMPORTED_MODULE_0__["Const"].WIDTH * _const__WEBPACK_IMPORTED_MODULE_0__["Const"].HEIGHT;
    let index = 0;
    const colorMask = greyscale ? 0x20 : 0x3f;
    for (let i = 0; i < n; ++i) {
        const pal = offscreen[i] & 0x1f;
        const col = vram[PALET_ADR + pal] & colorMask;
        const c = col * 3;
        pixels[index + 0] = _const__WEBPACK_IMPORTED_MODULE_1__["kColors"][c];
        pixels[index + 1] = _const__WEBPACK_IMPORTED_MODULE_1__["kColors"][c + 1];
        pixels[index + 2] = _const__WEBPACK_IMPORTED_MODULE_1__["kColors"][c + 2];
        index += 4;
    }
}
class Ppu {
    constructor() {
        this.suppressSpriteFlicker = true;
        this.chrData = new Uint8Array(0);
        this.regs = new Uint8Array(REGISTER_COUNT);
        this.vram = new Uint8Array(VRAM_SIZE);
        this.oam = new Uint8Array(OAM_SIZE); // Object Attribute Memory
        this.mirrorMode = 1 /* VERT */;
        this.hcount = 0;
        this.latch = 0;
        this.ppuAddr = 0;
        this.bufferedValue = 0;
        this.hevents = new _hevent__WEBPACK_IMPORTED_MODULE_2__["HEvents"]();
        this.hstatusMgr = new _hevent__WEBPACK_IMPORTED_MODULE_2__["HStatusMgr"]();
        this.scrollTemp = 0;
        this.scrollLatch = 0;
        this.hclipZero = false;
        this.offscreen = new Uint8Array(_const__WEBPACK_IMPORTED_MODULE_0__["Const"].WIDTH * _const__WEBPACK_IMPORTED_MODULE_0__["Const"].HEIGHT);
        this.reset();
    }
    reset() {
        this.regs.fill(0);
        this.vram.fill(0);
        this.oam.fill(0);
        this.hcount = 0;
        this.ppuAddr = 0;
        this.latch = 0;
        this.bufferedValue = 0;
        this.hevents.clear();
        this.hstatusMgr.reset();
        this.offscreen.fill(0);
        for (let i = 0; i < 16 * 2; ++i)
            this.vram[PALET_ADR + i] = kInitialPalette[i];
    }
    save() {
        const data = {
            regs: _util_util__WEBPACK_IMPORTED_MODULE_3__["default"].convertUint8ArrayToBase64String(this.regs),
            oam: _util_util__WEBPACK_IMPORTED_MODULE_3__["default"].convertUint8ArrayToBase64String(this.oam),
            mirrorMode: this.mirrorMode,
        };
        if (this.isChrRam()) {
            // Save VRAM including ChrRAM
            data.vram = _util_util__WEBPACK_IMPORTED_MODULE_3__["default"].convertUint8ArrayToBase64String(this.vram);
        }
        else {
            // Save VRAM except ChrROM
            data.vramHigh = _util_util__WEBPACK_IMPORTED_MODULE_3__["default"].convertUint8ArrayToBase64String(this.vram.subarray(0x2000));
        }
        return data;
    }
    load(saveData) {
        const isRam = this.isChrRam();
        this.regs = _util_util__WEBPACK_IMPORTED_MODULE_3__["default"].convertBase64StringToUint8Array(saveData.regs);
        this.oam = _util_util__WEBPACK_IMPORTED_MODULE_3__["default"].convertBase64StringToUint8Array(saveData.oam);
        this.mirrorMode = saveData.mirrorMode;
        if (isRam) {
            this.vram = _util_util__WEBPACK_IMPORTED_MODULE_3__["default"].convertBase64StringToUint8Array(saveData.vram);
            this.chrData = this.vram;
        }
        else {
            const vramHigh = _util_util__WEBPACK_IMPORTED_MODULE_3__["default"].convertBase64StringToUint8Array(saveData.vramHigh);
            for (let i = 0; i < vramHigh.length; ++i)
                this.vram[i + 0x2000] = vramHigh[i];
        }
        this.hstatusMgr.current.set(1 /* PPU_CTRL */, this.regs[0 /* CTRL */], -1);
        this.hstatusMgr.current.set(2 /* PPU_MASK */, this.regs[1 /* MASK */], -1);
        this.hstatusMgr.current.set(4 /* MIRROR_MODE_BIT */, kMirrorModeBitTable[this.mirrorMode], -1);
    }
    setChrData(chrData) {
        const isRam = !(chrData && chrData.length > 0);
        if (isRam)
            this.chrData = this.vram;
        else
            this.chrData = chrData;
    }
    setChrBank(value) {
        const base = value << 3;
        for (let i = 0; i < 8; ++i)
            this.setChrBankOffset(i, base + i);
    }
    setChrBankOffset(bank, value) {
        const max = this.chrData.length;
        const offset = (value << 10) & (max - 1);
        this.incScrollCounter();
        this.addHevent(3 /* CHR_BANK_OFFSET */, offset, bank);
    }
    getMirrorMode() {
        return this.mirrorMode;
    }
    setMirrorMode(mode) {
        this.mirrorMode = mode;
        const bit = kMirrorModeBitTable[mode];
        this.incScrollCounter();
        this.addHevent(4 /* MIRROR_MODE_BIT */, bit);
    }
    read(reg) {
        let result = this.regs[reg];
        switch (reg) {
            case 2 /* STATUS */:
                this.regs[2 /* STATUS */] &= ~VBLANK;
                this.latch = 0;
                break;
            case 4 /* OAMDATA */:
                result = this.oam[this.regs[3 /* OAMADDR */]];
                break;
            case 7 /* DATA */:
                {
                    const ppuAddr = this.ppuAddr;
                    const addr = getPpuAddr(ppuAddr, this.hstatusMgr.current.mirrorModeBit);
                    if (PALET_ADR <= addr && addr <= PALET_END_ADR) {
                        result = this.readPpuDirect(addr); // Palette read shouldn't be buffered like other VRAM
                        // Palette read should also read VRAM into read buffer
                        this.bufferedValue = this.readPpuDirect(getPpuAddr(ppuAddr - 0x1000, this.hstatusMgr.current.mirrorModeBit));
                    }
                    else {
                        result = this.bufferedValue;
                        this.bufferedValue = this.readPpuDirect(addr);
                    }
                    this.ppuAddr = incPpuAddr(ppuAddr, this.regs[0 /* CTRL */]);
                }
                break;
            default:
                break;
        }
        return result;
    }
    write(reg, value) {
        if (reg === 2 /* STATUS */) {
            value &= ~(VBLANK | SPRITE0HIT | SPRITE_OVERFLOW);
        }
        this.regs[reg] = value;
        switch (reg) {
            case 0 /* CTRL */:
                {
                    this.incScrollCounter();
                    this.scrollTemp = (this.scrollTemp & ~0x0c00) | ((value & BASE_NAMETABLE_ADDRESS) << 10);
                    this.scrollLatch = this.scrollTemp;
                    // At dot 257 of each scanline:
                    const scrollCurr = ((this.hstatusMgr.current.scrollCurr & ~0x041f) |
                        (this.scrollTemp & 0x041f));
                    // this.scrollCurr = scrollCurr
                    // if (this.hcount >= 280 && this.hcount < 304) {
                    //   this.scrollCurr = (this.scrollCurr & ~0x7be0) | (this.scrollTemp & 0x7be0)
                    // }
                    this.addHevent(1 /* PPU_CTRL */, this.regs[0 /* CTRL */]);
                    this.addHevent(5 /* SCROLL_CURR */, scrollCurr);
                }
                break;
            case 1 /* MASK */:
                this.incScrollCounter();
                this.addHevent(2 /* PPU_MASK */, this.regs[1 /* MASK */]);
                break;
            case 4 /* OAMDATA */:
                {
                    const oamAddr = this.regs[3 /* OAMADDR */];
                    this.oam[oamAddr] = value;
                    this.regs[3 /* OAMADDR */] = (oamAddr + 1) & 0xff;
                }
                break;
            case 5 /* SCROLL */:
                this.incScrollCounter();
                if (this.latch === 0) {
                    this.scrollTemp = (this.scrollTemp & ~0x001f) | (value >> 3);
                    this.scrollLatch = this.scrollTemp;
                    this.addHevent(6 /* SCROLL_FINE_X */, value & 7);
                    // At dot 257 of each scanline:
                    const scrollCurr = ((this.hstatusMgr.current.scrollCurr & ~0x041f) |
                        (this.scrollTemp & 0x041f));
                    this.addHevent(5 /* SCROLL_CURR */, scrollCurr);
                }
                else {
                    this.scrollTemp = ((this.scrollTemp & ~0x73e0) | ((value & 0xf8) << (5 - 3)) |
                        ((value & 0x07) << 12));
                    this.scrollLatch = this.scrollTemp;
                    if (this.hclipZero)
                        this.addHevent(5 /* SCROLL_CURR */, this.scrollTemp);
                }
                this.latch = 1 - this.latch;
                break;
            case 6 /* ADDR */:
                if (this.latch === 0) {
                    this.scrollTemp = (this.scrollTemp & ~0x7f00) | ((value & 0x3f) << 8);
                    this.scrollLatch = this.scrollTemp;
                }
                else {
                    this.scrollTemp = (this.scrollTemp & ~0x00ff) | value;
                    this.scrollLatch = this.scrollTemp;
                    this.ppuAddr = this.scrollTemp;
                    this.addHevent(5 /* SCROLL_CURR */, this.scrollTemp);
                }
                this.latch = 1 - this.latch;
                break;
            case 7 /* DATA */:
                {
                    const addr = getPpuAddr(this.ppuAddr, this.hstatusMgr.current.mirrorModeBit);
                    this.vram[addr] = value;
                    this.ppuAddr = incPpuAddr(this.ppuAddr, this.regs[0 /* CTRL */]);
                }
                break;
            default:
                break;
        }
    }
    copyWithDma(array, start) {
        const dst = this.oam;
        let j = this.regs[3 /* OAMADDR */];
        for (let i = 0; i < 256; ++i) {
            dst[j] = array[start + i];
            j = (j + 1) & 255;
        }
        // TODO: Block CPU.
    }
    setVBlank() {
        this.regs[2 /* STATUS */] = this.regs[2 /* STATUS */] | VBLANK;
        this.hevents.swap();
        this.hstatusMgr.swap();
        this.hclipZero = true;
    }
    clearVBlank() {
        this.regs[2 /* STATUS */] &= ~(VBLANK | SPRITE0HIT);
        this.addHevent(5 /* SCROLL_CURR */, this.scrollLatch);
    }
    interruptEnable() {
        return (this.regs[0 /* CTRL */] & VINT_ENABLE) !== 0;
    }
    getSpritePatternTableAddress() {
        if ((this.regs[0 /* CTRL */] & SPRITE_SIZE) === 0)
            return ((this.regs[0 /* CTRL */] & SPRITE_PATTERN_TABLE_ADDRESS) << 9);
        return 0;
    }
    setHcount(hcount) {
        this.hcount = hcount;
        this.checkSprite0Hit(hcount);
        if (this.hclipZero && hcount < _const__WEBPACK_IMPORTED_MODULE_0__["Const"].HEIGHT)
            this.hclipZero = false;
    }
    render(pixels) {
        const h = this.hstatusMgr.lastFrame;
        const n = this.hevents.getCount();
        let sprChrStart = 0;
        for (let i = 0; i < n; ++i) {
            const hevent = this.hevents.getEvent(i);
            h.set(hevent.type, hevent.value, hevent.index);
            const hline0 = hevent.hcount;
            const hline1 = this.hevents.getEvent(i + 1).hcount;
            if (hline0 >= hline1)
                continue;
            // BG
            if ((h.ppuMask & SHOW_BG) === 0) {
                clearBg(this.offscreen, hline0, hline1, _const__WEBPACK_IMPORTED_MODULE_0__["Const"].WIDTH);
            }
            else {
                const baseNameTable = (h.scrollCurr & 0x0c00) >> 10;
                const bgChrStart = getBgPatternTableAddress(h.ppuCtrl);
                let x0 = 0;
                if ((h.ppuMask & SHOW_BG_LEFT_8PX) === 0) {
                    x0 = 8;
                    clearBg(this.offscreen, hline0, hline1, x0);
                }
                const scrollX = h.scrollFineX | ((h.scrollCurr & 0x001f) << 3);
                const scrollY = ((h.scrollCurr & 0x7000) >> 12) | ((h.scrollCurr & 0x03e0) >> (5 - 3));
                this.renderBg(scrollX, scrollY, baseNameTable, hline0, hline1, x0, h.chrBankOffset, h.mirrorModeBit, bgChrStart);
            }
            // Sprite
            if ((h.ppuMask & SHOW_SPRITE) !== 0) {
                if ((h.ppuCtrl & SPRITE_SIZE) === 0)
                    sprChrStart = (h.ppuCtrl & SPRITE_PATTERN_TABLE_ADDRESS) << 9;
                const x0 = (h.ppuMask & SHOW_SPRITE_LEFT_8PX) ? 0 : 8;
                this.renderSprite(hline0, hline1, x0, h.chrBankOffset, sprChrStart);
            }
        }
        const greyscale = (this.regs[1 /* MASK */] & GREYSCALE) !== 0;
        copyOffscreenToPixels(this.offscreen, pixels, greyscale, this.vram);
    }
    renderPattern(pixels, lineWidth, colorGroups) {
        const W = 8;
        const invert = (this.regs[0 /* CTRL */] & SPRITE_PATTERN_TABLE_ADDRESS) === 0 ? 1 : 0;
        const pattern = new Uint16Array(W);
        for (let i = 0; i < 2; ++i) {
            const b = i ^ invert;
            const paletHigh = ((colorGroups[b] << 2) | (b << 4)) | 0;
            const startX = i * (W * 16);
            for (let by = 0; by < 16; ++by) {
                for (let bx = 0; bx < 16; ++bx) {
                    const chridx = (bx + by * 16 + i * 256) * 16;
                    for (let py = 0; py < W; ++py) {
                        const idx = chridx + py;
                        pattern[py] = ((_const__WEBPACK_IMPORTED_MODULE_1__["kStaggered"][this.readPpuDirect(idx + 8)] << 1) |
                            _const__WEBPACK_IMPORTED_MODULE_1__["kStaggered"][this.readPpuDirect(idx)]);
                    }
                    const col0 = this.getPalet(paletHigh);
                    const clearR = _const__WEBPACK_IMPORTED_MODULE_1__["kColors"][col0 * 3 + 0];
                    const clearG = _const__WEBPACK_IMPORTED_MODULE_1__["kColors"][col0 * 3 + 1];
                    const clearB = _const__WEBPACK_IMPORTED_MODULE_1__["kColors"][col0 * 3 + 2];
                    this.render8x8Chip(pixels, (by * W) * lineWidth + bx * W + startX, pattern, paletHigh, clearR, clearG, clearB, lineWidth);
                }
            }
        }
    }
    writePpuDirect(addr, value) {
        if (addr >= 0x2000) {
            this.vram[addr] = value;
        }
        else {
            const bankOffset = this.hstatusMgr.current.chrBankOffset[(addr >> 10) & 7];
            this.chrData[(addr & 0x3ff) + bankOffset] = value;
        }
    }
    dumpVram(start, count) {
        const mem = new Array();
        for (let i = 0; i < count; ++i) {
            mem.push(this.vram[getPpuAddr(start + i, this.hstatusMgr.current.mirrorModeBit)]);
        }
        for (let i = 0; i < count; i += 16) {
            const line = mem.splice(0, 16).map(x => _util_util__WEBPACK_IMPORTED_MODULE_3__["default"].hex(x, 2)).join(' ');
            console.log(`${_util_util__WEBPACK_IMPORTED_MODULE_3__["default"].hex(start + i, 4)}: ${line}`);
        }
    }
    renderNameTable1(pixels, lineWidth, startX, startY, nameTableOffset) {
        const W = 8;
        const chrStart = getBgPatternTableAddress(this.regs[0 /* CTRL */]);
        const vram = this.vram;
        const clearColor = this.getPalet(0); // Universal background color
        const clearR = _const__WEBPACK_IMPORTED_MODULE_1__["kColors"][clearColor * 3 + 0];
        const clearG = _const__WEBPACK_IMPORTED_MODULE_1__["kColors"][clearColor * 3 + 1];
        const clearB = _const__WEBPACK_IMPORTED_MODULE_1__["kColors"][clearColor * 3 + 2];
        const pattern = new Uint16Array(W);
        for (let by = 0; by < _const__WEBPACK_IMPORTED_MODULE_0__["Const"].HEIGHT / W; ++by) {
            const ay = by % 30;
            for (let bx = 0; bx < _const__WEBPACK_IMPORTED_MODULE_0__["Const"].WIDTH / W; ++bx) {
                const ax = bx & 31;
                const nameTable = (getNameTable(0, bx, by, this.hstatusMgr.current.mirrorModeBit) +
                    nameTableOffset);
                const name = vram[nameTable + ax + (ay << 5)];
                const chridx = name * 16 + chrStart;
                const palShift = (ax & 2) + ((ay & 2) << 1);
                const atrBlk = (ax >> 2) + ((ay << 1) & 0x0f8);
                const attributeTable = nameTable + 0x3c0;
                const paletHigh = ((vram[attributeTable + atrBlk] >> palShift) & 3) << 2;
                for (let py = 0; py < W; ++py)
                    pattern[py] = getBgPat(this.chrData, chridx, py, this.hstatusMgr.current.chrBankOffset);
                this.render8x8Chip(pixels, (by * W + startY) * lineWidth + bx * W + startX, pattern, paletHigh, clearR, clearG, clearB, lineWidth);
            }
        }
    }
    getPalet(pal) {
        return this.vram[PALET_ADR + (pal & 31)] & 0x3f;
    }
    getReg(index) {
        return this.regs[index];
    }
    isChrRam() {
        return this.chrData === this.vram;
    }
    renderBg(scrollX, scrollY, baseNameTable, hline0, hline1, x0, chrBankOffset, mirrorModeBit, chrStart) {
        scrollX |= 0;
        scrollY |= 0;
        hline0 |= 0;
        hline1 |= 0;
        x0 |= 0;
        mirrorModeBit |= 0;
        const W = 8;
        const LINE_WIDTH = _const__WEBPACK_IMPORTED_MODULE_0__["Const"].WIDTH | 0;
        const vram = this.vram;
        const offscreen = this.offscreen;
        if (scrollY >= 240)
            scrollY = (scrollY - 256) | 0;
        const fineX = scrollX & 7;
        const coarseX = scrollX >> 3;
        for (let yy = hline0; yy < hline1; ++yy) {
            const yyy = yy - hline0 + scrollY;
            const by = ((yyy >> 3) + 60) % 60;
            const ay = by % 30;
            for (let bbx = 0; bbx < _const__WEBPACK_IMPORTED_MODULE_0__["Const"].WIDTH / W + 1; ++bbx) {
                const bx = (bbx + coarseX) & 63;
                const ax = bx & 31;
                const nameTable = getNameTable(baseNameTable, bx, by, mirrorModeBit) | 0;
                const name = vram[nameTable + ax + (ay << 5)];
                const chridx = (name << 4) + chrStart;
                const palShift = (ax & 2) + ((ay & 2) << 1);
                const atrBlk = (ax >> 2) + ((ay << 1) & 0x0f8);
                const attributeTable = (nameTable + 0x3c0) | 0;
                const paletHigh = (((vram[attributeTable + atrBlk] >> palShift) & 3) << 2) | 0;
                const px0 = (bbx * W - fineX) | 0;
                const pxStart = Math.max(x0 - px0, 0) | 0;
                const pxEnd = Math.min(_const__WEBPACK_IMPORTED_MODULE_0__["Const"].WIDTH - px0, W) | 0;
                const pat = getBgPat(this.chrData, chridx, yyy & 7, chrBankOffset);
                for (let px = pxStart; px < pxEnd; ++px) {
                    const xx = (px + px0) | 0;
                    let pal = ((pat >> ((W - 1) * 2 - (px << 1))) & 3) | 0;
                    if (pal !== 0)
                        pal |= paletHigh;
                    const index = yy * LINE_WIDTH + xx;
                    offscreen[index] = pal;
                }
            }
        }
    }
    isSprite8x16() {
        return (this.regs[0 /* CTRL */] & SPRITE_SIZE) !== 0;
    }
    renderSprite(hline0, hline1, x0, chrBankOffset, chrStart) {
        const W = 8;
        const LINE_WIDTH = _const__WEBPACK_IMPORTED_MODULE_0__["Const"].WIDTH;
        const PALET = 0x03;
        const offscreen = this.offscreen;
        const oam = this.oam;
        const isSprite8x16 = this.isSprite8x16();
        const sh = isSprite8x16 ? 16 : 8;
        for (let h = hline0; h < hline1; ++h) {
            let n = 0;
            for (let i = 0; i < MAX_SPRITE; ++i) {
                const y = oam[i * 4] + 1;
                if (h < y || h >= y + sh)
                    continue;
                const oamIndex = oam[i * 4 + 1];
                const attr = oam[i * 4 + 2];
                const flipVert = (attr & FLIP_VERT) !== 0;
                const flipHorz = (attr & FLIP_HORZ) !== 0;
                const x = oam[i * 4 + 3];
                const priorityMask = kSpritePriorityMask[(attr >> 5) & 1];
                const chridx = (isSprite8x16
                    ? (oamIndex & 0xfe) * 16 + ((oamIndex & 1) << 12)
                    : oamIndex * 16 + chrStart);
                const paletHigh = (((attr & PALET) << 2) | (0x10 | SPRITE_MASK));
                const py = h - y;
                const px0 = Math.max(x0 - x, 0);
                const px1 = Math.min(_const__WEBPACK_IMPORTED_MODULE_0__["Const"].WIDTH - x, W);
                const ppy = flipVert ? (sh - 1) - py : py;
                const pat = getSpritePat(this.chrData, chridx, ppy, flipHorz, chrBankOffset);
                for (let px = px0; px < px1; ++px) {
                    const pal = (pat >> ((W - 1 - px) << 1)) & 3;
                    if (pal === 0)
                        continue;
                    const pixelIndex = (y + py) * LINE_WIDTH + (x + px);
                    if ((offscreen[pixelIndex] & priorityMask) !== 0) {
                        offscreen[pixelIndex] |= SPRITE_MASK;
                        continue;
                    }
                    offscreen[pixelIndex] = paletHigh + pal;
                }
                if (++n >= MAX_SPRITE_ON_SCANLINE && !this.suppressSpriteFlicker)
                    break;
            }
        }
    }
    checkSprite0Hit(hcount) {
        if ((this.regs[2 /* STATUS */] & SPRITE0HIT) !== 0 ||
            (this.regs[1 /* MASK */] & (SHOW_BG | SHOW_SPRITE)) !== (SHOW_BG | SHOW_SPRITE))
            return;
        const sprite0y = this.oam[0];
        if (hcount < sprite0y || hcount >= sprite0y + 16)
            return;
        const sprite0x = this.oam[3];
        if (sprite0x >= 255)
            return;
        const dy = this.getNonEmptySprite0Line();
        if (dy < 0 || hcount !== sprite0y + dy)
            return;
        this.regs[2 /* STATUS */] |= SPRITE0HIT;
    }
    getNonEmptySprite0Line() {
        const oam = this.oam;
        const chrStart = this.getSpritePatternTableAddress();
        const isSprite8x16 = this.isSprite8x16();
        const h = isSprite8x16 ? 16 : 8;
        const i = 0;
        const index = oam[i * 4 + 1];
        const attr = oam[i * 4 + 2];
        const flipVert = (attr & FLIP_VERT) !== 0;
        const chridx = (isSprite8x16
            ? (index & 0xfe) * 16 + ((index & 1) << 12)
            : index * 16 + chrStart);
        for (let py = 0; py < h; ++py) {
            const ppy = flipVert ? (h - 1) - py : py;
            const pat = getSpritePat(this.chrData, chridx, ppy, false, this.hstatusMgr.current.chrBankOffset);
            if (pat !== 0)
                return py;
        }
        return -1;
    }
    addHevent(type, value, index = -1) {
        // Apply immediately to the current state.
        if (!this.hstatusMgr.current.set(type, value, index))
            return;
        let hcount = this.hcount + 1;
        if (hcount >= _const__WEBPACK_IMPORTED_MODULE_0__["Const"].HEIGHT) {
            if (this.hclipZero)
                hcount = 0;
            else
                hcount = _const__WEBPACK_IMPORTED_MODULE_0__["Const"].HEIGHT;
        }
        this.hevents.add(hcount, type, value, index);
    }
    incScrollCounter() {
        const lastHcount = this.hevents.getLastHcount();
        if (lastHcount < 0)
            return;
        const hcount = this.hcount < _const__WEBPACK_IMPORTED_MODULE_0__["Const"].HEIGHT - 1 ? this.hcount + 1 : 0;
        const dy = hcount - lastHcount;
        if (dy <= 0)
            return;
        const inc = (t) => {
            let pageY = ((t >> 11) & 1) * 240;
            let y = ((t & 0x03e0) >> (5 - 3)) | ((t >> 12) & 7);
            if (y >= 240)
                y -= 256;
            const ny = pageY + y + dy;
            const p = (ny / 240) & 1;
            const sy = ny % 240;
            return (t & ~0x7be0) | ((sy & 0xf8) << (5 - 3)) | ((sy & 0x07) << 12) | (p << 11);
        };
        this.scrollTemp = inc(this.scrollTemp);
        this.addHevent(5 /* SCROLL_CURR */, inc(this.hstatusMgr.current.scrollCurr));
    }
    readPpuDirect(addr) {
        if (addr >= 0x2000) {
            return this.vram[addr];
        }
        else {
            const bankOffset = this.hstatusMgr.current.chrBankOffset[(addr >> 10) & 7];
            return this.chrData[(addr & 0x3ff) + bankOffset];
        }
    }
    // No clipping, debug purpose.
    render8x8Chip(pixels, startOffset, pattern, paletHigh, clearR, clearG, clearB, lineWidth) {
        const W = 8;
        for (let py = 0; py < W; ++py) {
            const pat = pattern[py];
            for (let px = 0; px < W; ++px) {
                const pal = (pat >> ((W - 1) * 2 - (px << 1))) & 3;
                let r = clearR, g = clearG, b = clearB;
                if (pal !== 0) {
                    const col = this.getPalet(paletHigh | pal);
                    const c = col * 3;
                    r = _const__WEBPACK_IMPORTED_MODULE_1__["kColors"][c];
                    g = _const__WEBPACK_IMPORTED_MODULE_1__["kColors"][c + 1];
                    b = _const__WEBPACK_IMPORTED_MODULE_1__["kColors"][c + 2];
                }
                const index = (py * lineWidth + px + startOffset) * 4;
                pixels[index + 0] = r;
                pixels[index + 1] = g;
                pixels[index + 2] = b;
            }
        }
    }
}


/***/ }),

/***/ "./src/nes/ppu/types.ts":
/*!******************************!*\
  !*** ./src/nes/ppu/types.ts ***!
  \******************************/
/*! exports provided: MirrorMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MirrorMode", function() { return MirrorMode; });
var MirrorMode;
(function (MirrorMode) {
    MirrorMode[MirrorMode["HORZ"] = 0] = "HORZ";
    MirrorMode[MirrorMode["VERT"] = 1] = "VERT";
    MirrorMode[MirrorMode["SINGLE0"] = 2] = "SINGLE0";
    MirrorMode[MirrorMode["SINGLE1"] = 3] = "SINGLE1";
    MirrorMode[MirrorMode["REVERSE_HORZ"] = 4] = "REVERSE_HORZ";
})(MirrorMode || (MirrorMode = {}));


/***/ }),

/***/ "./src/util/util.ts":
/*!**************************!*\
  !*** ./src/util/util.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Util; });
const _btoa = typeof btoa !== 'undefined' ? btoa : (function (str) {
    const buffer = (str instanceof Buffer) ? str : Buffer.from(str.toString(), 'binary');
    return buffer.toString('base64');
});
const _atob = typeof atob !== 'undefined' ? atob : (function (str) {
    return new Buffer(str, 'base64').toString('binary');
});
class Util {
    static hex(x, order = 2) {
        const s = x.toString(16);
        const dif = s.length - order;
        if (dif > 0)
            return s.substring(dif);
        if (dif === 0)
            return s;
        const zeros = '0000000';
        return zeros.substring(zeros.length + dif) + s;
    }
    static clamp(x, min, max) {
        return x < min ? min : x > max ? max : x;
    }
    static getExt(fileName) {
        const index = fileName.lastIndexOf('.');
        if (index >= 0)
            return fileName.slice(index + 1);
        return '';
    }
    static convertUint8ArrayToBase64String(src) {
        const s = Array.from(src).map(x => String.fromCharCode(x)).join('');
        return _btoa(s);
    }
    static convertBase64StringToUint8Array(src) {
        const decoded = _atob(src);
        const array = new Array(decoded.length);
        for (let i = 0; i < decoded.length; ++i)
            array[i] = decoded.charCodeAt(i);
        return new Uint8Array(array);
    }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ })

/******/ });
});
//# sourceMappingURL=tsnes-core.map