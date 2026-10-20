var Status;
(function (Status) {
  Status[Status["Pending"] = 0] = "Pending";
  Status[Status["Done"] = 1] = "Done";
})(Status || (Status = {}));

Status.Pending = 99;
console.log(Status.Pending); // 99
