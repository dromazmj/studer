webpackJsonp([9],{

/***/ 101:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_module__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_common_module__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aws_aws_module__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var HomePage = (function () {
    function HomePage(businessService, modalController, navCtrl) {
        this.businessService = businessService;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.changePassword = function () {
        var self = this;
        var modal = self.modalController.create(__WEBPACK_IMPORTED_MODULE_2__pages_module__["b" /* ChangePasswordPage */]);
        modal.onDidDismiss(function (data) {
        });
        modal.present();
    };
    HomePage.prototype.edit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var self, modal;
            return __generator(this, function (_a) {
                self = this;
                modal = self.modalController.create(__WEBPACK_IMPORTED_MODULE_2__pages_module__["c" /* EditProfilePage */]);
                modal.onDidDismiss(function (data, role) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if (data.operation == __WEBPACK_IMPORTED_MODULE_3__common_common_module__["c" /* ModelParamOptions */].SAVE) {
                            // update the saved information //
                            self.user.set(self.businessService.authUser);
                        }
                        return [2 /*return*/];
                    });
                }); });
                modal.present();
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.ngOnInit = function () {
        var self = this;
        self.user = __WEBPACK_IMPORTED_MODULE_4__aws_aws_module__["a" /* AuthUser */].Factory();
        self.user.set(self.businessService.authUser);
    };
    HomePage.prototype.signOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self;
            return __generator(this, function (_a) {
                self = this;
                self.businessService.signOut();
                self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_module__["i" /* WelcomePage */]);
                return [2 /*return*/];
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'home-page',template:/*ion-inline-start:"/Users/dromazmj/Documents/studer/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      iCognito App\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-start (click)="signOut()">\n        <ion-icon name="log-out"></ion-icon>\n        Sign Out\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab bottom right>\n    <button ion-fab mini (click)="edit()">\n      <ion-icon name="create"></ion-icon>\n    </button>\n  </ion-fab>\n  <ion-list>\n    <ion-item>\n      <p>{{ user.cognitoProfile.given_name }} {{ user.cognitoProfile.family_name }}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{ user.cognitoProfile.preferred_username }}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{ user.cognitoProfile.email }}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{ user.cognitoProfile.birthdate | date }}</p>\n    </ion-item>\n    <ion-item *ngIf="user.cognitoProfile.phone_number">\n      <p>{{ user.cognitoProfile.phone_number | phoneMask: user.cognitoProfile.country_code }}</p>\n    </ion-item>\n    <ion-item>\n      <button ion-item no-padding (click)="changePassword()">\n        <p>Change Password</p>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>`/*ion-inline-end:"/Users/dromazmj/Documents/studer/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__common_common_module__["a" /* BusinessService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_profile__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(396);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/dromazmj/Documents/studer/src/pages/tabs/tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Search" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"/Users/dromazmj/Documents/studer/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common_module__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordPage = (function () {
    function ChangePasswordPage(businessService, fb, loadingController, navCtrl, navParams, toastController, viewController) {
        this.businessService = businessService;
        this.fb = fb;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastController = toastController;
        this.viewController = viewController;
        this.submitAttempt = false;
    }
    ChangePasswordPage.prototype.buildForm = function () {
        var self = this;
        self.validation_messages = {
            'oldPassword': [
                { type: 'required', message: 'Old password is required' },
                { type: 'minlength', message: 'Old password must be at least 5 characters long' }
            ],
            'newPassword': [
                { type: 'required', message: 'New password is required' },
                { type: 'minlength', message: 'New password must be at least 5 characters long' }
            ],
            'retype': [
                { type: 'required', message: 'Retype password is required' },
                { type: 'validateEqual', message: 'Retype password mismatch' }
            ]
        };
        self.profileForm = self.fb.group({
            newPassword: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(5)])],
            oldPassword: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(5)])],
            retype: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])]
        }, { updatedOn: 'blur' });
    };
    ChangePasswordPage.prototype.cancel = function (data, operation) {
        var self = this;
        var params = {};
        if (operation) {
            params.operation = operation;
        }
        else {
            params.operation = __WEBPACK_IMPORTED_MODULE_2__common_common_module__["c" /* ModelParamOptions */].CANCEL;
        }
        if (data) {
            params.param = data;
        }
        self.viewController.dismiss(params);
    };
    ChangePasswordPage.prototype.ionViewDidLoad = function () { };
    ChangePasswordPage.prototype.ngOnInit = function () {
        var self = this;
        self.buildForm();
    };
    ChangePasswordPage.prototype.save = function () {
        var self = this;
        if (self.profileForm.valid) {
            var loader_1 = self.loadingController.create({
                showBackdrop: false,
                spinner: 'dots'
            });
            var toast_1 = self.toastController.create({
                duration: 5000,
                position: 'bottom'
            });
            var pwd_1 = { oldPassword: self.profileForm.controls['oldPassword'].value, newPassword: self.profileForm.controls['newPassword'].value };
            loader_1.present()
                .then(function () {
                self.businessService.changePassword(pwd_1.oldPassword, pwd_1.newPassword)
                    .then(function (data) {
                    console.log('data', data);
                    loader_1.dismiss();
                    self.cancel(data, __WEBPACK_IMPORTED_MODULE_2__common_common_module__["c" /* ModelParamOptions */].SAVE);
                })
                    .catch(function (error) {
                    loader_1.dismiss();
                    console.log('error changePassword', error);
                    if (error.message) {
                        toast_1.setMessage(error.message);
                        toast_1.setCssClass('dangerToast');
                        toast_1.present();
                    }
                });
            }, function () {
                loader_1.dismiss();
            });
        }
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-change-password',template:/*ion-inline-start:"/Users/dromazmj/Documents/studer/src/pages/change-password/change-password.html"*/`\n<ion-header>\n\n  <ion-toolbar>\n    <ion-title>Change Password</ion-title>\n    <ion-buttons start>\n        <button ion-button (click)="cancel()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows, core"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons end>\n        <button ion-button (click)="save()" [disabled]="!profileForm.valid">\n          <span ion-text color="primary">Save</span>\n        </button>\n      </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="profileForm">\n    <ion-item>\n      <ion-label floating>Existing Password</ion-label>\n      <ion-input formControlName="oldPassword" type="password"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!profileForm.controls[\'oldPassword\'].valid && profileForm.controls[\'oldPassword\'].errors && profileForm.controls[\'oldPassword\'].touched">\n      <p class="error" *ngIf="profileForm.controls[\'oldPassword\'].errors.required">{{ validation_messages.oldPassword[0].message }}</p>\n      <p class="error" *ngIf="profileForm.controls[\'oldPassword\'].errors.minlength">{{ validation_messages.oldPassword[1].message }}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>New Password</ion-label>\n      <ion-input formControlName="newPassword" type="password" validateEqual="retype" reverse="true"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!profileForm.controls[\'newPassword\'].valid && profileForm.controls[\'newPassword\'].errors && profileForm.controls[\'newPassword\'].touched">\n      <p class="error" *ngIf="profileForm.controls[\'newPassword\'].errors.required">{{ validation_messages.newPassword[0].message }}</p>\n      <p class="error" *ngIf="profileForm.controls[\'newPassword\'].errors.minlength">{{ validation_messages.newPassword[1].message }}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Retype</ion-label>\n      <ion-input formControlName="retype" type="password" validateEqual="newPassword" reverse="false"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!profileForm.controls[\'retype\'].valid && profileForm.controls[\'retype\'].errors && profileForm.controls[\'retype\'].touched">\n      <p class="error" *ngIf="profileForm.controls[\'retype\'].errors.required">{{ validation_messages.retype[0].message }}</p>\n      <p class="error" *ngIf="profileForm.controls[\'retype\'].errors.validateEqual">{{ validation_messages.retype[1].message }}</p>\n    </ion-item>\n  </form>\n</ion-content>\n`/*ion-inline-end:"/Users/dromazmj/Documents/studer/src/pages/change-password/change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_common_module__["a" /* BusinessService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common_module__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_google_libphonenumber__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_google_libphonenumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_google_libphonenumber__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var EditProfilePage = (function () {
    function EditProfilePage(businessService, fb, loadingController, viewController, navCtrl, navParams) {
        this.businessService = businessService;
        this.fb = fb;
        this.loadingController = loadingController;
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.brConfig = {};
        this.countries = [];
        this.dial_code = '';
        this.submitAttempt = false;
        this.PNF = __WEBPACK_IMPORTED_MODULE_4_google_libphonenumber___default.a.PhoneNumberFormat;
        this.PNT = __WEBPACK_IMPORTED_MODULE_4_google_libphonenumber___default.a.PhoneNumberType;
        this.phone_validation_messages = {};
        this.util = __WEBPACK_IMPORTED_MODULE_4_google_libphonenumber___default.a.PhoneNumberUtil.getInstance();
    }
    EditProfilePage.prototype.buildForm = function () {
        var self = this;
        self.loadCountries();
        self.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'email', message: 'Enter a valid email' }
            ],
            'username': [
                { type: 'required', message: 'Username is required' },
                { type: 'minlength', message: 'Username must be at least 5 characters long' },
                { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
                { type: 'pattern', message: 'Username must contain only numbers and letters' }
            ],
            'given_name': [
                { type: 'required', message: 'First name is required' },
                { type: 'pattern', message: 'First name must contain only alpha characters' },
                { type: 'minlength', message: 'First name must be at least 2 characters long' },
                { type: 'maxlength', message: 'First name cannot be more than 30 characters long' }
            ],
            "family_name": [
                { type: 'required', message: 'Last name is required' },
                { type: 'pattern', message: 'Last name must contain only alpha characters' },
                { type: 'minlength', message: 'Last name must be at least 2 characters long' },
                { type: 'maxlength', message: 'Last name cannot be more than 30 characters long' }
            ],
            'birthdate': [
                { type: 'required', message: 'Birthdate is required' }
            ],
            'country_code__c': [
                { type: 'required', message: 'Country is required' }
            ],
            'phone_number': [
                { type: 'required', message: 'Phone is required' },
                { type: 'validCountryPhone', message: 'Phone is incorrect for the country selected' }
            ]
        };
        self.cognitoProfile = self.businessService.authUser.cognitoProfile;
        self.cognitoProfile.country_code__c = self.cognitoProfile.country_code__c == undefined ? 'US' : self.cognitoProfile.country_code__c;
        self.cognitoProfile.phone_number = self.cognitoProfile.phone_number == undefined ? undefined : self.util.format(self.util.parse(self.cognitoProfile.phone_number, self.cognitoProfile.country_code__c), self.PNF.NATIONAL);
        self.dial_code = '+' + self.util.getCountryCodeForRegion(self.cognitoProfile.country_code__c);
        self.country_example_number = self.util.getExampleNumberForType(self.cognitoProfile.country_code__c, self.PNT.MOBILE);
        self.example_number_formatted = self.util.format(self.country_example_number, self.PNF.NATIONAL);
        self.brConfig.mask = self.example_number_formatted;
        var country_code = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](self.cognitoProfile.country_code__c, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]));
        self.profileForm = self.fb.group({
            given_name: [self.cognitoProfile.given_name, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(30)])],
            family_name: [self.cognitoProfile.family_name, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(30)])],
            username: [{ value: self.cognitoProfile.preferred_username, disabled: true }, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(25)])],
            email: [self.cognitoProfile.email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__common_common_module__["e" /* ValidatorService */].ValidateEmail])],
            birthdate: [self.cognitoProfile.birthdate, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])],
            country_code__c: country_code,
            phone_number: [self.cognitoProfile.phone_number, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__common_common_module__["d" /* PhoneValidator */].validCountryPhone(country_code)])]
        });
    };
    EditProfilePage.prototype.ionViewDidLoad = function () { };
    EditProfilePage.prototype.cancel = function (data, operation) {
        var self = this;
        var params = {};
        if (operation) {
            params.operation = operation;
        }
        else {
            params.operation = __WEBPACK_IMPORTED_MODULE_2__common_common_module__["c" /* ModelParamOptions */].CANCEL;
        }
        if (data) {
            params.param = data;
        }
        self.viewController.dismiss(params);
    };
    EditProfilePage.prototype.loadCountries = function () {
        var self = this;
        var us = { id: 232, code: 'US', dial_code: '+1', flag: null, name: 'United States', sortOrder: 0 };
        var ca = { id: 70, code: 'CA', dial_code: '+1', flag: null, name: 'Canada', sortOrder: 1 };
        var mx = { id: 156, code: 'MX', dial_code: '+52', flag: null, name: 'Mexico', sortOrder: 2 };
        self.countries.push(us);
        self.countries.push(ca);
        self.countries.push(mx);
    };
    EditProfilePage.prototype.ngOnInit = function () {
        var self = this;
        self.buildForm();
    };
    EditProfilePage.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self, loader_1, oprofile, attributes_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        if (!self.profileForm.valid) return [3 /*break*/, 2];
                        loader_1 = self.loadingController.create({
                            showBackdrop: false,
                            spinner: 'dots'
                        });
                        oprofile = this.profileForm.value;
                        oprofile.phone_number = self.util.format(self.util.parse(oprofile.phone_number, oprofile.country_code__c), self.PNF.E164);
                        return [4 /*yield*/, self.businessService.getCognitoAttributesData(oprofile, true)];
                    case 1:
                        attributes_1 = _a.sent();
                        loader_1.present()
                            .then(function () {
                            self.businessService.updateCognitoProfile(attributes_1)
                                .then(function (data) {
                                loader_1.dismiss();
                                self.businessService.authUser.cognitoProfile = data;
                                self.cancel({ 'cognitoProfile': self.businessService.authUser }, __WEBPACK_IMPORTED_MODULE_2__common_common_module__["c" /* ModelParamOptions */].SAVE);
                            })
                                .catch(function (err) {
                                console.log('error returned from update.', err);
                                loader_1.dismiss();
                            });
                        }, function () {
                            loader_1.dismiss();
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'edit-page-profile',template:/*ion-inline-start:"/Users/dromazmj/Documents/studer/src/pages/edit-profile/edit-profile.html"*/`\n<ion-header>\n\n  <ion-toolbar>\n    <ion-title>Edit Profile</ion-title>\n    <ion-buttons start>\n        <button ion-button (click)="cancel()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows, core"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons end>\n        <button ion-button (click)="save()">\n          <span ion-text color="primary">Save</span>\n        </button>\n      </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="profileForm">\n    <ion-row>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label floating>First Name</ion-label>\n          <ion-input formControlName="given_name" type="text"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!profileForm.controls[\'given_name\'].valid && profileForm.controls[\'given_name\'].errors && profileForm.controls[\'given_name\'].touched">\n          <p class="error" *ngIf="profileForm.controls[\'given_name\'].errors.required">{{ validation_messages.given_name[0].message }}</p>\n          <p class="error" *ngIf="profileForm.controls[\'given_name\'].errors.pattern">{{ validation_messages.given_name[1].message }}</p>\n          <p class="error" *ngIf="profileForm.controls[\'given_name\'].errors.minlength">{{ validation_messages.given_name[2].message }}</p>\n          <p class="error" *ngIf="profileForm.controls[\'given_name\'].errors.maxlength">{{ validation_messages.given_name[3].message }}</p>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label floating>Last Name</ion-label>\n          <ion-input formControlName="family_name" type="text"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!profileForm.controls[\'family_name\'].valid && profileForm.controls[\'family_name\'].errors && profileForm.controls[\'family_name\'].touched">\n          <p class="error" *ngIf="profileForm.controls[\'family_name\'].errors.required">{{ validation_messages.family_name[0].message }}</p>\n          <p class="error" *ngIf="profileForm.controls[\'family_name\'].errors.pattern">{{ validation_messages.family_name[1].message }}</p>\n          <p class="error" *ngIf="profileForm.controls[\'family_name\'].errors.minlength">{{ validation_messages.family_name[2].message }}</p>\n          <p class="error" *ngIf="profileForm.controls[\'family_name\'].errors.maxlength">{{ validation_messages.family_name[3].message }}</p>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input formControlName="username" type="text" autocapitalize="none"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!profileForm.controls[\'username\'].valid && profileForm.controls[\'username\'].errors && profileForm.controls[\'username\'].touched">\n      <p class="error" *ngIf="profileForm.controls[\'username\'].errors.required">{{ validation_messages.username[0].message }}</p>\n      <p class="error" *ngIf="profileForm.controls[\'username\'].errors.minlength">{{ validation_messages.username[1].message }}</p>\n      <p class="error" *ngIf="profileForm.controls[\'username\'].errors.maxlength">{{ validation_messages.username[2].message }}</p>\n      <!-- <p class="error" *ngIf="profileForm.controls[\'username\'].errors.pattern">{{ validation_messages.username[3].message }}</p> -->\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input formControlName="email" type="email"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!profileForm.controls[\'email\'].valid && profileForm.controls[\'email\'].errors && profileForm.controls[\'email\'].touched">\n      <p class="error" *ngIf="profileForm.controls[\'email\'].errors.required">{{ validation_messages.email[0].message }}</p>\n      <p class="error" *ngIf="profileForm.controls[\'email\'].errors.email">{{ validation_messages.email[1].message }}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Phone</ion-label>\n      <ion-select formControlName="country_code__c" (ionChange)="onSelect($event)">\n        <ion-option *ngFor="let c of countries" [value]="c.code">\n          {{ c.name }}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf="!profileForm.controls[\'country_code__c\'].valid && signupForm.controls[\'country_code__c\'].errors && profileForm.controls[\'country_code__c\'].touched">\n      <p class="error" *ngIf="profileForm.controls[\'country_code__c\'].errors.required">{{ validation_messages.country_code__c[0].message }}</p>\n    </ion-item>\n    <ion-item>\n      <span item-content padding-right>{{ dial_code }}</span>\n      <ion-input type="tel" formControlName="phone_number" [placeholder]="example_number_formatted" [brmasker]="brConfig"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!profileForm.controls[\'phone_number\'].valid && profileForm.controls[\'phone_number\'].errors && profileForm.controls[\'phone_number\'].touched">\n      <p class="error" *ngIf="profileForm.controls[\'phone_number\'].errors.required">{{ validation_messages.phone_number[0].message }}</p>\n      <p class="error" *ngIf="profileForm.controls[\'phone_number\'].errors.validCountryPhone">{{ validation_messages.phone_number[1].message }}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Birthday</ion-label>\n      <ion-datetime formControlName="birthdate" displayFormat="MM/DD/YYYY"></ion-datetime>\n    </ion-item>\n    <ion-item *ngIf="!profileForm.controls[\'birthdate\'].valid && profileForm.controls[\'birthdate\'].errors && profileForm.controls[\'birthdate\'].touched">\n      <p class="error" *ngIf="profileForm.controls[\'birthdate\'].errors.required">{{ validation_messages.birthdate[0].message }}</p>\n    </ion-item>\n  </form>\n</ion-content>\n`/*ion-inline-end:"/Users/dromazmj/Documents/studer/src/pages/edit-profile/edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_common_module__["a" /* BusinessService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aws_aws_module__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_module__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotConfirmPage = (function () {
    function ForgotConfirmPage(cognitoService, fb, navCtrl, navParams, toastController) {
        this.cognitoService = cognitoService;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastController = toastController;
        this.submitAttempt = false;
    }
    ForgotConfirmPage.prototype.buildForm = function () {
        this.forgotConfirmForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(3)])],
            verificationCode: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(5)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])]
        }, { updatedOn: 'blur' });
    };
    ForgotConfirmPage.prototype.ionViewDidLoad = function () { };
    ForgotConfirmPage.prototype.ngOnInit = function () {
        this.buildForm();
    };
    ForgotConfirmPage.prototype.submit = function () {
        var _this = this;
        this.submitAttempt = true;
        if (this.forgotConfirmForm.valid) {
            this.cognitoService.confirmPassword(this.forgotConfirmForm.get('username').value, this.forgotConfirmForm.get('verificationCode').value, this.forgotConfirmForm.get('password').value)
                .then(function (result) {
                _this.forgotConfirmForm.reset();
                console.log('this is the result from forgot password', result);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_module__["g" /* LoginPage */]);
            })
                .catch(function (err) {
                console.log('this is the result from the forgot password error', err);
                var toast = _this.toastController.create({
                    message: err.message,
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
    };
    ForgotConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-forgot-confirm',template:/*ion-inline-start:"/Users/dromazmj/Documents/studer/src/pages/forgot-confirm/forgot-confirm.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-title>Forgot Confirm</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div text-center>\n    Please enter your username, password and the verification code that you received via email.\n  </div>\n  <form [formGroup]="forgotConfirmForm">\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input formControlName="username" type="text" autocapitalize="none"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!forgotConfirmForm.controls[\'username\'].valid && (forgotConfirmForm.controls[\'username\'].dirty || submitAttempt)">\n      <p class="error">Please enter a valid username.</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>verification Code</ion-label>\n      <ion-input formControlName="verificationCode" type="text" autocapitalize="none"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!forgotConfirmForm.controls[\'verificationCode\'].valid && (forgotConfirmForm.controls[\'verificationCode\'].dirty || submitAttempt)">\n      <p class="error">Please enter a valid verification code.</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" formControlName="password" validateEqual="confirmPassword" reverse="true"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!forgotConfirmForm.controls[\'password\'].valid && (forgotConfirmForm.controls[\'password\'].dirty || submitAttempt)">\n      <p class="error">Please enter a valid password.</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Confirm Password</ion-label>\n      <ion-input type="password" formControlName="confirmPassword" validateEqual="password" reverse="false"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="forgotConfirmForm.controls[\'confirmPassword\'].errors && (forgotConfirmForm.controls[\'confirmPassword\'].dirty || submitAttempt)">\n      <p *ngIf="forgotConfirmForm.controls[\'confirmPassword\'].errors.required" class="error">Please retype the password above.</p>\n      <p *ngIf="!forgotConfirmForm.controls[\'confirmPassword\'].errors.validateEqual" class="error">Password does not match</p>\n    </ion-item>\n    <div padding>\n      <button ion-button block color="primary" (click)="submit()" [disabled]="!forgotConfirmForm.valid">Update Password</button>\n    </div>\n  </form>\n</ion-content>\n`/*ion-inline-end:"/Users/dromazmj/Documents/studer/src/pages/forgot-confirm/forgot-confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__aws_aws_module__["d" /* CognitoService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ForgotConfirmPage);
    return ForgotConfirmPage;
}());

//# sourceMappingURL=forgot-confirm.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomePage.prototype.ionViewDidLoad = function () { };
    WelcomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/dromazmj/Documents/studer/src/pages/welcome/welcome.html"*/`\n<ion-header>\n\n <!--  <ion-navbar>\n    <ion-title>Welcome</ion-title>\n  </ion-navbar> -->\n\n</ion-header>\n\n\n<ion-content class="welcome-bkg">\n  <div text-center class="slogan">\n    <img src="./assets/imgs/logo.png" />\n  </div>\n  <div class="splash-btn">\n    <div padding>\n        <button ion-button block color="primary" class="signup" (click)="signup()">Sign Up</button>\n    </div>\n    <div padding>\n        <button ion-button block color="primary" class="login" (click)="login()">Login</button>\n    </div>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Users/dromazmj/Documents/studer/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupconfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aws_aws_module__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_module__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupconfirmPage = (function () {
    function SignupconfirmPage(cognitoService, fb, toastController, loadingController, navCtrl, navParams) {
        this.cognitoService = cognitoService;
        this.fb = fb;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.submitAttempt = false;
    }
    SignupconfirmPage.prototype.buildForm = function () {
        var self = this;
        self.validation_messages = {
            'confirmationCode': [
                { type: 'required', message: 'Confirmation code is required' },
                { type: 'minlength', message: 'Enter a valid confirmation code' }
            ]
        };
        self.confirmForm = self.fb.group({
            confirmationCode: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(5)])]
        });
    };
    SignupconfirmPage.prototype.confirm = function () {
        var self = this;
        self.submitAttempt = true;
        var toast = self.toastController.create({
            duration: 5000,
            position: 'bottom'
        });
        if (self.confirmForm.valid) {
            var loader_1 = self.loadingController.create({
                showBackdrop: false,
                spinner: 'dots'
            });
            loader_1.present()
                .then(function () {
                self.cognitoService.confirmRegistration(self.confirmForm.get('confirmationCode').value)
                    .then(function (data) {
                    console.log("confirm registration data returned successful", data);
                    console.log('username', self.cognitoService.cognitoUser.getUsername());
                    loader_1.dismiss();
                    self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_module__["g" /* LoginPage */]);
                }).catch(function (err) {
                    loader_1.dismiss();
                    console.log("error happened", err);
                    console.log('username', self.cognitoService.cognitoUser.getUsername());
                    toast.setMessage(err.message);
                    toast.present();
                });
            }, (function () {
                loader_1.dismiss();
            }));
        }
    };
    SignupconfirmPage.prototype.ionViewDidLoad = function () { };
    SignupconfirmPage.prototype.ngOnInit = function () {
        var self = this;
        self.buildForm();
    };
    SignupconfirmPage.prototype.resend = function () {
        var self = this;
        var toast = this.toastController.create({
            duration: 5000,
            position: 'bottom'
        });
        self.cognitoService.resendConfirmationCode()
            .then(function (result) {
            console.log('confirmation code resent');
            toast.setMessage('confirmation code resent');
            toast.present();
        }).catch(function (err) {
            var exception = new __WEBPACK_IMPORTED_MODULE_3__aws_aws_module__["c" /* CognitoException */](err);
            console.log('oops something went wrong sending confirmation code', exception);
            toast.setMessage(exception.message);
            toast.present();
        });
    };
    SignupconfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signupconfirm',template:/*ion-inline-start:"/Users/dromazmj/Documents/studer/src/pages/signupconfirm/signupconfirm.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign Up Confirmation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div text-center>\n    Please enter the verification code that you recieved via email.\n  </div>\n  <form [formGroup]="confirmForm">\n    <ion-item>\n      <ion-label floating>Confirmation Code</ion-label>\n      <ion-input formControlName="confirmationCode" type="text" autocapitalize="none"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!confirmForm.controls[\'confirmationCode\'].valid && (confirmForm.controls[\'confirmationCode\'].dirty || submitAttempt)">\n        <p class="error" *ngIf="confirmForm.controls[\'confirmationCode\'].errors.required">{{ validation_messages.confirmationCode[0].message }}</p>\n        <p class="error" *ngIf="confirmForm.controls[\'confirmationCode\'].errors.minlength">{{ validation_messages.confirmationCode[1].message }}</p>\n    </ion-item>\n    <div padding>\n        <button ion-button block color="primary" class="login" (click)="confirm()">Submit Code</button>\n    </div>\n    <div class="or rounded-x">Or</div>\n    <div padding>\n        <button ion-button block color="primary" (click)="resend()">Resend Code</button>\n    </div>\n  </form>\n</ion-content>\n`/*ion-inline-end:"/Users/dromazmj/Documents/studer/src/pages/signupconfirm/signupconfirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__aws_aws_module__["d" /* CognitoService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SignupconfirmPage);
    return SignupconfirmPage;
}());

