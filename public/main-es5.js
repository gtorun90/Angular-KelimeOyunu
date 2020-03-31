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

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\" href=\"#\"></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n        aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n        <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/game\" routerLinkActive=\"active\"\r\n                    [routerLinkActiveOptions]=\"{exact:true}\">Home</a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav flex-row ml-md-auto d-none d-md-flex\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\"\r\n                    [routerLinkActiveOptions]=\"{exact:true}\">Log in</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/register\" routerLinkActive=\"active\"\r\n                    [routerLinkActiveOptions]=\"{exact:true}\">Register</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n<div class=\"container mt-4\">\r\n\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/game/game.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/game/game.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"card mb-4\" *ngIf=\"tamamlandi\">\n    <div *ngIf=\"puan != 0\" class=\"card-body\">\n      Tebrikler yarışmayı {{ puan }} puan ile tamamladınız!\n    </div>\n    <div *ngIf=\"puan == 0\" class=\"card-body\">\n      Maalesef yarışmayı {{ puan }} puan ile tamamladınız!\n    </div>\n  </div>\n  <div class=\"card\" *ngIf=\"!mevcutSoru; else mevcutSoruYoksa\">\n    <div class=\"card-header\">\n      <h5 class=\"mb-0\">Kelime Oyunu Yarışmasına Hoşgeldiniz!</h5>\n    </div>\n    <div class=\"card-body\">\n      Yarışmaya başlamak için yarışmaya başla butonuna basın.\n    </div>\n    <div class=\"card-footer\">\n      <button class=\"btn btn-primary\" (click)=\"basla()\">Yarışmaya Başla</button>\n    </div>\n  </div>\n  <ng-template #mevcutSoruYoksa>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3 class=\"mb-0\">{{ mevcutSoru.soru }}</h3>\n        <button class=\"btn btn-success float-right\" (click)=\"soruVer()\" *ngIf=\"cevaplandi\">Sonraki Soru</button>\n        <!-- TO DO son soruda soru ver çıkmayacak, soruyu cevapladığında tebrikler bölümü görünebilir. -->\n      </div>\n      <div class=\"card-body\">\n        <div class=\"d-flex\">\n          <harf [deger]=\"harf.harf.toLocaleUpperCase('tr')\" [acik]=\"harf.acildi\" *ngFor=\"let harf of harfler\"></harf>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <div class=\"d-flex\">\n          <div class=\"mr-4\">Toplam Puan: {{ puan }}</div>\n          <div class=\"mr-4\">\n            Kalan Cevap Süreniz:\n            <kbd>{{ kalanSure }}</kbd> saniye\n          </div>\n          <div class=\"mr-4\">Harf Puanı: {{ harfPuan }}</div>\n          <div class=\"float-right\">\n            Kalan Yarışma Süreniz:\n            <kbd>{{ toplamKalanSure }}</kbd> saniye\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <div class=\"input-group\">\n          <input class=\"form-control\" type=\"text\" placeholder=\"Cevabınızı yazın\" [(ngModel)]=\"yarismaciCevap\"\n            (keypress)=\"enterIleCevapVer($event)\" (keyup)=\"yarismaciCevap = yarismaciCevap.toLocaleUpperCase('tr')\" />\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-secondary\" (click)=\"harfVer()\">\n              Harf Ver\n            </button>\n            <button [disabled]=\"!yarismaciCevap\" (click)=\"cevapVer()\" class=\"btn btn-success\">\n              Cevap Ver\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\" [ngClass]=\"mesajClass\" *ngIf=\"mesaj\">\n        {{ mesaj }}\n      </div>\n    </div>\n    <!--Cart div kapanışı-->\n\n  </ng-template>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/harf/harf.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/harf/harf.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"harf hexagon shadow mr-2 text-white\">\r\n  <span @rotatedState *ngIf=\"acik; else acikDegil\">{{ deger }}</span>\r\n  <ng-template #acikDegil>\r\n    <span></span>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n    <div *ngIf=\"mesajTur == 'success'\" class=\"alert alert-success\" role=\"alert\">\n        Giriş Başarılı! Birazdan Oyun Sayfasına Yönlendirileceksiniz...\n    </div>\n    <div *ngIf=\"mesajTur == 'error'\" class=\"alert alert-danger\" role=\"alert\">\n        E-Posta veya Şifre Hatalı!\n    </div>\n    <div class=\"form-group\">\n        <label>Email address</label>\n        <input type=\"email\" name=\"email\" [(ngModel)]=\"loginUser.email\" class=\"form-control\" placeholder=\"E-Mail\">\n    </div>\n    <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" [(ngModel)]=\"loginUser.password\" class=\"form-control\" name=\"password\"\n            placeholder=\"Password\">\n    </div>\n    <button type=\"submit\" (click)=\"login(loginUser)\" class=\"btn btn-primary\">Login</button>\n</form>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    { path: "register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], },
    { path: "question", component: _components_soru_bankasi_soru_bankasi_component__WEBPACK_IMPORTED_MODULE_13__["SoruBankasiComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/game/game.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/game/game.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_soru_bankasi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/soru-bankasi.service */ "./src/app/services/soru-bankasi.service.ts");



var GameComponent = /** @class */ (function () {
    // apiUrl="https://localhost:44341/api/SoruCevaps";
    function GameComponent(soruBankasiService) {
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
        this.sure = null;
        this.toplamSure = null;
        this.kalanSure = 0;
        this.toplamKalanSure = 0;
    }
    GameComponent.prototype.sorulariGetir = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.soruBankasiService.getQuestions().toPromise()];
                    case 1:
                        _a.sorular = _b.sent();
                        this.soruVer();
                        return [2 /*return*/];
                }
            });
        });
    };
    GameComponent.prototype.mesajGoster = function (mesaj, tur) {
        var _this = this;
        if (tur === void 0) { tur = null; }
        if (this.mesajSure) {
            clearTimeout(this.mesajSure);
            this.mesajSure = null;
        }
        this.mesaj = mesaj;
        var stopInterVal = false;
        if (tur === MesajTurleri.hata) {
            this.mesajClass = "bg-danger text-white";
            stopInterVal = true;
        }
        else if (tur === MesajTurleri.basari) {
            this.mesajClass = "bg-success text-white";
            stopInterVal = true;
        }
        else {
            this.mesajClass = "bg-dark text-white";
        }
        if (stopInterVal) {
            clearInterval(this.sure);
        }
        this.mesajSure = setTimeout(function () {
            _this.mesaj = null;
        }, 3000);
    };
    GameComponent.prototype.basla = function () {
        this.tamamlandi = false;
        this.mevcutSoru = null;
        this.puan = 0;
        this.sorulariGetir();
        this.toplamSureGoster();
        this.mesajGoster("İyi yarışmalar!");
    };
    GameComponent.prototype.toplamSureGoster = function () {
        var _this = this;
        this.toplamKalanSure = 300;
        this.toplamSure = setInterval(function () {
            _this.toplamKalanSure--;
            if (_this.toplamKalanSure === 0) {
                _this.bitir();
            }
        }, 1000);
    };
    GameComponent.prototype.cevapSureGoster = function () {
        var _this = this;
        this.kalanSure = 30;
        this.sure = setInterval(function () {
            _this.kalanSure--;
            if (_this.kalanSure === 0) {
                _this.bitir();
            }
        }, 1000);
    };
    GameComponent.prototype.bitir = function () {
        clearInterval(this.sure);
        this.mevcutSoru = null;
        this.tamamlandi = true;
    };
    GameComponent.prototype.soruVer = function () {
        var _this = this;
        this.yarismaciCevap = "";
        this.cevaplandi = false;
        this.mevcutSoru = this.sorular.find(function (x) { return x.soruldu == false; });
        if (this.harfler.filter(function (x) { return x.acildi; }).length > 0 &&
            this.harfler.filter(function (x) { return x.acildi; }).length === this.harfler.length) {
            clearInterval(this.sure);
        }
        if (!this.mevcutSoru) {
            this.bitir();
            return;
        }
        this.cevapSureGoster();
        this.harfler = [];
        this.mevcutSoru.cevap.split("").map(function (x) {
            _this.harfler.push({
                harf: x,
                acildi: false
            });
        });
        this.harfPuan = this.harfler.length * 100;
        this.mevcutSoru.soruldu = true;
    };
    GameComponent.prototype.harfVer = function (cevaplandi) {
        var rastgeleHarfIndex = Math.floor(Math.random() * this.harfler.length);
        if (!cevaplandi && this.harfPuan <= 100) {
            return;
        }
        var harf = this.harfler[rastgeleHarfIndex];
        while (harf.acildi) {
            rastgeleHarfIndex = Math.floor(Math.random() * this.harfler.length);
            harf = this.harfler[rastgeleHarfIndex];
        }
        harf.acildi = true;
        if (!cevaplandi) {
            this.harfPuan -= 100;
        }
    };
    GameComponent.prototype.cevapVer = function () {
        var _this = this;
        if (!this.yarismaciCevap.length) {
            return;
        }
        if (this.yarismaciCevap.length !== this.harfler.length) {
            this.mesajGoster("Harf sayıları tutmuyor!");
            return;
        }
        var cevap = this.yarismaciCevap.toLocaleUpperCase("tr-TR");
        this.yarismaciCevap = cevap;
        if (this.yarismaciCevap ===
            this.mevcutSoru.cevap.toLocaleUpperCase("tr-TR")) {
            if (!this.cevaplandi) {
                this.puan += this.harfPuan;
                this.cevaplandi = true;
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
                this.mesajGoster("Yanl\u0131\u015F cevap, do\u011Frusu '" + this.mevcutSoru.cevap + "' olmal\u0131yd\u0131!", MesajTurleri.hata);
            }
        }
        this.harfler.forEach(function (x) {
            if (_this.harfler.filter(function (x) { return x.acildi; }).length !== _this.harfler.length) {
                _this.harfVer(_this.cevaplandi);
            }
        });
        //this.soruVer();
    };
    GameComponent.prototype.enterIleCevapVer = function (event) {
        if (event.key === Tuslar.Enter)
            this.cevapVer();
    };
    GameComponent.ctorParameters = function () { return [
        { type: src_app_services_soru_bankasi_service__WEBPACK_IMPORTED_MODULE_2__["SoruBankasiService"] }
    ]; };
    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-game",
            template: __webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.scss */ "./src/app/components/game/game.component.scss")]
        })
    ], GameComponent);
    return GameComponent;
}());

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

