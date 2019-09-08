var connection = require("../config/connection.js");


function createQue(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function translateSql(obj) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function (tableInput, cb) {
        var DBquery = "SELECT * FROM " + tableInput + ";";
        connection.query(DBquery, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function (tableInput, cols, values, cb) {
        var DBquery = "INSERT INTO " + tableInput + " (" + cols.toString() + ") " + " (" + createQue(values.length) + ") ";
        console.log(DBquery);
        connection.query(DBquery, values, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    update: function (tableInput, objColVals, condition, cb) {
        var DBquery = "UPDATE " + tableInput + " SET " + translateSql(objColVals) + "WHERE " + condition;
        console.log(DBquery);
        connection.query(DBquery, values, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    delete: function (tableInput, condition, cb) {
        var DBquery = "DELETE FROM " + tableInput + " WHERE " + condition;
        console.log(DBquery);
        connection.query(DBquery, values, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}


module.exports = orm