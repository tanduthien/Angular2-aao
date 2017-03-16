"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var adunit_repository_1 = require("./adunit.repository");
var adclient_repository_1 = require("./adclient.repository");
var adclient_model_1 = require('./adclient.model');
var adunit_model_1 = require('./adunit.model');
var reportperday_repository_1 = require("./reportperday.repository");
var rest_datasource_1 = require("./rest.datasource");
var http_1 = require("@angular/http");
var ModelModule = (function () {
    function ModelModule() {
    }
    ModelModule = __decorate([
        core_1.NgModule({
            imports: [http_1.HttpModule],
            providers: [adunit_repository_1.AdUnitRepository, adunit_model_1.AdUnit, adclient_model_1.AdClient, adclient_repository_1.AdClientRepository, reportperday_repository_1.ReportPerDayRepository, rest_datasource_1.RestDataSource,
                { provide: rest_datasource_1.REST_URL, useValue: "http://localhost:5000" }]
        }), 
        __metadata('design:paramtypes', [])
    ], ModelModule);
    return ModelModule;
}());
exports.ModelModule = ModelModule;
//# sourceMappingURL=model.module.js.map