module.exports = "@media only screen and (max-device-width: 794px) {\n  .harf {\n    width: 25px;\n    height: 28px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 8pt;\n  }\n\n  .hexagon {\n    position: relative;\n    width: 25px;\n    height: 15px;\n    background-color: #3d4141;\n    margin: 20px 0;\n  }\n\n  .hexagon:before,\n.hexagon:after {\n    content: \"\";\n    position: absolute;\n    width: 0;\n    border-left: 12.5px solid transparent;\n    border-right: 12.5px solid transparent;\n  }\n\n  .hexagon:before {\n    bottom: 100%;\n    border-bottom: 6px solid #3d4141;\n  }\n\n  .hexagon:after {\n    top: 100%;\n    width: 0;\n    border-top: 6px solid #3d4141;\n  }\n}\n@media only screen and (min-device-width: 794px) and (max-device-width: 1216px) {\n  .harf {\n    width: 40px;\n    height: 45px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 15pt;\n  }\n\n  .hexagon {\n    position: relative;\n    width: 40px;\n    height: 23.1px;\n    background-color: #3d4141;\n    margin: 20px 0;\n  }\n\n  .hexagon:before,\n.hexagon:after {\n    content: \"\";\n    position: absolute;\n    width: 0;\n    border-left: 20px solid transparent;\n    border-right: 20px solid transparent;\n  }\n\n  .hexagon:before {\n    bottom: 100%;\n    border-bottom: 11.6px solid #3d4141;\n  }\n\n  .hexagon:after {\n    top: 100%;\n    width: 0;\n    border-top: 11.6px solid #3d4141;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .harf {\n    width: 80px;\n    height: 90px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 30pt;\n  }\n\n  .hexagon {\n    position: relative;\n    width: 80px;\n    height: 46.19px;\n    background-color: #3d4141;\n    margin: 23.1px 0;\n  }\n\n  .hexagon:before,\n.hexagon:after {\n    content: \"\";\n    position: absolute;\n    width: 0;\n    border-left: 40px solid transparent;\n    border-right: 40px solid transparent;\n  }\n\n  .hexagon:before {\n    bottom: 100%;\n    border-bottom: 23.1px solid #3d4141;\n  }\n\n  .hexagon:after {\n    top: 100%;\n    width: 0;\n    border-top: 23.1px solid #3d4141;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oYXJmL0M6XFxBbmd1bGFyXFxGaW5kVGhlV29yZFxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhhcmZcXGhhcmYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGFyZi9oYXJmLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsY0FBQTtFQ0NGOztFRENBO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO0lBQ0EsY0FBQTtFQ0VGOztFRENBOztJQUVFLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxxQ0FBQTtJQUNBLHNDQUFBO0VDRUY7O0VEQ0E7SUFDRSxZQUFBO0lBQ0EsZ0NBQUE7RUNFRjs7RURDQTtJQUNFLFNBQUE7SUFDQSxRQUFBO0lBQ0EsNkJBQUE7RUNFRjtBQUNGO0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxlQUFBO0VDRUY7O0VEQUE7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0lBQ0EseUJBQUE7SUFDQSxjQUFBO0VDR0Y7O0VEQUE7O0lBRUUsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLG1DQUFBO0lBQ0Esb0NBQUE7RUNHRjs7RURBQTtJQUNFLFlBQUE7SUFDQSxtQ0FBQTtFQ0dGOztFREFBO0lBQ0UsU0FBQTtJQUNBLFFBQUE7SUFDQSxnQ0FBQTtFQ0dGO0FBQ0Y7QUREQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLGVBQUE7RUNHRjs7RUREQTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSx5QkFBQTtJQUNBLGdCQUFBO0VDSUY7O0VEREE7O0lBRUUsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLG1DQUFBO0lBQ0Esb0NBQUE7RUNJRjs7RUREQTtJQUNFLFlBQUE7SUFDQSxtQ0FBQTtFQ0lGOztFRERBO0lBQ0UsU0FBQTtJQUNBLFFBQUE7SUFDQSxnQ0FBQTtFQ0lGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hhcmYvaGFyZi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzk0cHgpIHtcclxuICAuaGFyZiB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDhwdDtcclxuICB9XHJcbiAgLmhleGFnb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDY1LCA2NSk7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICB9XHJcblxyXG4gIC5oZXhhZ29uOmJlZm9yZSxcclxuICAuaGV4YWdvbjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBib3JkZXItbGVmdDogMTIuNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxMi41cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAuaGV4YWdvbjpiZWZvcmUge1xyXG4gICAgYm90dG9tOiAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHJnYig2MSwgNjUsIDY1KTtcclxuICB9XHJcblxyXG4gIC5oZXhhZ29uOmFmdGVyIHtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkIHJnYig2MSwgNjUsIDY1KTtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDc5NHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiAxMjE2cHgpIHtcclxuICAuaGFyZiB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHQ7XHJcbiAgfVxyXG4gIC5oZXhhZ29uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiAyMy4xcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDY1LCA2NSk7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICB9XHJcblxyXG4gIC5oZXhhZ29uOmJlZm9yZSxcclxuICAuaGV4YWdvbjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIC5oZXhhZ29uOmJlZm9yZSB7XHJcbiAgICBib3R0b206IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxMS42cHggc29saWQgcmdiKDYxLCA2NSwgNjUpO1xyXG4gIH1cclxuXHJcbiAgLmhleGFnb246YWZ0ZXIge1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBib3JkZXItdG9wOiAxMS42cHggc29saWQgcmdiKDYxLCA2NSwgNjUpO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjE2cHgpIHtcclxuICAuaGFyZiB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHQ7XHJcbiAgfVxyXG4gIC5oZXhhZ29uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA0Ni4xOXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLCA2NSwgNjUpO1xyXG4gICAgbWFyZ2luOiAyMy4xcHggMDtcclxuICB9XHJcblxyXG4gIC5oZXhhZ29uOmJlZm9yZSxcclxuICAuaGV4YWdvbjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBib3JkZXItbGVmdDogNDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogNDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIC5oZXhhZ29uOmJlZm9yZSB7XHJcbiAgICBib3R0b206IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAyMy4xcHggc29saWQgcmdiKDYxLCA2NSwgNjUpO1xyXG4gIH1cclxuXHJcbiAgLmhleGFnb246YWZ0ZXIge1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBib3JkZXItdG9wOiAyMy4xcHggc29saWQgcmdiKDYxLCA2NSwgNjUpO1xyXG4gIH1cclxufVxyXG4vLyAuaGV4YWdvbiB7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgIHdpZHRoOiA4MHB4O1xyXG4vLyAgIGhlaWdodDogNDYuMTlweDtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDY1LCA2NSk7XHJcbi8vICAgbWFyZ2luOiAyMy4xcHggMDtcclxuLy8gfVxyXG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3OTRweCkge1xuICAuaGFyZiB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDhwdDtcbiAgfVxuXG4gIC5oZXhhZ29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDQxNDE7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gIH1cblxuICAuaGV4YWdvbjpiZWZvcmUsXG4uaGV4YWdvbjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDEyLjVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDEyLjVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5oZXhhZ29uOmJlZm9yZSB7XG4gICAgYm90dG9tOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjM2Q0MTQxO1xuICB9XG5cbiAgLmhleGFnb246YWZ0ZXIge1xuICAgIHRvcDogMTAwJTtcbiAgICB3aWR0aDogMDtcbiAgICBib3JkZXItdG9wOiA2cHggc29saWQgIzNkNDE0MTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzk0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTIxNnB4KSB7XG4gIC5oYXJmIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVwdDtcbiAgfVxuXG4gIC5oZXhhZ29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiAyMy4xcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkNDE0MTtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgfVxuXG4gIC5oZXhhZ29uOmJlZm9yZSxcbi5oZXhhZ29uOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMDtcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAuaGV4YWdvbjpiZWZvcmUge1xuICAgIGJvdHRvbTogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiAxMS42cHggc29saWQgIzNkNDE0MTtcbiAgfVxuXG4gIC5oZXhhZ29uOmFmdGVyIHtcbiAgICB0b3A6IDEwMCU7XG4gICAgd2lkdGg6IDA7XG4gICAgYm9yZGVyLXRvcDogMTEuNnB4IHNvbGlkICMzZDQxNDE7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMTZweCkge1xuICAuaGFyZiB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMwcHQ7XG4gIH1cblxuICAuaGV4YWdvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogNDYuMTlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q0MTQxO1xuICAgIG1hcmdpbjogMjMuMXB4IDA7XG4gIH1cblxuICAuaGV4YWdvbjpiZWZvcmUsXG4uaGV4YWdvbjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDQwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA0MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLmhleGFnb246YmVmb3JlIHtcbiAgICBib3R0b206IDEwMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMjMuMXB4IHNvbGlkICMzZDQxNDE7XG4gIH1cblxuICAuaGV4YWdvbjphZnRlciB7XG4gICAgdG9wOiAxMDAlO1xuICAgIHdpZHRoOiAwO1xuICAgIGJvcmRlci10b3A6IDIzLjFweCBzb2xpZCAjM2Q0MTQxO1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var HarfComponent = /** @class */ (function () {
    function HarfComponent() {
        this.deger = "";
        this.acik = false;
    }
    HarfComponent.prototype.ngOnInit = function () { };
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
                // trigger("flyAnimations", [
                //   transition(":enter", [style({ opacity: 0, }),animate("800ms", style({ opacity: 1 }))]),
                //   transition(":leave", [animate("800ms", style({ opacity: 0 }))])
                // ])
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("rotatedState", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotateX(0)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotateX(360deg)' }))]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotateX(360deg)' }))])
                ])
            ],
            styles: [__webpack_require__(/*! ./harf.component.scss */ "./src/app/components/harf/harf.component.scss")]
        })
    ], HarfComponent);
    return HarfComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loginUser = {};
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function (loginUser) {
        var _this = this;
        this.authService.login(loginUser).subscribe(function (data) {
            _this.authService.saveToken(data["token"]);
            _this.mesajTur = "success";
            setTimeout(function () {
                _this.router.navigate(["/game"]);
            }, 3000);
        }, function (error) {
            _this.mesajTur = "error";
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
            providers: [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]],
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService) {
        this.authService = authService;
        this.registerUser = {};
    }
    RegisterComponent.prototype.register = function (registerUser) {
        var _this = this;
        this.authService.register(registerUser).subscribe(function (data) {
            _this.mesajTur = "success";
        }, function (error) {
            _this.mesajTur = "error";
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html"),
            providers: [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]],
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_soru_bankasi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/soru-bankasi.service */ "./src/app/services/soru-bankasi.service.ts");



var SoruBankasiComponent = /** @class */ (function () {
    function SoruBankasiComponent(soruBankasiService) {
        this.soruBankasiService = soruBankasiService;
        this.soruBankasi = {};
    }
    SoruBankasiComponent.prototype.saveQuestion = function (soruBankasi) {
        var _this = this;
        soruBankasi.soruldu = false;
        this.soruBankasiService.saveQuestion(soruBankasi).subscribe(function (data) {
            _this.mesajTur = "success";
        }, function (error) {
            _this.mesajTur = "error";
        });
        this.clearSoruBankasi(soruBankasi);
    };
    SoruBankasiComponent.prototype.clearSoruBankasi = function (soruBankasi) {
        soruBankasi.cevap = "";
        soruBankasi.cevapharfsayisi = "";
        soruBankasi.soru = "";
    };
    SoruBankasiComponent.ctorParameters = function () { return [
        { type: src_app_services_soru_bankasi_service__WEBPACK_IMPORTED_MODULE_2__["SoruBankasiService"] }
    ]; };
    SoruBankasiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-soru-bankasi",
            template: __webpack_require__(/*! raw-loader!./soru-bankasi.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/soru-bankasi/soru-bankasi.component.html"),
            styles: [__webpack_require__(/*! ./soru-bankasi.component.scss */ "./src/app/components/soru-bankasi/soru-bankasi.component.scss")]
        })
    ], SoruBankasiComponent);
    return SoruBankasiComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isAuthenticated) {
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            return false;
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthGuard);
    return AuthGuard;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");



