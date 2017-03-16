import { Component } from "@angular/core";
import { AdUnit } from "../model/adunit.model";
import { AdUnitRepository } from "../model/adunit.repository";
import { AdClient } from "../model/adclient.model";
import { AdClientRepository } from "../model/adclient.repository";
import { Router } from "@angular/router";

@Component({
    selector: "dashboard",
    moduleId: module.id,
    templateUrl: "dashboard.component.html"
})
export class DashboardComponent {
    public selectedAdClient = null;
    public productsPerPage = 4;
    public selectedPage = 1;

    constructor(
        private adunitRepository: AdUnitRepository,
        private adclientRepository: AdClientRepository,
        private adunit: AdUnit,
        private adclient: AdClient,
        private router: Router) { 
            console.log("HELLO")
        }

    get adunits(): AdUnit[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage
        return this.adunitRepository.getAdUnits()
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get adclients(): AdClient[] {
        return this.adclientRepository.getAdClients();
    }

    changeAdClient(adClient?: string) {
        this.selectedAdClient = adClient;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }

    get pageCount(): number {
        return Math.ceil(this.adunitRepository
            .getAdUnits().length / this.productsPerPage)
    }
}