//# sourceMappingURL=signupconfirm.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aws_aws_module__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_module__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPage = (function () {
    function ForgotPage(cognitoService, fb, navCtrl, navParams, toastController) {
        this.cognitoService = cognitoService;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastController = toastController;
        this.submitAttempt = false;
    }
    ForgotPage.prototype.ngOnInit = function () {
        this.buildForm();
    };
    ForgotPage.prototype.ionViewDidLoad = function () { };
    ForgotPage.prototype.buildForm = function () {
        this.forgotForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(3)])],
        }, { updatedOn: 'blur' });
    };
    ForgotPage.prototype.submit = function () {
        var _this = this;
        var self = this;
        self.submitAttempt = true;
        var toast = self.toastController.create({
            duration: 5000,
            position: 'bottom'
        });
        if (self.forgotForm.valid) {
            self.cognitoService.forgotPassword(self.forgotForm.get('username').value)
                .then(function (result) {
                self.forgotForm.reset();
                console.log('this is the result from forgot password', result);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_module__["d" /* ForgotConfirmPage */]);
            })
                .catch(function (err) {
                console.log('this is the result from the forgot password error', err);
                toast.setMessage(err.message);
                toast.present();
            });
        }
    };
    ForgotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-forgot',template:/*ion-inline-start:"/Users/dromazmj/Documents/studer/src/pages/forgot/forgot.html"*/`\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Forgot Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div text-center>\n    Please enter your username to receive instructions on how to reset your password.\n  </div>\n  <form [formGroup]="forgotForm">\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input formControlName="username" type="text" autocapitalize="none"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!forgotForm.controls[\'username\'].valid && (forgotForm.controls[\'username\'].dirty || submitAttempt)">\n      <p class="error">Please enter a valid username.</p>\n    </ion-item>\n    <div padding>\n      <button ion-button block color="primary" (click)="submit()" [disabled]="!forgotForm.valid">Reset Password</button>\n    </div>\n  </form>\n</ion-content>\n`/*ion-inline-end:"/Users/dromazmj/Documents/studer/src/pages/forgot/forgot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__aws_aws_module__["d" /* CognitoService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 143;

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = throwIfAlreadyLoaded;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CommonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validators_validator_module__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_business_module__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_interface__ = __webpack_require__(796);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__common_interface__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_validator_service__ = __webpack_require__(94);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__validators_validator_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_phone_validator__ = __webpack_require__(797);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__validators_phone_validator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__business_business_service__ = __webpack_require__(346);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__business_business_service__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}
var CommonModule = (function () {
    function CommonModule(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'CommonModule');
    }
    CommonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__business_business_module__["a" /* BusinessModule */],
                __WEBPACK_IMPORTED_MODULE_1__validators_validator_module__["a" /* ValidatorModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__validators_validator_module__["a" /* ValidatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__business_business_module__["a" /* BusinessModule */]
            ],
            providers: []
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CommonModule])
    ], CommonModule);
    return CommonModule;
}());

