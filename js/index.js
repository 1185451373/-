
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
$('#box secction').add('#box li').hover(function(){
    clearInterval(time)
},function(){
    autoplay()
})
