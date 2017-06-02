var Router = require("restify-router").Router;
var messageSender = require("../../message-sender");

var FactFinishingPrintingSalesContract = require("dl-module").etl.factFinishingPrintingSalesContract;
var FactSpinningSalesContract = require("dl-module").etl.factSpinningSalesContract;
var FactWeavingSalesContract = require("dl-module").etl.factWeavingSalesContract;

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

                    instance1.run();

                });
            });

        Promise.all([dbConnect, sqlConnect])
            .then((result) => {
                var db = result[0];
                var sql = result[1];
                db.get().then((db) => {
                    var instance2 = new FactSpinningSalesContract(db, {
                        username: "unit-test"
                    }, sql);

                    instance2.run();

                });
            });

        Promise.all([dbConnect, sqlConnect])
            .then((result) => {
                var db = result[0];
                var sql = result[1];
                db.get().then((db) => {
                    var instance3 = new FactWeavingSalesContract(db, {
                        username: "unit-test"
                    }, sql);

                    instance3.run();

                });
            });
    });

    return router;
}

module.exports = getRouter;