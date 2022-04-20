// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lO4qg":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "c762967db689fc02";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"gRgCV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _redomEsJs = require("../node_modules/redom/dist/redom.es.js");
var _creditCardSpaceJs = require("./credit-card-space.js");
var _creditCardSpaceJsDefault = parcelHelpers.interopDefault(_creditCardSpaceJs);
const wrapper = _redomEsJs.el('div.wrapper');
const card = _redomEsJs.el('div.card');
const cardNumber = _redomEsJs.el('span.card__number', 'xxxx xxxx xxxx xxxx');
const cardName = _redomEsJs.el('span.card__name', 'YOUR NAME');
const cardDate = _redomEsJs.el('span.card__date', 'MM/YY');
const form = _redomEsJs.el('form.form', {
    action: '#',
    id: 'form'
});
form.addEventListener('submit', (e)=>{
    e.preventDefault();
});
const inputHolder = _redomEsJs.el('input.input.input__holder', {
    type: 'text',
    id: 'inputHolder',
    maxLength: '25'
});
new IMask(inputHolder, {
    mask: /\w+/
});
inputHolder.addEventListener('input', ()=>{
    if (inputHolder.value !== '') {
        inputHolder.value = inputHolder.value.toUpperCase().replace(/[^A-Z\s]/g, '');
        cardName.textContent = inputHolder.value;
    } else cardName.textContent = 'YOUR NAME';
});
const inputNumber = _redomEsJs.el('input.input.input__number', {
    type: 'text',
    id: 'cardNumber'
});
new IMask(inputNumber, {
    mask: '0000 0000 0000 0000',
    lazy: true,
    maxLength: 16
});
inputNumber.addEventListener('input', ()=>{
    cardNumber.textContent = inputNumber.value;
});
const inputDate = _redomEsJs.el('input.input.input__date', {
    type: 'text',
    id: 'inputDate'
});
new IMask(inputDate, {
    mask: 'MM/YY',
    lazy: true,
    blocks: {
        YY: {
            mask: '00'
        },
        MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12
        }
    }
});
inputDate.addEventListener('input', ()=>{
    cardDate.textContent = inputDate.value;
});
const inputCvv = _redomEsJs.el('input.input.input__cvv', {
    type: 'text',
    id: 'inputCvv'
});
new IMask(inputCvv, {
    mask: '000'
});
_redomEsJs.setChildren(form, [
    _redomEsJs.el('div.form__input-wrap.form__input-wrap_holder', [
        _redomEsJs.el('label.form__label.form__holder-label', 'Card Holder', {
            for: 'inputHolder'
        }),
        inputHolder
    ]),
    _redomEsJs.el('div.form__input-wrap.form__input-wrap_number', [
        _redomEsJs.el('label.form__label.form__number-label', 'Card Number', {
            for: 'cardNumber'
        }),
        inputNumber
    ]),
    _redomEsJs.el('div.form__input-wrap.form__input-wrap_date', [
        _redomEsJs.el('label.form__label.form__date-label', 'Card Expiry', {
            for: 'inputDate'
        }),
        inputDate
    ]),
    _redomEsJs.el('div.form__input-wrap.form__input-wrap_cvv', [
        _redomEsJs.el('label.form__label.form__cvv-label', 'CVV', {
            for: 'inputCvv'
        }),
        inputCvv
    ]),
    _redomEsJs.el('button.form__button', 'CHECK OUT')
]);
_redomEsJs.setChildren(card, [
    _redomEsJs.el('p.secure', 'Secure Checkout'),
    _redomEsJs.el('div.credit-card', [
        cardNumber,
        _redomEsJs.el('div.card__personal', [
            cardName,
            cardDate
        ])
    ]),
    form
]);
_redomEsJs.setChildren(wrapper, card);
_redomEsJs.setChildren(document.body, wrapper);

},{"../node_modules/redom/dist/redom.es.js":"iahd6","./credit-card-space.js":"8Bv2Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iahd6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "List", ()=>List
);
parcelHelpers.export(exports, "ListPool", ()=>ListPool
);
parcelHelpers.export(exports, "Place", ()=>Place
);
parcelHelpers.export(exports, "Router", ()=>Router
);
parcelHelpers.export(exports, "el", ()=>el
);
parcelHelpers.export(exports, "h", ()=>h
);
parcelHelpers.export(exports, "html", ()=>html
);
parcelHelpers.export(exports, "list", ()=>list
);
parcelHelpers.export(exports, "listPool", ()=>listPool
);
parcelHelpers.export(exports, "mount", ()=>mount
);
parcelHelpers.export(exports, "place", ()=>place
);
parcelHelpers.export(exports, "router", ()=>router
);
parcelHelpers.export(exports, "s", ()=>s
);
parcelHelpers.export(exports, "setAttr", ()=>setAttr
);
parcelHelpers.export(exports, "setChildren", ()=>setChildren
);
parcelHelpers.export(exports, "setData", ()=>setData
);
parcelHelpers.export(exports, "setStyle", ()=>setStyle
);
parcelHelpers.export(exports, "setXlink", ()=>setXlink
);
parcelHelpers.export(exports, "svg", ()=>svg
);
parcelHelpers.export(exports, "text", ()=>text
);
parcelHelpers.export(exports, "unmount", ()=>unmount
);
function createElement(query, ns1) {
    var ref = parse(query);
    var tag = ref.tag;
    var id = ref.id;
    var className = ref.className;
    var element = ns1 ? document.createElementNS(ns1, tag) : document.createElement(tag);
    if (id) element.id = id;
    if (className) {
        if (ns1) element.setAttribute('class', className);
        else element.className = className;
    }
    return element;
}
function parse(query) {
    var chunks = query.split(/([.#])/);
    var className = '';
    var id = '';
    for(var i = 1; i < chunks.length; i += 2)switch(chunks[i]){
        case '.':
            className += " " + chunks[i + 1];
            break;
        case '#':
            id = chunks[i + 1];
    }
    return {
        className: className.trim(),
        tag: chunks[0] || 'div',
        id: id
    };
}
function unmount(parent, child) {
    var parentEl = getEl(parent);
    var childEl = getEl(child);
    if (child === childEl && childEl.__redom_view) // try to look up the view if not provided
    child = childEl.__redom_view;
    if (childEl.parentNode) {
        doUnmount(child, childEl, parentEl);
        parentEl.removeChild(childEl);
    }
    return child;
}
function doUnmount(child, childEl, parentEl) {
    var hooks = childEl.__redom_lifecycle;
    if (hooksAreEmpty(hooks)) {
        childEl.__redom_lifecycle = {};
        return;
    }
    var traverse1 = parentEl;
    if (childEl.__redom_mounted) trigger(childEl, 'onunmount');
    while(traverse1){
        var parentHooks = traverse1.__redom_lifecycle || {};
        for(var hook in hooks)if (parentHooks[hook]) parentHooks[hook] -= hooks[hook];
        if (hooksAreEmpty(parentHooks)) traverse1.__redom_lifecycle = null;
        traverse1 = traverse1.parentNode;
    }
}
function hooksAreEmpty(hooks) {
    if (hooks == null) return true;
    for(var key in hooks){
        if (hooks[key]) return false;
    }
    return true;
}
/* global Node, ShadowRoot */ var hookNames = [
    'onmount',
    'onremount',
    'onunmount'
];
var shadowRootAvailable = typeof window !== 'undefined' && 'ShadowRoot' in window;
function mount(parent, child, before, replace) {
    var parentEl = getEl(parent);
    var childEl = getEl(child);
    if (child === childEl && childEl.__redom_view) // try to look up the view if not provided
    child = childEl.__redom_view;
    if (child !== childEl) childEl.__redom_view = child;
    var wasMounted = childEl.__redom_mounted;
    var oldParent = childEl.parentNode;
    if (wasMounted && oldParent !== parentEl) doUnmount(child, childEl, oldParent);
    if (before != null) {
        if (replace) parentEl.replaceChild(childEl, getEl(before));
        else parentEl.insertBefore(childEl, getEl(before));
    } else parentEl.appendChild(childEl);
    doMount(child, childEl, parentEl, oldParent);
    return child;
}
function trigger(el1, eventName) {
    if (eventName === 'onmount' || eventName === 'onremount') el1.__redom_mounted = true;
    else if (eventName === 'onunmount') el1.__redom_mounted = false;
    var hooks = el1.__redom_lifecycle;
    if (!hooks) return;
    var view = el1.__redom_view;
    var hookCount = 0;
    view && view[eventName] && view[eventName]();
    for(var hook in hooks)if (hook) hookCount++;
    if (hookCount) {
        var traverse2 = el1.firstChild;
        while(traverse2){
            var next = traverse2.nextSibling;
            trigger(traverse2, eventName);
            traverse2 = next;
        }
    }
}
function doMount(child, childEl, parentEl, oldParent) {
    var hooks = childEl.__redom_lifecycle || (childEl.__redom_lifecycle = {});
    var remount = parentEl === oldParent;
    var hooksFound = false;
    for(var i = 0, list1 = hookNames; i < list1.length; i += 1){
        var hookName = list1[i];
        if (!remount) {
            if (child !== childEl) {
                if (hookName in child) hooks[hookName] = (hooks[hookName] || 0) + 1;
            }
        }
        if (hooks[hookName]) hooksFound = true;
    }
    if (!hooksFound) {
        childEl.__redom_lifecycle = {};
        return;
    }
    var traverse3 = parentEl;
    var triggered = false;
    if (remount || traverse3 && traverse3.__redom_mounted) {
        trigger(childEl, remount ? 'onremount' : 'onmount');
        triggered = true;
    }
    while(traverse3){
        var parent = traverse3.parentNode;
        var parentHooks = traverse3.__redom_lifecycle || (traverse3.__redom_lifecycle = {});
        for(var hook in hooks)parentHooks[hook] = (parentHooks[hook] || 0) + hooks[hook];
        if (triggered) break;
        else {
            if (traverse3.nodeType === Node.DOCUMENT_NODE || shadowRootAvailable && traverse3 instanceof ShadowRoot || parent && parent.__redom_mounted) {
                trigger(traverse3, remount ? 'onremount' : 'onmount');
                triggered = true;
            }
            traverse3 = parent;
        }
    }
}
function setStyle(view, arg1, arg2) {
    var el2 = getEl(view);
    if (typeof arg1 === 'object') for(var key in arg1)setStyleValue(el2, key, arg1[key]);
    else setStyleValue(el2, arg1, arg2);
}
function setStyleValue(el3, key, value) {
    el3.style[key] = value == null ? '' : value;
}
/* global SVGElement */ var xlinkns = 'http://www.w3.org/1999/xlink';
function setAttr(view, arg1, arg2) {
    setAttrInternal(view, arg1, arg2);
}
function setAttrInternal(view, arg1, arg2, initial) {
    var el4 = getEl(view);
    var isObj = typeof arg1 === 'object';
    if (isObj) for(var key in arg1)setAttrInternal(el4, key, arg1[key], initial);
    else {
        var isSVG = el4 instanceof SVGElement;
        var isFunc = typeof arg2 === 'function';
        if (arg1 === 'style' && typeof arg2 === 'object') setStyle(el4, arg2);
        else if (isSVG && isFunc) el4[arg1] = arg2;
        else if (arg1 === 'dataset') setData(el4, arg2);
        else if (!isSVG && (arg1 in el4 || isFunc) && arg1 !== 'list') el4[arg1] = arg2;
        else {
            if (isSVG && arg1 === 'xlink') {
                setXlink(el4, arg2);
                return;
            }
            if (initial && arg1 === 'class') arg2 = el4.className + ' ' + arg2;
            if (arg2 == null) el4.removeAttribute(arg1);
            else el4.setAttribute(arg1, arg2);
        }
    }
}
function setXlink(el5, arg1, arg2) {
    if (typeof arg1 === 'object') for(var key in arg1)setXlink(el5, key, arg1[key]);
    else if (arg2 != null) el5.setAttributeNS(xlinkns, arg1, arg2);
    else el5.removeAttributeNS(xlinkns, arg1, arg2);
}
function setData(el6, arg1, arg2) {
    if (typeof arg1 === 'object') for(var key in arg1)setData(el6, key, arg1[key]);
    else if (arg2 != null) el6.dataset[arg1] = arg2;
    else delete el6.dataset[arg1];
}
function text(str) {
    return document.createTextNode(str != null ? str : '');
}
function parseArgumentsInternal(element, args, initial) {
    for(var i = 0, list2 = args; i < list2.length; i += 1){
        var arg = list2[i];
        if (arg !== 0 && !arg) continue;
        var type = typeof arg;
        if (type === 'function') arg(element);
        else if (type === 'string' || type === 'number') element.appendChild(text(arg));
        else if (isNode(getEl(arg))) mount(element, arg);
        else if (arg.length) parseArgumentsInternal(element, arg, initial);
        else if (type === 'object') setAttrInternal(element, arg, null, initial);
    }
}
function ensureEl(parent) {
    return typeof parent === 'string' ? html(parent) : getEl(parent);
}
function getEl(parent) {
    return parent.nodeType && parent || !parent.el && parent || getEl(parent.el);
}
function isNode(arg) {
    return arg && arg.nodeType;
}
var htmlCache = {};
function html(query) {
    var args = [], len = arguments.length - 1;
    while(len-- > 0)args[len] = arguments[len + 1];
    var element;
    var type = typeof query;
    if (type === 'string') element = memoizeHTML(query).cloneNode(false);
    else if (isNode(query)) element = query.cloneNode(false);
    else if (type === 'function') {
        var Query = query;
        element = new (Function.prototype.bind.apply(Query, [
            null
        ].concat(args)));
    } else throw new Error('At least one argument required');
    parseArgumentsInternal(getEl(element), args, true);
    return element;
}
var el = html;
var h = html;
html.extend = function extendHtml(query) {
    var args = [], len = arguments.length - 1;
    while(len-- > 0)args[len] = arguments[len + 1];
    var clone = memoizeHTML(query);
    return html.bind.apply(html, [
        this,
        clone
    ].concat(args));
};
function memoizeHTML(query) {
    return htmlCache[query] || (htmlCache[query] = createElement(query));
}
function setChildren(parent) {
    var children = [], len = arguments.length - 1;
    while(len-- > 0)children[len] = arguments[len + 1];
    var parentEl = getEl(parent);
    var current = traverse(parent, children, parentEl.firstChild);
    while(current){
        var next = current.nextSibling;
        unmount(parent, current);
        current = next;
    }
}
function traverse(parent, children, _current) {
    var current = _current;
    var childEls = Array(children.length);
    for(var i = 0; i < children.length; i++)childEls[i] = children[i] && getEl(children[i]);
    for(var i$1 = 0; i$1 < children.length; i$1++){
        var child = children[i$1];
        if (!child) continue;
        var childEl = childEls[i$1];
        if (childEl === current) {
            current = current.nextSibling;
            continue;
        }
        if (isNode(childEl)) {
            var next = current && current.nextSibling;
            var exists = child.__redom_index != null;
            var replace = exists && next === childEls[i$1 + 1];
            mount(parent, child, current, replace);
            if (replace) current = next;
            continue;
        }
        if (child.length != null) current = traverse(parent, child, current);
    }
    return current;
}
function listPool(View, key, initData) {
    return new ListPool(View, key, initData);
}
var ListPool = function ListPool(View, key, initData) {
    this.View = View;
    this.initData = initData;
    this.oldLookup = {};
    this.lookup = {};
    this.oldViews = [];
    this.views = [];
    if (key != null) this.key = typeof key === 'function' ? key : propKey(key);
};
ListPool.prototype.update = function update(data, context) {
    var ref = this;
    var View = ref.View;
    var key = ref.key;
    var initData = ref.initData;
    var keySet = key != null;
    var oldLookup = this.lookup;
    var newLookup = {};
    var newViews = Array(data.length);
    var oldViews = this.views;
    for(var i = 0; i < data.length; i++){
        var item = data[i];
        var view = void 0;
        if (keySet) {
            var id = key(item);
            view = oldLookup[id] || new View(initData, item, i, data);
            newLookup[id] = view;
            view.__redom_id = id;
        } else view = oldViews[i] || new View(initData, item, i, data);
        view.update && view.update(item, i, data, context);
        var el7 = getEl(view.el);
        el7.__redom_view = view;
        newViews[i] = view;
    }
    this.oldViews = oldViews;
    this.views = newViews;
    this.oldLookup = oldLookup;
    this.lookup = newLookup;
};
function propKey(key) {
    return function(item) {
        return item[key];
    };
}
function list(parent, View, key, initData) {
    return new List(parent, View, key, initData);
}
var List = function List(parent, View, key, initData) {
    this.View = View;
    this.initData = initData;
    this.views = [];
    this.pool = new ListPool(View, key, initData);
    this.el = ensureEl(parent);
    this.keySet = key != null;
};
List.prototype.update = function update(data, context) {
    if (data === void 0) data = [];
    var ref = this;
    var keySet = ref.keySet;
    var oldViews = this.views;
    this.pool.update(data, context);
    var ref$1 = this.pool;
    var views = ref$1.views;
    var lookup = ref$1.lookup;
    if (keySet) for(var i = 0; i < oldViews.length; i++){
        var oldView = oldViews[i];
        var id = oldView.__redom_id;
        if (lookup[id] == null) {
            oldView.__redom_index = null;
            unmount(this, oldView);
        }
    }
    for(var i$1 = 0; i$1 < views.length; i$1++){
        var view = views[i$1];
        view.__redom_index = i$1;
    }
    setChildren(this, views);
    if (keySet) this.lookup = lookup;
    this.views = views;
};
List.extend = function extendList(parent, View, key, initData) {
    return List.bind(List, parent, View, key, initData);
};
list.extend = List.extend;
/* global Node */ function place(View, initData) {
    return new Place(View, initData);
}
var Place = function Place(View, initData) {
    this.el = text('');
    this.visible = false;
    this.view = null;
    this._placeholder = this.el;
    if (View instanceof Node) this._el = View;
    else if (View.el instanceof Node) {
        this._el = View;
        this.view = View;
    } else this._View = View;
    this._initData = initData;
};
Place.prototype.update = function update(visible, data) {
    var placeholder = this._placeholder;
    var parentNode = this.el.parentNode;
    if (visible) {
        if (!this.visible) {
            if (this._el) {
                mount(parentNode, this._el, placeholder);
                unmount(parentNode, placeholder);
                this.el = getEl(this._el);
                this.visible = visible;
            } else {
                var View = this._View;
                var view = new View(this._initData);
                this.el = getEl(view);
                this.view = view;
                mount(parentNode, view, placeholder);
                unmount(parentNode, placeholder);
            }
        }
        this.view && this.view.update && this.view.update(data);
    } else if (this.visible) {
        if (this._el) {
            mount(parentNode, placeholder, this._el);
            unmount(parentNode, this._el);
            this.el = placeholder;
            this.visible = visible;
            return;
        }
        mount(parentNode, placeholder, this.view);
        unmount(parentNode, this.view);
        this.el = placeholder;
        this.view = null;
    }
    this.visible = visible;
};
/* global Node */ function router(parent, Views, initData) {
    return new Router(parent, Views, initData);
}
var Router = function Router(parent, Views, initData) {
    this.el = ensureEl(parent);
    this.Views = Views;
    this.initData = initData;
};
Router.prototype.update = function update(route, data) {
    if (route !== this.route) {
        var Views = this.Views;
        var View = Views[route];
        this.route = route;
        if (View && (View instanceof Node || View.el instanceof Node)) this.view = View;
        else this.view = View && new View(this.initData, data);
        setChildren(this.el, [
            this.view
        ]);
    }
    this.view && this.view.update && this.view.update(data, route);
};
var ns = 'http://www.w3.org/2000/svg';
var svgCache = {};
function svg(query) {
    var args = [], len = arguments.length - 1;
    while(len-- > 0)args[len] = arguments[len + 1];
    var element;
    var type = typeof query;
    if (type === 'string') element = memoizeSVG(query).cloneNode(false);
    else if (isNode(query)) element = query.cloneNode(false);
    else if (type === 'function') {
        var Query = query;
        element = new (Function.prototype.bind.apply(Query, [
            null
        ].concat(args)));
    } else throw new Error('At least one argument required');
    parseArgumentsInternal(getEl(element), args, true);
    return element;
}
var s = svg;
svg.extend = function extendSvg(query) {
    var clone = memoizeSVG(query);
    return svg.bind(this, clone);
};
svg.ns = ns;
function memoizeSVG(query) {
    return svgCache[query] || (svgCache[query] = createElement(query, ns));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8Bv2Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
class CreditCardSpace {
    constructor(element){
        if (!(element instanceof Element)) throw new Error('CreditCardSpace can be attached to an Element only');
        this.element = element;
        attachEvents(element);
        if (element.value) _utilsJsDefault.default.formatInputValue(element);
    }
    value() {
        return _utilsJsDefault.default.clearFormattedCardNumber(this.element.value);
    }
    destroy() {
        this.element.removeEventListener(inputHandler);
        this.element.removeEventListener(keyDownHandler);
    }
}
function attachEvents(element) {
    element.addEventListener('input', (event)=>{
        setTimeout(()=>inputHandler(event)
        );
    });
    element.addEventListener('keydown', keyDownHandler);
}
function inputHandler(event) {
    _utilsJsDefault.default.formatInputValue(event.target);
}
function keyDownHandler(event) {
    let position = _utilsJsDefault.default.getCursorPosition(event.target);
    if (event.keyCode === 46 && event.target.value.charAt(position) === ' ') {
        position += 1;
        _utilsJsDefault.default.setCursorPosition(event.target, position);
    } else if (event.keyCode === 8 && event.target.value.charAt(position - 1) === ' ') {
        position -= 1;
        _utilsJsDefault.default.setCursorPosition(event.target, position);
    } else if (event.keyCode === 90 && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        event.stopPropagation();
    }
}
exports.default = CreditCardSpace;

},{"./utils.js":"bg7Si","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bg7Si":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Formats input value with a space after 4 digits and keeps cursor on its current
 * position after input value's been changed
 * @param {HTMLInputElement} input
 */ function formatInputValue(input) {
    const position = getCursorPosition(input);
    const srcLength = input.value.length;
    const pattern = input.dataset.pattern || '4 4 4 4';
    const formatted = formatCreditCard(input.value, pattern);
    const diff = formatted.length - srcLength;
    input.value = formatted;
    setCursorPosition(input, position + diff);
}
/**
   * Returns current cursor position in text input
   *
   * @param {HTMLInputElement} input
   * @return {number}
   */ function getCursorPosition(input) {
    let position = 0;
    if (input.selectionStart || input.selectionStart === '0') position = input.selectionStart;
    return position;
}
/**
   * Sets cursor in text input to defined position
   *
   * @param {HTMLInputElement} element
   * @param {number} pos
   */ function setCursorPosition(input, pos) {
    if (!(input && input.setSelectionRange)) return;
    input.setSelectionRange(pos, pos);
}
/**
   * Formats string adding space after every for digits
   *
   * @param {string} str
   * @param {string} pattern
   * @return {string}
   */ function formatCreditCard(str, pattern = '4 4 4 4') {
    const clean = str.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = clean.match(/\d{4,19}/g);
    const match = matches && matches[0] || '';
    const parts = splitByPattern(match, pattern);
    if (parts.length) return parts.join(' ');
    return str;
}
/**
   * Clears spaces from formatted credit card number
   * @param {string} str
   * @return {string}
   */ function clearFormattedCardNumber(str) {
    return str.replace(/ /g, '');
}
/**
   * Splits digits string to array of strings by pattern
   * @param {string} digits
   * @param {string} pattern
   * @returns {array}
   */ function splitByPattern(digits, pattern) {
    const chunks = pattern.split(' ');
    return getSlices(digits, chunks);
}
/**
   * splits digits string onto chunks length equal to pattern array elements
   * @param {string} digits
   * @param {array} pattern
   * @returns {array}
   */ function getSlices(digits, pattern) {
    if (pattern.length === 0) return digits.length ? [
        digits
    ] : [];
    if (digits.length === 0) return [];
    const size = pattern.shift();
    const part = digits.substring(0, size);
    if (part.length < size) return [
        part
    ];
    return [
        part
    ].concat(getSlices(digits.substring(size), pattern));
}
exports.default = {
    formatInputValue,
    getCursorPosition,
    setCursorPosition,
    formatCreditCard,
    clearFormattedCardNumber
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lO4qg","gRgCV"], "gRgCV", "parcelRequire2c8a")

//# sourceMappingURL=index.b689fc02.js.map
