1、src:存放ES5的代码，dist：存放ES6的代码
2、使用命令：npm init -y:创建pack.json;
3、使用命令:全局安装Babel-cli -> 本地安装babel-preset-es2015 和 babel-cli -> 将ES6文件夹下index.js转换为ES5的dist文件夹下的ES5 babel src/index.js -o dist/index.js
4、在package.json 下 script里面添加 "build": "babel src/index.js -o dist/index.js"
5、let 和 var的区别：var存在变量提升，let则不存在;var 作用于全局范围，let只在代码块内有效；
6、const、常量可以理解为：在程序开发中，有些变量是希望声明后在业务层就不再发生变化了，简单来说就是从声明开始，这个变量始终不变，就需要用const进行声明。
7、变量的解构赋值：对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
8、扩展运算符和rest运算符：可以理解为在某种方法下 传递参数个数不确定的情况
9、字符串模版：将ES5里面的+'内容拼接'+ ,转化为更简单的拼接
