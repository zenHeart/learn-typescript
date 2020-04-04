type YesOrNo = true | false | 'Y' | 'N' | 0 | 1 | 'Yes' | 'No';

let isOk: YesOrNo = true;
isOk = 'N';

// 报错, 值不属于上述字面量集合
isOk = 'foo';
