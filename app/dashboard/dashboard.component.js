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
var adunit_model_1 = require("../model/adunit.model");
var adunit_repository_1 = require("../model/adunit.repository");
var adclient_model_1 = require("../model/adclient.model");
var adclient_repository_1 = require("../model/adclient.repository");
var router_1 = require("@angular/router");
var DashboardComponent = (function () {
    function DashboardComponent(adunitRepository, adclientRepository, adunit, adclient, router) {
        this.adunitRepository = adunitRepository;
        this.adclientRepository = adclientRepository;
        this.adunit = adunit;
        this.adclient = adclient;
        this.router = router;
        this.selectedAdClient = null;
        this.productsPerPage = 4;
        this.selectedPage = 1;
        console.log("HELLO");
    }
    Object.defineProperty(DashboardComponent.prototype, "adunits", {
        get: function () {
            var pageIndex = (this.selectedPage - 1) * this.productsPerPage;
            return this.adunitRepository.getAdUnits()
                .slice(pageIndex, pageIndex + this.productsPerPage);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "adclients", {
        get: function () {
            return this.adclientRepository.getAdClients();
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.changeAdClient = function (adClient) {
        this.selectedAdClient = adClient;
    };
    DashboardComponent.prototype.changePage = function (newPage) {
        this.selectedPage = newPage;
    };
    DashboardComponent.prototype.changePageSize = function (newSize) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    };
    Object.defineProperty(DashboardComponent.prototype, "pageCount", {
        get: function () {
            return Math.ceil(this.adunitRepository
                .getAdUnits().length / this.productsPerPage);
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent = __decorate([
        core_1.Component({
            selector: "dashboard",
            moduleId: module.id,
            templateUrl: "dashboard.component.html"
        }), 
        __metadata('design:paramtypes', [adunit_repository_1.AdUnitRepository, adclient_repository_1.AdClientRepository, adunit_model_1.AdUnit, adclient_model_1.AdClient, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map