var etlFactPuchasingRouter = require('../src/routers/v1/etl-fact-purchasing-router');
var etlFactTotalHutangRouter = require('../src/routers/v1/etl-fact-total-hutang-router');
var etlDimCategoryRouter = require('../src/routers/v1/etl-dim-category-router');
var etlDimDivisionRouter = require('../src/routers/v1/etl-dim-division-router');
var etlDimSupplierRouter = require('../src/routers/v1/etl-dim-supplier-router');
var etlDimUnitRouter = require('../src/routers/v1/etl-dim-unit-router');
var etlFactMonitoringEvent = require('../src/routers/v1/etl-fact-monitoring-event-router');
var etlFactSalesContract = require('../src/routers/v1/etl-fact-sales-contract-router');
var etlDim = require('../src/routers/v1/etl-dim-router');

module.exports = function (server) {
    etlFactPuchasingRouter().applyRoutes(server, "v1/etl/purchasing");
    etlFactTotalHutangRouter().applyRoutes(server, "v1/etl/total-hutang");
    etlDimCategoryRouter().applyRoutes(server, "v1/etl/dim-category");
    etlDimDivisionRouter().applyRoutes(server, "v1/etl/dim-division");
    etlDimSupplierRouter().applyRoutes(server, "v1/etl/dim-supplier");
    etlDimUnitRouter().applyRoutes(server, "v1/etl/dim-unit");
    etlFactMonitoringEvent().applyRoutes(server, "v1/etl/fact-monitoring-event");
    etlFactSalesContract().applyRoutes(server, "v1/etl/fact-sales-contract");
    etlDim().applyRoutes(server, "v1/etl/dim");
};
