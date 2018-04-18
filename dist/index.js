'use strict';

// let a = 1;
// console.log(a);

// var a=2;
// {
//    let a=3;
// }
// console.log(a);


//字符串模板(ES5的模板)
// let jspang='技术胖';
// let blog = '非常高兴你能看到这篇文章，我是你的老朋友'+jspang+'。这节课我们学习字符串模版。';
// document.write(blog);

//字符串模板(ES6的模板)
//let jspang='技术胖';
//let blog = `非常高兴你能看到这篇文章，我是你的老朋友${jspang}。这节课我们学习字符串模版。`;
//需要注意上面的标点符号是 `
//document.write(blog);

//字符串模板(ES6的模板) 识别html 里面的标签
//let jspang2='技术胖';
////let blog2 = `<b>非常高兴你能看到这篇文章</b>，我是你的老朋友${jspang2}。<br/>这节课我们学习字符串模版。`;
//document.write(blog2);

//字符串查找 indexOf()
//let jspang='技术胖';
//let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
//document.write(blog.indexOf(jspang))

//这是网页中输出了20，我们还要自己判断。
//ES6直接用includes就可以判断
//let jspang='技术胖';
//let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
//document.write(blog.includes(jspang));

//判断开头是否存在： blog.startsWith(jspang);
//判断结尾是否存在：blog.endsWith(jspang);
//复制字符串:document.write('jspang|'.repeat(3));


//ES6数字操作
//数字验证Number.isFinite( xx ) 只要是数字，不论是浮点型还是整形都会返回true，其他时候会返回false。
// let a = 11 / 4;
// console.log(Number.isFinite(a)); //true
// console.log(Number.isFinite('jspang')); //false
// console.log(Number.isFinite(NaN)); //false
// console.log(Number.isFinite(undefined)); //false

//判断是否为整数Number.isInteger(xx) 整数位true 小数位false
//整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)
//整数取值范围操作 


//ES6中新增的数组知识
//将json 转化成为数组，需要在原来的基础上加一个length,然后使用arrary.form()
// let  json = {
//     '0': 'jspang',
//     '1': '技术胖',
//     '2': '大胖逼逼叨',
//     length:3
// }
// let arr=Array.from(json);
// document.write(arr)

//Array.of()方法：它负责把类数字和字符串转换成数组
// let arr2 =Array.of(3,4,5,6,7)
// document.write(arr2)
// let arr3 =Array.of('技术胖','jspang','大胖逼逼叨');
// console.log(arr3);