//# sourceMappingURL=common.module.js.map

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/change-password/change-password.module": [
		830,
		8
	],
	"../pages/edit-profile/edit-profile.module": [
		831,
		7
	],
	"../pages/forgot-confirm/forgot-confirm.module": [
		832,
		6
	],
	"../pages/forgot/forgot.module": [
		833,
		5
	],
	"../pages/login/login.module": [
		834,
		4
	],
	"../pages/search/search.module": [
		835,
		3
	],
	"../pages/signup/signup.module": [
		836,
		2
	],
	"../pages/signupconfirm/signupconfirm.module": [
		837,
		1
	],
	"../pages/welcome/welcome.module": [
		838,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 185;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPages; });
/* unused harmony export MainPage */
/* unused harmony export PagesModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_common_module__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signupconfirm_signupconfirm__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__change_password_change_password__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forgot_forgot__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__forgot_confirm_forgot_confirm__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tabs_tabs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__edit_profile_edit_profile__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_search__ = __webpack_require__(396);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_8__change_password_change_password__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_9__forgot_forgot__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_10__forgot_confirm_forgot_confirm__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__home_home__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__login_login__["a"]; });
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__signupconfirm_signupconfirm__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_12__edit_profile_edit_profile__["a"]; });
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};














var AppPages = [
    __WEBPACK_IMPORTED_MODULE_8__change_password_change_password__["a" /* ChangePasswordPage */], __WEBPACK_IMPORTED_MODULE_9__forgot_forgot__["a" /* ForgotPage */], __WEBPACK_IMPORTED_MODULE_10__forgot_confirm_forgot_confirm__["a" /* ForgotConfirmPage */], __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */], __WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */], __WEBPACK_IMPORTED_MODULE_7__signupconfirm_signupconfirm__["a" /* SignupconfirmPage */], __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */], __WEBPACK_IMPORTED_MODULE_11__tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_12__edit_profile_edit_profile__["a" /* EditProfilePage */], __WEBPACK_IMPORTED_MODULE_13__search_search__["a" /* SearchPage */]
];
var MainPage = __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */];










var PagesModule = (function () {
    function PagesModule(parentModule) {
        Object(__WEBPACK_IMPORTED_MODULE_1__common_common_module__["f" /* throwIfAlreadyLoaded */])(parentModule, 'PagesModule');
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                AppPages,
                __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]
            ],
            imports: [],
            exports: [
                AppPages,
                __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* SkipSelf */])()),
        __metadata("design:paramtypes", [PagesModule])
    ], PagesModule);
    return PagesModule;
}());

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return S3Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aws_sdk_clients_s3__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aws_sdk_clients_s3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_aws_sdk_clients_s3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__s3_config__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cognito_service__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var S3Service = (function () {
    function S3Service(prior, cognitoService) {
        this.cognitoService = cognitoService;
        this.config = __WEBPACK_IMPORTED_MODULE_3__s3_config__["a" /* S3Config */];
        if (prior) {
            return prior;
        }
        this.S3 = this.getS3();
    }
    S3Service.prototype.getS3 = function () {
        return new __WEBPACK_IMPORTED_MODULE_1_aws_sdk_clients_s3__({
            params: {
                'Bucket': this.config.bucketName
            },
            region: __WEBPACK_IMPORTED_MODULE_3__s3_config__["a" /* S3Config */].bucketRegion
        });
    };
    S3Service.prototype.isExpired = function (url) {
        var result;
        var _url = new URL(url);
        if (_url.search === '') {
            result = true;
        }
        else {
            var param = _url.searchParams.get('Expires');
            if (param) {
                result = __WEBPACK_IMPORTED_MODULE_2_moment__().isAfter(__WEBPACK_IMPORTED_MODULE_2_moment__["unix"](parseInt(param)));
            }
            else {
                result = false;
            }
        }
        return result;
    };
    S3Service.prototype.handleError = function (error, caller) {
        var exception = new __WEBPACK_IMPORTED_MODULE_4__cognito_service__["b" /* CognitoException */](error);
        console.error("AWS Cognito Service::handleError callerMethod::" + caller, exception);
        return exception;
    };
    S3Service.prototype.getFileByUrl = function (url) {
        var self = this;
        var baseurl = "https://" + self.config.bucketName + ".s3.amazonaws.com/";
        var fileKey = url.replace(baseurl, '');
        var _url = new URL(url);
        return new Promise(function (resolve, reject) {
            try {
                if (fileKey === '') {
                    resolve(url);
                }
                else if (self.isExpired(url)) {
                    self.S3.getSignedUrl('getObject', { Key: fileKey }, function (err, url) {
                        if (err) {
                            reject(self.handleError(err, 'getSignedUrl'));
                        }
                        else {
                            resolve(url);
                        }
                    });
                }
                else {
                    resolve(url);
                }
            }
            catch (error) {
                reject(self.handleError(error, 'try/catch getSignedUrl'));
            }
        });
    };
    S3Service.prototype.getFile = function (filename, folder) {
        var self = this;
        var directory = self.config.folderLevel + "/";
        if (folder) {
            directory += folder + "/";
        }
        var fileKey = "" + directory + filename;
        return new Promise(function (resolve, reject) {
            try {
                self.S3.getSignedUrl('getObject', { Key: fileKey }, function (err, url) {
                    if (err) {
                        reject(self.handleError(err, 'getSignedUrl'));
                    }
                    else {
                        // self.cognitoService.user.cognitoProfile.picture = url;
                        resolve(url);
                    }
                });
            }
            catch (error) {
                reject(self.handleError(error, 'try/catch getSignedUrl'));
            }
        });
    };
    S3Service.prototype.uploadFile = function (file, filename, folder) {
        var self = this;
        // self.config.folderLevel = "protected" - this prevents unautheticated access to the file.
        var directory = self.config.publicLevel + "/";
        if (folder) {
            directory += folder + "/";
        }
        // console.log({'directory': directory});
        // console.log({'filename':filename});
        // console.log({'filetype':file.type});
        // filename = filename.toLowerCase().replace(' ','-');
        filename = filename.toLowerCase().replace(/\s+/g, "-");
        if (file.type === 'image/jpeg') {
            filename += '.jpg';
        }
        if (file.type === 'image/png') {
            filename += '.png';
        }
        var fileKey = "" + directory + filename;
        return new Promise(function (resolve, reject) {
            try {
                self.S3.upload({
                    Bucket: self.config.bucketName,
                    Key: fileKey,
                    ContentType: file.type,
                    ContentEncoding: 'base64',
                    Body: file,
                    StorageClass: 'STANDARD',
                }, function (err, data) {
                    if (err) {
                        self.handleError(err, 'uploadFile');
                        reject(err);
                    }
                    else {
                        console.log('successful uploadFile.');
                        resolve(data);
                    }
                });
            }
            catch (error) {
                reject(self.handleError(error, 'try/catch upload'));
            }
        });
    };
    S3Service.prototype.upload = function (file, type) {
        var self = this;
        //the s3 upload method requires
        // let fileName = name;
        var directory = self.config.folderLevel + "/" + self.cognitoService.user.identityId + "/";
        var fileKey = directory + "avatar";
        return new Promise(function (resolve, reject) {
            try {
                self.S3.upload({
                    Bucket: self.config.bucketName,
                    Key: fileKey,
                    ContentType: type,
                    Body: file,
                    StorageClass: 'STANDARD',
                }, function (err, data) {
                    if (err) {
                        self.handleError(err, 'there was an error uploading your photo:');
                        resolve(false);
                    }
                    else {
                        console.log('successfully uploaded photo.');
                        console.log(data);
                        resolve(true);
                    }
                });
            }
            catch (error) {
                reject(self.handleError(error, 'try/catch upload'));
            }
        });
    };
    S3Service.prototype.getAvatar = function (fileName) {
        var self = this;
        var result = '';
        var directory = self.config.folderLevel + "/" + self.cognitoService.user.identityId + "/";
        var fileKey = directory + "avatar";
        console.log('fileKey', fileKey);
        return new Promise(function (resolve, reject) {
            try {
                self.S3.getSignedUrl('getObject', { Key: fileKey }, function (err, url) {
                    if (err) {
                        reject(self.handleError(err, 'getSignedUrl'));
                    }
                    result = url;
                    self.cognitoService.user.cognitoProfile.picture = url;
                    resolve(url);
                });
            }
            catch (error) {
                reject(self.handleError(error, 'try/catch getSignedUrl'));
            }
        });
    };
    S3Service.dataURItoBlob = function (dataURI, type) {
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        var blob = new Blob([new Uint8Array(array)], { type: type });
        return blob;
    };
    S3Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* SkipSelf */])()),
        __metadata("design:paramtypes", [S3Service,
            __WEBPACK_IMPORTED_MODULE_4__cognito_service__["c" /* CognitoService */]])
    ], S3Service);
    return S3Service;
}());

