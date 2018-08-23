// 首先将状体封装成一个匿名自运行函数
(function(){
// 规定好每张图片处于的位置和状态
var states = [
    {zindex:1,width:120,height:150,top:69,left:134,opac:0.2},
    {zindex:2,width:130,height:170,top:59,left:0,opac:0.5},
    {zindex:3,width:170,height:218,top:34,left:110,opac:0.7},
    {zindex:4,width:228,height:288,top:0,left:263,opac:1},
    {zindex:3,width:170,height:218,top:34,left:470,opac:0.7},
    {zindex:2,width:130,height:170,top:59,left:620,opac:0.5},
    {zindex:1,width:120,height:150,top:69,left:500,opac:0.2},
]
// 将状态和位置赋给li
var lis = $('li')
function move() {
    lis.each(function (index, ele) {
        var state = states[index]
        $(ele).css({
            'z-index': state.zindex,
        }).finish().animate(state, 1000).find('img').css('opacity', state.opac)
    })
}
move()
// 下一张
function next() {
    states.unshift(states.pop())
    move()
}
$('#box .next').click(function () {
    // 原理，把数组中的最后一个元素，移动到第一个
    next()
})

$('#box .prev').click(function () {
    // 原理，把数组中的第一个元素，移动到最后一个
    states.push(states.shift())
    move()
})
// 自动轮播
var time = null
function autoplay() {
    time = setInterval(function () {
        next()
    }, 3000)
}
autoplay() 
// 停止轮播
$('#box section').add('#box li').hover(function(){
    clearInterval(time)
},function(){
    autoplay()
})
// 封装为插件,能够使得只要使用这个插件，就能被重复的使用效果，会产生什么样的问题
// 1.插件中最好不要使用id：插件是为了能够被重复使用，也就是说在一个页面上可能会被
// 重复调用会造成页面的冲突，并且id具有唯一性的特性
// 2.变量的命名以及方法的命名：states. time . move(),用户在使用这个 插件的时候
// 可能还会引入自己创建的文件 也有同样的命名，那么就会产生冲突
// 3.标签class的值的问题：prev next，这些class命名太大众化了，大多数编写者都会使用
// 这样的命名，势必会造成冲突
// 4.插件的文件命名问题:index js ,index.css,命名太大众化 比如JQuery.slide.js
})()
// 变量的作用域问题
// 1.全局域[window] 2.函数域[function]
// 1.全局域，从页面被打开之后，到页面关闭之前始终存在
// 2.函数域，存在函数被调用的瞬间（也不一定,考虑闭包的存在）

// 闭包作用，可以保留函数的作用域（所以move可以使用当前函数中的states）
// 闭包产生的必要条件： 函数里面套函数（内层的函数要使用外层函数的变量）

// 全局变量会产生闭包？
// 不会，因为全局变量存在全局域