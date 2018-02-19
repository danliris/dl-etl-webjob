var Router = require("restify-router").Router;
var messageSender = require("../../message-sender");

var DimUnit = require("dl-module").etl.dim.dimUnit;
var DimStaff = require("dl-module").etl.dim.dimStaff;
var DimDivision = require("dl-module").etl.dim.dimDivision;
var DimSupplier = require("dl-module").etl.dim.dimSupplier;
var DimCategory = require("dl-module").etl.dim.dimCategory;
var DimMachine = require("dl-module").etl.dim.dimMachine;
var DimBuyer = require("dl-module").etl.dim.dimBuyer;
var DimOrderType = require("dl-module").etl.dim.dimOrderType;
var DimProcessType = require("dl-module").etl.dim.dimProcessType;
var DimStorage = require("dl-module").etl.dim.dimStorage;
var DimProduct = require("dl-module").etl.dim.dimProduct;
var DimContact = require("dl-module").etl.dim.dimContact;
var DimCompany = require("dl-module").etl.dim.dimCompany;
var DimStaff = require("dl-module").etl.dim.dimCompany;
var DimDurationEstimation = require("dl-module").etl.dim.dimDurationEstimation;
var DimBudget = require("dl-module").etl.dim.dimBudget;

//garment
var DimGarmentSupplier = require("dl-module").etl.garment.dim.dimGarmentSupplier;

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
                    var instance1 = new DimUnit(db, {
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
                    var instance2 = new DimDivision(db, {
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
                    var instance3 = new DimSupplier(db, {
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
                    var instance4 = new DimCategory(db, {
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
                    var instance5 = new DimMachine(db, {
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
                    var instance6 = new DimBuyer(db, {
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
                    var instance7 = new DimOrderType(db, {
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
                    var instance8 = new DimProcessType(db, {
                        username: "unit-test"
                    }, sql);

                    instance8.run()
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
                    var instance9 = new DimStorage(db, {
                        username: "unit-test"
                    }, sql);

                    instance9.run()
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
                    var instance10 = new DimProduct(db, {
                        username: "unit-test"
                    }, sql);

                    instance10.run()
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
                    var instance11 = new DimContact(db, {
                        username: "unit-test"
                    }, sql);

                    instance11.run()
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
                    var instance12 = new DimCompany(db, {
                        username: "unit-test"
                    }, sql);

                    instance12.run()
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
                    var instance13 = new DimDurationEstimation(db, {
                        username: "unit-test"
                    }, sql);

                    instance13.run()
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
                    var instance14 = new DimBudget(db, {
                        username: "unit-test"
                    }, sql);

                    instance14.run()
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
                    var dimGarmentSupplier = new DimGarmentSupplier(db, {
                        username: "unit-test"
                    }, sql);

                    dimGarmentSupplier.run()
                        .catch((e) => {
                            done(e);
                        });
                });
            });
    });

    return router;
}

module.exports = getRouter;