//# sourceMappingURL=s3.service.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aws_aws_module__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var BusinessService = (function () {
    function BusinessService(prior, cognitoService, storage) {
        this.cognitoService = cognitoService;
        this.storage = storage;
        if (prior) {
            return prior;
        }
        this.authUser = __WEBPACK_IMPORTED_MODULE_1__aws_aws_module__["a" /* AuthUser */].Factory();
    }
    BusinessService.prototype.changePassword = function (oldPassword, newPassword) {
        var self = this;
        return self.cognitoService.changePassword(oldPassword, newPassword);
    };
    BusinessService.prototype.checkAuthorization = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, self.refreshOrResetCreds()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, self.storage.get('authUser')
                                .then(function (result) {
                                self.authUser.set(result);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BusinessService.prototype.getCognitoAttributesData = function (profile, update) {
        return __awaiter(this, void 0, void 0, function () {
            var self;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, self.cognitoService.getCognitoAttributesData(profile, update)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BusinessService.prototype.updateCognitoProfile = function (attributes) {
        return __awaiter(this, void 0, void 0, function () {
            var self;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, self.cognitoService.updateCognitoProfile(attributes)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BusinessService.prototype.refreshOrResetCreds = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, self.cognitoService.refreshOrResetCreds()];
                    case 1:
                        _a.sent();
                        self.authUser.cognitoUser = self.cognitoService.cognitoUser;
                        return [2 /*return*/];
                }
            });
        });
    };
    BusinessService.prototype.signIn = function (creds) {
        return __awaiter(this, void 0, void 0, function () {
            var self;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, self.cognitoService.signIn(creds)
                                .then(function (resp) {
                                self.authUser.set(resp);
                                return resp;
                            })
                                .catch(function (error) {
                                console.log('an error occurred logging into the auth service.', error);
                                throw error;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BusinessService.prototype.signOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, self.cognitoService.signOut()
                                .then(function (resp) {
                                self.authUser = self.cognitoService.user;
                            })
                                .catch(function (error) {
                                console.log('an error occurred signing out of the auth service', error);
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BusinessService.prototype.signUp = function (creds) {
        return __awaiter(this, void 0, void 0, function () {
            var self;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, self.cognitoService.signUp(creds)
                                .then(function (resp) {
                                return resp;
                            })
                                .catch(function (error) {
                                console.log('an error occurred signing up through the auth service', error);
                                throw error;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BusinessService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* SkipSelf */])()),
        __metadata("design:paramtypes", [BusinessService, __WEBPACK_IMPORTED_MODULE_1__aws_aws_module__["d" /* CognitoService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], BusinessService);
    return BusinessService;
}());

//# sourceMappingURL=business.service.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_module__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_common_module__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aws_aws_module__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ProfilePage = (function () {
    function ProfilePage(businessService, modalController, navCtrl) {
        this.businessService = businessService;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
    }
    ProfilePage.prototype.changePassword = function () {
        var self = this;
        var modal = self.modalController.create(__WEBPACK_IMPORTED_MODULE_2__pages_module__["b" /* ChangePasswordPage */]);
        modal.onDidDismiss(function (data) {
        });
        modal.present();
    };
    ProfilePage.prototype.edit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var self, modal;
            return __generator(this, function (_a) {
                self = this;
                modal = self.modalController.create(__WEBPACK_IMPORTED_MODULE_2__pages_module__["c" /* EditProfilePage */]);
                modal.onDidDismiss(function (data, role) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if (data.operation == __WEBPACK_IMPORTED_MODULE_3__common_common_module__["c" /* ModelParamOptions */].SAVE) {
                            // update the saved information //
                            self.user.set(self.businessService.authUser);
                        }
                        return [2 /*return*/];
                    });
                }); });
                modal.present();
                return [2 /*return*/];
            });
        });
    };
    ProfilePage.prototype.ngOnInit = function () {
        var self = this;
        self.user = __WEBPACK_IMPORTED_MODULE_4__aws_aws_module__["a" /* AuthUser */].Factory();
        self.user.set(self.businessService.authUser);
    };
    ProfilePage.prototype.signOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self;
            return __generator(this, function (_a) {
                self = this;
                self.businessService.signOut();
                self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_module__["i" /* WelcomePage */]);
                return [2 /*return*/];
            });
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'profile-page',template:/*ion-inline-start:"/Users/dromazmj/Documents/studer/src/pages/profile/profile.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      iCognito App\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-start (click)="signOut()">\n        <ion-icon name="log-out"></ion-icon>\n        Sign Out\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab bottom right>\n    <button ion-fab mini (click)="edit()">\n      <ion-icon name="create"></ion-icon>\n    </button>\n  </ion-fab>\n  <ion-list>\n    <ion-item>\n      <p>{{ user.cognitoProfile.given_name }} {{ user.cognitoProfile.family_name }}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{ user.cognitoProfile.preferred_username }}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{ user.cognitoProfile.email }}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{ user.cognitoProfile.birthdate | date }}</p>\n    </ion-item>\n    <ion-item *ngIf="user.cognitoProfile.phone_number">\n      <p>{{ user.cognitoProfile.phone_number | phoneMask: user.cognitoProfile.country_code }}</p>\n    </ion-item>\n    <ion-item>\n      <button ion-item no-padding (click)="changePassword()">\n        <p>Change Password</p>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>`/*ion-inline-end:"/Users/dromazmj/Documents/studer/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__common_common_module__["a" /* BusinessService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AwsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_common_module__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cognito_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__s3_service__ = __webpack_require__(345);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__cognito_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__cognito_service__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__cognito_service__["c"]; });
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AwsModule = (function () {
    function AwsModule(parentModule) {
        Object(__WEBPACK_IMPORTED_MODULE_1__common_common_module__["f" /* throwIfAlreadyLoaded */])(parentModule, 'AwsModule');
    }
    AwsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__cognito_service__["c" /* CognitoService */],
                __WEBPACK_IMPORTED_MODULE_3__s3_service__["a" /* S3Service */]
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* SkipSelf */])()),
        __metadata("design:paramtypes", [AwsModule])
    ], AwsModule);
    return AwsModule;
}());

//# sourceMappingURL=aws.module.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowHideInput; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowHideInput = (function () {
    function ShowHideInput(el) {
        this.el = el;
        this.type = 'password';
    }
    ShowHideInput.prototype.changeType = function (type) {
        this.type = type;
        this.el.nativeElement.children[0].type = this.type;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])(),
        __metadata("design:type", String)
    ], ShowHideInput.prototype, "type", void 0);
    ShowHideInput = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[show-hide-input]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], ShowHideInput);
    return ShowHideInput;
}());

//# sourceMappingURL=show-hide-input.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MomentPipe = (function () {
    function MomentPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    MomentPipe.prototype.transform = function (date, format) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(date).format(format);
    };
    MomentPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'moment',
        })
    ], MomentPipe);
    return MomentPipe;
}());

//# sourceMappingURL=moment.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneMaskPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_google_libphonenumber__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_google_libphonenumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_google_libphonenumber__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// value | phoneMask: countryCode: PNF //
var PhoneMaskPipe = (function () {
    function PhoneMaskPipe() {
    }
    /**
     *
     * @param value
     * @param countryCode
     * @param pnf
     */
    PhoneMaskPipe.prototype.transform = function (value, countryCode, pnf) {
        if (!value)
            return value;
        var _pnf = pnf == null ? __WEBPACK_IMPORTED_MODULE_1_google_libphonenumber___default.a.PhoneNumberFormat.NATIONAL : pnf;
        var _countryCode = countryCode == null ? 'US' : countryCode;
        var util = __WEBPACK_IMPORTED_MODULE_1_google_libphonenumber___default.a.PhoneNumberUtil.getInstance();
        var result = util.format(util.parse(value, _countryCode), _pnf);
        return result;
    };
    PhoneMaskPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'phoneMask'
        })
    ], PhoneMaskPipe);
    return PhoneMaskPipe;
}());

//# sourceMappingURL=phonemask.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/dromazmj/Documents/studer/src/pages/search/search.html"*/`<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n`/*ion-inline-end:"/Users/dromazmj/Documents/studer/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(421);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_brmasker_ionic_3__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pages_module__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_common_module__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_components_module__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_pipes_module__ = __webpack_require__(829);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pages_module__["a" /* AppPages */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_brmasker_ionic_3__["b" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_8__common_common_module__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_9__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    platforms: {
                        ios: {
                            statusbarPadding: true
                        }
                    }
                }, {
                    links: [
                        { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-confirm/forgot-confirm.module#ForgotConfirmPageModule', name: 'ForgotConfirmPage', segment: 'forgot-confirm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signupconfirm/signupconfirm.module#SignupconfirmPageModule', name: 'SignupconfirmPage', segment: 'signupconfirm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__ionic-aws-cognito-app',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pages_module__["a" /* AppPages */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_module__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equal_validator_directive__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validator_service__ = __webpack_require__(94);
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ValidatorModule = (function () {
    function ValidatorModule(parentModule) {
        Object(__WEBPACK_IMPORTED_MODULE_1__common_module__["f" /* throwIfAlreadyLoaded */])(parentModule, 'ValidatorModule');
    }
    ValidatorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__equal_validator_directive__["a" /* EqualValidator */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__equal_validator_directive__["a" /* EqualValidator */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__validator_service__["a" /* ValidatorService */]
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* SkipSelf */])()),
        __metadata("design:paramtypes", [ValidatorModule])
    ], ValidatorModule);
    return ValidatorModule;
}());

//# sourceMappingURL=validator.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidator_1 = EqualValidator;
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // throw new Error("Method not implemented.");
        // self value
        var v = c.value;
        // control value
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: true
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ validateEqual: true });
        }
        return null;
    };
    EqualValidator = EqualValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* forwardRef */])(function () { return EqualValidator_1; }),
                    multi: true
                }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Attribute */])('validateEqual')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Attribute */])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidator);
    return EqualValidator;
    var EqualValidator_1;
}());

//# sourceMappingURL=equal-validator.directive.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_common_module__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aws_aws_module__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__business_service__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var BusinessModule = (function () {
    function BusinessModule(parentModule) {
        Object(__WEBPACK_IMPORTED_MODULE_1__common_common_module__["f" /* throwIfAlreadyLoaded */])(parentModule, 'BusinessModule');
    }
    BusinessModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__aws_aws_module__["b" /* AwsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__aws_aws_module__["b" /* AwsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__business_service__["a" /* BusinessService */]
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* SkipSelf */])()),
        __metadata("design:paramtypes", [BusinessModule])
    ], BusinessModule);
    return BusinessModule;
}());

