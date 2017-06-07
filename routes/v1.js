var etlDim = require('../src/routers/v1/etl-dim-router');
var etlFactInventoryRouter = require('../src/routers/v1/etl-fact-inventory-router');
var etlFactProductionRouter = require('../src/routers/v1/etl-fact-production-router');
var etlFactPuchasingRouter = require('../src/routers/v1/etl-fact-purchasing-router');
var etlFactSalesRouter = require('../src/routers/v1/etl-fact-sales-router');

module.exports = function (server) {
    etlDim().applyRoutes(server, "/v1/etl/dim");
    etlFactInventoryRouter().applyRoutes(server, "/v1/etl/inventory");
    etlFactProductionRouter().applyRoutes(server, "/v1/etl/production");
    etlFactPuchasingRouter().applyRoutes(server, "/v1/etl/purchasing");
    etlFactSalesRouter().applyRoutes(server, "/v1/etl/sales");
};
