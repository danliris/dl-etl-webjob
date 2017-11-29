var Router = require("restify-router").Router;
var messageSender = require("../../message-sender");

var FactKanban = require("dl-module").etl.production.factKanban;
var FactMonitoringEvent = require("dl-module").etl.production.factMonitoringEvent;
var FactDailyOperations = require("dl-module").etl.production.factDailyOperations;
var FactFabricQualityControl = require("dl-module").etl.production.factFabricQualityControl;
var FactProductionOrderStatus = require("dl-module").etl.sales.factProductionOrderStatus;
var FactProductionOrder = require("dl-module").etl.production.factProductionOrder;
var FactInspectionLotColor = require("dl-module").etl.production.factInspectionLotColor;
var FactPacking = require("dl-module").etl.production.factPacking;


var dbConnect = require("../../db");
var sqlConnect = require("../../sql-db");

const apiVersion = "1.0.0";

function getRouter() {

    var router = new Router();

    router.get("/", function (request, response, next) {

        var message = {
            body: "Test message",
            customProperties: {
                testproperty: "TestValue"
            }
        };

        messageSender.send(message)
            .then((result) => {
                response.send(200, result);
            })
            .catch((e) => {
                response.send(500, e);
            });

        Promise.all([dbConnect, sqlConnect])
            .then((result) => {
                var db = result[0];
                var sql = result[1];
                db.get().then((db) => {
                    var instance1 = new FactMonitoringEvent(db, {
                        username: "unit-test"
                    }, sql);

                    instance1.run()
                        .catch((e) => {
                            done(e);
                        });
                });
            });

        Promise.all([dbConnect, sqlConnect])
            .then((result) => {
                var db = result[0];
                var sql = result[1];
                db.get().then((db) => {
                    var instance2 = new FactDailyOperations(db, {
                        username: "unit-test"
                    }, sql);

                    instance2.run()
                        .catch((e) => {
                            done(e);
                        });
                });
            });

        Promise.all([dbConnect, sqlConnect])
            .then((result) => {
                var db = result[0];
                var sql = result[1];
                db.get().then((db) => {
                    var instance3 = new FactFabricQualityControl(db, {
                        username: "unit-test"
                    }, sql);

                    instance3.run()
                        .catch((e) => {
                            done(e);
                        });
                });
            });

        Promise.all([dbConnect, sqlConnect])
            .then((result) => {
                var db = result[0];
                var sql = result[1];
                db.get().then((db) => {
                    var instance4 = new FactProductionOrderStatus(db, {
                        username: "unit-test"
                    }, sql);

                    instance4.run()
                        .catch((e) => {
                            done(e);
                        });
                });
            });

        Promise.all([dbConnect, sqlConnect])
            .then((result) => {
                var db = result[0];
                var sql = result[1];
                db.get().then((db) => {
                    var instance5 = new FactProductionOrder(db, {
                        username: "unit-test"
                    }, sql);

                    instance5.run()
                        .catch((e) => {
                            done(e);
                        });
                });
            });

        Promise.all([dbConnect, sqlConnect])
            .then((result) => {
                var db = result[0];
                var sql = result[1];
                db.get().then((db) => {
                    var instance6 = new FactKanban(db, {
                        username: "unit-test"
                    }, sql);

                    instance6.run()
                        .catch((e) => {
                            done(e);
                        });
                });
            });

        Promise.all([dbConnect, sqlConnect])
            .then((result) => {
                var db = result[0];
                var sql = result[1];
                db.get().then((db) => {
                    var instance7 = new FactInspectionLotColor(db, {
                        username: "unit-test"
                    }, sql);

                    instance7.run()
                        .catch((e) => {
                            done(e);
                        });
                });
            });

        Promise.all([dbConnect, sqlConnect])
            .then((result) => {
                var db = result[0];
                var sql = result[1];
                db.get().then((db) => {
                    var instance8 = new FactPacking(db, {
                        username: "unit-test"
                    }, sql);

                    instance7.run()
                        .catch((e) => {
                            done(e);
                        });
                });
            });
    });

    return router;
}

module.exports = getRouter;