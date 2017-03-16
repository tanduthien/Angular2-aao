import { NgModule } from "@angular/core";
import { AdUnitRepository } from "./adunit.repository";
import { AdClientRepository } from "./adclient.repository";
import { AdClient } from './adclient.model';
import { AdUnit } from './adunit.model';
import { ReportPerDayRepository } from "./reportperday.repository";
import { RestDataSource, REST_URL } from "./rest.datasource";
import { HttpModule } from "@angular/http";

@NgModule({
    imports: [HttpModule],
    providers: [AdUnitRepository, AdUnit, AdClient, AdClientRepository, ReportPerDayRepository, RestDataSource,
        { provide: REST_URL, useValue: `http://localhost:5000` }]
})
export class ModelModule { }
