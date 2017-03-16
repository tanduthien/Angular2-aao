"use strict";
var ReportPerDay = (function () {
    function ReportPerDay(accountId, adunitId, day, click, pageView, earning) {
        this.accountId = accountId;
        this.adunitId = adunitId;
        this.day = day;
        this.click = click;
        this.pageView = pageView;
        this.earning = earning;
    }
    return ReportPerDay;
}());
exports.ReportPerDay = ReportPerDay;
//# sourceMappingURL=reportperday.model.js.map