var A1;
(function (A1) {
    // 这些类型和变量只在命名空间内可用
    var a = 1;
    ;
    function log() {
        console.log(a);
    }
})(A1 || (A1 = {}));
