var etlFactPuchasingRouter = require('../src/routers/v1/etl-fact-purchasing-router');
var etlFactTotalHutangRouter = require('../src/routers/v1/etl-fact-total-hutang-router');
var etlFactMonitoringEvent = require('../src/routers/v1/etl-fact-monitoring-event-router');
var etlFactSalesContract = require('../src/routers/v1/etl-fact-sales-contract-router');
var etlDim = require('../src/routers/v1/etl-dim-router');

module.exports = function (server) {
    etlFactPuchasingRouter().applyRoutes(server, "/etl/purchasing");
    etlFactTotalHutangRouter().applyRoutes(server, "/etl/total-hutang");
    etlFactMonitoringEvent().applyRoutes(server, "/etl/fact-monitoring-event");
    etlFactSalesContract().applyRoutes(server, "/etl/fact-sales-contract");
    etlDim().applyRoutes(server, "/etl/dim");
};
