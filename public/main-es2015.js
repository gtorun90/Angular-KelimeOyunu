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

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/game/game.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/game/game.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\n  <div class=\"card mb-4\" *ngIf=\"tamamlandi\">\n    <div class=\"card-body\">\n      Tebrikler yarışmayı {{ puan }} puan ile tamamladınız!\n    </div>\n  </div>\n  <div class=\"card\" *ngIf=\"!mevcutSoru; else mevcutSoruYoksa\">\n    <div class=\"card-header\">\n      <h5 class=\"mb-0\">Kelime Oyunu Yarışmasına Hoşgeldiniz!</h5>\n    </div>\n    <div class=\"card-body\">\n      Yarışmaya başlamak için yarışmaya başla butonuna basın.\n    </div>\n    <div class=\"card-footer\">\n      <button class=\"btn btn-primary\" (click)=\"basla()\">Yarışmaya Başla</button>\n    </div>\n  </div>\n  <ng-template #mevcutSoruYoksa>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3 class=\"mb-0\">{{ mevcutSoru.soru }}</h3>\n        <button class=\"btn btn-success float-right\" (click)=\"soruVer()\" *ngIf=\"cevaplandi\">Sonraki Soru</button>\n        <!-- TO DO son soruda soru ver çıkmayacak, soruyu cevapladığında tebrikler bölümü görünebilir. -->\n      </div>\n      <div class=\"card-body\">\n        <div class=\"d-flex\">\n          <harf [deger]=\"harf.harf.toLocaleUpperCase('tr')\" [acik]=\"harf.acildi\" *ngFor=\"let harf of harfler\"></harf>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <div class=\"d-flex\">\n          <div class=\"mr-4\">Toplam Puan: {{ puan }}</div>\n          <div class=\"mr-4\">\n            Kalan Cevap Süreniz:\n            <kbd>{{ kalanSure }}</kbd> saniye\n          </div>\n          <div class=\"mr-4\">Harf Puanı: {{ harfPuan }}</div>\n          <div class=\"float-right\">\n            Kalan Yarışma Süreniz:\n            <kbd>{{ toplamKalanSure }}</kbd> saniye\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <div class=\"input-group\">\n          <input class=\"form-control\" type=\"text\" placeholder=\"Cevabınızı yazın\" [(ngModel)]=\"yarismaciCevap\"\n            (keypress)=\"enterIleCevapVer($event)\" (keyup)=\"yarismaciCevap = yarismaciCevap.toLocaleUpperCase('tr')\" />\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-secondary\" (click)=\"harfVer()\">\n              Harf Ver\n            </button>\n            <button [disabled]=\"!yarismaciCevap\" (click)=\"cevapVer()\" class=\"btn btn-success\">\n              Cevap Ver\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\" [ngClass]=\"mesajClass\" *ngIf=\"mesaj\">\n        {{ mesaj }}\n      </div>\n    </div>\n    <!--Cart div kapanışı-->\n\n  </ng-template>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/harf/harf.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/harf/harf.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"harf hexagon shadow mr-3 text-white\">\r\n  <span @rotatedState *ngIf=\"acik; else acikDegil\">{{ deger }}</span>\r\n  <ng-template #acikDegil>\r\n    <span></span>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form>\n        <div class=\"form-group\">\n            <label>Email address</label>\n            <input type=\"email\" name=\"email\"  [(ngModel)]=\"loginUser.email\" class=\"form-control\" placeholder=\"E-Mail\">\n        </div>\n        <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"password\" [(ngModel)]=\"loginUser.password\" class=\"form-control\" name=\"password\"  placeholder=\"Password\">\n        </div>\n        <button type=\"submit\" (click)=\"login(loginUser)\" class=\"btn btn-primary\">Login</button>\n    </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form>\n        <div class=\"form-group\">\n            <label>Email address</label>\n            <input type=\"email\" name=\"email\"  [(ngModel)]=\"registerUser.email\" class=\"form-control\" placeholder=\"E-Mail\">\n        </div>\n        <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"password\" [(ngModel)]=\"registerUser.password\" class=\"form-control\" name=\"password\"  placeholder=\"Password\">\n        </div>\n        <div class=\"form-group\">\n            <label>First Name</label>\n            <input type=\"text\" [(ngModel)]=\"registerUser.firstName\" class=\"form-control\" name=\"firstName\" placeholder=\"First Name\">\n        </div>\n        <div class=\"form-group\">\n            <label>Last Name</label>\n            <input type=\"text\" [(ngModel)]=\"registerUser.lastName\" class=\"form-control\" name=\"lastName\" placeholder=\"Last Name\">\n        </div>\n        <button type=\"submit\" (click)=\"register(registerUser)\" class=\"btn btn-primary\">Register</button>\n    </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/soru-bankasi/soru-bankasi.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/soru-bankasi/soru-bankasi.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form>\n        <div class=\"form-group\">\n            <label>Soru</label>\n            <input type=\"text\" [(ngModel)]=\"soruBankasi.soru\" class=\"form-control\" name=\"soru\" placeholder=\"Soru\">\n        </div>        \n        <div class=\"form-group\">\n            <label>Cevap</label>\n            <input type=\"text\" [(ngModel)]=\"soruBankasi.cevap\" class=\"form-control\" name=\"cevap\" placeholder=\"Cevap\">\n        </div>\n        <div class=\"form-group\">\n            <label>Cevap Harf Sayisi</label>\n            <input type=\"text\" [(ngModel)]=\"soruBankasi.cevapharfsayisi\" class=\"form-control\" name=\"cevapharfsayisi\" placeholder=\"Cevap Harf Sayisi\">\n        </div>\n        <button type=\"submit\" (click)=\"saveQuestion(soruBankasi)\" class=\"btn btn-primary\">Save</button>\n    </form>\n</div>"

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


