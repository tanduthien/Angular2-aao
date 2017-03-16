import { Injectable } from "@angular/core"
import { AdUnit } from "./adunit.model";
import { Observable } from "rxjs/Observable";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class AdUnitRepository {
    private adUnits: AdUnit[] = new Array<AdUnit>();

    constructor(private dataSource: RestDataSource) {
        console.log("HHHHHH")
        dataSource.getAdUnits().subscribe(data => this.adUnits = data)
    }

    getAdUnits(): AdUnit[] {
        return this.adUnits;
    }
}
