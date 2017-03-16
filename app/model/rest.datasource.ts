import { Injectable, Inject, OpaqueToken } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { AdUnit } from "./adunit.model";
import { AdClient } from "./adclient.model";
import { ReportPerDay } from "./reportperday.model";
import "rxjs/add/operator/map";

export const REST_URL = new OpaqueToken("rest_url");

@Injectable()
export class RestDataSource {

    constructor(private http: Http, @Inject(REST_URL) private baseUrl: string) { }

    getAdUnits(): Observable<AdUnit[]> {
        return this.http.get(this.baseUrl + "/adunits").map(respose => respose.json());
    }

    getAdClients(): Observable<AdClient[]> {
        return this.http.get(this.baseUrl + "/adclients").map(respose => respose.json());
    }

    getReportPerDays(): Observable<ReportPerDay[]> {
        return this.http.get(this.baseUrl + "/reportperdays").map(respose => respose.json());
    }
}
