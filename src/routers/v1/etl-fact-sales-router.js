var Router = require("restify-router").Router;
var messageSender = require("../../message-sender");

var FactFinishingPrintingSalesContract = require("dl-module").etl.sales.factFinishingPrintingSalesContract;
var FactSpinningSalesContract = require("dl-module").etl.sales.factSpinningSalesContract;
var FactWeavingSalesContract = require("dl-module").etl.sales.factWeavingSalesContract;
var FactDealTrackingBoard = require("dl-module").etl.sales.factDealTrackingBoard;
var FactDealTrackingStage = require("dl-module").etl.sales.factDealTrackingStage;
var FactDealTrackingDeal = require("dl-module").etl.sales.factDealTrackingDeal;
var FactDealTrackingActivity = require("dl-module").etl.sales.factDealTrackingActivity;

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
                    var instance1 = new FactFinishingPrintingSalesContract(db, {
                        username: "unit-test"
                    }, sql);

                    var instance2 = new FactSpinningSalesContract(db, {
                        username: "unit-test"
                    }, sql);

                    var instance3 = new FactWeavingSalesContract(db, {
                        username: "unit-test"
                    }, sql);

                    instance1.run()
                        .then(() => {})
                        .catch(() => {})
                        .then(() => { /* Finally */
                            instance2.run()
                                .then(() => {})
                                .catch(() => {})
                                .then(() => { /* Finally */
                                    instance3.run();
                                });
                        });
                });
            });

        // Promise.all([dbConnect, sqlConnect])
        //     .then((result) => {
        //         var db = result[0];
        //         var sql = result[1];
        //         db.get().then((db) => {
        //             var instance2 = new FactSpinningSalesContract(db, {
        //                 username: "unit-test"
        //             }, sql);

        //             instance2.run();

        //         });
        //     });

        // Promise.all([dbConnect, sqlConnect])
        //     .then((result) => {
        //         var db = result[0];
        //         var sql = result[1];
        //         db.get().then((db) => {
        //             var instance3 = new FactWeavingSalesContract(db, {
        //                 username: "unit-test"
        //             }, sql);

        //             instance3.run();

        //         });
        //     });

        Promise.all([dbConnect, sqlConnect])
            .then((result) => {
                var db = result[0];
                var sql = result[1];
                db.get().then((db) => {
                    var instance4 = new FactDealTrackingBoard(db, {
                        username: "unit-test"
                    }, sql);

                    instance4.run();

                });
            });

        Promise.all([dbConnect, sqlConnect])
            .then((result) => {
                var db = result[0];
                var sql = result[1];
                db.get().then((db) => {
                    var instance5 = new FactDealTrackingStage(db, {
                        username: "unit-test"
                    }, sql);

                    instance5.run();

                });
            });

        Promise.all([dbConnect, sqlConnect])
            .then((result) => {
                var db = result[0];
                var sql = result[1];
                db.get().then((db) => {
                    var instance6 = new FactDealTrackingDeal(db, {
                        username: "unit-test"
                    }, sql);

                    instance6.run();

                });
            });

        Promise.all([dbConnect, sqlConnect])
            .then((result) => {
                var db = result[0];
                var sql = result[1];
                db.get().then((db) => {
                    var instance7 = new FactDealTrackingActivity(db, {
                        username: "unit-test"
                    }, sql);

                    instance7.run();

                });
            });
    });

    return router;
}

module.exports = getRouter;