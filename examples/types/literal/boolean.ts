type Confirm = true;
type Decline = false;

let sure: Confirm = true;
// 报错, 只能取值 true
sure = false;
sure = false;

let decline: Decline = false;
// 报错, 只能取值 false
decline = true;
