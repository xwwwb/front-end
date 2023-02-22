# Babel的主要的包

出自

[想弄懂Babel？你必须得先弄清楚这几个包 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/607212779)

使用方法：

``

以下是原文摘录

## @babel/core

是Babel实现编译的核心

使用Babel @babel/core是必不可少的

所说的Babel 6 7 也是指@babel/core的版本

## @babel/cli

用于命令行编译文件

## @bable/preset-env

> 官网解释：`@babel/preset-env`是一个智能预设，它允许您使用最新的`JavaScript`，而无需微观管理目标环境需要哪些语法转换（以及可选的浏览器`polyfill`）。这既让你的生活更轻松，也让`JavaScript`包更小！

### 理解

`@bable/preset-env`这个名字，我们可以拆开两部分来看，这样方便理解：

- `preset`预设
- `env`环境

#### preset

`Babel`编译`ES6+`**语法**，是通过一个个插件`plugin`去实现的。每年都会有不同新的提案、新的语法，但我们不可能一个个插件去配置，所以就有了`preset`这个东西。因此我们可以理解成`preset`就是一个**语法插件集合包**，这样我们只用安装这一个包，不需要一个个配插件，就可以很方便的编译最新的语法了。
我们通过一个不用预设的案例 [no-preset](https://link.zhihu.com/?target=https%3A//link.juejin.cn/%3Ftarget%3Dhttps%3A%2F%2Fgithub.com%2Flimingcan562%2Flearn-babel-7%2Ftree%2Fmain%2Fno-preset) ，感受一下如果不用`preset`有多麻烦。

```js
//  入口文件 index.js
const senses = ['eye', 'nose', 'ear', 'mouth'];

const lMC = {
    senses,
    like: ['eat', 'drink', 'play', 'fun'],
    information: {
        sex: 'male',
        age: '18+'
    },
    play: (sport = 'badminton') => {
        console.log(`play ${sport}`);
    }
};

const { like, information } = lMC;
```

这段代码，我们用了几个`ES6`新语法：

- `const`声明
- 属性的简洁表示法
- 箭头函数
- 函数默认值
- 模板字符串
- 解构

如果不用`preset`我们`Babel`配置如下：

```js
// Babel配置文件 babel.config.js
const plugins = [
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-block-scoping',
    '@babel/plugin-transform-destructuring',
    '@babel/plugin-transform-parameters',
    '@babel/plugin-transform-shorthand-properties',
    '@babel/plugin-transform-template-literals'
];
module.exports = {plugins};
```

编译后的文件：

```js
// 编译后的文件 compile.js
var senses = ['eye', 'nose', 'ear', 'mouth'];
var lMC = {
  senses: senses,
  like: ['eat', 'drink', 'play', 'fun'],
  information: {
    sex: 'male',
    age: '18+'
  },
  play: function () {
    var sport = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'badminton';
    console.log("play ".concat(sport));
  }
};
var like = lMC.like,
  information = lMC.information;
```

在不用`preset`的情况下，实现上述编译的过程，我基本是用一个`ES6`新语法，我就要去查一个插件，首先我不记得那么多插件，其次一个个插件找真的很累。
ok，那我们再用一个使用了预设的案例 [use-preset](https://link.zhihu.com/?target=https%3A//link.juejin.cn/%3Ftarget%3Dhttps%3A%2F%2Fgithub.com%2Flimingcan562%2Flearn-babel-7%2Ftree%2Fmain%2Fuse-preset) ，感受一下预设到底有多方便。 我们`npm i @babel/preset-env -D`，修改`babel.config.js`使用`preset`预设：

```js
// 修改babel.config.js
const presets = [
    '@babel/preset-env'
];
module.exports = {presets};
```

编译后的文件：

```js
// 编译后的文件 compile.js
"use strict";

var senses = ['eye', 'nose', 'ear', 'mouth'];
var lMC = {
  senses: senses,
  like: ['eat', 'drink', 'play', 'fun'],
  information: {
    sex: 'male',
    age: '18+'
  },
  play: function play() {
    var sport = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'badminton';
    console.log("play ".concat(sport));
  }
};
var like = lMC.like,
  information = lMC.information;
```

我们会发现，用`preset`（预设）方式输出的代码，跟`plugins`（不用预设）方式输出的代码是几乎是一模一样的。但是`preset`的`babel.config.js`更简洁，我也不需要一个个插件去找，也不需要安装那么多插件，只用安装`@babel/preset-env`这一个包，就可以很愉快的写`ES6+`。

#### env

`env`指的是环境。因为`@babel/preset-env`还有一个配置功能，我们可以通过配置我们代码运行的**目标环境**，来控制`polyfill`（一个提供低版本浏览器缺失的`ES6+`新特性的方法与实现的集合 ，后面会有更详细的讲解）的导入跟语法编译，从而使`ES6+`新的特性可以在我们想要的**目标环境**中顺利运行。

### 功能

通过上面对`preset`、`env`的理解跟案例感受，我们能总结出`@babel/preset-env`主要提供以下功能：

- 它**只编译`ES6+`语法**（上述案例只使用了`ES6+`的语法，并没有用`ES6+`的`API`）
- 它并不提供`polyfill`，但是可以通过**配置**我们代码运行的**目标环境**，从而控制`polyfill`的导入跟语法编译，使`ES6+`的新特性可以在我们想要的**目标环境**中顺利运行