//# sourceMappingURL=business.module.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_module__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_common_module__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var LoginPage = (function () {
    function LoginPage(businessService, fb, loadingController, toastController, navCtrl, navParams) {
        this.businessService = businessService;
        this.fb = fb;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.submitAttempt = false;
    }
    LoginPage.prototype.buildForm = function () {
        var self = this;
        self.validation_messages = {
            'username': [
                { type: 'required', message: 'Username is required' },
                { type: 'minlength', message: 'Username must be at least 5 characters long' },
                { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
                { type: 'pattern', message: 'Username must contain only numbers and letters' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' }
            ]
        };
        self.loginForm = self.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(25)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])]
        }, { updatedOn: 'blur' });
    };
    LoginPage.prototype.goToForgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_module__["e" /* ForgotPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () { };
    LoginPage.prototype.ngOnInit = function () {
        var self = this;
        self.buildForm();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var self = this;
        self.submitAttempt = true;
        var toast = self.toastController.create({
            duration: 5000,
            position: 'bottom'
        });
        if (self.loginForm.valid) {
            var loader_1 = self.loadingController.create({
                showBackdrop: false,
                spinner: 'dots'
            });
            var creds_1 = self.loginForm.value;
            loader_1.present()
                .then(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, self.businessService.signIn(creds_1)
                                .then(function (resp) {
                                self.loginForm.reset();
                                loader_1.dismiss();
                            })
                                .then(function () {
                                self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_module__["f" /* HomePage */]);
                            })
                                .catch(function (error) {
                                console.log('error', error);
                                loader_1.dismiss();
                                toast.setMessage(error.message);
                                toast.present();
                            })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }, function () {
                loader_1.dismiss();
            });
        }
        else {
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/dromazmj/Documents/studer/src/pages/login/login.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="loginForm">\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input formControlName="username" type="text" autocapitalize="none"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!loginForm.controls[\'username\'].valid && loginForm.controls[\'username\'].errors && loginForm.controls[\'username\'].touched">\n      <p class="error" *ngIf="loginForm.controls[\'username\'].errors.required">{{ validation_messages.username[0].message }}</p>\n      <p class="error" *ngIf="loginForm.controls[\'username\'].errors.minlength">{{ validation_messages.username[1].message }}</p>\n      <p class="error" *ngIf="loginForm.controls[\'username\'].errors.maxlength">{{ validation_messages.username[2].message }}</p>\n    </ion-item>\n    <show-hide-container>\n      <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password" formControlName="password" show-hide-input></ion-input>\n      </ion-item>\n    </show-hide-container>\n    <ion-item *ngIf="!loginForm.controls[\'password\'].valid && loginForm.controls[\'password\'].errors && loginForm.controls[\'password\'].touched">\n      <p class="error" *ngIf="loginForm.controls[\'password\'].errors.required">{{ validation_messages.password[0].message }}</p>\n    </ion-item>\n    <div padding>\n      <button ion-button block color="primary" class="login" (click)="login()" [disabled]="!loginForm.valid">Login</button>\n    </div>\n    <div text-right>\n      <button ion-button clear color="primary" (click)="goToForgot()">Forgot password?</button>\n    </div>\n  </form>\n</ion-content>\n`/*ion-inline-end:"/Users/dromazmj/Documents/studer/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__common_common_module__["a" /* BusinessService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_common_module__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_google_libphonenumber__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_google_libphonenumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_google_libphonenumber__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_module__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = (function () {
    function SignupPage(businessService, fb, loadingController, toastController, navCtrl, navParams) {
        this.businessService = businessService;
        this.fb = fb;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.brConfig = {};
        this.countries = [];
        this.dial_code = '';
        this.phoneUtil = __WEBPACK_IMPORTED_MODULE_4_google_libphonenumber___default.a.PhoneNumberUtil.getInstance();
        this.PNF = __WEBPACK_IMPORTED_MODULE_4_google_libphonenumber___default.a.PhoneNumberFormat;
        this.PNT = __WEBPACK_IMPORTED_MODULE_4_google_libphonenumber___default.a.PhoneNumberType;
        this.submitAttempt = false;
    }
    SignupPage.prototype.buildForm = function () {
        var self = this;
        self.loadCountries();
        self.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'email', message: 'Enter a valid email' }
            ],
            'username': [
                { type: 'required', message: 'Username is required' },
                { type: 'minlength', message: 'Username must be at least 5 characters long' },
                { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
                { type: 'pattern', message: 'Username must contain only numbers and letters' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password must be at least 5 characters long' },
                { type: 'pattern', message: 'Password must contain at least one uppercase, one lowercase and one number' }
            ],
            'confirmPassword': [
                { type: 'required', message: 'Confirm password is required' },
                { type: 'validateEqual', message: 'Password mismatch' }
            ],
            'given_name': [
                { type: 'required', message: 'First name is required' },
                { type: 'pattern', message: 'First name must contain only alpha characters' },
                { type: 'minlength', message: 'First name must be at least 2 characters long' },
                { type: 'maxlength', message: 'First name cannot be more than 30 characters long' }
            ],
            "family_name": [
                { type: 'required', message: 'Last name is required' },
                { type: 'pattern', message: 'Last name must contain only alpha characters' },
                { type: 'minlength', message: 'Last name must be at least 2 characters long' },
                { type: 'maxlength', message: 'Last name cannot be more than 30 characters long' }
            ],
            'birthdate': [
                { type: 'required', message: 'Birthdate is required' }
            ],
            'country_code__c': [
                { type: 'required', message: 'Country is required' }
            ],
            'phone_number': [
                { type: 'required', message: 'Phone is required' },
                { type: 'validCountryPhone', message: 'Phone is incorrect for the country selected' }
            ]
        };
        var initial_country = self.countries[0];
        var country_code = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](initial_country.code, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]));
        self.dial_code = '+' + self.phoneUtil.getCountryCodeForRegion(initial_country.code);
        self.country_example_number = self.phoneUtil.getExampleNumberForType(initial_country.code, self.PNT.MOBILE);
        self.example_number_formatted = self.phoneUtil.format(self.country_example_number, self.PNF.NATIONAL);
        self.brConfig.mask = self.example_number_formatted;
        self.signupForm = self.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].email])],
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(5)])],
            given_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(30)])],
            family_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(30)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            birthdate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            country_code__c: country_code,
            phone_number: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__common_common_module__["d" /* PhoneValidator */].validCountryPhone(country_code)])]
        });
    };
    SignupPage.prototype.goToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_module__["g" /* LoginPage */]);
    };
    SignupPage.prototype.ionViewDidLoad = function () { };
    SignupPage.prototype.loadCountries = function () {
        var self = this;
        var us = { id: 232, code: 'US', dial_code: '+1', flag: null, name: 'United States', sortOrder: 0 };
        var ca = { id: 70, code: 'CA', dial_code: '+1', flag: null, name: 'Canada', sortOrder: 1 };
        var mx = { id: 156, code: 'MX', dial_code: '+52', flag: null, name: 'Mexico', sortOrder: 2 };
        self.countries.push(us);
        self.countries.push(ca);
        self.countries.push(mx);
    };
    SignupPage.prototype.ngOnInit = function () {
        var self = this;
        self.buildForm();
    };
    SignupPage.prototype.onSelect = function ($event) {
        var self = this;
        self.signupForm.controls['phone_number'].reset();
        self.dial_code = '+' + self.phoneUtil.getCountryCodeForRegion($event);
        self.country_example_number = self.phoneUtil.getExampleNumberForType($event, self.PNT.MOBILE);
        self.example_number_formatted = self.phoneUtil.format(this.country_example_number, self.PNF.NATIONAL);
        self.brConfig.mask = self.example_number_formatted;
    };
    SignupPage.prototype.signUp = function () {
        console.log('signup form', this.signupForm);
        var self = this;
        self.submitAttempt = true;
        var toast = this.toastController.create({
            duration: 5000,
            position: 'bottom'
        });
        if (self.signupForm.valid) {
            var loader_1 = self.loadingController.create({
                showBackdrop: false,
                spinner: 'dots'
            });
            var creds_1 = this.signupForm.value;
            creds_1.phone_number = self.phoneUtil.format(self.phoneUtil.parse(creds_1.phone_number, creds_1.country_code__c), self.PNF.E164);
            loader_1.present()
                .then(function () {
                loader_1.dismiss();
                self.businessService.signUp(creds_1)
                    .then(function (data) {
                    console.log("signupresult user data returned successful", data);
                    self.businessService.signIn(creds_1)
                        .then(function (user) {
                        loader_1.dismiss();
                        self.signupForm.reset();
                        self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_module__["f" /* HomePage */]);
                    }).catch(function (err) {
                        loader_1.dismiss();
                        console.log('signIn error happened..', err);
                        if (err.code === 'UserNotConfirmedException') {
                            self.signupForm.reset();
                            self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_module__["h" /* SignupconfirmPage */]);
                        }
                    });
                }).catch(function (err) {
                    toast.setMessage(err.message);
                    toast.setCssClass('dangerToast');
                    toast.present();
                    loader_1.dismiss();
                });
            }, function () {
                loader_1.dismiss();
            });
        }
        else {
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/dromazmj/Documents/studer/src/pages/signup/signup.html"*/`\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="signupForm">\n    <ion-item>\n      <ion-label floating>First Name</ion-label>\n      <ion-input formControlName="given_name" type="text"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!signupForm.controls[\'given_name\'].valid && signupForm.controls[\'given_name\'].errors && signupForm.controls[\'given_name\'].touched">\n      <p class="error" *ngIf="signupForm.controls[\'given_name\'].errors.required">{{ validation_messages.given_name[0].message }}</p>\n      <p class="error" *ngIf="signupForm.controls[\'given_name\'].errors.pattern">{{ validation_messages.given_name[1].message }}</p>\n      <p class="error" *ngIf="signupForm.controls[\'given_name\'].errors.minlength">{{ validation_messages.given_name[2].message }}</p>\n      <p class="error" *ngIf="signupForm.controls[\'given_name\'].errors.maxlength">{{ validation_messages.given_name[3].message }}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Last Name</ion-label>\n      <ion-input formControlName="family_name" type="text"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!signupForm.controls[\'family_name\'].valid && signupForm.controls[\'family_name\'].errors && signupForm.controls[\'family_name\'].touched">\n      <p class="error" *ngIf="signupForm.controls[\'family_name\'].errors.required">{{ validation_messages.family_name[0].message }}</p>\n      <p class="error" *ngIf="signupForm.controls[\'family_name\'].errors.pattern">{{ validation_messages.family_name[1].message }}</p>\n      <p class="error" *ngIf="signupForm.controls[\'family_name\'].errors.minlength">{{ validation_messages.family_name[2].message }}</p>\n      <p class="error" *ngIf="signupForm.controls[\'family_name\'].errors.maxlength">{{ validation_messages.family_name[3].message }}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input formControlName="username" type="text" autocapitalize="none"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!signupForm.controls[\'username\'].valid && signupForm.controls[\'username\'].errors && signupForm.controls[\'username\'].touched">\n      <p class="error" *ngIf="signupForm.controls[\'username\'].errors.required">{{ validation_messages.username[0].message }}</p>\n      <p class="error" *ngIf="signupForm.controls[\'username\'].errors.pattern">{{ validation_messages.username[1].message }}</p>\n      <p class="error" *ngIf="signupForm.controls[\'username\'].errors.minlength">{{ validation_messages.username[2].message }}</p>\n      <p class="error" *ngIf="signupForm.controls[\'username\'].errors.maxlength">{{ validation_messages.username[3].message }}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input formControlName="email" type="email"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!signupForm.controls[\'email\'].valid && signupForm.controls[\'email\'].errors && signupForm.controls[\'email\'].touched">\n      <p class="error" *ngIf="signupForm.controls[\'email\'].errors.required">{{ validation_messages.email[0].message }}</p>\n      <p class="error" *ngIf="signupForm.controls[\'email\'].errors.email">{{ validation_messages.email[1].message }}</p>\n    </ion-item>\n    <phone-number formControlName="phone_number" [countries]="countries" [countryCode]="signupForm.controls[\'country_code__c\']"></phone-number>\n    <ion-item *ngIf="!signupForm.controls[\'phone_number\'].valid && signupForm.controls[\'phone_number\'].errors && signupForm.controls[\'phone_number\'].touched">\n      <p class="error" *ngIf="signupForm.controls[\'phone_number\'].errors.required">{{ validation_messages.phone_number[0].message }}</p>\n      <p class="error" *ngIf="signupForm.controls[\'phone_number\'].errors.validCountryPhone">{{ validation_messages.phone_number[1].message }}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Birthday</ion-label>\n      <ion-datetime formControlName="birthdate" displayFormat="MM/DD/YYYY"></ion-datetime>\n    </ion-item>\n    <ion-item *ngIf="!signupForm.controls[\'birthdate\'].valid && signupForm.controls[\'birthdate\'].errors && signupForm.controls[\'birthdate\'].touched">\n      <p class="error" *ngIf="signupForm.controls[\'birthdate\'].errors.required">{{ validation_messages.birthdate[0].message }}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input formControlName="password" type="password" validateEqual="confirmPassword" reverse="true"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!signupForm.controls[\'password\'].valid && signupForm.controls[\'password\'].errors && signupForm.controls[\'password\'].touched">\n      <p class="error" *ngIf="signupForm.controls[\'password\'].errors.required">{{ validation_messages.password[0].message }}</p>\n      <p class="error" *ngIf="signupForm.controls[\'password\'].errors.minlength">{{ validation_messages.password[1].message }}</p>\n      <p class="error" *ngIf="signupForm.controls[\'password\'].errors.pattern">{{ validation_messages.password[2].message }}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Confirm Password</ion-label>\n      <ion-input formControlName="confirmPassword" type="password" validateEqual="password" reverse="false"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!signupForm.controls[\'confirmPassword\'].valid && signupForm.controls[\'confirmPassword\'].errors && signupForm.controls[\'confirmPassword\'].touched">\n      <p class="error" *ngIf="signupForm.controls[\'confirmPassword\'].errors.required">{{ validation_messages.confirmPassword[0].message }}</p>\n      <p class="error" *ngIf="signupForm.controls[\'confirmPassword\'].errors.validateEqual">{{ validation_messages.confirmPassword[1].message }}</p>\n    </ion-item>\n    <div padding>\n      <button ion-button block color="primary" class="signup" (click)="signUp()" [disabled]="!signupForm.valid">Sign Up</button>\n    </div>\n    <div padding text-center>\n      Already a member?\n      <a (click)=\'goToLogin()\'>\n        <strong>\n          Login\n        </strong>\n      </a>\n    </div>\n  </form>\n</ion-content>\n`/*ion-inline-end:"/Users/dromazmj/Documents/studer/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__common_common_module__["a" /* BusinessService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 210,
	"./af.js": 210,
	"./ar": 211,
	"./ar-dz": 212,
	"./ar-dz.js": 212,
	"./ar-kw": 213,
	"./ar-kw.js": 213,
	"./ar-ly": 214,
	"./ar-ly.js": 214,
	"./ar-ma": 215,
	"./ar-ma.js": 215,
	"./ar-sa": 216,
	"./ar-sa.js": 216,
	"./ar-tn": 217,
	"./ar-tn.js": 217,
	"./ar.js": 211,
	"./az": 218,
	"./az.js": 218,
	"./be": 219,
	"./be.js": 219,
	"./bg": 220,
	"./bg.js": 220,
	"./bm": 221,
	"./bm.js": 221,
	"./bn": 222,
	"./bn.js": 222,
	"./bo": 223,
	"./bo.js": 223,
	"./br": 224,
	"./br.js": 224,
	"./bs": 225,
	"./bs.js": 225,
	"./ca": 226,
	"./ca.js": 226,
	"./cs": 227,
	"./cs.js": 227,
	"./cv": 228,
	"./cv.js": 228,
	"./cy": 229,
	"./cy.js": 229,
	"./da": 230,
	"./da.js": 230,
	"./de": 231,
	"./de-at": 232,
	"./de-at.js": 232,
	"./de-ch": 233,
	"./de-ch.js": 233,
	"./de.js": 231,
	"./dv": 234,
	"./dv.js": 234,
	"./el": 235,
	"./el.js": 235,
	"./en-au": 236,
	"./en-au.js": 236,
	"./en-ca": 237,
	"./en-ca.js": 237,
	"./en-gb": 238,
	"./en-gb.js": 238,
	"./en-ie": 239,
	"./en-ie.js": 239,
	"./en-il": 240,
	"./en-il.js": 240,
	"./en-nz": 241,
	"./en-nz.js": 241,
	"./eo": 242,
	"./eo.js": 242,
	"./es": 243,
	"./es-do": 244,
	"./es-do.js": 244,
	"./es-us": 245,
	"./es-us.js": 245,
	"./es.js": 243,
	"./et": 246,
	"./et.js": 246,
	"./eu": 247,
	"./eu.js": 247,
	"./fa": 248,
	"./fa.js": 248,
	"./fi": 249,
	"./fi.js": 249,
	"./fo": 250,
	"./fo.js": 250,
	"./fr": 251,
	"./fr-ca": 252,
	"./fr-ca.js": 252,
	"./fr-ch": 253,
	"./fr-ch.js": 253,
	"./fr.js": 251,
	"./fy": 254,
	"./fy.js": 254,
	"./gd": 255,
	"./gd.js": 255,
	"./gl": 256,
	"./gl.js": 256,
	"./gom-latn": 257,
	"./gom-latn.js": 257,
	"./gu": 258,
	"./gu.js": 258,
	"./he": 259,
	"./he.js": 259,
	"./hi": 260,
	"./hi.js": 260,
	"./hr": 261,
	"./hr.js": 261,
	"./hu": 262,
	"./hu.js": 262,
	"./hy-am": 263,
	"./hy-am.js": 263,
	"./id": 264,
	"./id.js": 264,
	"./is": 265,
	"./is.js": 265,
	"./it": 266,
	"./it.js": 266,
	"./ja": 267,
	"./ja.js": 267,
	"./jv": 268,
	"./jv.js": 268,
	"./ka": 269,
	"./ka.js": 269,
	"./kk": 270,
	"./kk.js": 270,
	"./km": 271,
	"./km.js": 271,
	"./kn": 272,
	"./kn.js": 272,
	"./ko": 273,
	"./ko.js": 273,
	"./ky": 274,
	"./ky.js": 274,
	"./lb": 275,
	"./lb.js": 275,
	"./lo": 276,
	"./lo.js": 276,
	"./lt": 277,
	"./lt.js": 277,
	"./lv": 278,
	"./lv.js": 278,
	"./me": 279,
	"./me.js": 279,
	"./mi": 280,
	"./mi.js": 280,
	"./mk": 281,
	"./mk.js": 281,
	"./ml": 282,
	"./ml.js": 282,
	"./mn": 283,
	"./mn.js": 283,
	"./mr": 284,
	"./mr.js": 284,
	"./ms": 285,
	"./ms-my": 286,
	"./ms-my.js": 286,
	"./ms.js": 285,
	"./mt": 287,
	"./mt.js": 287,
	"./my": 288,
	"./my.js": 288,
	"./nb": 289,
	"./nb.js": 289,
	"./ne": 290,
	"./ne.js": 290,
	"./nl": 291,
	"./nl-be": 292,
	"./nl-be.js": 292,
	"./nl.js": 291,
	"./nn": 293,
	"./nn.js": 293,
	"./pa-in": 294,
	"./pa-in.js": 294,
	"./pl": 295,
	"./pl.js": 295,
	"./pt": 296,
	"./pt-br": 297,
	"./pt-br.js": 297,
	"./pt.js": 296,
	"./ro": 298,
	"./ro.js": 298,
	"./ru": 299,
	"./ru.js": 299,
	"./sd": 300,
	"./sd.js": 300,
	"./se": 301,
	"./se.js": 301,
	"./si": 302,
	"./si.js": 302,
	"./sk": 303,
	"./sk.js": 303,
	"./sl": 304,
	"./sl.js": 304,
	"./sq": 305,
	"./sq.js": 305,
	"./sr": 306,
	"./sr-cyrl": 307,
	"./sr-cyrl.js": 307,
	"./sr.js": 306,
	"./ss": 308,
	"./ss.js": 308,
	"./sv": 309,
	"./sv.js": 309,
	"./sw": 310,
	"./sw.js": 310,
	"./ta": 311,
	"./ta.js": 311,
	"./te": 312,
	"./te.js": 312,
	"./tet": 313,
	"./tet.js": 313,
	"./tg": 314,
	"./tg.js": 314,
	"./th": 315,
	"./th.js": 315,
	"./tl-ph": 316,
	"./tl-ph.js": 316,
	"./tlh": 317,
	"./tlh.js": 317,
	"./tr": 318,
	"./tr.js": 318,
	"./tzl": 319,
	"./tzl.js": 319,
	"./tzm": 320,
	"./tzm-latn": 321,
	"./tzm-latn.js": 321,
	"./tzm.js": 320,
	"./ug-cn": 322,
	"./ug-cn.js": 322,
	"./uk": 323,
	"./uk.js": 323,
	"./ur": 324,
	"./ur.js": 324,
	"./uz": 325,
	"./uz-latn": 326,
	"./uz-latn.js": 326,
	"./uz.js": 325,
	"./vi": 327,
	"./vi.js": 327,
	"./x-pseudo": 328,
	"./x-pseudo.js": 328,
	"./yo": 329,
	"./yo.js": 329,
	"./zh-cn": 330,
	"./zh-cn.js": 330,
	"./zh-hk": 331,
	"./zh-hk.js": 331,
	"./zh-tw": 332,
	"./zh-tw.js": 332
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 782;

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CognitoConfig; });
var CognitoConfig = {
    region: 'us-east-1',
    userPoolId: 'us-east-1_JknViQIb0',
    appId: '6javljvcko12q97dj23ug7sck5',
    idpUrl: "cognito-idp.us-east-1.amazonaws.com",
    identityPoolId: 'us-east-1:20c803f6-d14a-4545-91ea-667374319a09'
};
//# sourceMappingURL=cognito.config.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return S3Config; });
var S3Config = {
    bucketName: 'ionic-aws-app',
    bucketRegion: 'us-east-1',
    s3_endpoint: '',
    folderLevel: 'protected',
    publicLevel: 'public'
};
//# sourceMappingURL=s3.config.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrMaskTypeOption */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelParamOptions; });
var BrMaskTypeOption;
(function (BrMaskTypeOption) {
    BrMaskTypeOption["ALFA"] = "alfa";
    BrMaskTypeOption["NUM"] = "num";
    BrMaskTypeOption["ALL"] = "all";
})(BrMaskTypeOption || (BrMaskTypeOption = {}));
;
var ModelParamOptions;
(function (ModelParamOptions) {
    ModelParamOptions["CANCEL"] = "cancel";
    ModelParamOptions["SAVE"] = "save";
})(ModelParamOptions || (ModelParamOptions = {}));
//# sourceMappingURL=common.interface.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_google_libphonenumber__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_google_libphonenumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_google_libphonenumber__);

