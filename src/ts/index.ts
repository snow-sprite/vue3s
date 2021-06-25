interface Person1 {
  name: string
  age: number
}

interface Person2 {
  hobbies: Array<string>
  num: number[]
  others: [string, number] // 元组 一一对应
  height: number
}

// 会合并Person1和Person2
type AllPerson = Person1 & Person2

type Parallel = string | number

const man: Person1 = {
  name: '小明',
  age: 10
}

console.log('man', man)

const man2: AllPerson = {
  name: '小花',
  height: 190,
  age: 20,
  hobbies: ['唱', '跳', '跑'],
  num: [1, 2, 3, 4, 5],
  others: ['我必须是String，后面的必须是数值', 999]
}

console.log('man2', man2)

// enum枚举 适用于一些特殊且有规则的集合，如月份、星期、男/女
enum IWeekday {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY
}

const saturday: IWeekday = IWeekday.SATURDAY
const sunday: IWeekday = IWeekday.SUNDAY

console.log(saturday) // 6
console.log(sunday) // 0
console.log(typeof IWeekday[1], IWeekday[1]) // string MONDAY

// readonly
interface IComputer {
  keyboard?: boolean
  mouse?: Array<number>
  readonly screen?: string
  foo?: Array<boolean>
  bar?: string
}

const cmp: IComputer = {
  keyboard: true,
  mouse: [1, 2],
  screen: 'Apple'
}

const obj = {
  foo: [true],
  bar: 'a'
}
const { foo, bar }: IComputer = obj

console.log('-------------')
console.log(foo)
console.log(bar)

// 泛型
function identity<T>(arg: Array<T>): Array<T> {
  console.log('++++++++++++')
  console.log(arg.length)
  return arg
}

const echo = identity(['a', 'b', 'c', 'd'])
console.log(echo)

// 传入string返回number
function trans(arg: string): number {
  console.log('---------')
  console.log(typeof arg)
  if (arg) return +arg
}

const transText = trans('1234567890')
console.log(typeof transText, transText)

// 泛型类型
// > 泛型参数名可以自定义，只要在数量上和使用方式上能对应上就可以
const identity2: <U>(args: Array<U>) => Array<U> = identity

console.log('-----identity2-----')
console.log(identity2([1, 2, 3, 4, 5]))

// 泛型接口
interface IIdentity {
  <T>(arg: T[]): T[]
}

const identity3: IIdentity = identity

console.log('identity3-------', identity3(['a', 1, 'b', 2, 'c', 3]))
