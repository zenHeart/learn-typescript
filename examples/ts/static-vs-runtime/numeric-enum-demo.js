var Status;
(function (Status) {
  Status[Status["Pending"] = 0] = "Pending";
  Status[Status["Running"] = 1] = "Running";
  Status[Status["Done"] = 2] = "Done";
})(Status || (Status = {}));

console.log(Status.Pending); // 0
console.log(Status[0]);      // Pending