var PhoneValidator = (function () {
    function PhoneValidator() {
    }
    PhoneValidator.validCountryPhone = function (c) {
        var subscribe = false;
        return function (p) {
            if (!subscribe) {
                subscribe = true;
                c.valueChanges.subscribe(function () {
                    p.updateValueAndValidity();
                });
            }
            if (p.value !== '') {
                try {
                    var util = __WEBPACK_IMPORTED_MODULE_0_google_libphonenumber___default.a.PhoneNumberUtil.getInstance();
                    var phoneNumber = '' + p.value + '', region = c.value, number = util.parse(phoneNumber, region), isValidNumber = util.isValidNumber(number);
                    if (isValidNumber) {
                        return null;
                    }
                }
                catch (err) {
                    return {
                        validCountryPhone: true
                    };
                }
                return {
                    validCountryPhone: true
                };
            }
            else {
                return null;
            }
        };
    };
    ;
    return PhoneValidator;
}());

//# sourceMappingURL=phone.validator.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pages_module__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_common_module__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var MyApp = (function () {
    function MyApp(businessService, platform, statusBar, splashScreen) {
        var _this = this;
        this.businessService = businessService;
        platform.ready().then(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Okay, so the platform is ready and our plugins are available.
                        // Here you can do any higher level native things you might need.
                        statusBar.styleDefault();
                        splashScreen.hide();
                        return [4 /*yield*/, this.businessService.checkAuthorization()];
                    case 1:
                        _a.sent();
                        if (this.businessService.authUser.authenticated && this.businessService.authUser.cognitoUser) {
                            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
                        }
                        else {
                            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_pages_module__["i" /* WelcomePage */];
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/dromazmj/Documents/studer/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/Users/dromazmj/Documents/studer/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__common_common_module__["a" /* BusinessService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_brmasker_ionic_3__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__show_hide_password_show_hide_container__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__show_hide_password_show_hide_input__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__phone_number_phone_number__ = __webpack_require__(828);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__show_hide_password_show_hide_input__["a" /* ShowHideInput */],
                __WEBPACK_IMPORTED_MODULE_3__show_hide_password_show_hide_container__["a" /* ShowHideContainer */],
                __WEBPACK_IMPORTED_MODULE_5__phone_number_phone_number__["a" /* PhoneNumberComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2_brmasker_ionic_3__["b" /* BrMaskerModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__show_hide_password_show_hide_input__["a" /* ShowHideInput */],
                __WEBPACK_IMPORTED_MODULE_3__show_hide_password_show_hide_container__["a" /* ShowHideContainer */],
                __WEBPACK_IMPORTED_MODULE_5__phone_number_phone_number__["a" /* PhoneNumberComponent */],
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowHideContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__show_hide_input__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowHideContainer = (function () {
    function ShowHideContainer() {
        this.show = false;
    }
    ShowHideContainer.prototype.toggleShow = function () {
        this.show = !this.show;
        if (this.show) {
            this.input.changeType("text");
        }
        else {
            this.input.changeType("password");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_1__show_hide_input__["a" /* ShowHideInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__show_hide_input__["a" /* ShowHideInput */])
    ], ShowHideContainer.prototype, "input", void 0);
    ShowHideContainer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'show-hide-container',template:/*ion-inline-start:"/Users/dromazmj/Documents/studer/src/components/show-hide-password/show-hide-password.html"*/`<ng-content></ng-content>\n<a class="type-toggle" (click)="toggleShow()">\n	<ion-icon class="show-option" [hidden]="show" name="eye"></ion-icon>\n	<ion-icon class="hide-option" [hidden]="!show" name="eye-off"></ion-icon>\n</a>`/*ion-inline-end:"/Users/dromazmj/Documents/studer/src/components/show-hide-password/show-hide-password.html"*/,
            host: {
                'class': 'show-hide-password'
            }
        }),
        __metadata("design:paramtypes", [])
    ], ShowHideContainer);
    return ShowHideContainer;
}());

