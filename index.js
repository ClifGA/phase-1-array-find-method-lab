// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
const superbowlWin = (record) => {

  const win = record.find((element) => element.result === "W" );

  return win ? win.year : undefined;


}