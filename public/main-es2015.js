(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\" href=\"#\"></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n        aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n        <ul class=\"navbar-nav\">\r\n            <!-- <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/game\" routerLinkActive=\"active\"\r\n                    [routerLinkActiveOptions]=\"{exact:true}\">Home</a>\r\n            </li> -->\r\n        </ul>\r\n        <ul class=\"navbar-nav flex-row ml-md-auto d-none d-md-flex\">\r\n            <li class=\"nav-item\" *ngIf=\"!isLoggedIn\">\r\n                <a class=\"nav-link\"  routerLink=\"/login\" routerLinkActive=\"active\"\r\n                    [routerLinkActiveOptions]=\"{exact:true}\">Log in</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"isLoggedIn\" (click)=\"logOut()\">\r\n                <a class=\"nav-link\"  routerLink=\"/login\" routerLinkActive=\"active\"\r\n                    [routerLinkActiveOptions]=\"{exact:true}\">Log Out</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"!isLoggedIn\">\r\n                <a class=\"nav-link\" routerLink=\"/register\" routerLinkActive=\"active\"\r\n                    [routerLinkActiveOptions]=\"{exact:true}\">Register</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n<div class=\"container mt-4\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/game/game.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/game/game.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"card mb-4\" *ngIf=\"tamamlandi\">\r\n    <div *ngIf=\"puan != 0\" class=\"card-body\">\r\n      Tebrikler yarışmayı {{ puan }} puan ile tamamladınız!\r\n    </div>\r\n    <div *ngIf=\"puan == 0\" class=\"card-body\">\r\n      Maalesef yarışmayı {{ puan }} puan ile tamamladınız!\r\n    </div>\r\n  </div>\r\n  <div class=\"card\" *ngIf=\"!mevcutSoru; else mevcutSoruYoksa\">\r\n    <div class=\"card-header\">\r\n      <h5 class=\"mb-0\">Kelime Oyunu Yarışmasına Hoşgeldiniz!</h5>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      Yarışmaya başlamak için yarışmaya başla butonuna basın.\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <button class=\"btn btn-info\" (click)=\"basla()\">Yarışmaya Başla</button>\r\n    </div>\r\n  </div>\r\n  <ng-template #mevcutSoruYoksa>\r\n    <div class=\"card\">\r\n      <div class=\"card-header d-flex\">\r\n        <h4 class=\"mr-4\">{{ mevcutSoru.soru }}</h4>\r\n        <!-- TO DO son soruda soru ver çıkmayacak, soruyu cevapladığında tebrikler bölümü görünebilir. -->\r\n      </div>\r\n      <div class=\"card-header d-flex\">\r\n        <div class=\"d-flex\">\r\n          <div class=\"totalSecond\">\r\n            <span>Toplam Süre</span>\r\n            <div id=\"countdown\">\r\n              <div id=\"countdown-number\" class=\"float-right\">{{toplamKalanSure}}</div>\r\n              <svg>\r\n                <circle id=\"total\" r=\"18\" cx=\"20\" cy=\"20\"></circle>\r\n              </svg>\r\n            </div>\r\n          </div>\r\n          <div class=\"mr-4 float-right\" *ngIf=\"!cevaplandi;else emty\">\r\n            <span>Cevap Süresi</span>\r\n            <div id=\"countdown\">\r\n              <div id=\"countdown-number\" class=\"float-right\">{{kalanSure}}</div>\r\n              <svg>\r\n                <circle id=\"single\" r=\"18\" cx=\"20\" cy=\"20\"></circle>\r\n              </svg>\r\n            </div>\r\n          </div>\r\n          <div class=\"mr-2 float-right\">\r\n            <button class=\"btn btn-info  mr-2 float-right\" (click)=\"soruVer()\" *ngIf=\"cevaplandi\"><span> Sonraki Soru\r\n              </span></button>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- TO DO son soruda soru ver çıkmayacak, soruyu cevapladığında tebrikler bölümü görünebilir. -->\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <harf [deger]=\"harf.harf.toLocaleUpperCase('tr')\" [acik]=\"harf.acildi\" *ngFor=\"let harf of harfler\"></harf>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4 d-flex\">\r\n            <div class=\"mr-4\">Toplam Puan: {{ puan }}</div>\r\n            <div class=\"mr-4\">Kelime Puanı: {{ harfPuan }}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <div class=\"input-group\">\r\n          <!-- <div class=\"input-group-append\"> -->\r\n          <button [disabled]=\"!harflerVerildi\" class=\"btn btn-danger\" (click)=\"harfVer()\">\r\n            <span>Harf Ver</span>\r\n          </button>\r\n          <input class=\"form-control ml-2 mr-2\" type=\"text\" placeholder=\"Cevapla\" [(ngModel)]=\"yarismaciCevap\"\r\n            (keypress)=\"enterIleCevapVer($event)\" (keyup)=\"yarismaciCevap = yarismaciCevap.toLocaleUpperCase('tr')\" />\r\n          <button [disabled]=\"!yarismaciCevap\" (click)=\"cevapVer()\" class=\"btn btn-success\">\r\n            <span>Cevap Ver</span>\r\n          </button>\r\n        </div>\r\n        <!-- </div> -->\r\n      </div>\r\n      <div class=\"card-footer\" [ngClass]=\"mesajClass\" *ngIf=\"mesaj\">\r\n        <i class=\"fa fa-fw fa-lg fa-check\"></i> {{ mesaj }}\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/harf/harf.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/harf/harf.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kelime\">\r\n  <div class=\"elmas\">\r\n    <div class=\"hexagon harf\">\r\n      <span  style=\"display: inline-block\" @rotatedState *ngIf=\"acik; else acikDegil\">{{ deger }}</span>\r\n      <ng-template #acikDegil>\r\n        <span></span>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n    <div *ngIf=\"mesajTur == 'success'\">\r\n        <div class=\"demo\">\r\n            <div class=\"demo__colored-blocks\">\r\n              <div class=\"demo__colored-blocks-rotater\">\r\n                <div class=\"demo__colored-block\"></div>\r\n                <div class=\"demo__colored-block\"></div>\r\n                <div class=\"demo__colored-block\"></div>\r\n              </div>\r\n              <div class=\"demo__colored-blocks-inner\"></div>\r\n              <div class=\"demo__text\">Ready</div>\r\n            </div>\r\n            <div class=\"demo__inner\">\r\n              <svg class=\"demo__numbers\" viewBox=\"0 0 100 100\">\r\n                <defs>\r\n                  <path class=\"demo__num-path-1\" d=\"M40,28 55,22 55,78\"/>\r\n                  <path class=\"demo__num-join-1-2\" d=\"M55,78 55,83 a17,17 0 1,0 34,0 a20,10 0 0,0 -20,-10\"/>\r\n                  <path class=\"demo__num-path-2\" d=\"M69,73 l-35,0 l30,-30 a16,16 0 0,0 -22.6,-22.6 l-7,7\"/>\r\n                  <path class=\"demo__num-join-2-3\" d=\"M28,69 Q25,44 34.4,27.4\"/>\r\n                  <path class=\"demo__num-path-3\" d=\"M30,20 60,20 40,50 a18,15 0 1,1 -12,19\"/>\r\n                </defs>\r\n                <path class=\"demo__numbers-path\" \r\n                      d=\"M-10,20 60,20 40,50 a18,15 0 1,1 -12,19 \r\n                         Q25,44 34.4,27.4\r\n                         l7,-7 a16,16 0 0,1 22.6,22.6 l-30,30 l35,0 L69,73 \r\n                         a20,10 0 0,1 20,10 a17,17 0 0,1 -34,0 L55,83 \r\n                         l0,-61 L40,28\" />\r\n              </svg>\r\n            </div>\r\n          </div>\r\n        <!-- Giriş Başarılı! Birazdan Oyun Sayfasına Yönlendirileceksiniz...  class=\"alert alert-success\" role=\"alert\" -->\r\n    </div>\r\n    <div *ngIf=\"mesajTur == 'error'\" class=\"alert alert-danger\" role=\"alert\">\r\n        E-Posta veya Şifre Hatalı!\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Email address</label>\r\n        <input type=\"email\" name=\"email\" [(ngModel)]=\"loginUser.email\" class=\"form-control\" placeholder=\"E-Mail\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Password</label>\r\n        <input type=\"password\" [(ngModel)]=\"loginUser.password\" class=\"form-control\" name=\"password\"\r\n            placeholder=\"Password\">\r\n    </div>\r\n    <button type=\"submit\" [disabled]=\"mesajTur\" (click)=\"login(loginUser)\" class=\"btn btn-primary\">Login</button>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n    <div *ngIf=\"mesajTur == 'success'\" class=\"alert alert-success\" role=\"alert\">\n        Kaydınız Başarıyla Gerçekleşti!\n    </div>\n    <div *ngIf=\"mesajTur == 'error'\" class=\"alert alert-danger\" role=\"alert\">\n        Kayıt Sırasında Bir Hata Oluştu!\n    </div>\n    <div class=\"form-group\">\n        <label>Email address</label>\n        <input type=\"email\" name=\"email\" [(ngModel)]=\"registerUser.email\" class=\"form-control\" placeholder=\"E-Mail\">\n    </div>\n    <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" [(ngModel)]=\"registerUser.password\" class=\"form-control\" name=\"password\"\n            placeholder=\"Password\">\n    </div>\n    <div class=\"form-group\">\n        <label>First Name</label>\n        <input type=\"text\" [(ngModel)]=\"registerUser.firstName\" class=\"form-control\" name=\"firstName\"\n            placeholder=\"First Name\">\n    </div>\n    <div class=\"form-group\">\n        <label>Last Name</label>\n        <input type=\"text\" [(ngModel)]=\"registerUser.lastName\" class=\"form-control\" name=\"lastName\"\n            placeholder=\"Last Name\">\n    </div>\n    <button type=\"submit\" (click)=\"register(registerUser)\" class=\"btn btn-primary\">Register</button>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/soru-bankasi/soru-bankasi.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/soru-bankasi/soru-bankasi.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n    <div *ngIf=\"mesajTur == 'success'\" class=\"alert alert-success\" role=\"alert\">\n        Soru Veritabanına Eklendi!\n    </div>\n    <div *ngIf=\"mesajTur == 'error'\" class=\"alert alert-danger\" role=\"alert\">\n        Kayıt Sırasında Bir Hata Oluştu!\n    </div>\n    <div class=\"form-group\">\n        <label>Soru</label>\n        <input type=\"text\" [(ngModel)]=\"soruBankasi.soru\" class=\"form-control\" name=\"soru\" placeholder=\"Soru\">\n    </div>\n    <div class=\"form-group\">\n        <label>Cevap</label>\n        <input type=\"text\" [(ngModel)]=\"soruBankasi.cevap\" class=\"form-control\" name=\"cevap\" placeholder=\"Cevap\">\n    </div>\n    <div class=\"form-group\">\n        <label>Cevap Harf Sayisi</label>\n        <input type=\"text\" [(ngModel)]=\"soruBankasi.cevapharfsayisi\" class=\"form-control\" name=\"cevapharfsayisi\"\n            placeholder=\"Cevap Harf Sayisi\">\n    </div>\n    <button type=\"submit\" (click)=\"saveQuestion(soruBankasi)\" class=\"btn btn-primary\">Save</button>\n</form>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
        if (this.authService.isAuthenticated) {
        }
    }
    logOut() {
        this.authService.logOut();
    }
    get isLoggedIn() {
        return this.authService.isAuthenticated;
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_harf_harf_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/harf/harf.component */ "./src/app/components/harf/harf.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth-interceptor.service */ "./src/app/services/auth-interceptor.service.ts");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");
/* harmony import */ var _components_soru_bankasi_soru_bankasi_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/soru-bankasi/soru-bankasi.component */ "./src/app/components/soru-bankasi/soru-bankasi.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");