//# sourceMappingURL=show-hide-container.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneNumberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_brmasker_ionic_3__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_google_libphonenumber__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_google_libphonenumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_google_libphonenumber__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PhoneNumberComponent = (function () {
    function PhoneNumberComponent(elementRef) {
        this.elementRef = elementRef;
        this.brConfig = {};
        this.dial_code = '';
        this.util = __WEBPACK_IMPORTED_MODULE_3_google_libphonenumber___default.a.PhoneNumberUtil.getInstance();
        this.PNF = __WEBPACK_IMPORTED_MODULE_3_google_libphonenumber___default.a.PhoneNumberFormat;
        this.PNT = __WEBPACK_IMPORTED_MODULE_3_google_libphonenumber___default.a.PhoneNumberType;
        this.onChange = function (phoneNumber) { };
        this.onTouch = function () { };
        this.countryCodeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.disabled = false;
    }
    PhoneNumberComponent_1 = PhoneNumberComponent;
    PhoneNumberComponent.prototype.ngOnChanges = function (changes) {
        // console.log(changes);
    };
    PhoneNumberComponent.prototype.ngOnInit = function () {
        var self = this;
        if (self.countryCode) {
            self.country_code = self.countryCode.value;
        }
        self.country_code = self.country_code == undefined || '' ? 'US' : self.country_code;
        self.dial_code = '+' + self.util.getCountryCodeForRegion(self.country_code);
        self.country_example_number = self.util.getExampleNumberForType(self.country_code, self.PNT.MOBILE);
        self.example_number_formatted = self.util.format(self.country_example_number, self.PNF.NATIONAL);
        self.brConfig.mask = self.example_number_formatted;
        self.phoneNumber = self.phoneNumber == '' ? '' : self.phoneNumber;
    };
    PhoneNumberComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        self.telinput.writeValue(self.phoneNumber);
    };
    PhoneNumberComponent.prototype.onIonBlur = function (ev) {
        this.writeValue(ev._value);
        this.onTouch();
    };
    PhoneNumberComponent.prototype.onIonChange = function (ev) {
        this.writeValue(ev._value);
        this.onTouch();
    };
    PhoneNumberComponent.prototype.onSelect = function ($event) {
        var self = this;
        self.countryCodeChange.emit($event);
        self.country_code = $event;
        self.dial_code = '+' + self.util.getCountryCodeForRegion(self.country_code);
        self.country_example_number = self.util.getExampleNumberForType(self.country_code, self.PNT.MOBILE);
        self.example_number_formatted = self.util.format(self.country_example_number, self.PNF.NATIONAL);
        self.brConfig.mask = self.example_number_formatted;
        if (self.countryCode) {
            self.countryCode.setValue($event, { onlySelf: true, emitEvent: true, emitModelToViewChange: true });
            self.countryCode.markAsTouched();
            self.countryCode.markAsDirty();
        }
        self.telinput.writeValue('');
    };
    PhoneNumberComponent.prototype.writeValue = function (value) {
        this.onChange(value);
        this.phoneNumber = value;
    };
    PhoneNumberComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PhoneNumberComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    PhoneNumberComponent.prototype.setDisabledState = function (disabled) {
        this.disabled = disabled;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], PhoneNumberComponent.prototype, "countries", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */])
    ], PhoneNumberComponent.prototype, "countryCode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PhoneNumberComponent.prototype, "countryCodeChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], PhoneNumberComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('telinput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* TextInput */])
    ], PhoneNumberComponent.prototype, "telinput", void 0);
    PhoneNumberComponent = PhoneNumberComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            host: {
                '(input)': 'onChange',
                '(ionBlur)': 'onTouched'
            },
            selector: 'phone-number',template:/*ion-inline-start:"/Users/dromazmj/Documents/studer/src/components/phone-number/phone-number.html"*/`<ion-item>\n    <ion-label floating>Phone</ion-label>\n    <ion-select [(ngModel)]="country_code" (ionChange)="onSelect($event)">\n        <ion-option *ngFor="let c of countries" [value]="c.code">\n        {{ c.name }}\n        </ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <span item-content padding-right>{{ dial_code }}</span>\n    <ion-input #telinput type="tel" [(ngModel)]="phone_number" [placeholder]="example_number_formatted" [brmasker]="brConfig" \n              (ionBlur)="onIonBlur($event)" (ionChange)="onIonChange($event)"></ion-input>\n  </ion-item>\n  `/*ion-inline-end:"/Users/dromazmj/Documents/studer/src/components/phone-number/phone-number.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2_brmasker_ionic_3__["a" /* BrMaskerIonic3 */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALUE_ACCESSOR */], useExisting: PhoneNumberComponent_1, multi: true }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], PhoneNumberComponent);
    return PhoneNumberComponent;
    var PhoneNumberComponent_1;
}());

//# sourceMappingURL=phone-number.js.map

/***/ }),

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moment_moment__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phonemask_phonemask__ = __webpack_require__(395);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__moment_moment__["a" /* MomentPipe */],
                __WEBPACK_IMPORTED_MODULE_2__phonemask_phonemask__["a" /* PhoneMaskPipe */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__moment_moment__["a" /* MomentPipe */],
                __WEBPACK_IMPORTED_MODULE_2__phonemask_phonemask__["a" /* PhoneMaskPipe */]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var ValidatorService = (function () {
    function ValidatorService(prior) {
        if (prior) {
            return prior;
        }
    }
    ValidatorService.ValidateEmail = function (c) {
        // RFC 2822 compliant regex
        return (c.value && c.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) ? null : { 'email': true };
    };
    ValidatorService.ValidatePhone = function (c) {
        var regEx = /^((\+\d{1,2}|1)[\s.-]?)?\(?[2-9](?!11)\d{2}\)?[\s.-]?\d{3}[\s.-]?\d{4}$|^$/;
        if (c.value && regEx.test(c.value)) {
            return null;
        }
        else {
            return { 'invalidPhoneNumber': true };
        }
    };
    ValidatorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* SkipSelf */])()),
        __metadata("design:paramtypes", [ValidatorService])
    ], ValidatorService);
    return ValidatorService;
}());

//# sourceMappingURL=validator.service.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CognitoException; });
/* unused harmony export CognitoProfile */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CognitoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aws_sdk__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aws_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_aws_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_amazon_cognito_identity_js__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cognito_config__ = __webpack_require__(794);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var AuthUser = (function () {
    function AuthUser() {
        this.identityId = '';
        this.authenticated = false;
    }
    AuthUser.Factory = function () {
        return new AuthUser();
    };
    AuthUser.prototype.set = function (values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    };
    return AuthUser;
}());

