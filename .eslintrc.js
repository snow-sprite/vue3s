module.exports = {
  root: true,
  env: {
    // 指定运行环境
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
    // 避免与prettier冲突
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 使用单引号
    quotes: ["warn", "double"],
    // 结尾跟分号
    semi: ["warn", "always"],
    // 结尾不跟逗号
    "comma-dangle": ["warn", "never"],
    // 未使用的变量
    "no-unused-vars": [
      2,
      {
        vars: "all",
        args: "after-used"
      }
    ],
    // function关键字和函数名后面的空格
    "space-before-function-paren": [2, "always"],
    // 除了null,其他用===而不是==
    eqeqeq: ["error", "always", { null: "ignore" }],
    // 字符串拼接操作符直接用空格
    "space-infix-ops": 2,
    // 对属性名强制使用驼峰
    camelcase: [
      0,
      {
        properties: "always",
      },
    ],
    // 不允许有多余的行末逗号
    "comma-dangle": [2, "never"],
    // 始终将逗号置于行末
    "comma-style": [2, "last"],
    // 点号操作符须与属性需在同一行
    "dot-location": [2, "property"],
    // 函数调用时标识符与括号间不留间隔
    "func-call-spacing": ["error", "never"],
    // 键值对当中冒号与值之间要留空白
    "key-spacing": [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    // 子类的构造器中一定要调用 super
    "constructor-super": 2,
    // 避免对类名重新赋值
    "no-class-assign": 2,
    // 避免修改使用 const 声明的变量
    "no-const-assign": 2,
    // 正则中不要使用控制符
    "no-control-regex": "error",
    // 不要对变量使用 delete 操作。
    "no-delete-var": 2,
    // 不要定义冗余的函数参数
    "no-dupe-args": 2,
    // 类中不要定义冗余的属性
    "no-dupe-class-members": 2,
    // 对象字面量中不要定义重复的属性
    "no-dupe-keys": 2,
    // switch 语句中不要定义重复的 case 分支
    "no-duplicate-case": 2,
    // 同一模块有多个导入时一次性写完
    "no-duplicate-imports": "error",
    // 正则中不要使用空字符
    "no-empty-character-class": 2,
    "no-eval": 2
  },
  //当使用第三方的SDK时，eslint会报找不到，可以加入到globals，取消对这个的检查
  globals: {
    fengmap: true,
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        mocha: true
      }
    }
  ]
};