// import {AuthGuard} from "./guards/auth.guard"
var routes = [
    { path: "", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], pathMatch: "full" },
    { path: "game", component: _components_game_game_component__WEBPACK_IMPORTED_MODULE_12__["GameComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: "register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: "question", component: _components_soru_bankasi_soru_bankasi_component__WEBPACK_IMPORTED_MODULE_13__["SoruBankasiComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_harf_harf_component__WEBPACK_IMPORTED_MODULE_8__["HarfComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
            _components_game_game_component__WEBPACK_IMPORTED_MODULE_12__["GameComponent"],
            _components_soru_bankasi_soru_bankasi_component__WEBPACK_IMPORTED_MODULE_13__["SoruBankasiComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)
        ],
        providers: [
            _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptorService"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/game/game.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/game/game.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\n  border: 1px solid #fa1570;\n  color: #fa1570;\n  border-radius: 0.25rem !important;\n}\n\n#countdown {\n  position: relative;\n  height: 40px;\n  width: 40px;\n  text-align: center;\n}\n\n#countdown-number {\n  color: white;\n  display: inline-block;\n  line-height: 40px;\n}\n\nsvg {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  transform: rotateY(-180deg) rotateZ(-90deg);\n}\n\nsvg circle {\n  stroke-dasharray: 113px;\n  stroke-dashoffset: 0px;\n  stroke-linecap: round;\n  stroke-width: 2px;\n  stroke: #fa1570;\n  fill: none;\n  -webkit-animation: countdown 30s linear infinite forwards;\n          animation: countdown 30s linear infinite forwards;\n}\n\n#total {\n  -webkit-animation: countdown 300s linear infinite forwards !important;\n          animation: countdown 300s linear infinite forwards !important;\n}\n\n.totalSecond {\n  margin-right: 8rem !important;\n}\n\n@-webkit-keyframes countdown {\n  from {\n    stroke-dashoffset: 0px;\n  }\n  to {\n    stroke-dashoffset: 113px;\n  }\n}\n\n@keyframes countdown {\n  from {\n    stroke-dashoffset: 0px;\n  }\n  to {\n    stroke-dashoffset: 113px;\n  }\n}\n\n.btn-success {\n  background-color: #25a499;\n  border-color: #25a499;\n}\n\n.btn-danger {\n  background-color: #ff1743;\n  border-color: #ff1743;\n}\n\n.btn-info {\n  background-color: #fa1570;\n  border-color: #fa1570;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lL0M6XFxBbmd1bGFyXFxGaW5kVGhlV29yZFxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGdhbWVcXGdhbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHlEQUFBO1VBQUEsaURBQUE7QUNDRjs7QURFQTtFQUNFLHFFQUFBO1VBQUEsNkRBQUE7QUNDRjs7QURDQTtFQUNJLDZCQUFBO0FDRUo7O0FEQUE7RUFDRTtJQUNFLHNCQUFBO0VDR0Y7RUREQTtJQUNFLHdCQUFBO0VDR0Y7QUFDRjs7QURUQTtFQUNFO0lBQ0Usc0JBQUE7RUNHRjtFRERBO0lBQ0Usd0JBQUE7RUNHRjtBQUNGOztBREFBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQ0VGOztBREFBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQ0dGOztBREFBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nYW1lL2dhbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmExNTcwO1xyXG4gIGNvbG9yOiAjZmExNTcwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuI2NvdW50ZG93biB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjb3VudGRvd24tbnVtYmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG5zdmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpIHJvdGF0ZVooLTkwZGVnKTtcclxufVxyXG5cclxuc3ZnIGNpcmNsZSB7XHJcbiAgc3Ryb2tlLWRhc2hhcnJheTogMTEzcHg7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDBweDtcclxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgc3Ryb2tlOiAjZmExNTcwO1xyXG4gIGZpbGw6IG5vbmU7XHJcbiAgYW5pbWF0aW9uOiBjb3VudGRvd24gMzBzIGxpbmVhciBpbmZpbml0ZSBmb3J3YXJkcztcclxufVxyXG5cclxuI3RvdGFsIHtcclxuICBhbmltYXRpb246IGNvdW50ZG93biAzMDBzIGxpbmVhciBpbmZpbml0ZSBmb3J3YXJkcyAhaW1wb3J0YW50O1xyXG59XHJcbi50b3RhbFNlY29uZHtcclxuICAgIG1hcmdpbi1yaWdodDogOHJlbSAhaW1wb3J0YW50O1xyXG59XHJcbkBrZXlmcmFtZXMgY291bnRkb3duIHtcclxuICBmcm9tIHtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwcHg7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMTNweDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1YTQ5OTtcclxuICBib3JkZXItY29sb3I6ICMyNWE0OTk7XHJcbn1cclxuLmJ0bi1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjE3NDM7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmYxNzQzO1xyXG59XHJcblxyXG4uYnRuLWluZm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYTE1NzA7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmExNTcwO1xyXG59XHJcbiIsIi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmExNTcwO1xuICBjb2xvcjogI2ZhMTU3MDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4jY291bnRkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb3VudGRvd24tbnVtYmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuXG5zdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKSByb3RhdGVaKC05MGRlZyk7XG59XG5cbnN2ZyBjaXJjbGUge1xuICBzdHJva2UtZGFzaGFycmF5OiAxMTNweDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDBweDtcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICBzdHJva2Utd2lkdGg6IDJweDtcbiAgc3Ryb2tlOiAjZmExNTcwO1xuICBmaWxsOiBub25lO1xuICBhbmltYXRpb246IGNvdW50ZG93biAzMHMgbGluZWFyIGluZmluaXRlIGZvcndhcmRzO1xufVxuXG4jdG90YWwge1xuICBhbmltYXRpb246IGNvdW50ZG93biAzMDBzIGxpbmVhciBpbmZpbml0ZSBmb3J3YXJkcyAhaW1wb3J0YW50O1xufVxuXG4udG90YWxTZWNvbmQge1xuICBtYXJnaW4tcmlnaHQ6IDhyZW0gIWltcG9ydGFudDtcbn1cblxuQGtleWZyYW1lcyBjb3VudGRvd24ge1xuICBmcm9tIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMHB4O1xuICB9XG4gIHRvIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTEzcHg7XG4gIH1cbn1cbi5idG4tc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNWE0OTk7XG4gIGJvcmRlci1jb2xvcjogIzI1YTQ5OTtcbn1cblxuLmJ0bi1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxNzQzO1xuICBib3JkZXItY29sb3I6ICNmZjE3NDM7XG59XG5cbi5idG4taW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYTE1NzA7XG4gIGJvcmRlci1jb2xvcjogI2ZhMTU3MDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/game/game.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_soru_bankasi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/soru-bankasi.service */ "./src/app/services/soru-bankasi.service.ts");



let GameComponent = class GameComponent {
    // apiUrl="https://localhost:44341/api/SoruCevaps";
    constructor(soruBankasiService) {
        this.soruBankasiService = soruBankasiService;
        this.mesaj = null;
        this.mesajClass = "";
        this.mesajSure = null;
        this.mevcutSoru = null;
        this.harfler = [];
        this.puan = 0;
        this.harfPuan = 0;
        this.yarismaciCevap = "";
        this.tamamlandi = false;
        this.cevaplandi = false;
        this.harflerVerildi = true;
        this.sure = null;
        this.toplamSure = null;
        this.kalanSure = 0;
        this.toplamKalanSure = 0;
        //this.basla(); 
    }
    ngOnInit() {
        //this.basla(); 
    }
    sorulariGetir() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.sorular = yield this.soruBankasiService.getQuestions().toPromise();
        });
    }
    mesajGoster(mesaj, tur = null) {
        if (this.mesajSure) {
            clearTimeout(this.mesajSure);
            this.mesajSure = null;
        }
        this.mesaj = mesaj;
        let stopInterVal = false;
        if (tur === MesajTurleri.hata) {
            this.mesajClass = "bg-danger text-white";
            stopInterVal = true;
        }
        else if (tur === MesajTurleri.basari) {
            this.mesajClass = "bg-success text-white ";
            stopInterVal = true;
        }
        else {
            this.mesajClass = "bg-dark text-white";
        }
        if (stopInterVal) {
            clearInterval(this.sure);
        }
        this.mesajSure = setTimeout(() => {
            this.mesaj = null;
        }, 3000);
    }
    basla() {
        this.tamamlandi = false;
        this.mevcutSoru = null;
        this.puan = 0;
        this.sorulariGetir().then(response => {
            this.soruVer();
            this.toplamSureGoster();
            this.mesajGoster("İyi yarışmalar!");
        });
    }
    toplamSureGoster() {
        this.toplamKalanSure = 300;
        this.toplamSure = setInterval(() => {
            this.toplamKalanSure--;
            if (this.toplamKalanSure === 0) {
                this.bitir();
            }
        }, 1000);
    }
    cevapSureGoster() {
        if (this.kalanSure !== 30) {
            this.kalanSure = 30;
        }
        this.sure = setInterval(() => {
            this.kalanSure--;
            if (this.kalanSure === 0) {
                this.bitir();
            }
        }, 1000);
    }
    bitir() {
        clearInterval(this.sure);
        this.mevcutSoru = null;
        this.tamamlandi = true;
    }
    soruVer() {
        this.yarismaciCevap = "";
        this.cevaplandi = false;
        this.harflerVerildi = true;
        this.mevcutSoru = this.sorular.find(x => x.soruldu == false);
        if (this.harfler.filter(x => x.acildi).length > 0 &&
            this.harfler.filter(x => x.acildi).length === this.harfler.length) {
            clearInterval(this.sure);
        }
        if (!this.mevcutSoru) {
            this.bitir();
            return;
        }
        this.cevapSureGoster();
        this.harfler = [];
        this.mevcutSoru.cevap.split("").map(x => {
            this.harfler.push({
                harf: x,
                acildi: false
            });
        });
        this.harfPuan = this.harfler.length * 100;
        this.mevcutSoru.soruldu = true;
    }
    harfVer(cevaplandi) {
        let rastgeleHarfIndex = Math.floor(Math.random() * this.harfler.length);
        if (!cevaplandi && this.harfPuan <= 100) {
            return;
        }
        let harf = this.harfler[rastgeleHarfIndex];
        while (harf.acildi) {
            rastgeleHarfIndex = Math.floor(Math.random() * this.harfler.length);
            harf = this.harfler[rastgeleHarfIndex];
        }
        harf.acildi = true;
        if (!cevaplandi) {
            this.harfPuan -= 100;
            if (this.harfPuan <= 100) {
                this.harflerVerildi = false;
            }
        }
    }
    cevapVer() {
        if (!this.yarismaciCevap.length) {
            return;
        }
        if (this.yarismaciCevap.length !== this.harfler.length) {
            this.mesajGoster("Harf sayıları tutmuyor!");
            return;
        }
        let cevap = this.yarismaciCevap.toLocaleUpperCase("tr-TR");
        this.yarismaciCevap = cevap;
        if (this.yarismaciCevap ===
            this.mevcutSoru.cevap.toLocaleUpperCase("tr-TR")) {
            if (!this.cevaplandi) {
                this.puan += this.harfPuan;
                this.cevaplandi = true;
                this.kalanSure = 30;
                this.mesajGoster("Tebrikler, doğru bildiniz!", MesajTurleri.basari);
            }
        }
        else {
            if (!this.cevaplandi) {
                if (this.puan >= this.harfPuan) {
                    this.puan -= this.harfPuan;
                }
                else {
                    this.puan = 0;
                }
                this.cevaplandi = true;
                this.kalanSure = 30;
                this.mesajGoster(`Yanlış cevap, doğrusu '${this.mevcutSoru.cevap}' olmalıydı!`, MesajTurleri.hata);
            }
        }
        this.harfler.forEach(x => {
            if (this.harfler.filter(x => x.acildi).length !== this.harfler.length) {
                this.harfVer(this.cevaplandi);
            }
        });
        //this.soruVer();
    }
    enterIleCevapVer(event) {
        if (event.key === Tuslar.Enter)
            this.cevapVer();
    }
};
GameComponent.ctorParameters = () => [
    { type: src_app_services_soru_bankasi_service__WEBPACK_IMPORTED_MODULE_2__["SoruBankasiService"] }
];
GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-game",
        template: __webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/game/game.component.html"),
        styles: [__webpack_require__(/*! ./game.component.scss */ "./src/app/components/game/game.component.scss")]
    })
], GameComponent);

