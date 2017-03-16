"use strict";
var AdClientRepository = (function () {
    function AdClientRepository(dataSource) {
        var _this = this;
        this.dataSource = dataSource;
        this.adClients = new Array();
        dataSource.getAdClients().subscribe(function (data) { return _this.adClients = data; });
    }
    AdClientRepository.prototype.getAdClients = function () {
        return this.adClients;
    };
    return AdClientRepository;
}());
exports.AdClientRepository = AdClientRepository;
//# sourceMappingURL=adclient.repository.js.map