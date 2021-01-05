/**
 * 配置参考：https://prettier.io/docs/en/options.html#print-width
 */
module.exports = {
  // 最大字符长度
  printWidth: 80,
  // markdown格式的原样输出，不限制最大长度
  proseWrap: "never",
  // 使用单引号
  singleQuote: false,
  // 使用tab还是空格缩进
  useTabs: false,
  // 缩进
  tabWidth: 2,
  // 行末分号
  semi: true,
  // JSX也使用单引号
  jsxSingleQuote: false,
  // 不尾随逗号
  trailingComma: "none",
  // 在对象文字中打印括号之间的空格
  bracketSpacing: true,
  // 标签放在最后一样的末尾，而不是单独放在下一行
  jsxBracketSameLine: true,
  // 箭头圆括号
  arrowParens: "avoid",
  // 在文件顶部插入一个特殊的@format标记，指定文件格式需要被格式化
  insertPragma: false,
  // 行尾换行格式
  endOfLine: "lf", // \n
  HTMLWhitespaceSensitivity: "ignore"
}