var AuthInterceptorService = /** @class */ (function () {
    function AuthInterceptorService(injector) {
        this.injector = injector;
    }
    AuthInterceptorService.prototype.intercept = function (req, next) {
        var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        if (authService.isAuthenticated) {
            var authRequest = req.clone({
                headers: req.headers.set("authorization", "token " + authService.token)
            });
            return next.handle(authRequest);
        }
        return next.handle(req);
    };
    AuthInterceptorService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    AuthInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        })
    ], AuthInterceptorService);
    return AuthInterceptorService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].path;
        this.TOKEN_KEY = "token";
    }
    AuthService.prototype.register = function (registerUser) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append("Content-Type", "application/json");
        // let postUrl = this.path + 'user/register'
        var postUrl = "user/register";
        return this.http.post(postUrl, registerUser, {
            headers: headers
        });
    };
    AuthService.prototype.login = function (loginUser) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append("Content-Type", "application/json");
        //let getUrl = this.path + "user/login";
        var getUrl = "user/login";
        return this.http.post(getUrl, loginUser, { headers: headers });
    };
    AuthService.prototype.saveToken = function (token) {
        localStorage.setItem(this.TOKEN_KEY, token);
    };
    AuthService.prototype.logOut = function () {
        localStorage.removeItem(this.TOKEN_KEY);
    };
    AuthService.prototype.loggedIn = function () {
        return true;
    };
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            return !!localStorage.getItem(this.TOKEN_KEY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () {
            return localStorage.getItem(this.TOKEN_KEY);
        },
        enumerable: true,
        configurable: true
    });
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        })
    ], AuthService);
    return AuthService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var SoruBankasiService = /** @class */ (function () {
    function SoruBankasiService(http) {
        this.http = http;
        this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].path;
    }
    SoruBankasiService.prototype.getQuestions = function () {
        //let getUrl = this.path + "game/index";
        var getUrl = "game/index";
        return this.http.get(getUrl);
    };
    SoruBankasiService.prototype.saveQuestion = function (soruBankasi) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append("Content-Type", "application/json");
        //let postUrl = this.path + "game/saveQuestion";
        var postUrl = "game/saveQuestion";
        return this.http.post(postUrl, soruBankasi, {
            headers: headers
        });
    };
    SoruBankasiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SoruBankasiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        })
    ], SoruBankasiService);
    return SoruBankasiService;
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

module.exports = __webpack_require__(/*! C:\Angular\FindTheWord\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map