var MesajTurleri;
(function (MesajTurleri) {
    MesajTurleri[MesajTurleri["hata"] = 0] = "hata";
    MesajTurleri[MesajTurleri["basari"] = 1] = "basari";
})(MesajTurleri || (MesajTurleri = {}));
var Tuslar;
(function (Tuslar) {
    Tuslar["Enter"] = "Enter";
})(Tuslar || (Tuslar = {}));


/***/ }),

/***/ "./src/app/components/harf/harf.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/harf/harf.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".kelime {\n  margin: 0 auto;\n  text-align: center;\n  display: inline-block;\n}\n\n.elmas {\n  overflow: hidden;\n  padding: 0 4px;\n  width: 60px;\n  height: 60px;\n}\n\n.harf {\n  font-weight: 700;\n  color: #FA1570;\n  justify-content: center;\n  font-size: 20pt;\n}\n\n.hexagon {\n  position: relative;\n  width: 60px;\n  height: 60px;\n  line-height: 50px;\n  text-align: center;\n  display: inline-block;\n  padding: 5px 0;\n  margin-right: 5px;\n}\n\n.hexagon:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  background: transparent url('hexa.png') no-repeat;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oYXJmL0M6XFxBbmd1bGFyXFxGaW5kVGhlV29yZFxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhhcmZcXGhhcmYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGFyZi9oYXJmLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURDQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNJRjs7QURGQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpREFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hhcmYvaGFyZi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rZWxpbWUge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmVsbWFzIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDAgNHB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG4uaGFyZiB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogI0ZBMTU3MDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHQ7XHJcbn1cclxuLmhleGFnb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA1cHggMDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4uaGV4YWdvbjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCguLi8uLi9pbWcvaGV4YS5wbmcpIG5vLXJlcGVhdDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxufVxyXG4iLCIua2VsaW1lIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZWxtYXMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwIDRweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmhhcmYge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI0ZBMTU3MDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBwdDtcbn1cblxuLmhleGFnb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4IDA7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uaGV4YWdvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoLi4vLi4vaW1nL2hleGEucG5nKSBuby1yZXBlYXQ7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/harf/harf.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/harf/harf.component.ts ***!
  \***************************************************/
/*! exports provided: HarfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HarfComponent", function() { return HarfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let HarfComponent = class HarfComponent {
    constructor() {
        this.deger = "";
        this.acik = false;
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HarfComponent.prototype, "deger", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HarfComponent.prototype, "acik", void 0);
HarfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "harf",
        template: __webpack_require__(/*! raw-loader!./harf.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/harf/harf.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("rotatedState", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotateX(0)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotateX(360deg)' }))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotateX(360deg)' }))])
            ])
        ],
        styles: [__webpack_require__(/*! ./harf.component.scss */ "./src/app/components/harf/harf.component.scss")]
    })
], HarfComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*, *:before, *:after {\n  box-sizing: border-box;\n}\n\n.demo {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 300px;\n  height: 140px;\n  margin-top: -70px;\n  padding: 10px;\n  border-radius: 20px;\n  transform: translateX(-50%);\n}\n\n.demo__colored-blocks {\n  overflow: hidden;\n  position: absolute;\n  left: 50%;\n  top: 0;\n  width: 300px;\n  height: 100%;\n  margin-left: -150px;\n  padding: 10px;\n  border-radius: 20px;\n  perspective: 1000px;\n  -webkit-animation: demoAnim 4s ease-in-out infinite, contAnim 4s infinite;\n          animation: demoAnim 4s ease-in-out infinite, contAnim 4s infinite;\n}\n\n.demo__colored-blocks-rotater {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: inherit;\n  -webkit-animation: rotation 1.3s linear infinite;\n          animation: rotation 1.3s linear infinite;\n}\n\n.demo__colored-blocks-inner {\n  overflow: hidden;\n  position: relative;\n  height: 100%;\n  background: #32386D;\n  border-radius: inherit;\n}\n\n.demo__colored-block {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 300%;\n  height: 300%;\n  transform-origin: 0 0;\n}\n\n.demo__colored-block:nth-child(1) {\n  transform: rotate(0deg) skewX(-30deg);\n  background-color: #FD3359;\n}\n\n.demo__colored-block:nth-child(2) {\n  transform: rotate(120deg) skewX(-30deg);\n  background-color: #F4D302;\n}\n\n.demo__colored-block:nth-child(3) {\n  transform: rotate(240deg) skewX(-30deg);\n  background-color: #21BDFF;\n}\n\n.demo__inner {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.demo__numbers {\n  overflow: visible;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 100px;\n  height: 100px;\n  margin-left: -50px;\n  margin-top: -50px;\n}\n\n.demo__numbers-path {\n  fill: none;\n  stroke-width: 10px;\n  stroke: #fff;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 0, 518.055065155;\n  stroke-dashoffset: 0;\n  -webkit-animation: numAnim 4s ease-in-out infinite;\n          animation: numAnim 4s ease-in-out infinite;\n  opacity: 0;\n}\n\n.demo__text {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  width: 300px;\n  height: 100%;\n  margin-left: -150px;\n  text-align: center;\n  line-height: 140px;\n  font-size: 50px;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n  transform: translateX(10px);\n  -webkit-animation: hideText 4s infinite;\n          animation: hideText 4s infinite;\n}\n\n@-webkit-keyframes contAnim {\n  15%, 100% {\n    margin-left: -150px;\n    width: 300px;\n  }\n  25%, 90% {\n    margin-left: -70px;\n    width: 140px;\n  }\n}\n\n@keyframes contAnim {\n  15%, 100% {\n    margin-left: -150px;\n    width: 300px;\n  }\n  25%, 90% {\n    margin-left: -70px;\n    width: 140px;\n  }\n}\n\n@-webkit-keyframes numAnim {\n  15% {\n    stroke-dasharray: 0, 518.055065155;\n    stroke-dashoffset: 0;\n    opacity: 0;\n  }\n  25%, 41% {\n    opacity: 1;\n    stroke-dasharray: 144.4256591797, 518.055065155;\n    stroke-dashoffset: -40;\n  }\n  53%, 66% {\n    stroke-dasharray: 136.0216217041, 518.055065155;\n    stroke-dashoffset: -227.238697052;\n  }\n  76% {\n    stroke-dasharray: 113.4751205444, 518.055065155;\n    stroke-dashoffset: -445.8995704651;\n  }\n  88%, 100% {\n    stroke-dasharray: 72.1554946899, 518.055065155;\n    stroke-dashoffset: -445.8995704651;\n  }\n  92% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes numAnim {\n  15% {\n    stroke-dasharray: 0, 518.055065155;\n    stroke-dashoffset: 0;\n    opacity: 0;\n  }\n  25%, 41% {\n    opacity: 1;\n    stroke-dasharray: 144.4256591797, 518.055065155;\n    stroke-dashoffset: -40;\n  }\n  53%, 66% {\n    stroke-dasharray: 136.0216217041, 518.055065155;\n    stroke-dashoffset: -227.238697052;\n  }\n  76% {\n    stroke-dasharray: 113.4751205444, 518.055065155;\n    stroke-dashoffset: -445.8995704651;\n  }\n  88%, 100% {\n    stroke-dasharray: 72.1554946899, 518.055065155;\n    stroke-dashoffset: -445.8995704651;\n  }\n  92% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes rotation {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotation {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes demoAnim {\n  15% {\n    border-radius: 20px;\n    transform: rotate(0);\n  }\n  30%, 43% {\n    border-radius: 50%;\n    transform: rotate(360deg);\n  }\n  52%, 65% {\n    border-radius: 0;\n    transform: rotate(720deg);\n  }\n  78%, 90% {\n    border-radius: 50%;\n    transform: rotate(1080deg);\n  }\n  100% {\n    border-radius: 20px;\n    transform: rotate(1440deg);\n  }\n}\n\n@keyframes demoAnim {\n  15% {\n    border-radius: 20px;\n    transform: rotate(0);\n  }\n  30%, 43% {\n    border-radius: 50%;\n    transform: rotate(360deg);\n  }\n  52%, 65% {\n    border-radius: 0;\n    transform: rotate(720deg);\n  }\n  78%, 90% {\n    border-radius: 50%;\n    transform: rotate(1080deg);\n  }\n  100% {\n    border-radius: 20px;\n    transform: rotate(1440deg);\n  }\n}\n\n@-webkit-keyframes hideText {\n  15%, 100% {\n    opacity: 1;\n  }\n  20%, 96% {\n    opacity: 0;\n  }\n}\n\n@keyframes hideText {\n  15%, 100% {\n    opacity: 1;\n  }\n  20%, 96% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcQW5ndWxhclxcRmluZFRoZVdvcmRcXGFuZ3VsYXItc3JjL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBRHVDRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQXhCUTtFQXlCUixhQTFCSztFQTJCTCxpQkFBQTtFQUNBLGFBMUJJO0VBMkJKLG1CQUFBO0VBQ0EsMkJBQUE7QUNwQ0o7O0FEc0NJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0EsWUFwQ007RUFxQ04sWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUF0Q0U7RUF1Q0YsbUJBcENLO0VBcUNMLG1CQUFBO0VBQ0EseUVBQUE7VUFBQSxpRUFBQTtBQ3BDTjs7QURzQ007RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdEQUFBO1VBQUEsd0NBQUE7QUNwQ1I7O0FEdUNNO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkEzRUk7RUE0RUosc0JBQUE7QUNyQ1I7O0FEeUNJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUN2Q047O0FEMENRO0VBR0UscUNBQUE7RUFDQSx5QkFBQTtBQzFDVjs7QURzQ1E7RUFHRSx1Q0FBQTtFQUNBLHlCQUFBO0FDdENWOztBRGtDUTtFQUdFLHVDQUFBO0VBQ0EseUJBQUE7QUNsQ1Y7O0FEdUNJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDckNOOztBRHdDSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBM0ZNO0VBNEZOLGFBNUZNO0VBNkZOLGtCQUFBO0VBQ0EsaUJBQUE7QUN0Q047O0FEd0NNO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0RBQUE7VUFBQSwwQ0FBQTtFQUNBLFVBQUE7QUN0Q1I7O0FEMENJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsTUFBQTtFQUNBLFlBbkhNO0VBb0hOLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBeEhHO0VBeUhILGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtBQ3hDTjs7QUQ0Q0U7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsWUFwSU07RUMyRlY7RUQyQ0U7SUFDRSxrQkFBQTtJQUNBLFlBeklHO0VDZ0dQO0FBQ0Y7O0FEaUNFO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLFlBcElNO0VDMkZWO0VEMkNFO0lBQ0Usa0JBQUE7SUFDQSxZQXpJRztFQ2dHUDtBQUNGOztBRDRDRTtFQUNFO0lBQ0Usa0NBQUE7SUFDQSxvQkFBQTtJQUNBLFVBQUE7RUMxQ0o7RUQ0Q0U7SUFDRSxVQUFBO0lBQ0EsK0NBQUE7SUFDQSxzQkFBQTtFQzFDSjtFRDRDRTtJQUNFLCtDQUFBO0lBQ0EsaUNBQUE7RUMxQ0o7RUQ0Q0U7SUFDRSwrQ0FBQTtJQUNBLGtDQUFBO0VDMUNKO0VENENFO0lBQ0UsOENBQUE7SUFDQSxrQ0FBQTtFQzFDSjtFRDRDRTtJQUNFLFVBQUE7RUMxQ0o7RUQ0Q0U7SUFDRSxVQUFBO0VDMUNKO0FBQ0Y7O0FEY0U7RUFDRTtJQUNFLGtDQUFBO0lBQ0Esb0JBQUE7SUFDQSxVQUFBO0VDMUNKO0VENENFO0lBQ0UsVUFBQTtJQUNBLCtDQUFBO0lBQ0Esc0JBQUE7RUMxQ0o7RUQ0Q0U7SUFDRSwrQ0FBQTtJQUNBLGlDQUFBO0VDMUNKO0VENENFO0lBQ0UsK0NBQUE7SUFDQSxrQ0FBQTtFQzFDSjtFRDRDRTtJQUNFLDhDQUFBO0lBQ0Esa0NBQUE7RUMxQ0o7RUQ0Q0U7SUFDRSxVQUFBO0VDMUNKO0VENENFO0lBQ0UsVUFBQTtFQzFDSjtBQUNGOztBRDhDRTtFQUNFO0lBQ0UseUJBQUE7RUM1Q0o7QUFDRjs7QUR5Q0U7RUFDRTtJQUNFLHlCQUFBO0VDNUNKO0FBQ0Y7O0FEK0NFO0VBQ0U7SUFDRSxtQkFoTEs7SUFpTEwsb0JBQUE7RUM3Q0o7RUQrQ0U7SUFDRSxrQkFBQTtJQUNBLHlCQUFBO0VDN0NKO0VEZ0RFO0lBQ0UsZ0JBQUE7SUFDQSx5QkFBQTtFQzlDSjtFRGlERTtJQUNFLGtCQUFBO0lBQ0EsMEJBQUE7RUMvQ0o7RURrREU7SUFDRSxtQkFuTUs7SUFvTUwsMEJBQUE7RUNoREo7QUFDRjs7QUR5QkU7RUFDRTtJQUNFLG1CQWhMSztJQWlMTCxvQkFBQTtFQzdDSjtFRCtDRTtJQUNFLGtCQUFBO0lBQ0EseUJBQUE7RUM3Q0o7RURnREU7SUFDRSxnQkFBQTtJQUNBLHlCQUFBO0VDOUNKO0VEaURFO0lBQ0Usa0JBQUE7SUFDQSwwQkFBQTtFQy9DSjtFRGtERTtJQUNFLG1CQW5NSztJQW9NTCwwQkFBQTtFQ2hESjtBQUNGOztBRG1ERTtFQUNFO0lBQ0UsVUFBQTtFQ2pESjtFRG1ERTtJQUNFLFVBQUE7RUNqREo7QUFDRjs7QUQyQ0U7RUFDRTtJQUNFLFVBQUE7RUNqREo7RURtREU7SUFDRSxVQUFBO0VDakRKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgJGJnQ29sb3I6ICMzMjM4NkQ7XHJcbiAgXHJcbiAgJG51bU9mQ29sQmxvY2tzOiAzOyAvLyBtdXN0IGJlIGhpZ2hlciB0aGFuIDJcclxuICAkZGVnOiAzNjBkZWcgLyAkbnVtT2ZDb2xCbG9ja3M7XHJcbiAgXHJcbiAgJHJlZDogI0ZEMzM1OTtcclxuICAkeWVsbG93OiAjRjREMzAyO1xyXG4gICRibHVlOiAjMjFCREZGO1xyXG4gIFxyXG4gICRibG9ja3NDb2xvcnM6IChcclxuICAgIDE6ICRyZWQsXHJcbiAgICAyOiAkeWVsbG93LFxyXG4gICAgMzogJGJsdWVcclxuICApO1xyXG4gIFxyXG4gIFxyXG4gICRzaXplOiAxNDBweDtcclxuICAkc2l6ZUJpZzogMzAwcHg7XHJcbiAgJHBhZDogMTBweDtcclxuICAkbnVtU2l6ZTogMTAwcHg7XHJcbiAgJHRvdGFsQVQ6IDRzO1xyXG4gICRjb250QnI6IDIwcHg7XHJcbiAgXHJcbiAgJG51bTFMZW46IDcyLjE1NTQ5NDY4OTk0MTQ7XHJcbiAgJG51bTJMZW46IDEzNi4wMjE2MjE3MDQxMDE1NjtcclxuICAkbnVtM0xlbjogMTQ0LjQyNTY1OTE3OTY4NzU7XHJcbiAgJG51bUpvaW4xLTI6IDgyLjYzOTI1MTcwODk4NDM4O1xyXG4gICRudW1Kb2luMi0zOiA0Mi44MTMwMzc4NzIzMTQ0NTtcclxuICAkbnVtSm9pbjMtMDogNDA7XHJcbiAgXHJcbiAgJHRvdGFsTGVuOiAkbnVtMUxlbiArICRudW0yTGVuICsgJG51bTNMZW4gKyAkbnVtSm9pbjEtMiArICRudW1Kb2luMi0zICsgJG51bUpvaW4zLTA7XHJcbiAgXHJcbiAgLy8gYm9keSB7XHJcbiAgLy8gICBiYWNrZ3JvdW5kOiAkYmdDb2xvcjtcclxuICAvLyAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIC8vIH1cclxuICBcclxuICAuZGVtbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHdpZHRoOiAkc2l6ZUJpZztcclxuICAgIGhlaWdodDogJHNpemU7XHJcbiAgICBtYXJnaW4tdG9wOiAkc2l6ZSAvIC0yO1xyXG4gICAgcGFkZGluZzogJHBhZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgXHJcbiAgICAmX19jb2xvcmVkLWJsb2NrcyB7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHdpZHRoOiAkc2l6ZUJpZztcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogJHNpemVCaWcvLTI7XHJcbiAgICAgIHBhZGRpbmc6ICRwYWQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRjb250QnI7XHJcbiAgICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcbiAgICAgIGFuaW1hdGlvbjogZGVtb0FuaW0gJHRvdGFsQVQgZWFzZS1pbi1vdXQgaW5maW5pdGUsIGNvbnRBbmltICR0b3RhbEFUIGluZmluaXRlO1xyXG4gIFxyXG4gICAgICAmLXJvdGF0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICAgICAgICBhbmltYXRpb246IHJvdGF0aW9uIDEuM3MgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICYtaW5uZXIge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYmdDb2xvcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmX19jb2xvcmVkLWJsb2NrIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICB3aWR0aDogMzAwJTtcclxuICAgICAgaGVpZ2h0OiAzMDAlO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgXHJcbiAgICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJG51bU9mQ29sQmxvY2tzIHtcclxuICAgICAgICAmOm50aC1jaGlsZCgjeyRpfSkge1xyXG4gICAgICAgICAgJHJ0OiAkZGVnICogKCRpIC0gMSk7XHJcbiAgICAgICAgICAkc2tldzogOTBkZWcgLSAkZGVnO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoJHJ0KSBza2V3WCgkc2tldyk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRibG9ja3NDb2xvcnMsICRpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgICZfX2lubmVyIHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9fbnVtYmVycyB7XHJcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAkbnVtU2l6ZTtcclxuICAgICAgaGVpZ2h0OiAkbnVtU2l6ZTtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICRudW1TaXplLy0yO1xyXG4gICAgICBtYXJnaW4tdG9wOiAkbnVtU2l6ZS8tMjtcclxuICBcclxuICAgICAgJi1wYXRoIHtcclxuICAgICAgICBmaWxsOiBub25lO1xyXG4gICAgICAgIHN0cm9rZS13aWR0aDogMTBweDtcclxuICAgICAgICBzdHJva2U6ICNmZmY7XHJcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG4gICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMCwgJHRvdGFsTGVuO1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgICAgIGFuaW1hdGlvbjogbnVtQW5pbSAkdG90YWxBVCBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmX190ZXh0IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgd2lkdGg6ICRzaXplQmlnO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkc2l6ZUJpZy8tMjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogJHNpemU7XHJcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcclxuICAgICAgYW5pbWF0aW9uOiBoaWRlVGV4dCAkdG90YWxBVCBpbmZpbml0ZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBjb250QW5pbSB7XHJcbiAgICAxNSUsIDEwMCUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogJHNpemVCaWcvLTI7XHJcbiAgICAgIHdpZHRoOiAkc2l6ZUJpZztcclxuICAgIH1cclxuICAgIDI1JSwgOTAlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICRzaXplLy0yO1xyXG4gICAgICB3aWR0aDogJHNpemU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgbnVtQW5pbSB7XHJcbiAgICAxNSUge1xyXG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAwLCAkdG90YWxMZW47XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMjUlLCA0MSUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAkbnVtM0xlbiwgJHRvdGFsTGVuO1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogLSRudW1Kb2luMy0wO1xyXG4gICAgfVxyXG4gICAgNTMlLCA2NiUge1xyXG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAkbnVtMkxlbiwgJHRvdGFsTGVuO1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogLSRudW0zTGVuIC0gJG51bUpvaW4yLTMgLSRudW1Kb2luMy0wO1xyXG4gICAgfVxyXG4gICAgNzYlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogJG51bTFMZW4gKyAkbnVtSm9pbjEtMi8yLCAkdG90YWxMZW47XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtJG51bTNMZW4gLSAkbnVtSm9pbjItMyAtICRudW0yTGVuIC0gJG51bUpvaW4xLTIgLSRudW1Kb2luMy0wO1xyXG4gICAgfVxyXG4gICAgODglLCAxMDAlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogJG51bTFMZW4sICR0b3RhbExlbjtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0kbnVtM0xlbiAtICRudW1Kb2luMi0zIC0gJG51bTJMZW4gLSAkbnVtSm9pbjEtMiAtJG51bUpvaW4zLTA7XHJcbiAgICB9XHJcbiAgICA5MiUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgcm90YXRpb24ge1xyXG4gICAgdG8ge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGRlbW9BbmltIHtcclxuICAgIDE1JSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRjb250QnI7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgfVxyXG4gICAgMzAlLCA0MyUge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICA1MiUsIDY1JSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDcyMGRlZyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICA3OCUsIDkwJSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTA4MGRlZyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDEwMCUge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkY29udEJyO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNDQwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBoaWRlVGV4dCB7XHJcbiAgICAxNSUsIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgMjAlLCA5NiUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH0iLCIqLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5kZW1vIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIG1hcmdpbi10b3A6IC03MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4uZGVtb19fY29sb3JlZC1ibG9ja3Mge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgYW5pbWF0aW9uOiBkZW1vQW5pbSA0cyBlYXNlLWluLW91dCBpbmZpbml0ZSwgY29udEFuaW0gNHMgaW5maW5pdGU7XG59XG4uZGVtb19fY29sb3JlZC1ibG9ja3Mtcm90YXRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICBhbmltYXRpb246IHJvdGF0aW9uIDEuM3MgbGluZWFyIGluZmluaXRlO1xufVxuLmRlbW9fX2NvbG9yZWQtYmxvY2tzLWlubmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMzMjM4NkQ7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG59XG4uZGVtb19fY29sb3JlZC1ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDMwMCU7XG4gIGhlaWdodDogMzAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xufVxuLmRlbW9fX2NvbG9yZWQtYmxvY2s6bnRoLWNoaWxkKDEpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2tld1goLTMwZGVnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZEMzM1OTtcbn1cbi5kZW1vX19jb2xvcmVkLWJsb2NrOm50aC1jaGlsZCgyKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZykgc2tld1goLTMwZGVnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RDMwMjtcbn1cbi5kZW1vX19jb2xvcmVkLWJsb2NrOm50aC1jaGlsZCgzKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI0MGRlZykgc2tld1goLTMwZGVnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxQkRGRjtcbn1cbi5kZW1vX19pbm5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kZW1vX19udW1iZXJzIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogLTUwcHg7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xufVxuLmRlbW9fX251bWJlcnMtcGF0aCB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZS13aWR0aDogMTBweDtcbiAgc3Ryb2tlOiAjZmZmO1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDAsIDUxOC4wNTUwNjUxNTU7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICBhbmltYXRpb246IG51bUFuaW0gNHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIG9wYWNpdHk6IDA7XG59XG4uZGVtb19fdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxNDBweDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICBhbmltYXRpb246IGhpZGVUZXh0IDRzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGNvbnRBbmltIHtcbiAgMTUlLCAxMDAlIHtcbiAgICBtYXJnaW4tbGVmdDogLTE1MHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuICAyNSUsIDkwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IC03MHB4O1xuICAgIHdpZHRoOiAxNDBweDtcbiAgfVxufVxuQGtleWZyYW1lcyBudW1BbmltIHtcbiAgMTUlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwLCA1MTguMDU1MDY1MTU1O1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMjUlLCA0MSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTQ0LjQyNTY1OTE3OTcsIDUxOC4wNTUwNjUxNTU7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC00MDtcbiAgfVxuICA1MyUsIDY2JSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTM2LjAyMTYyMTcwNDEsIDUxOC4wNTUwNjUxNTU7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0yMjcuMjM4Njk3MDUyO1xuICB9XG4gIDc2JSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTEzLjQ3NTEyMDU0NDQsIDUxOC4wNTUwNjUxNTU7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC00NDUuODk5NTcwNDY1MTtcbiAgfVxuICA4OCUsIDEwMCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDcyLjE1NTQ5NDY4OTksIDUxOC4wNTUwNjUxNTU7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC00NDUuODk5NTcwNDY1MTtcbiAgfVxuICA5MiUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGRlbW9BbmltIHtcbiAgMTUlIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDMwJSwgNDMlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxuICA1MiUsIDY1JSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3MjBkZWcpO1xuICB9XG4gIDc4JSwgOTAlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTA4MGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNDQwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBoaWRlVGV4dCB7XG4gIDE1JSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAyMCUsIDk2JSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loginUser = {};
    }
    ngOnInit() { }
    login(loginUser) {
        this.authService.login(loginUser).subscribe(data => {
            this.authService.saveToken(data["token"]);
            this.mesajTur = "success";
            setTimeout(() => {
                this.router.navigate(["/game"]);
            }, 4000);
        }, error => {
            this.mesajTur = "error";
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        providers: [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]],
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



let RegisterComponent = class RegisterComponent {
    constructor(authService) {
        this.authService = authService;
        this.registerUser = {};
    }
    register(registerUser) {
        this.authService.register(registerUser).subscribe(data => {
            this.mesajTur = "success";
        }, error => {
            this.mesajTur = "error";
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-register",
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html"),
        providers: [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]],
        styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/components/soru-bankasi/soru-bankasi.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/soru-bankasi/soru-bankasi.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29ydS1iYW5rYXNpL3NvcnUtYmFua2FzaS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/soru-bankasi/soru-bankasi.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/soru-bankasi/soru-bankasi.component.ts ***!
  \*******************************************************************/
/*! exports provided: SoruBankasiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoruBankasiComponent", function() { return SoruBankasiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_soru_bankasi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/soru-bankasi.service */ "./src/app/services/soru-bankasi.service.ts");



let SoruBankasiComponent = class SoruBankasiComponent {
    constructor(soruBankasiService) {
        this.soruBankasiService = soruBankasiService;
        this.soruBankasi = {};
    }
    saveQuestion(soruBankasi) {
        soruBankasi.soruldu = false;
        this.soruBankasiService.saveQuestion(soruBankasi).subscribe(data => {
            this.mesajTur = "success";
        }, error => {
            this.mesajTur = "error";
        });
        this.clearSoruBankasi(soruBankasi);
    }
    clearSoruBankasi(soruBankasi) {
        soruBankasi.cevap = "";
        soruBankasi.cevapharfsayisi = "";
        soruBankasi.soru = "";
    }
};
SoruBankasiComponent.ctorParameters = () => [
    { type: src_app_services_soru_bankasi_service__WEBPACK_IMPORTED_MODULE_2__["SoruBankasiService"] }
];
SoruBankasiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-soru-bankasi",
        template: __webpack_require__(/*! raw-loader!./soru-bankasi.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/soru-bankasi/soru-bankasi.component.html"),
        styles: [__webpack_require__(/*! ./soru-bankasi.component.scss */ "./src/app/components/soru-bankasi/soru-bankasi.component.scss")]
    })
], SoruBankasiComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.isAuthenticated) {
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/services/auth-interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/auth-interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");



let AuthInterceptorService = class AuthInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        if (authService.isAuthenticated) {
            var authRequest = req.clone({
                headers: req.headers.set("authorization", "token " + authService.token)
            });
            return next.handle(authRequest);
        }
        return next.handle(req);
    }
};
AuthInterceptorService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
AuthInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AuthInterceptorService);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].path;
        this.TOKEN_KEY = "token";
    }
    register(registerUser) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append("Content-Type", "application/json");
        // let postUrl = this.path + 'user/register'
        let postUrl = "user/register";
        return this.http.post(postUrl, registerUser, {
            headers: headers
        });
    }
    login(loginUser) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append("Content-Type", "application/json");
        //let getUrl = this.path + "user/login";
        let getUrl = "user/login";
        return this.http.post(getUrl, loginUser, { headers: headers });
    }
    saveToken(token) {
        localStorage.setItem(this.TOKEN_KEY, token);
    }
    logOut() {
        localStorage.removeItem(this.TOKEN_KEY);
    }
    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }
    get token() {
        return localStorage.getItem(this.TOKEN_KEY);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/soru-bankasi.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/soru-bankasi.service.ts ***!
  \**************************************************/
/*! exports provided: SoruBankasiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoruBankasiService", function() { return SoruBankasiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let SoruBankasiService = class SoruBankasiService {
    constructor(http) {
        this.http = http;
        this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].path;
    }
    getQuestions() {
        // let getUrl = this.path + "game/index";
        let getUrl = "game/index";
        return this.http.get(getUrl);
    }
    saveQuestion(soruBankasi) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append("Content-Type", "application/json");
        //let postUrl = this.path + "game/saveQuestion";
        let postUrl = "game/saveQuestion";
        return this.http.post(postUrl, soruBankasi, {
            headers: headers
        });
    }
};
SoruBankasiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SoruBankasiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], SoruBankasiService);



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
const environment = {
    production: false,
    path: "http://localhost:8080/"
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Angular\FindTheWord\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map