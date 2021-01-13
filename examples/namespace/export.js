var A1;
(function (A1) {
    // 这些类型和变量只在命名空间内可用
    var a = 1;
    ;
    function log1() {
        console.log(a);
    }
    function log() {
        console.log(a);
    }
    A1.log = log;
})(A1 || (A1 = {}));
// 合法
A1.log();
// 报错,该方法未导出无法使用
A1.log1();
