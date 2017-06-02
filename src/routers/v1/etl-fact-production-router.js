var Router = require("restify-router").Router;
var messageSender = require("../../message-sender");

var FactMonitoringEvent = require("dl-module").etl.factMonitoringEvent;
var FactDailyOperations = require("dl-module").etl.factDailyOperations;
var FactFabricQualityControl = require("dl-module").etl.factFabricQualityControl;
var FactProductionOrderStatus = require("dl-module").etl.factProductionOrderStatus;
var FactProductionOrder = require("dl-module").etl.factProductionOrder;

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
    });

    return router;
}

module.exports = getRouter;