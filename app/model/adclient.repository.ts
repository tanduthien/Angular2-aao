import { Injectable } from "@angular/core"
import { Observable } from "rxjs/Observable";
import { AdClient } from "./adclient.model";
import { RestDataSource } from "./rest.datasource";

export class AdClientRepository {
    private adClients: AdClient[] = new Array<AdClient>();

    constructor(private dataSource: RestDataSource) {
        dataSource.getAdClients().subscribe(data => this.adClients = data)
     }

    getAdClients(): AdClient[] {
        return this.adClients;
    }
}
