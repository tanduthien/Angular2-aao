import { Injectable } from "@angular/core";
import { ReportPerDay } from "./reportperday.model";
import { Observable } from "rxjs/Observable";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class ReportPerDayRepository {
  private reportPerDay: ReportPerDay[] = new Array<ReportPerDay>();

  constructor(private dataSource: RestDataSource) {
    dataSource.getReportPerDays().subscribe(data => this.reportPerDay = data)
  }

  getReportPerDays(): ReportPerDay[] {
    return this.reportPerDay;
  }
}
