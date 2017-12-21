"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var a = 5;

var Singer = function () {
    function Singer(name) {
        _classCallCheck(this, Singer);

        this.name = name;
    }

    _createClass(Singer, [{
        key: "show",
        value: function show() {
            return this.name;
        }
    }, {
        key: "a",
        value: function a() {
            console.log(1212);
        }
    }]);

    return Singer;
}();