//find( )实例方法:所谓的实例方法就是并不是以Array对象开始的，而是必须有一个已经存在的数组，然后使用的方法，
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.find(function (value, index, arr) {
//     return value > 5;
// }))

//fill(),填充接收三个参数 分别是 要填充的内容 填充的起始位置 填充的结束为止,就是将原来的数据替换成我想要额数据
//let arr =[0,1,2,3,4,5,6,7,8,9];
//arr.fill('jspang',2,5);
//console.log(arr)
//数组遍历for of 有时候开发中是需要数组的索引的--keys()，那我们可以使用下面的代码输出数组索引
// let arr2=['jspang','技术胖','大胖逼逼叨'];
// for(let index of arr2.keys()){
//     console.log(index);
//     //index 表示索
// }
//同时输出数组的内容和索引：.entries()
// let arr2=['jspang','技术胖','大胖逼逼叨'];
// for(let [index,val] of arr2.entries()){
//     console.log(index+'--------'+val);
//     //index 表示索
// }
//entries( )实例方法:entries()实例方式生成的是Iterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值
// let arr=['jspang','技术胖','大胖逼逼叨']
// let list=arr.entries();
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);


//ES6中的箭头函数和扩展
// var add=(a,b=1)=>a+b;
// console.log(add(1));

//ES6中的函数和数组补漏
//对象的函数结构
// var json={
//     a:'jspang',
//     b:'技术胖'
// };
// function fun(ab='jspang') { 
//     console.log(a,b)
//  }
// fun(json)

//数组的函数结构（多个参数一般用 ... 代替）
// let arr = ['jspang','技术胖','免费教程'];
// function fun(a,b,c){
//     console.log(a,b,c);
// }

// fun(...arr);

//in的用法:用来判断对象或者数组中是否存在某个值的。我们先来看一下用in如何判断对象里是否有某个值。
// let obj={
//     a:'jspang',
//     b:'技术胖'
// };
// console.log('a' in obj);

//数组的遍历 forEach()
// var arr2=['jspang','技术胖','前端教程'];
// arr2.forEach((val,index)=>console.log(index,val));
//some 判断数组里面值
// let arr=['jspang','技术胖','前端教程'];
// arr.some(x=>console.log(x))
//map() 将数组里面的值替换成给定的值
// let arr=['jspang','技术胖','前端教程'];
// console.log(arr.map(x=>'web'))
//数组转化成字符串 tostring() 和 join()
// let arr=['jspang','技术胖','前端教程'];
// console.log(arr.toString());
// console.log(arr.join('|'))


//ES6中对象
//ES6允许把声明的变量直接赋值给对象
// let name="jspang";
// let skill="web";
// var obj={
//     name:skill
// };
// console.log(obj);
//对象Key值构建
// let key='webkile';
// var obj2={
//     [key]:'web'
// };
//console.log(obj2);
//自定义对象方法
// var objs={
//     add:function(a,b){
//         return a+b;
//     }
// }
//console.log(objs.add(1,2));
//Object.is(  ) 对象比较,原来使用“==”  区别：===为同值相等，is()为严格相等。
// var obj1 = {name:'jspang'};
// var obj2 = {name:'jspang'};
// console.log(Object.is(obj1.name,obj2.name))
//Object.assign(  )合并对象
// var a={a:'jspang'};
// var b={b:'技术胖'};
// var c={c:'web'};
// let d=Object.assign(a,b,c);
// console.log(d)


//Symbol在对象中的作用
// var a = new String;
// var b = new Number;
// var c = new Boolean;
// var d = new Array;
// var e = new Object; 
// var f= Symbol();
// console.log(typeof(f));

// var g = Symbol('jspang');
// console.log(g);
// console.log(g.toString());

//var jspang = Symbol();
// var obj={
//     [jspang]:'技术胖'
// }
// console.log(obj[jspang]);
// obj[jspang]='web';
// console.log(obj[jspang]);

//Symbol对象元素的保护作用 在我不想别人知道我的年龄，这时候我就可以使用Symbol来进行循环保护。
// let obj={name:'jspang',skill:'web'};
// let age=Symbol();
// obj[age]=18;
// for (let item in obj){
//     console.log(obj[item]);
// } 
// console.log(obj);


//Set和WeakSet数据结构
//Set和Array 的区别是Set不允许内部有重复的值，如果有只显示一个，相当于去重。虽然Set很像数组，但是他不是数组。
//Set增删改 add:追加  delete:删除 has:查找  clear：删除
// let setArr=new Set(['jspang','技术胖','web','jspang']);
// setArr.add('前端');
// console.log(setArr);//'jspang','技术胖','web','前端'
// setArr.delete('前端');
// console.log(setArr);//'jspang','技术胖','web'
// setArr.has('前端');
// console.log(setArr.has('jspang'));//有就是true
// let setArr = new Set(['jspang','技术胖','web','jspang']);
// console.log(setArr);//Set {"jspang", "技术胖", "web"}
// setArr.clear();//清空
// console.log(setArr);//true

//for...of...循环：
// let setArr = new Set(['jspang','技术胖','web','jspang']);
// for (let item of setArr){
//     console.log(item);
// }

//size属性:可以获得Set值的数量。
// let setArr2 = new Set(['jspang','技术胖','web','jspang']);
// for (let item of setArr){
//     console.log(item);//'jspang','技术胖','web'
// }
// console.log(setArr2.size);//3
//forEach循环
// let setArr = new Set(['jspang','技术胖','web','jspang']);
// setArr.forEach((value)=>console.log(value));
//WeakSet的声明
// let weakObj=new WeakSet();
// let obj={a:'jspang',b:'技术胖'}
// weakObj.add(obj);
// console.log(weakObj);


//map数据结构
// let json = {
//     name:'jspang',
//     skill:'web'
// }
// var map =new Map();
// map.set(json,'iam');
// console.log(map)
//map方法集合  get():取值get;  delete():删除delete ;size():获取长度;
// let json = {
//     name:'jspang',
//     skill:'web'
// };
// var map=new Map();
// map.set(json,'iam');
// console.log(map.get(json));//iam
// map.delete(json);
// console.log(map);
// console.log(map.size);//0
// console.log(map.has('jspang'))//false


//Proxy进行预处理 可以理解为钩子函数
// var obj={//这是原来的
//     add:function(val){
//         return val+10;
//     },
//     name:'I am 颉建华'
// };
// console.log(obj.add(10));
// console.log(obj.name);

// var pro = new Proxy({
//     add: function (val) {
//         return val + 10;
//     },
//     name: "I am 颉建华"
// }, {
//     get:function(target,key,propty){
//         console.log('come in Get');//come in Get
//          return target[key];
//     }
// });
// console.log(pro.name);//I am 颉建华

var pro = new Proxy({
    add: function add(val) {
        return val + 10;
    },
    name: 'I am Jspang'
}, {
    get: function get(target, key) {
        //设置目标值和目标的key
        console.log('come in Get');
        return target[key];
    },
    set: function set(target, key, value, receiver) {
        //
        console.log('setting ' + key + ' = ' + value); //将key值设置为value值
        return target[key] = value;
    }

});

console.log(pro.name);
pro.name = '技术胖';
console.log(pro.name);

//promise:可以理解为层层递进的方法
var state = 1;
function step1(resolve, reject) {
    console.log('1.开始-洗菜做饭');
    if (state == 1) {
        resolve('洗菜做饭--完成');
    } else {
        reject('洗菜做饭--出错');
    }
};
function step2(resolve, reject) {
    console.log('2.开始-坐下来吃饭');
    if (state == 1) {
        resolve('坐下来吃饭--完成');
    } else {
        reject('坐下来吃饭--出错');
    }
};
function step3(resolve, reject) {
    console.log('3.开始-收拾桌子洗完');
    if (state == 1) {
        resolve('收拾桌子洗完--完成');
    } else {
        reject('收拾桌子洗完--出错');
    }
};

new Promise(step1).then(function (val) {
    console.val;
    return new Promise(step2);
}).then(function (val) {
    console.val;
    return new Promise(step3);
}).then(function (val) {
    console.log(val);
    return val;
});
