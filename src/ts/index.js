const man = {
  name: "小明",
  age: 10
};
console.log("man", man);
const man2 = {
  name: "小花",
  height: 190,
  age: 20,
  hobbies: ["唱", "跳", "跑"],
  num: [1, 2, 3, 4, 5],
  others: ["我必须是String，后面的必须是数值", 999]
};
console.log("man2", man2);
// enum枚举 适用于一些特殊且有规则的集合，如月份、星期、男/女
let IWeekday;
(function(IWeekday) {
  IWeekday[(IWeekday["SUNDAY"] = 0)] = "SUNDAY";
  IWeekday[(IWeekday["MONDAY"] = 1)] = "MONDAY";
  IWeekday[(IWeekday["TUESDAY"] = 2)] = "TUESDAY";
  IWeekday[(IWeekday["WEDNESDAY"] = 3)] = "WEDNESDAY";
  IWeekday[(IWeekday["THURSDAY"] = 4)] = "THURSDAY";
  IWeekday[(IWeekday["FRIDAY"] = 5)] = "FRIDAY";
  IWeekday[(IWeekday["SATURDAY"] = 6)] = "SATURDAY";
})(IWeekday || (IWeekday = {}));
const saturday = IWeekday.SATURDAY;
const sunday = IWeekday.SUNDAY;
console.log(saturday); // 6
console.log(sunday); // 0
console.log(typeof IWeekday[1], IWeekday[1]); // string MONDAY
const cmp = {
  keyboard: true,
  mouse: [1, 2],
  screen: "Apple"
};
const obj = {
  foo: [true],
  bar: "a"
};
const foo = obj.foo,
  bar = obj.bar;
console.log("-------------");
console.log(foo);
console.log(bar);
// 泛型
function identity(arg) {
  console.log("++++++++++++");
  console.log(arg.length);
  return arg;
}
const echo = identity(["a", "b", "c", "d"]);
console.log(echo);
// 传入string返回number
function trans(arg) {
  console.log("---------");
  console.log(typeof arg);
  if (arg) return +arg;
}
const transText = trans("1234567890");
console.log(typeof transText, transText);
// 泛型类型
// > 泛型参数名可以自定义，只要在数量上和使用方式上能对应上就可以
const identity2 = identity;
console.log("-----identity2-----");
console.log(identity2([1, 2, 3, 4, 5]));
const identity3 = identity;
console.log("identity3-------", identity3(["a", 1, "b", 2, "c", 3]));