;
var CognitoException = (function () {
    function CognitoException(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return CognitoException;
}());

var CognitoProfile = (function () {
    function CognitoProfile(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    CognitoProfile.Factory = function () {
        var init = { sub: '' };
        return new CognitoProfile(init);
    };
    return CognitoProfile;
}());

var CognitoService = (function () {
    function CognitoService(prior, storage) {
        this.storage = storage;
        this.config = __WEBPACK_IMPORTED_MODULE_8__cognito_config__["a" /* CognitoConfig */];
        this.signInSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.signOutSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        if (prior) {
            return prior;
        }
        if (this.config.region === 'your-region') {
            throw new Error("Cognito service has not been configured properly. Please refer to the README file for more details.");
        }
        __WEBPACK_IMPORTED_MODULE_5_aws_sdk__["config"].region = this.config.region;
        __WEBPACK_IMPORTED_MODULE_5_aws_sdk__["config"].credentials = new __WEBPACK_IMPORTED_MODULE_5_aws_sdk__["CognitoIdentityCredentials"]({
            IdentityPoolId: this.config.identityPoolId
        });
        this.poolData = { UserPoolId: this.config.userPoolId, ClientId: this.config.appId };
        this.userPool = new __WEBPACK_IMPORTED_MODULE_7_amazon_cognito_identity_js__["d" /* CognitoUserPool */](this.poolData);
        this.user = AuthUser.Factory();
    }
    CognitoService.prototype.authDetails = function (creds) {
        return new __WEBPACK_IMPORTED_MODULE_7_amazon_cognito_identity_js__["a" /* AuthenticationDetails */]({ Username: creds.username, Password: creds.password });
    };
    CognitoService.prototype.buildCreds = function () {
        var self = this;
        var json = self.buildLogins(self.session.getIdToken().getJwtToken());
        return new __WEBPACK_IMPORTED_MODULE_5_aws_sdk__["CognitoIdentityCredentials"](json);
    };
    CognitoService.prototype.buildLogins = function (token) {
        var self = this;
        var key = self.config.idpUrl + "/" + self.config.userPoolId;
        var json = { IdentityPoolId: self.config.identityPoolId, Logins: {} };
        json.Logins[key] = token;
        return json;
    };
    CognitoService.prototype.buildSocialLogins = function (key, authResult) {
        var self = this;
        var json = { IdentityPoolId: self.config.identityPoolId, Logins: {} };
        if (key === 'graph.facebook.com') {
            json.Logins[key] = authResult.accessToken;
        }
        return json;
    };
    CognitoService.prototype.buildLinkedLogins = function (identityId, token) {
        var self = this;
        var json = { IdentityPoolId: self.config.identityPoolId, IdentityId: identityId,
            Logins: {} };
        var key = 'cognito-identity.amazonaws.com';
        json.Logins[key] = token;
        return json;
    };
    CognitoService.prototype.changePassword = function (oldPassword, newPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var self;
            return __generator(this, function (_a) {
                self = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        try {
                            if (self.cognitoUser != null) {
                                try {
                                    self.cognitoUser.changePassword(oldPassword, newPassword, function (err, result) {
                                        if (err) {
                                            reject(self.handleError(err, 'changePassword'));
                                        }
                                        else {
                                            resolve(result);
                                        }
                                    });
                                }
                                catch (error) {
                                    reject(self.handleError(error, 'try/catch changePassword'));
                                }
                            }
                            else {
                                reject(self.handleError(new Error('cognitoUser was null'), 'deleteUser'));
                            }
                        }
                        catch (error) {
                            reject(self.handleError(error, 'try/catch changePassword'));
                        }
                    })];
            });
        });
    };
    CognitoService.prototype.confirmPassword = function (username, verificationCode, password) {
        var self = this;
        var userData = {
            Username: username,
            Pool: self.userPool
        };
        var cognitoUser = new __WEBPACK_IMPORTED_MODULE_7_amazon_cognito_identity_js__["b" /* CognitoUser */](userData);
        return new Promise(function (resolve, reject) {
            try {
                cognitoUser.confirmPassword(verificationCode, password, {
                    onFailure: function (err) {
                        reject(self.handleError(err, 'confirmPassword'));
                    },
                    onSuccess: function () {
                        resolve('Confirm Password SUCCESS');
                    }
                });
            }
            catch (error) {
                reject(self.handleError(error, 'try/catch confirmPassword'));
            }
        });
    };
    CognitoService.prototype.confirmRegistration = function (code) {
        var _this = this;
        var self = this;
        var userData = {
            Username: self.cognitoUser.getUsername(),
            Pool: self.userPool
        };
        var cognitoUser = new __WEBPACK_IMPORTED_MODULE_7_amazon_cognito_identity_js__["b" /* CognitoUser */](userData);
        return new Promise(function (resolve, reject) {
            try {
                cognitoUser.confirmRegistration(code, true, function (err, result) {
                    if (err) {
                        var exception = self.handleError(err, 'confirmRegistration'); // new CognitoException(err);
                        reject(exception);
                    }
                    else {
                        console.log('confirm registration successful', result);
                        resolve(result);
                    }
                });
            }
            catch (error) {
                var exception = _this.handleError(error, 'try/catch confirmRegistration'); //new CognitoException(error);
                reject(exception);
            }
        });
    };
    CognitoService.prototype.deleteUser = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self.cognitoUser != null) {
                try {
                    self.cognitoUser.deleteUser(function (err, result) {
                        if (err) {
                            // let exception: ICognitoException = this.handleError(err,'deleteUser');//new CognitoException(err);
                            // console.log('Error deleting Cognito User', exception);
                            reject(self.handleError(err, 'deleteUser'));
                        }
                        // console.log('Cognito User deletion result', result);
                        resolve(result);
                    });
                }
                catch (error) {
                    // let exception: ICognitoException = this.handleError(error,'try/catch deleteUser');//new CognitoException(error);
                    reject(self.handleError(error, 'try/catch deleteUser'));
                }
            }
            else {
                reject(self.handleError(new Error('cognitoUser was null'), 'deleteUser'));
            }
        });
    };
    CognitoService.prototype.forgotPassword = function (username) {
        var self = this;
        var userData = {
            Username: username,
            Pool: self.userPool
        };
        var cognitoUser = new __WEBPACK_IMPORTED_MODULE_7_amazon_cognito_identity_js__["b" /* CognitoUser */](userData);
        return new Promise(function (resolve, reject) {
            try {
                cognitoUser.forgotPassword({
                    onFailure: function (err) {
                        // let exception: ICognitoException = self.handleError(err,'forgotPassword');//new CognitoException(err);
                        reject(self.handleError(err, 'forgotPassword'));
                    },
                    onSuccess: function () {
                        resolve('Verification Code Sent');
                    },
                    inputVerificationCode: function () {
                        resolve('Verification Code Sent');
                    }
                });
            }
            catch (error) {
                // let exception: ICognitoException = self.handleError(error,'try/catch forgotPassword');//new CognitoException(error);
                reject(self.handleError(error, 'try/catch forgotPassword'));
            }
        });
    };
    CognitoService.prototype.getAWSCredentials = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                __WEBPACK_IMPORTED_MODULE_5_aws_sdk__["config"].credentials.get(function (err) {
                    if (err) {
                        return reject(err);
                    }
                    // console.log({'aws_credentials': AWS.config.credentials});
                    resolve(__WEBPACK_IMPORTED_MODULE_5_aws_sdk__["config"].credentials);
                });
            }
            catch (error) {
                var exception = _this.handleError(error, 'try/catch getAWSCredentials'); //new CognitoException(error);
                reject(exception);
            }
        });
    };
    CognitoService.prototype.getCredentials = function () {
        var result = null;
        if (this.cognitoUser === null) {
            result = this.getAWSCredentials();
        }
        else if (this.session && this.session.isValid()) {
            result = this.getAWSCredentials();
        }
        else {
            result = this.refreshSession().
                then(this.getAWSCredentials);
        }
        //return Observable.from(result);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromPromise(result);
    };
    CognitoService.prototype.getCognitoUser = function (creds) {
        var self = this;
        var _cognitoUser = new __WEBPACK_IMPORTED_MODULE_7_amazon_cognito_identity_js__["b" /* CognitoUser */]({ Username: creds.username, Pool: self.userPool });
        return _cognitoUser;
    };
    CognitoService.prototype.getCognitoAttributes = function (profile) {
        var cognitoAttributes = [];
        for (var key in profile) {
            if (!key.includes('password') && !key.includes('confirmPassword')) {
                var attribute = void 0;
                if (key.includes('username')) {
                    attribute = new __WEBPACK_IMPORTED_MODULE_7_amazon_cognito_identity_js__["c" /* CognitoUserAttribute */]({ Name: 'preferred_username', Value: profile[key] });
                }
                else if (key.endsWith('__c')) {
                    var k = key.substring(0, key.length - 3);
                    var name_1 = "custom:" + k;
                    attribute = new __WEBPACK_IMPORTED_MODULE_7_amazon_cognito_identity_js__["c" /* CognitoUserAttribute */]({ Name: name_1, Value: profile[key] });
                }
                else {
                    attribute = new __WEBPACK_IMPORTED_MODULE_7_amazon_cognito_identity_js__["c" /* CognitoUserAttribute */]({ Name: key, Value: profile[key] });
                }
                cognitoAttributes.push(attribute);
            }
        }
        return cognitoAttributes;
    };
    CognitoService.prototype.getCognitoAttributesData = function (profile, update) {
        var cognitoUserAttributeData = [];
        for (var key in profile) {
            if (!key.includes('password') && !key.includes('confirmPassword')) {
                var attribute = void 0;
                if (update) {
                    if (key.includes('email'))
                        continue;
                }
                if (key.includes('username')) {
                    attribute = ({ Name: 'preferred_username', Value: profile[key] });
                }
                else if (key.endsWith('__c')) {
                    var k = key.substring(0, key.length - 3);
                    // console.log(k);
                    var name_2 = "custom:" + k;
                    // console.log(name);
                    attribute = ({ Name: name_2, Value: profile[key] });
                }
                else {
                    attribute = ({ Name: key, Value: profile[key] });
                }
                cognitoUserAttributeData.push(attribute);
            }
        }
        return cognitoUserAttributeData;
    };
    CognitoService.prototype.getCognitoProfile = function (attributes) {
        var values;
        values = attributes;
        var dynObj = {
            sub: '', email: '', email_verified: false, preferred_username: ''
        };
        values.forEach(function (attr) {
            if (attr.Name.startsWith('custom:')) {
                var attributeName = attr.Name.substring(7);
                // console.log('custom attribute',attributeName);
                dynObj[attributeName] = attr.Value;
            }
            else {
                dynObj[attr.Name] = attr.Value;
            }
        });
        // console.log('dynObj', dynObj);
        var result = new CognitoProfile(dynObj);
        return result;
    };
    CognitoService.prototype.handleError = function (error, caller) {
        var exception = new CognitoException(error);
        console.error("AWS Cognito Service::handleError callerMethod::" + caller, exception);
        // this.loggerService.error(`AWS Cognito Service::handleError callerMethod::${caller}`, exception);
        return exception;
    };
    CognitoService.prototype.isAuthenticated = function () {
        var self = this;
        if (self.session) {
            return self.session.isValid();
        }
    };
    CognitoService.prototype.resendConfirmationCode = function () {
        var self = this;
        var userData = {
            Username: self.cognitoUser.getUsername(),
            Pool: self.userPool
        };
        var cognitoUser = new __WEBPACK_IMPORTED_MODULE_7_amazon_cognito_identity_js__["b" /* CognitoUser */](userData);
        return new Promise(function (resolve, reject) {
            try {
                cognitoUser.resendConfirmationCode(function (err, result) {
                    if (err) {
                        // let exception: ICognitoException = self.handleError(err,'resendConfirmationCode');
                        // console.log('error occurred while confirming registration code', exception);
                        reject(self.handleError(err, 'resendConfirmationCode'));
                    }
                    else {
                        console.log('confirm registration successful', result);
                        resolve(result);
                    }
                });
            }
            catch (error) {
                // let exception: ICognitoException = self.handleError(error,'try/catch resendConfirmationCode');//new CognitoException(error);
                reject(self.handleError(error, 'try/catch resendConfirmationCode'));
            }
        });
    };
    CognitoService.prototype.refreshCreds = function (creds) {
        var self = this;
        return new Promise(function (resolve, reject) {
            creds.refresh(function (error) {
                if (error) {
                    // let exception: ICognitoException = new CognitoException(error);
                    reject(self.handleError(error, 'refreshCreds'));
                }
                else {
                    // console.log('this is working ok');
                    resolve('creds refresh successful');
                }
            });
        });
    };
    CognitoService.prototype.refreshOrResetCreds = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self;
            return __generator(this, function (_a) {
                self = this;
                self.cognitoUser = self.userPool.getCurrentUser();
                if (self.cognitoUser !== null) {
                    self.refreshSession();
                }
                else {
                    self.resetCreds();
                }
                return [2 /*return*/];
            });
        });
    };
    CognitoService.prototype.refreshSession = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.cognitoUser.getSession(function (err, session) {
                if (err) {
                    // let exception: ICognitoException = self.handleError(err,'refreshSession');//new CognitoException(err);
                    // console.log('error refreshing user session', err);
                    // reject(exception);
                    reject(self.handleError(err, 'refreshSession'));
                }
                // Link user pool identity to federated pool identity //
                __WEBPACK_IMPORTED_MODULE_5_aws_sdk__["config"].credentials = new __WEBPACK_IMPORTED_MODULE_5_aws_sdk__["CognitoIdentityCredentials"](self.buildLogins(session.getIdToken().getJwtToken()));
                // console.log(`${new Date()} - refreshed session for ${self.cognitoUser.getUsername()}. Valid?: `, session.isValid());
                self.saveCreds(session);
                resolve(session);
            });
        });
    };
    CognitoService.prototype.resetCreds = function (clearCache) {
        if (clearCache === void 0) { clearCache = false; }
        var self = this;
        self.cognitoUser = null;
        self.unauthCreds = self.unauthCreds || new __WEBPACK_IMPORTED_MODULE_5_aws_sdk__["CognitoIdentityCredentials"]({ IdentityPoolId: self.config.identityPoolId });
        if (clearCache) {
            self.unauthCreds.clearCachedId();
        }
        // this.setCredentials(this.unauthCreds);
    };
    CognitoService.prototype.saveCreds = function (session, cognitoUser) {
        var self = this;
        if (session != null) {
            self.session = session;
            self.user.authenticated = session.isValid();
        }
        if (cognitoUser) {
            self.cognitoUser = cognitoUser;
            self.user.cognitoUser = cognitoUser;
        }
        return self.setCredentials(self.buildCreds());
    };
    CognitoService.prototype.setCognitoProfile = function (cognitoUser) {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (cognitoUser === null) {
                reject(null);
            }
            else {
                cognitoUser.getUserAttributes(function (err, result) {
                    if (err) {
                        var exception = self.handleError(err, 'setCognitoProfile');
                        reject(exception);
                    }
                    var dynObj = self.getCognitoProfile(result);
                    self.user.cognitoProfile = dynObj;
                    resolve(dynObj);
                });
            }
        });
    };
    CognitoService.prototype.setCredentials = function (creds) {
        var self = this;
        __WEBPACK_IMPORTED_MODULE_5_aws_sdk__["config"].credentials = creds;
        return new Promise(function (resolve, reject) {
            creds.get(function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    self.user.identityId = creds.identityId;
                    self.user.authCredentials = {
                        accessKeyId: creds.accessKeyId,
                        secretAccessKey: creds.secretAccessKey,
                        sessionToken: creds.sessionToken
                    };
                    __WEBPACK_IMPORTED_MODULE_5_aws_sdk__["config"].update({
                        accessKeyId: creds.accessKeyId,
                        secretAccessKey: creds.secretAccessKey,
                        sessionToken: creds.sessionToken
                    });
                    resolve(self.user);
                }
            });
        });
    };
    CognitoService.prototype.signInWithCredentials = function (authResult) {
        var _this = this;
        var self = this;
        var token;
        var identityId;
        var key = 'graph.facebook.com';
        return new Promise(function (resolve, reject) {
            var creds;
            creds = new __WEBPACK_IMPORTED_MODULE_5_aws_sdk__["CognitoIdentityCredentials"](_this.buildSocialLogins(key, authResult));
            self.setCredentials(creds)
                .then(function (user) {
                creds = new __WEBPACK_IMPORTED_MODULE_5_aws_sdk__["CognitoIdentityCredentials"](_this.buildLinkedLogins(user.identityId, user.authCredentials.sessionToken));
                resolve(user);
            })
                .catch(function (error) {
                reject(self.handleError(error, 'error setCredentials'));
            });
        });
    };
    CognitoService.prototype.signIn = function (creds) {
        var self = this;
        self.cognitoUser = self.getCognitoUser(creds);
        return new Promise(function (resolve, reject) {
            try {
                self.cognitoUser.authenticateUser(self.authDetails(creds), {
                    newPasswordRequired: function (userAttributes, requiredAttributes) {
                        self.cognitoUser.completeNewPasswordChallenge(creds.password, requiredAttributes, {
                            onSuccess: function (session) {
                                var creds;
                                creds = new __WEBPACK_IMPORTED_MODULE_5_aws_sdk__["CognitoIdentityCredentials"](self.buildLogins(session.getIdToken().getJwtToken()));
                                var sc = self.saveCreds(session);
                                var scp = self.setCognitoProfile(self.cognitoUser);
                                Promise.all([sc, scp])
                                    .then(function (result) {
                                    self.storage.set('authUser', self.user)
                                        .then(function (oResult) {
                                        resolve(result[0]);
                                    })
                                        .catch(function (err) {
                                        reject(self.handleError(err, 'storage.set'));
                                    });
                                })
                                    .catch(function (error) {
                                    reject(self.handleError(error, 'promises.all saveCreds/setCognitoProfile'));
                                });
                            }, onFailure: function (err) {
                                reject(self.handleError(err, 'completeNewPasswordChallenge'));
                            }
                        });
                    },
                    mfaRequired: function (challangeName, challengeParameters) { },
                    customChallenge: function (challangeParameters) { },
                    onSuccess: function (session) {
                        var creds;
                        creds = new __WEBPACK_IMPORTED_MODULE_5_aws_sdk__["CognitoIdentityCredentials"](self.buildLogins(session.getIdToken().getJwtToken()));
                        var sc = self.saveCreds(session);
                        var scp = self.setCognitoProfile(self.cognitoUser);
                        Promise.all([sc, scp])
                            .then(function (result) {
                            self.storage.set('authUser', self.user)
                                .then(function (oResult) {
                                resolve(result[0]);
                            })
                                .catch(function (err) {
                                reject(self.handleError(err, 'storage.set'));
                            });
                        })
                            .catch(function (error) {
                            reject(self.handleError(error, 'promises.all saveCreds/setCognitoProfile'));
                        });
                    },
                    onFailure: function (err) {
                        reject(self.handleError(err, 'signIn'));
                    },
                });
            }
            catch (error) {
                reject(self.handleError(error, 'catch/try authenticateUser'));
            }
        });
    };
    CognitoService.prototype.signOut = function () {
        var self = this;
        // console.log(self.cognitoUser);
        if (self.cognitoUser) {
            var _username_1 = self.cognitoUser.getUsername();
            // console.log('_username', _username);
            return new Promise(function (resolve, reject) {
                try {
                    // self.deleteUser();
                    self.cognitoUser.signOut();
                    self.resetCreds(true);
                    self.user = AuthUser.Factory();
                    self.storage.ready().then(function () {
                        self.storage.remove('authUser');
                    });
                    self.signOutSubject.next(_username_1);
                    resolve('cognito service log out successful');
                }
                catch (error) {
                    reject(self.handleError(error, 'try/catch signOut'));
                }
            });
        }
    };
    CognitoService.prototype.signUp = function (creds) {
        var self = this;
        creds.member_since__c = __WEBPACK_IMPORTED_MODULE_6_moment__().year().toString();
        return new Promise(function (resolve, reject) {
            try {
                var attributes = [];
                attributes = self.getCognitoAttributes(creds);
                return self.userPool.signUp(creds.username, creds.password, attributes, null, function (err, result) {
                    if (err) {
                        reject(self.handleError(err, 'signUp'));
                    }
                    else {
                        // self.loggerService.info('aws registration successful', result);
                        console.log('aws registration successful', result);
                        resolve(result);
                    }
                });
            }
            catch (error) {
                reject(self.handleError(error, 'catch/try signUp'));
            }
        });
    };
    CognitoService.prototype.updateCognitoProfile = function (attributes) {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, self.cognitoUser.updateAttributes(attributes, function (err, result) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (err) {
                                                reject(self.handleError(err, 'updateAttributes'));
                                            }
                                            return [4 /*yield*/, self.setCognitoProfile(self.cognitoUser)
                                                    .then(function (profile) {
                                                    self.user.cognitoProfile = profile;
                                                    self.storage.set('authUser', self.user);
                                                    resolve(profile);
                                                })
                                                    .catch(function (error) {
                                                    reject(self.handleError(error, 'setCognitoProfile'));
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        reject(self.handleError(error_1, 'catch/try updateCognitoProfile'));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    CognitoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CognitoService,
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], CognitoService);
    return CognitoService;
}());

//# sourceMappingURL=cognito.service.js.map

/***/ })

},[397]);
//# sourceMappingURL=main.js.map