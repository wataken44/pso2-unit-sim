webpackJsonp([1,4],{

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid unit-set\" *ngFor=\"let unit_set of unit_sets; let idx = index;\">\n  <div class=\"row\">\n    <div class=\"col\">\n      {{idx}}\n      <unit-selector></unit-selector>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline\">\n  <select name=\"rear\" class=\"form-control\" [(ngModel)]=\"rear_index\" (change)=\"updateUnitSet()\">\n    <option *ngFor=\"let rear_unit of rear_units; let idx = index;\" value={{idx}}>{{rear_unit.getDisplayName()}}</option>\n  </select>\n  <select name=\"arm\" class=\"form-control\" [(ngModel)]=\"arm_index\" (change)=\"updateUnitSet()\">\n    <option *ngFor=\"let arm_unit of arm_units; let idx = index;\" value={{idx}}>{{arm_unit.getDisplayName()}}</option>\n  </select>\n  <select name=\"leg\" class=\"form-control\" [(ngModel)]=\"leg_index\" (change)=\"updateUnitSet()\">\n    <option *ngFor=\"let leg_unit of leg_units; let idx = index;\" value={{idx}}>{{leg_unit.getDisplayName()}}</option>\n  </select>\n</form>\n<div>\n  <table class=\"table table-sm table-bordered\">\n    <thead>\n      <tr>\n        <td></td>\n        <td style=\"min-width:18em;\">名前</td>\n        <td *ngFor=\"let label of label_short;\" style=\"min-width:2.5em;\">{{ label }}</td>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>リア</td>\n        <td>{{ rear_units[rear_index].getDisplayName() }}</td>\n        <td class=\"text-right\" *ngFor=\"let label of label_short; let idx = index;\">{{ rear_units[rear_index].getParam(idx) }}</td>\n      </tr>\n      <tr>\n        <td>アーム</td>\n        <td>{{ arm_units[arm_index].getDisplayName() }}</td>\n        <td class=\"text-right\" *ngFor=\"let label of label_short; let idx = index;\">{{ arm_units[arm_index].getParam(idx) }}</td>\n      </tr>\n      <tr>\n        <td>レッグ</td>\n        <td>{{ leg_units[leg_index].getDisplayName() }}</td>\n        <td class=\"text-right\" *ngFor=\"let label of label_short; let idx = index;\">{{ leg_units[leg_index].getParam(idx) }}</td>\n      </tr>\n      <tr>\n        <td>セット</td>\n        <td></td>\n        <td class=\"text-right\" *ngFor=\"let label of label_short; let idx = index;\">{{ unit_sets[unit_set_index].getParam(idx) }}</td>\n      </tr>\n      <tr>\n        <td>合計</td>\n        <td></td>\n        <td class=\"text-right\" *ngFor=\"let label of label_short; let idx = index;\">{{ rear_units[rear_index].getParam(idx)+ arm_units[arm_index].getParam(idx) + leg_units[leg_index].getParam(idx) + unit_sets[unit_set_index].getParam(idx) }}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(76);


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UnitParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UnitSetParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LABEL_SHORT; });
/* unused harmony export LABEL_LONG */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ParameterBase = (function () {
    function ParameterBase() {
    }
    ParameterBase.prototype.getParam = function (index) {
        return [
            this.hp,
            this.pp,
            this.satk,
            this.ratk,
            this.tatk,
            this.dex,
            this.sdef,
            this.rdef,
            this.tdef,
            this.sreg,
            this.rreg,
            this.treg,
            this.efreg,
            this.eireg,
            this.etreg,
            this.ewreg,
            this.elreg,
            this.edreg,
        ][index];
    };
    return ParameterBase;
}());
var UnitParameter = (function (_super) {
    __extends(UnitParameter, _super);
    function UnitParameter(param) {
        var _this = _super.call(this) || this;
        _this.id = param.id;
        _this.unit_type = param.unit_type;
        _this.rarerity = param.rarerity;
        _this.name = param.name;
        _this.craft = param.craft;
        _this.hp = param.hp;
        _this.pp = param.pp;
        _this.satk = param.satk;
        _this.ratk = param.ratk;
        _this.tatk = param.tatk;
        _this.dex = param.dex;
        _this.sdef = param.sdef;
        _this.rdef = param.rdef;
        _this.tdef = param.tdef;
        _this.sreg = param.sreg;
        _this.rreg = param.rreg;
        _this.treg = param.treg;
        _this.efreg = param.efreg;
        _this.eireg = param.eireg;
        _this.etreg = param.etreg;
        _this.ewreg = param.ewreg;
        _this.elreg = param.elreg;
        _this.edreg = param.edreg;
        return _this;
    }
    UnitParameter.prototype.getDisplayName = function () {
        if (this.craft == "") {
            return this.name;
        }
        return this.name + "(" + this.craft + ")";
    };
    return UnitParameter;
}(ParameterBase));

