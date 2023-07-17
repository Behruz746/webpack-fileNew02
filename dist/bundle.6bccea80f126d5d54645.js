/** *** */ (() => { // webpackBootstrap
/** *** */ 	const __webpack_modules__ = ({

    /***/ "./src/about.js":
    /*! **********************!*\
  !*** ./src/about.js ***!
  \********************* */
    /***/ (() => {
      const getName = () => {
        console.log("Hello and welcome to Webpack");
      };
      getName();
      /***/ }),

    /***/ "./src/style/main.css":
    /*! ****************************!*\
  !*** ./src/style/main.css ***!
  \*************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      // extracted by mini-css-extract-plugin
      /***/ }),

    /***/ "./src/assets/Profile.png":
    /*! ********************************!*\
  !*** ./src/assets/Profile.png ***!
  \******************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}Profile.png`;
      /***/ }),

    /** *** */ 	});
  /** ********************************************************************* */
  /** *** */ 	// The module cache
  /** *** */ 	const __webpack_module_cache__ = {};
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */ 		// Check if module is in cache
    /** *** */ 		const cachedModule = __webpack_module_cache__[moduleId];
    /** *** */ 		if (cachedModule !== undefined) {
      /** *** */ 			return cachedModule.exports;
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = __webpack_module_cache__[moduleId] = {
      /** *** */ 			// no module.id needed
      /** *** */ 			// no module.loaded needed
      /** *** */ 			exports: {},
      /** *** */ 		};
    /** *** */
    /** *** */ 		// Execute the module function
    /** *** */ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports;
    /** *** */ 	}
  /** *** */
  /** ********************************************************************* */
  /** *** */ 	/* webpack/runtime/compat get default export */
  /** *** */ 	(() => {
    /** *** */ 		// getDefaultExport function for compatibility with non-harmony modules
    /** *** */ 		__webpack_require__.n = (module) => {
      /** *** */ 			const getter = module && module.__esModule
      /** *** */ 				? () => (module.default)
      /** *** */ 				: () => (module);
      /** *** */ 			__webpack_require__.d(getter, { a: getter });
      /** *** */ 			return getter;
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/define property getters */
  /** *** */ 	(() => {
    /** *** */ 		// define getter functions for harmony exports
    /** *** */ 		__webpack_require__.d = (exports, definition) => {
      /** *** */ 			for (const key in definition) {
        /** *** */ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /** *** */ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /** *** */ 				}
        /** *** */ 			}
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/global */
  /** *** */ 	(() => {
    /** *** */ 		__webpack_require__.g = (function () {
      /** *** */ 			if (typeof globalThis === "object") return globalThis;
      /** *** */ 			try {
        /** *** */ 				return this || new Function("return this")();
        /** *** */ 			} catch (e) {
        /** *** */ 				if (typeof window === "object") return window;
        /** *** */ 			}
      /** *** */ 		}());
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/hasOwnProperty shorthand */
  /** *** */ 	(() => {
    /** *** */ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/make namespace object */
  /** *** */ 	(() => {
    /** *** */ 		// define __esModule on exports
    /** *** */ 		__webpack_require__.r = (exports) => {
      /** *** */ 			if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /** *** */ 				Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
        /** *** */ 			}
      /** *** */ 			Object.defineProperty(exports, "__esModule", { value: true });
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/publicPath */
  /** *** */ 	(() => {
    /** *** */ 		let scriptUrl;
    /** *** */ 		if (__webpack_require__.g.importScripts) scriptUrl = `${__webpack_require__.g.location}`;
    /** *** */ 		const { document } = __webpack_require__.g;
    /** *** */ 		if (!scriptUrl && document) {
      /** *** */ 			if (document.currentScript)
      /** *** */ 				{ scriptUrl = document.currentScript.src; }
      /** *** */ 			if (!scriptUrl) {
        /** *** */ 				const scripts = document.getElementsByTagName("script");
        /** *** */ 				if (scripts.length) {
          /** *** */ 					let i = scripts.length - 1;
          /** *** */ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
          /** *** */ 				}
        /** *** */ 			}
      /** *** */ 		}
    /** *** */ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /** *** */ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /** *** */ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
    /** *** */ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
    /** *** */ 		__webpack_require__.p = scriptUrl;
    /** *** */ 	})();
  /** *** */
  /** ********************************************************************* */
  const __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ const _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ "./src/about.js");
    /* harmony import */ const _about__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_about__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ const _style_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/main.css */ "./src/style/main.css");
    /* harmony import */ const _assets_Profile_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/Profile.png */ "./src/assets/Profile.png");

    const profileImg = document.getElementById("profileImg");
    profileImg.src = _assets_Profile_png__WEBPACK_IMPORTED_MODULE_2__;
  })();
/** *** */ })();

// # sourceMappingURL=bundle.6bccea80f126d5d54645.js.map
