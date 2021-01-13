var M3;
(function (M3) {
    function fooA1(c) {
        console.log(c);
    }
    M3.fooA1 = fooA1;
})(M3 || (M3 = {}));
M3.fooA1({ x: 'a' });