let AppComponent = class AppComponent {
};
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














// import {AuthGuard} from "./guards/auth.guard"
var routes = [
    { path: "", component: _components_game_game_component__WEBPACK_IMPORTED_MODULE_12__["GameComponent"], pathMatch: "full" },
    { path: "home", component: _components_game_game_component__WEBPACK_IMPORTED_MODULE_12__["GameComponent"] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: "register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: "question", component: _components_soru_bankasi_soru_bankasi_component__WEBPACK_IMPORTED_MODULE_13__["SoruBankasiComponent"] }
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
        this.sure = null;
        this.toplamSure = null;
        this.kalanSure = 0;
        this.toplamKalanSure = 0;
        this.sorulariGetir();
    }
    sorulariGetir() {
        return this.soruBankasiService.getQuestions().subscribe(data => {
            this.sorular = data;
        }, error => console.log(error));
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
            this.mesajClass = "bg-success text-white";
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
        this.toplamSureGoster();
        this.sorular.map(x => {
            x.soruldu = false;
        });
        this.soruVer();
        this.mesajGoster("İyi yarışmalar!");
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
        this.kalanSure = 30;
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
            this.puan += this.harfPuan;
            this.cevaplandi = true;
            this.mesajGoster("Tebrikler, doğru bildiniz!", MesajTurleri.basari);
        }
        else {
            if (this.puan >= this.harfPuan) {
                this.puan -= this.harfPuan;
            }
            else {
                this.puan = 0;
            }
            this.cevaplandi = true;
            this.mesajGoster(`Yanlış cevap, doğrusu '${this.mevcutSoru.cevap}' olmalıydı!`, MesajTurleri.hata);
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

module.exports = ".harf {\n  width: 80px;\n  height: 90px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30pt;\n}\n\n.hexagon {\n  position: relative;\n  width: 80px;\n  height: 46.19px;\n  background-color: #3d4141;\n  margin: 23.1px 0;\n}\n\n.hexagon:before,\n.hexagon:after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  border-left: 40px solid transparent;\n  border-right: 40px solid transparent;\n}\n\n.hexagon:before {\n  bottom: 100%;\n  border-bottom: 23.1px solid #3d4141;\n}\n\n.hexagon:after {\n  top: 100%;\n  width: 0;\n  border-top: 23.1px solid #3d4141;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oYXJmL0M6XFxBbmd1bGFyXFxGaW5kVGhlV29yZFxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhhcmZcXGhhcmYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGFyZi9oYXJmLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7O0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxtQ0FBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oYXJmL2hhcmYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFyZiB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDMwcHQ7XHJcbn1cclxuXHJcbi5oZXhhZ29uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDgwcHg7IFxyXG4gIGhlaWdodDogNDYuMTlweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDY1LCA2NSk7XHJcbiAgbWFyZ2luOiAyMy4xcHggMDtcclxufVxyXG5cclxuLmhleGFnb246YmVmb3JlLFxyXG4uaGV4YWdvbjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDQwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGV4YWdvbjpiZWZvcmUge1xyXG4gIGJvdHRvbTogMTAwJTtcclxuICBib3JkZXItYm90dG9tOiAyMy4xcHggc29saWQgcmdiKDYxLCA2NSwgNjUpO1xyXG59XHJcblxyXG4uaGV4YWdvbjphZnRlciB7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGJvcmRlci10b3A6IDIzLjFweCBzb2xpZCByZ2IoNjEsIDY1LCA2NSk7XHJcbn0iLCIuaGFyZiB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHQ7XG59XG5cbi5oZXhhZ29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA0Ni4xOXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q0MTQxO1xuICBtYXJnaW46IDIzLjFweCAwO1xufVxuXG4uaGV4YWdvbjpiZWZvcmUsXG4uaGV4YWdvbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGJvcmRlci1sZWZ0OiA0MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDQwcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5oZXhhZ29uOmJlZm9yZSB7XG4gIGJvdHRvbTogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMjMuMXB4IHNvbGlkICMzZDQxNDE7XG59XG5cbi5oZXhhZ29uOmFmdGVyIHtcbiAgdG9wOiAxMDAlO1xuICB3aWR0aDogMDtcbiAgYm9yZGVyLXRvcDogMjMuMXB4IHNvbGlkICMzZDQxNDE7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



let LoginComponent = class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.loginUser = {};
    }
    ngOnInit() {
    }
    login(loginUser) {
        this.authService.login(loginUser).subscribe(data => {
            this.authService.saveToken(data["token"]);
            console.log(data["token"]);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
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
    ngOnInit() { }
    register(registerUser) {
        this.authService.register(registerUser).subscribe(data => {
            console.log(data);
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
        console.log(soruBankasi);
        soruBankasi.soruldu = false;
        this.soruBankasiService.saveQuestion(soruBankasi).subscribe(data => {
            if (data) {
                alert("Kayıt Başarılı");
            }
            else {
                alert("Bir Hata Oluştu");
            }
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
                headers: req.headers.set('authorization', 'token ' + authService.token)
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
        providedIn: 'root'
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
        // let getUrl = this.path + 'user/login'
        let getUrl = "user/login";
        return this.http.post(getUrl, loginUser, { headers: headers });
    }
    saveToken(token) {
        localStorage.setItem(this.TOKEN_KEY, token);
    }
    logOut() {
        localStorage.removeItem(this.TOKEN_KEY);
    }
    loggedIn() {
        return true;
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
        // let getUrl = this.path + 'home/index'
        let getUrl = "home/index";
        return this.http.get(getUrl);
    }
    saveQuestion(soruBankasi) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append("Content-Type", "application/json");
        // let postUrl = this.path + 'home/saveQuestion'
        let postUrl = "home/saveQuestion";
        return this.http
            .post(postUrl, soruBankasi, { headers: headers });
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
    path: "https://immense-sands-23124.herokuapp.com/"
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