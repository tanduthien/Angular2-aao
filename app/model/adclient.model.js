"use strict";
var AdClient = (function () {
    function AdClient(id, kind, productCode, supportsReporting, arcOptIn, accountId) {
        this.id = id;
        this.kind = kind;
        this.productCode = productCode;
        this.supportsReporting = supportsReporting;
        this.arcOptIn = arcOptIn;
        this.accountId = accountId;
    }
    return AdClient;
}());
exports.AdClient = AdClient;
//# sourceMappingURL=adclient.model.js.map