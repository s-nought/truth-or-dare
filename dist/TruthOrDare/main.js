(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>- Truth or Dare? -</h1>\n</div>\n\n<div class=\"container\">\n\n  <div class=\"jumbotron\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div id=\"accordion\" role=\"tablist\">\n          <div class=\"card-deck\">\n            <div class=\"card\">\n              <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n                <h5 class=\"mb-0\">\n                  <div id=\"card_title_1\" data-toggle=\"collapse\" href=\"#rule\" aria-expanded=\"false\" aria-controls=\"rule\"\n                    class=\"collapsed\">\n                    <i class=\"fas fa-info-circle info-color fa-lg fa-fw\"></i>Infomation\n                  </div>\n                </h5>\n              </div>\n              <div id=\"rule\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                <div class=\"card-body\">\n                  真実か挑戦か- Truth or Dare? -\n                  <ul>\n                    <li>お互いにカードを引き合う．</li>\n                    <li>カードの数字がより大きい方を引いた者が勝者となり，その一方は敗者となる．ただし，Ace(1)についてはKing(13)よりも大きい数字として扱う．</li>\n                    <li>引いたカードの数字が同じ場合は，再度お互いにカードを引く．</li>\n                    <li>勝者は敗者に対し，任意の質問をし，「真実」か「挑戦」かを選択させる．</li>\n                    <li>敗者が「真実」を選択した場合，敗者は勝者の質問に対し，必ず嘘偽りの無い真実を語らなければならない．</li>\n                    <li>敗者が「挑戦」を選択した場合，勝者は敗者に対して任意の命令を下し，敗者はその命令を必ず実行しなければならない．</li>\n                    <li></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"jumbotron\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"card-deck\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <div *ngIf=\"!click_flg; then btnBlock; else resultBlock\"></div>\n              <ng-template #btnBlock><button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"draw('first')\">カードを引く</button></ng-template>\n              <ng-template #resultBlock><button class=\"btn btn-outline-danger\" disabled>結果</button></ng-template>\n              <span id=\"result\"></span>\n            </div>\n            <div class=\"card-body\">\n              <div style=\"text-align:center\">\n                <p id=\"insert\"></p>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <div *ngIf=\"!click_flg2; then btnBlock2; else resultBlock2\"></div>\n              <ng-template #btnBlock2><button type=\"button\" class=\"btn btn-outline-info\" (click)=\"draw('second')\">カードを引く</button></ng-template>\n              <ng-template #resultBlock2><button class=\"btn btn-outline-info\" disabled>結果</button></ng-template>\n              <span id=\"result2\"></span>\n            </div>\n            <div class=\"card-body\">\n              <div style=\"text-align:center\">\n                <p id=\"insert2\"></p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div *ngIf=\"click_flg && click_flg2\"><button type=\"button\" class=\"btn btn-success\" (click)=\"reset()\">Again</button></div>\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.click_flg = false;
        this.click_flg2 = false;
        this.click_count = 0;
        this.show_win = "<i class=\"fas fa-chess-king fa-lg winner-color fa-fw faa-bounce animated\"></i>WIN";
        this.show_loose = "<i class=\"fas fa-chess-pawn fa-lg loser-color fa-fw faa-shake animated\"></i>LOSE";
        this.show_draw = "<i class=\"fas fa-balance-scale fa-lg draw-color fa-fw faa-float animated\"></i>DRAW";
        this.loop = 0;
    }
    AppComponent.prototype.draw = function (player) {
        this.mark_flg = this.getRandomInt(4);
        switch (this.mark_flg) {
            case 0:
                this.mark = "diamonds";
                this.color = "B22222";
                this.mark_name = "ダイヤ";
                break;
            case 1:
                this.mark = "clubs";
                this.color = "000000";
                this.mark_name = "クラブ";
                break;
            case 2:
                this.mark = "spades";
                this.color = "000000";
                this.mark_name = "スペード";
                break;
            case 3:
                this.mark = "hearts";
                this.color = "B22222";
                this.mark_name = "ハート";
                break;
            default:
                break;
        }
        this.role_flg = this.getRandomInt(13) + 1;
        switch (this.role_flg) {
            case 1:
                this.role = "ace";
                this.role_name = "エース";
                break;
            case 11:
                this.role = "jack";
                this.role_name = "ジャック";
                break;
            case 12:
                this.role = "queen";
                this.role_name = "クイーン";
                break;
            case 13:
                this.role = "king";
                this.role_name = "キング";
                break;
            default:
                this.role = this.role_flg.toString();
                this.role_name = this.role;
                break;
        }
        this.result =
            "\n<h5 class=\"card-title\">\n  " + this.mark_name + "\u306E" + this.role_name + "\n</h5>\n<img src=\"https://img.icons8.com/ios/150/" + this.color + "/" + this.role + "-of-" + this.mark + ".png\">\n";
        switch (player) {
            case "first":
                $('#insert').hide().fadeIn(3000);
                $('#insert').html(this.result);
                this.click_flg = true;
                this.card_mark = this.mark;
                this.card_num = this.role_flg;
                break;
            case "second":
                $('#insert2').hide().fadeIn(3000);
                $('#insert2').html(this.result);
                this.click_flg2 = true;
                this.card_mark2 = this.mark;
                this.card_num2 = this.role_flg;
                break;
            default:
                break;
        }
        if (this.card_mark == this.card_mark2 && this.card_num == this.card_num2) {
            this.draw(player);
        }
        if (0 < this.card_num && 0 < this.card_num2) {
            this.judgeOfWinLose();
        }
    };
    AppComponent.prototype.getRandomInt = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    AppComponent.prototype.judgeOfWinLose = function () {
        $('#result, #result2').hide().fadeIn(3000);
        if (this.card_num == 1 || this.card_num2 == 1) {
            if (this.card_num == this.card_num2) {
                $('#result, #result2').html(this.show_draw);
            }
            else if (this.card_num == 1) {
                $('#result').html(this.show_win);
                $('#result2').html(this.show_loose);
            }
            else {
                $('#result').html(this.show_loose);
                $('#result2').html(this.show_win);
            }
        }
        else {
            if (this.card_num < this.card_num2) {
                $('#result').html(this.show_loose);
                $('#result2').html(this.show_win);
            }
            else if (this.card_num == this.card_num2) {
                $('#result, #result2').html(this.show_draw);
            }
            else {
                $('#result').html(this.show_win);
                $('#result2').html(this.show_loose);
            }
        }
    };
    AppComponent.prototype.reset = function () {
        this.click_flg = false;
        this.click_flg2 = false;
        this.card_num = 0;
        this.card_num2 = 0;
        $('[id^=insert]').html("");
        $('[id^=result]').html("");
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nought/Desktop/angular/TruthOrDare/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map