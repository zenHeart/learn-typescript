var M;
(function (M) {
    var s = "hello";
    function f() {
        return s;
    }
    M.f = f;
})(M || (M = {}));
M.f();
// s 为内部变量此处使用会报错
M.s;