var UnitSetParameter = (function (_super) {
    __extends(UnitSetParameter, _super);
    function UnitSetParameter(param) {
        var _this = _super.call(this) || this;
        _this.id = param.id;
        _this.rear_units = param.rear_units;
        _this.arm_units = param.arm_units;
        _this.leg_units = param.leg_units;
        _this.hp = param.hp;
        _this.pp = param.pp;
        _this.satk = param.satk;
        _this.ratk = param.ratk;
        _this.tatk = param.tatk;
        _this.dex = param.dex;
        _this.sdef = param.sdef;
        _this.rdef = param.rdef;
        _this.tdef = param.tdef;
        _this.sreg = param.sreg;
        _this.rreg = param.rreg;
        _this.treg = param.treg;
        _this.efreg = param.efreg;
        _this.eireg = param.eireg;
        _this.etreg = param.etreg;
        _this.ewreg = param.ewreg;
        _this.elreg = param.elreg;
        _this.edreg = param.edreg;
        return _this;
    }
    UnitSetParameter.prototype.match = function (rear, arm, leg) {
        if (this.rear_units.length > 0) {
            if (this.rear_units.indexOf(rear) == -1) {
                return false;
            }
        }
        if (this.arm_units.length > 0) {
            if (this.arm_units.indexOf(arm) == -1) {
                return false;
            }
        }
        if (this.leg_units.length > 0) {
            if (this.leg_units.indexOf(leg) == -1) {
                return false;
            }
        }
        return true;
    };
    ;
    return UnitSetParameter;
}(ParameterBase));

