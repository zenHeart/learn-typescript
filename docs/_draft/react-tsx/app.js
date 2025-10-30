"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Greeter = function (_a) {
    var name = _a.name, _b = _a.count, count = _b === void 0 ? 0 : _b;
    var _c = (0, react_1.useState)(count), clicks = _c[0], setClicks = _c[1];
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null,
            "Hello, ",
            name,
            "!"),
        react_1.default.createElement("button", { onClick: function () { return setClicks(function (prev) { return prev + 1; }); } },
            "Clicked ",
            clicks,
            " times")));
};
var Counter = /** @class */ (function (_super) {
    __extends(Counter, _super);
    function Counter(props) {
        var _this = _super.call(this, props) || this;
        _this.increment = function () {
            _this.setState(function (prev) { return ({ count: prev.count + 1 }); });
        };
        _this.state = {
            count: props.initialCount
        };
        return _this;
    }
    Counter.prototype.render = function () {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("h2", null, "Class Counter"),
            react_1.default.createElement("p", null,
                "Count: ",
                this.state.count),
            react_1.default.createElement("button", { onClick: this.increment }, "Increment")));
    };
    return Counter;
}(react_1.default.Component));
// App Component
var App = function () {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "TypeScript React Demo"),
        react_1.default.createElement(Greeter, { name: "User", count: 5 }),
        react_1.default.createElement(Counter, { initialCount: 0 })));
};
exports.default = App;