var LABEL_SHORT = [
    "HP",
    "PP",
    "打攻",
    "射攻",
    "法攻",
    "技量",
    "打防",
    "射防",
    "法防",
    "打耐",
    "射耐",
    "法耐",
    "炎耐",
    "氷耐",
    "雷耐",
    "風耐",
    "光耐",
    "闇耐",
];
var LABEL_LONG = [
    "HP",
    "PP",
    "打撃攻撃力",
    "射撃攻撃力",
    "法撃攻撃力",
    "技量",
    "打撃防御力",
    "射撃防御力",
    "法撃防御力",
    "打撃耐性",
    "射撃耐性",
    "法撃耐性",
    "炎耐性",
    "氷耐性",
    "雷耐性",
    "風耐性",
    "光耐性",
    "闇耐性",
];
//# sourceMappingURL=unit-parameter.js.map

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 75;


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(87);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.unit_sets = [1, 2, 3];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(142),
        styles: [__webpack_require__(141)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__unit_selector_component__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__unit_selector_component__["a" /* UnitSelectorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__unit_parameter__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REAR_UNITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ARM_UNITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LEG_UNITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UNIT_SETS; });

var REAR_UNITS = [
    /* %%rear_units%% */
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R0", unit_type: "rear", rareity: 0, name: "リアなし", craft: "", hp: 0, pp: 0, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 0, rdef: 0, tdef: 0, sreg: 0, rreg: 0, treg: 0, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R11-1", unit_type: "rear", rareity: 11, name: "ブリサエーリ", craft: "", hp: 40, pp: 5, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 211, rdef: 220, tdef: 211, sreg: 3, rreg: 4, treg: 0, efreg: 3, eireg: 0, etreg: 0, ewreg: 3, elreg: 3, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R11-2", unit_type: "rear", rareity: 11, name: "サイキホウヨク", craft: "", hp: 50, pp: 0, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 229, rdef: 202, tdef: 238, sreg: 4, rreg: 4, treg: 0, efreg: 0, eireg: 8, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R11-2-1", unit_type: "rear", rareity: 11, name: "サイキホウヨク", craft: "打撃防御【HP】Lv.10", hp: 100, pp: 0, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 240, rdef: 220, tdef: 220, sreg: 4, rreg: 0, treg: 0, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R11-2-2", unit_type: "rear", rareity: 11, name: "サイキホウヨク", craft: "射撃防御【PP】Lv.10", hp: 0, pp: 10, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 240, rdef: 220, tdef: 220, sreg: 0, rreg: 4, treg: 0, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R11-2-3", unit_type: "rear", rareity: 11, name: "サイキホウヨク", craft: "法撃防御【属性】Lv.10", hp: 30, pp: 3, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 240, rdef: 220, tdef: 220, sreg: 0, rreg: 0, treg: 4, efreg: 4, eireg: 4, etreg: 4, ewreg: 4, elreg: 4, edreg: 4 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R11-3", unit_type: "rear", rareity: 11, name: "Pドライブ", craft: "", hp: 100, pp: 5, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 255, rdef: 235, tdef: 245, sreg: 5, rreg: 3, treg: 4, efreg: 2, eireg: 2, etreg: 2, ewreg: 2, elreg: 2, edreg: 2 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R11-4", unit_type: "rear", rareity: 11, name: "インヴェルム", craft: "", hp: 60, pp: 6, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 230, rdef: 210, tdef: 220, sreg: 3, rreg: 2, treg: 3, efreg: 2, eireg: 0, etreg: 2, ewreg: 0, elreg: 0, edreg: 3 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R11-5", unit_type: "rear", rareity: 11, name: "オフゼルム", craft: "", hp: 70, pp: 5, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 235, rdef: 215, tdef: 225, sreg: 3, rreg: 3, treg: 4, efreg: 0, eireg: 2, etreg: 0, ewreg: 2, elreg: 2, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R11-6", unit_type: "rear", rareity: 11, name: "イデアルディール", craft: "", hp: 100, pp: 0, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 206, rdef: 202, tdef: 202, sreg: 0, rreg: 3, treg: 3, efreg: 0, eireg: 2, etreg: 0, ewreg: 2, elreg: 0, edreg: 2 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R12-1", unit_type: "rear", rareity: 12, name: "サーキュレイ", craft: "", hp: 50, pp: 9, satk: 25, ratk: 25, tatk: 25, dex: 0, sdef: 225, rdef: 225, tdef: 225, sreg: 2, rreg: 2, treg: 2, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R12-2", unit_type: "rear", rareity: 12, name: "サーキュユニオン", craft: "", hp: 75, pp: 9, satk: 25, ratk: 25, tatk: 25, dex: 0, sdef: 229, rdef: 229, tdef: 229, sreg: 4, rreg: 2, treg: 2, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R12-3", unit_type: "rear", rareity: 12, name: "ホワイティルプルム", craft: "", hp: 0, pp: 20, satk: 20, ratk: 20, tatk: 20, dex: 0, sdef: 193, rdef: 193, tdef: 215, sreg: 0, rreg: 0, treg: 3, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 4, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R12-4", unit_type: "rear", rareity: 12, name: "グリュゾベルーラ", craft: "", hp: 0, pp: 15, satk: 0, ratk: 0, tatk: 40, dex: 0, sdef: 207, rdef: 207, tdef: 229, sreg: 1, rreg: 2, treg: 3, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R12-7", unit_type: "rear", rareity: 12, name: "雷閃イザネイシ", craft: "", hp: 150, pp: 0, satk: 20, ratk: 20, tatk: 20, dex: 20, sdef: 258, rdef: 243, tdef: 243, sreg: 4, rreg: 4, treg: 4, efreg: 0, eireg: 0, etreg: 6, ewreg: 0, elreg: 4, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R12-8", unit_type: "rear", rareity: 12, name: "アストラグレス", craft: "", hp: 60, pp: 10, satk: 20, ratk: 20, tatk: 20, dex: 0, sdef: 233, rdef: 230, tdef: 236, sreg: 2, rreg: 2, treg: 2, efreg: 2, eireg: 2, etreg: 0, ewreg: 0, elreg: 0, edreg: 2 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R12-11", unit_type: "rear", rareity: 12, name: "シャインレッド", craft: "", hp: 0, pp: 0, satk: 80, ratk: 80, tatk: 80, dex: 80, sdef: 241, rdef: 236, tdef: 239, sreg: 3, rreg: 3, treg: 3, efreg: 10, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R12-12", unit_type: "rear", rareity: 12, name: "シャインブルー", craft: "", hp: 150, pp: 5, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 231, rdef: 228, tdef: 230, sreg: 3, rreg: 3, treg: 3, efreg: 0, eireg: 10, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R12-13", unit_type: "rear", rareity: 12, name: "ゼイネシスガナフ", craft: "", hp: 120, pp: 4, satk: 15, ratk: 15, tatk: 15, dex: 0, sdef: 240, rdef: 244, tdef: 249, sreg: 3, rreg: 3, treg: 2, efreg: 2, eireg: 2, etreg: 2, ewreg: 2, elreg: 2, edreg: 2 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R12-14", unit_type: "rear", rareity: 12, name: "クリファドガナフ", craft: "", hp: 40, pp: 13, satk: 35, ratk: 35, tatk: 35, dex: 0, sdef: 230, rdef: 236, tdef: 231, sreg: 2, rreg: 2, treg: 1, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R12-15", unit_type: "rear", rareity: 12, name: "ウェラボード", craft: "", hp: 50, pp: 10, satk: 40, ratk: 40, tatk: 40, dex: 0, sdef: 240, rdef: 246, tdef: 237, sreg: 5, rreg: 4, treg: 4, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R12-16", unit_type: "rear", rareity: 12, name: "イヴリダキブス", craft: "", hp: 60, pp: 10, satk: 25, ratk: 25, tatk: 25, dex: 0, sdef: 234, rdef: 234, tdef: 234, sreg: 3, rreg: 3, treg: 3, efreg: 2, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 2 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R12-17", unit_type: "rear", rareity: 12, name: "カブキモノライデン", craft: "", hp: 0, pp: 0, satk: 80, ratk: 80, tatk: 80, dex: 80, sdef: 241, rdef: 236, tdef: 239, sreg: 3, rreg: 3, treg: 3, efreg: 0, eireg: 0, etreg: 10, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R12-18", unit_type: "rear", rareity: 12, name: "ヒメカブキチェリー", craft: "", hp: 150, pp: 5, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 231, rdef: 228, tdef: 230, sreg: 3, rreg: 3, treg: 3, efreg: 0, eireg: 0, etreg: 0, ewreg: 10, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R12-19", unit_type: "rear", rareity: 12, name: "ステラウォール", craft: "", hp: 50, pp: 5, satk: 15, ratk: 15, tatk: 15, dex: 15, sdef: 229, rdef: 229, tdef: 229, sreg: 2, rreg: 2, treg: 2, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R12-20", unit_type: "rear", rareity: 12, name: "フォボスクーペ", craft: "", hp: 80, pp: 0, satk: 40, ratk: 40, tatk: 40, dex: 0, sdef: 263, rdef: 263, tdef: 263, sreg: 5, rreg: 5, treg: 5, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R12-21", unit_type: "rear", rareity: 12, name: "ゲッコウホロー", craft: "", hp: 0, pp: 0, satk: 80, ratk: 80, tatk: 80, dex: 80, sdef: 241, rdef: 236, tdef: 239, sreg: 3, rreg: 3, treg: 3, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 10, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R12-22", unit_type: "rear", rareity: 12, name: "ヤテンホロー", craft: "", hp: 150, pp: 5, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 231, rdef: 228, tdef: 230, sreg: 3, rreg: 3, treg: 3, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 10 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R12-23", unit_type: "rear", rareity: 12, name: "クラーデムイリック", craft: "", hp: 0, pp: 17, satk: 0, ratk: 0, tatk: 85, dex: 0, sdef: 233, rdef: 229, tdef: 286, sreg: 2, rreg: 1, treg: 4, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 5 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R12-26", unit_type: "rear", rareity: 12, name: "ラッピーシャイン", craft: "", hp: 777, pp: 0, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 0, rdef: 0, tdef: 0, sreg: 0, rreg: 0, treg: 0, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R12-27", unit_type: "rear", rareity: 12, name: "セレケラトリプス", craft: "", hp: 70, pp: 7, satk: 20, ratk: 20, tatk: 20, dex: 50, sdef: 236, rdef: 236, tdef: 236, sreg: 3, rreg: 3, treg: 3, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "R12-28", unit_type: "rear", rareity: 12, name: "ザラケラトリプス", craft: "", hp: 80, pp: 8, satk: 30, ratk: 30, tatk: 30, dex: 50, sdef: 242, rdef: 242, tdef: 242, sreg: 3, rreg: 3, treg: 3, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A12-27", unit_type: "rear", rareity: 12, name: "セレアルローン", craft: "", hp: 70, pp: 7, satk: 20, ratk: 20, tatk: 20, dex: 50, sdef: 236, rdef: 236, tdef: 236, sreg: 3, rreg: 3, treg: 3, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A12-28", unit_type: "rear", rareity: 12, name: "ザラアルローン", craft: "", hp: 80, pp: 8, satk: 30, ratk: 30, tatk: 30, dex: 50, sdef: 242, rdef: 242, tdef: 242, sreg: 3, rreg: 3, treg: 3, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L12-27", unit_type: "rear", rareity: 12, name: "セレアルローン", craft: "", hp: 70, pp: 7, satk: 20, ratk: 20, tatk: 20, dex: 50, sdef: 236, rdef: 236, tdef: 236, sreg: 3, rreg: 3, treg: 3, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L12-28", unit_type: "rear", rareity: 12, name: "ザラアルローン", craft: "", hp: 80, pp: 8, satk: 30, ratk: 30, tatk: 30, dex: 50, sdef: 242, rdef: 242, tdef: 242, sreg: 3, rreg: 3, treg: 3, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 })
];
var ARM_UNITS = [
    /* %%arm_units%% */
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A0", unit_type: "arm", rareity: 0, name: "アームなし", craft: "", hp: 0, pp: 0, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 0, rdef: 0, tdef: 0, sreg: 0, rreg: 0, treg: 0, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A11-1", unit_type: "arm", rareity: 11, name: "ブリサオッジ", craft: "", hp: 40, pp: 5, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 211, rdef: 220, tdef: 211, sreg: 3, rreg: 4, treg: 0, efreg: 3, eireg: 0, etreg: 0, ewreg: 3, elreg: 3, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A11-2", unit_type: "arm", rareity: 11, name: "サイキソウ", craft: "", hp: 50, pp: 0, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 229, rdef: 202, tdef: 238, sreg: 4, rreg: 4, treg: 0, efreg: 0, eireg: 8, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A11-2-1", unit_type: "arm", rareity: 11, name: "サイキソウ", craft: "打撃防御【HP】Lv.10", hp: 100, pp: 0, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 240, rdef: 220, tdef: 220, sreg: 4, rreg: 0, treg: 0, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A11-2-2", unit_type: "arm", rareity: 11, name: "サイキソウ", craft: "射撃防御【PP】Lv.10", hp: 0, pp: 10, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 240, rdef: 220, tdef: 220, sreg: 0, rreg: 4, treg: 0, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A11-2-3", unit_type: "arm", rareity: 11, name: "サイキソウ", craft: "法撃防御【属性】Lv.10", hp: 30, pp: 3, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 240, rdef: 220, tdef: 220, sreg: 0, rreg: 0, treg: 4, efreg: 4, eireg: 4, etreg: 4, ewreg: 4, elreg: 4, edreg: 4 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A11-4", unit_type: "arm", rareity: 11, name: "インヴェンド", craft: "", hp: 60, pp: 6, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 230, rdef: 210, tdef: 220, sreg: 3, rreg: 2, treg: 3, efreg: 2, eireg: 0, etreg: 2, ewreg: 0, elreg: 0, edreg: 3 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A11-5", unit_type: "arm", rareity: 11, name: "オフゼンド", craft: "", hp: 70, pp: 5, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 235, rdef: 215, tdef: 225, sreg: 3, rreg: 4, treg: 3, efreg: 0, eireg: 2, etreg: 0, ewreg: 2, elreg: 2, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A11-6", unit_type: "arm", rareity: 11, name: "イデアルヤード", craft: "", hp: 0, pp: 10, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 206, rdef: 202, tdef: 202, sreg: 6, rreg: 0, treg: 0, efreg: 2, eireg: 0, etreg: 2, ewreg: 0, elreg: 2, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A11-7", unit_type: "arm", rareity: 11, name: "ダランフィス", craft: "", hp: 0, pp: 0, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 245, rdef: 225, tdef: 235, sreg: 5, rreg: 4, treg: 3, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 6 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A11-7-1", unit_type: "arm", rareity: 11, name: "ダランフィス", craft: "打撃防御【HP】Lv.10", hp: 100, pp: 0, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 240, rdef: 220, tdef: 220, sreg: 4, rreg: 0, treg: 0, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A11-7-2", unit_type: "arm", rareity: 11, name: "ダランフィス", craft: "射撃防御【PP】Lv.10", hp: 0, pp: 10, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 240, rdef: 220, tdef: 220, sreg: 0, rreg: 4, treg: 0, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A11-7-3", unit_type: "arm", rareity: 11, name: "ダランフィス", craft: "法撃防御【属性】Lv.10", hp: 30, pp: 3, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 240, rdef: 220, tdef: 220, sreg: 0, rreg: 0, treg: 4, efreg: 4, eireg: 4, etreg: 4, ewreg: 4, elreg: 4, edreg: 4 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A12-1", unit_type: "arm", rareity: 12, name: "サーカレイ", craft: "", hp: 50, pp: 9, satk: 25, ratk: 25, tatk: 25, dex: 0, sdef: 225, rdef: 225, tdef: 225, sreg: 2, rreg: 2, treg: 2, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A12-2", unit_type: "arm", rareity: 12, name: "サーカユニオン", craft: "", hp: 75, pp: 9, satk: 25, ratk: 25, tatk: 25, dex: 0, sdef: 229, rdef: 229, tdef: 229, sreg: 2, rreg: 4, treg: 2, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A12-3", unit_type: "arm", rareity: 12, name: "ホワイティルピナ", craft: "", hp: 0, pp: 20, satk: 20, ratk: 20, tatk: 20, dex: 0, sdef: 193, rdef: 193, tdef: 215, sreg: 0, rreg: 0, treg: 0, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 4, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A12-5", unit_type: "arm", rareity: 12, name: "ギクスクード", craft: "", hp: 50, pp: 10, satk: 30, ratk: 30, tatk: 30, dex: 0, sdef: 214, rdef: 214, tdef: 214, sreg: 0, rreg: 0, treg: 0, efreg: 2, eireg: 2, etreg: 2, ewreg: 2, elreg: 3, edreg: 3 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A12-6", unit_type: "arm", rareity: 12, name: "デッドリオエスト", craft: "", hp: 150, pp: 0, satk: 40, ratk: 0, tatk: 0, dex: 0, sdef: 229, rdef: 207, tdef: 207, sreg: 3, rreg: 2, treg: 1, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A12-7", unit_type: "arm", rareity: 12, name: "雷閃イザネシキ", craft: "", hp: 150, pp: 0, satk: 20, ratk: 20, tatk: 20, dex: 20, sdef: 258, rdef: 243, tdef: 243, sreg: 4, rreg: 4, treg: 4, efreg: 0, eireg: 0, etreg: 6, ewreg: 0, elreg: 4, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A12-8", unit_type: "arm", rareity: 12, name: "アストラバイオ", craft: "", hp: 60, pp: 10, satk: 20, ratk: 20, tatk: 20, dex: 0, sdef: 233, rdef: 230, tdef: 236, sreg: 2, rreg: 2, treg: 2, efreg: 2, eireg: 2, etreg: 0, ewreg: 0, elreg: 0, edreg: 2 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A12-9", unit_type: "arm", rareity: 12, name: "フィオガルズ", craft: "", hp: 0, pp: 15, satk: 0, ratk: 40, tatk: 0, dex: 30, sdef: 200, rdef: 229, tdef: 200, sreg: 1, rreg: 4, treg: 1, efreg: 5, eireg: 0, etreg: 5, ewreg: 0, elreg: 0, edreg: 3 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A12-10", unit_type: "arm", rareity: 12, name: "レイガルズ", craft: "", hp: 150, pp: 0, satk: 25, ratk: 25, tatk: 0, dex: 30, sdef: 229, rdef: 200, tdef: 200, sreg: 4, rreg: 1, treg: 1, efreg: 0, eireg: 5, etreg: 0, ewreg: 5, elreg: 5, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A12-13", unit_type: "arm", rareity: 12, name: "ゼイネシスリタ", craft: "", hp: 120, pp: 4, satk: 15, ratk: 15, tatk: 15, dex: 0, sdef: 240, rdef: 244, tdef: 249, sreg: 2, rreg: 3, treg: 3, efreg: 2, eireg: 2, etreg: 2, ewreg: 2, elreg: 2, edreg: 2 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A12-14", unit_type: "arm", rareity: 12, name: "クリファドリタ", craft: "", hp: 40, pp: 13, satk: 35, ratk: 35, tatk: 35, dex: 0, sdef: 230, rdef: 236, tdef: 231, sreg: 1, rreg: 2, treg: 2, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A12-15", unit_type: "arm", rareity: 12, name: "ハングボード", craft: "", hp: 50, pp: 10, satk: 40, ratk: 40, tatk: 40, dex: 0, sdef: 237, rdef: 240, tdef: 246, sreg: 4, rreg: 5, treg: 4, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A12-16", unit_type: "arm", rareity: 12, name: "イヴリダリット", craft: "", hp: 60, pp: 10, satk: 25, ratk: 25, tatk: 25, dex: 0, sdef: 234, rdef: 234, tdef: 234, sreg: 3, rreg: 3, treg: 3, efreg: 2, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 2 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A12-19", unit_type: "arm", rareity: 12, name: "ステラウォール", craft: "", hp: 50, pp: 5, satk: 15, ratk: 15, tatk: 15, dex: 15, sdef: 229, rdef: 229, tdef: 229, sreg: 2, rreg: 2, treg: 2, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A12-20", unit_type: "arm", rareity: 12, name: "フォボスヘッジ", craft: "", hp: 80, pp: 0, satk: 40, ratk: 40, tatk: 40, dex: 0, sdef: 263, rdef: 263, tdef: 263, sreg: 5, rreg: 5, treg: 5, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "A12-24", unit_type: "arm", rareity: 12, name: "シャライラケラス", craft: "", hp: 0, pp: 17, satk: 85, ratk: 0, tatk: 0, dex: 0, sdef: 286, rdef: 233, tdef: 229, sreg: 4, rreg: 2, treg: 1, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 5 })
];
var LEG_UNITS = [
    /* %%leg_units%% */
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L0", unit_type: "leg", rareity: 0, name: "レッグなし", craft: "", hp: 0, pp: 0, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 0, rdef: 0, tdef: 0, sreg: 0, rreg: 0, treg: 0, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L11-1", unit_type: "leg", rareity: 11, name: "ブリサマーニ", craft: "", hp: 40, pp: 5, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 211, rdef: 220, tdef: 211, sreg: 3, rreg: 4, treg: 0, efreg: 3, eireg: 0, etreg: 0, ewreg: 3, elreg: 3, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L11-2", unit_type: "leg", rareity: 11, name: "サイキショク", craft: "", hp: 50, pp: 0, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 229, rdef: 202, tdef: 238, sreg: 4, rreg: 4, treg: 0, efreg: 0, eireg: 8, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L11-2-1", unit_type: "leg", rareity: 11, name: "サイキショク", craft: "打撃防御【HP】Lv.10", hp: 100, pp: 0, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 240, rdef: 220, tdef: 220, sreg: 4, rreg: 0, treg: 0, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L11-2-2", unit_type: "leg", rareity: 11, name: "サイキショク", craft: "射撃防御【PP】Lv.10", hp: 0, pp: 10, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 240, rdef: 220, tdef: 220, sreg: 0, rreg: 4, treg: 0, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L11-2-3", unit_type: "leg", rareity: 11, name: "サイキショク", craft: "法撃防御【属性】Lv.10", hp: 30, pp: 3, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 240, rdef: 220, tdef: 220, sreg: 0, rreg: 0, treg: 4, efreg: 4, eireg: 4, etreg: 4, ewreg: 4, elreg: 4, edreg: 4 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L11-4", unit_type: "leg", rareity: 11, name: "インヴェリーフ", craft: "", hp: 60, pp: 6, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 230, rdef: 210, tdef: 220, sreg: 3, rreg: 2, treg: 3, efreg: 2, eireg: 0, etreg: 2, ewreg: 0, elreg: 0, edreg: 3 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L11-5", unit_type: "leg", rareity: 11, name: "オフゼリーフ", craft: "", hp: 70, pp: 5, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 235, rdef: 215, tdef: 225, sreg: 4, rreg: 3, treg: 3, efreg: 0, eireg: 2, etreg: 0, ewreg: 2, elreg: 2, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L11-6", unit_type: "leg", rareity: 11, name: "イデアルラーナ", craft: "", hp: 100, pp: 0, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 206, rdef: 202, tdef: 202, sreg: 0, rreg: 3, treg: 3, efreg: 0, eireg: 2, etreg: 0, ewreg: 2, elreg: 0, edreg: 2 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L11-7", unit_type: "leg", rareity: 11, name: "ダリルフィス", craft: "", hp: 0, pp: 0, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 245, rdef: 225, tdef: 235, sreg: 5, rreg: 4, treg: 3, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 6 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L11-7-1", unit_type: "leg", rareity: 11, name: "ダリルフィス", craft: "打撃防御【HP】Lv.10", hp: 100, pp: 0, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 240, rdef: 220, tdef: 220, sreg: 4, rreg: 0, treg: 0, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L11-7-2", unit_type: "leg", rareity: 11, name: "ダリルフィス", craft: "射撃防御【PP】Lv.10", hp: 0, pp: 10, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 240, rdef: 220, tdef: 220, sreg: 0, rreg: 4, treg: 0, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L11-7-3", unit_type: "leg", rareity: 11, name: "ダリルフィス", craft: "法撃防御【属性】Lv.10", hp: 30, pp: 3, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 240, rdef: 220, tdef: 220, sreg: 0, rreg: 0, treg: 4, efreg: 4, eireg: 4, etreg: 4, ewreg: 4, elreg: 4, edreg: 4 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L11-8", unit_type: "leg", rareity: 11, name: "オービットセル", craft: "", hp: 50, pp: 7, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 225, rdef: 235, tdef: 215, sreg: 2, rreg: 4, treg: 4, efreg: 0, eireg: 0, etreg: 3, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L12-1", unit_type: "leg", rareity: 12, name: "サークレイ", craft: "", hp: 50, pp: 9, satk: 25, ratk: 25, tatk: 25, dex: 0, sdef: 225, rdef: 225, tdef: 225, sreg: 2, rreg: 2, treg: 2, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L12-2", unit_type: "leg", rareity: 12, name: "サークユニオン", craft: "", hp: 75, pp: 9, satk: 25, ratk: 25, tatk: 25, dex: 0, sdef: 229, rdef: 229, tdef: 229, sreg: 2, rreg: 2, treg: 4, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L12-3", unit_type: "leg", rareity: 12, name: "ホワイティルエア", craft: "", hp: 0, pp: 20, satk: 20, ratk: 20, tatk: 20, dex: 0, sdef: 193, rdef: 193, tdef: 215, sreg: 0, rreg: 0, treg: 0, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L12-7", unit_type: "leg", rareity: 12, name: "雷閃イザネツチ", craft: "", hp: 150, pp: 0, satk: 20, ratk: 20, tatk: 20, dex: 20, sdef: 258, rdef: 243, tdef: 243, sreg: 4, rreg: 4, treg: 4, efreg: 0, eireg: 0, etreg: 6, ewreg: 0, elreg: 4, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L12-8", unit_type: "leg", rareity: 12, name: "アストラライズ", craft: "", hp: 60, pp: 10, satk: 20, ratk: 20, tatk: 20, dex: 0, sdef: 233, rdef: 230, tdef: 236, sreg: 2, rreg: 2, treg: 2, efreg: 2, eireg: 2, etreg: 0, ewreg: 0, elreg: 0, edreg: 2 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L12-13", unit_type: "leg", rareity: 12, name: "ゼイネシスレム", craft: "", hp: 120, pp: 4, satk: 15, ratk: 15, tatk: 15, dex: 0, sdef: 240, rdef: 244, tdef: 249, sreg: 3, rreg: 2, treg: 3, efreg: 2, eireg: 2, etreg: 2, ewreg: 2, elreg: 2, edreg: 2 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L12-14", unit_type: "leg", rareity: 12, name: "クリファドレム", craft: "", hp: 40, pp: 13, satk: 35, ratk: 35, tatk: 35, dex: 0, sdef: 230, rdef: 236, tdef: 231, sreg: 2, rreg: 1, treg: 2, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L12-15", unit_type: "leg", rareity: 12, name: "タッグボード", craft: "", hp: 50, pp: 10, satk: 40, ratk: 40, tatk: 40, dex: 0, sdef: 246, rdef: 237, tdef: 240, sreg: 4, rreg: 4, treg: 5, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L12-16", unit_type: "leg", rareity: 12, name: "イヴリダセルブ", craft: "", hp: 60, pp: 10, satk: 25, ratk: 25, tatk: 25, dex: 0, sdef: 234, rdef: 234, tdef: 234, sreg: 3, rreg: 3, treg: 3, efreg: 2, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 2 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L12-19", unit_type: "leg", rareity: 12, name: "ステラウォール", craft: "", hp: 50, pp: 5, satk: 15, ratk: 15, tatk: 15, dex: 15, sdef: 229, rdef: 229, tdef: 229, sreg: 2, rreg: 2, treg: 2, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L12-20", unit_type: "leg", rareity: 12, name: "フォボスニード", craft: "", hp: 80, pp: 0, satk: 40, ratk: 40, tatk: 40, dex: 0, sdef: 263, rdef: 263, tdef: 263, sreg: 5, rreg: 5, treg: 5, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["b" /* UnitParameter */]({ id: "L12-25", unit_type: "leg", rareity: 12, name: "アリュールエイド", craft: "", hp: 0, pp: 17, satk: 0, ratk: 85, tatk: 0, dex: 0, sdef: 229, rdef: 286, tdef: 233, sreg: 1, rreg: 4, treg: 2, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 5 })
];
var UNIT_SETS = [
    /* %%unit_sets%% */
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["c" /* UnitSetParameter */]({ id: "S11-1", unit_type: "set", rear_units: ["ブリサエーリ"], arm_units: ["ブリサオッジ"], leg_units: ["ブリサマーニ"], hp: 80, pp: 5, satk: 70, ratk: 70, tatk: 70, dex: 50, sdef: 0, rdef: 0, tdef: 0, sreg: 0, rreg: 0, treg: 0, efreg: 0, eireg: 9, etreg: 9, ewreg: 0, elreg: 0, edreg: 9 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["c" /* UnitSetParameter */]({ id: "S11-2", unit_type: "set", rear_units: ["サイキホウヨク"], arm_units: ["サイキソウ"], leg_units: ["サイキショク"], hp: 0, pp: 25, satk: 60, ratk: 60, tatk: 60, dex: 80, sdef: 0, rdef: 0, tdef: 0, sreg: 0, rreg: 0, treg: 0, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["c" /* UnitSetParameter */]({ id: "S11-4", unit_type: "set", rear_units: ["インヴェルム"], arm_units: ["インヴェンド"], leg_units: [], hp: 0, pp: 10, satk: 70, ratk: 70, tatk: 70, dex: 50, sdef: 0, rdef: 0, tdef: 0, sreg: 0, rreg: 0, treg: 0, efreg: 3, eireg: 0, etreg: 3, ewreg: 0, elreg: 0, edreg: 3 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["c" /* UnitSetParameter */]({ id: "S11-5", unit_type: "set", rear_units: ["オフゼルム"], arm_units: ["オフゼンド"], leg_units: [], hp: 50, pp: 20, satk: 60, ratk: 60, tatk: 60, dex: 50, sdef: 0, rdef: 0, tdef: 0, sreg: 0, rreg: 0, treg: 0, efreg: 0, eireg: 3, etreg: 0, ewreg: 3, elreg: 3, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["c" /* UnitSetParameter */]({ id: "S11-6", unit_type: "set", rear_units: ["イデアルディール"], arm_units: [], leg_units: ["イデアルラーナ"], hp: 50, pp: 5, satk: 75, ratk: 75, tatk: 75, dex: 40, sdef: 0, rdef: 80, tdef: 80, sreg: 0, rreg: 0, treg: 0, efreg: 0, eireg: 2, etreg: 0, ewreg: 2, elreg: 0, edreg: 2 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["c" /* UnitSetParameter */]({ id: "S11-7", unit_type: "set", rear_units: [], arm_units: ["ダランフィス"], leg_units: ["ダリルフィス"], hp: 120, pp: 20, satk: 0, ratk: 0, tatk: 0, dex: 60, sdef: 0, rdef: 0, tdef: 0, sreg: 0, rreg: 0, treg: 0, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 }),
    new __WEBPACK_IMPORTED_MODULE_0__unit_parameter__["c" /* UnitSetParameter */]({ id: "S0", unit_type: "set", rear_units: [], arm_units: [], leg_units: [], hp: 0, pp: 0, satk: 0, ratk: 0, tatk: 0, dex: 0, sdef: 0, rdef: 0, tdef: 0, sreg: 0, rreg: 0, treg: 0, efreg: 0, eireg: 0, etreg: 0, ewreg: 0, elreg: 0, edreg: 0 })
];
//# sourceMappingURL=unit-parameter-data.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__unit_parameter_data__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unit_parameter__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitSelectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UnitSelectorComponent = (function () {
    function UnitSelectorComponent() {
        this.label_short = __WEBPACK_IMPORTED_MODULE_2__unit_parameter__["a" /* LABEL_SHORT */];
        this.rear_units = __WEBPACK_IMPORTED_MODULE_1__unit_parameter_data__["a" /* REAR_UNITS */];
        this.rear_index = 0;
        this.arm_units = __WEBPACK_IMPORTED_MODULE_1__unit_parameter_data__["b" /* ARM_UNITS */];
        this.arm_index = 0;
        this.leg_units = __WEBPACK_IMPORTED_MODULE_1__unit_parameter_data__["c" /* LEG_UNITS */];
        this.leg_index = 0;
        this.unit_sets = __WEBPACK_IMPORTED_MODULE_1__unit_parameter_data__["d" /* UNIT_SETS */];
        this.unit_set_index = this.unit_sets.length - 1;
    }
    UnitSelectorComponent.prototype.updateUnitSet = function () {
        for (var idx = 0; idx < this.unit_sets.length; ++idx) {
            if (this.unit_sets[idx].match(this.rear_units[this.rear_index].name, this.arm_units[this.arm_index].name, this.leg_units[this.leg_index].name)) {
                this.unit_set_index = idx;
                break;
            }
        }
        ;
    };
    return UnitSelectorComponent;
}());
UnitSelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'unit-selector',
        template: __webpack_require__(143)
    })
], UnitSelectorComponent);

//# sourceMappingURL=unit-selector.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[168]);
//# sourceMappingURL=main.bundle.js.map