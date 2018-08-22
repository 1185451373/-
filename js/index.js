
// 规定好每张图片处于的位置和状态

var states = [
    {zindex:1,width:120,height:150,top:69,left:134,opacity:0.2},
    {zindex:2,width:130,height:170,top:59,left:0,opacity:0.5},
    {zindex:3,width:170,height:218,top:34,left:110,opacity:0.7},
    {zindex:4,width:224,height:288,top:0,left:263,opacity:1},
    {zindex:3,width:170,height:218,top:34,left:470,opacity:0.7},
    {zindex:2,width:130,height:170,top:59,left:620,opacity:0.5},
    {zindex:1,width:120,height:150,top:69,left:500,opacity:0.2},
]

// 将状态和位置赋给li
var lis = $('li')
lis.each(function (index, ele) {
    var state = states[index]
    $(ele).css({
        'z-index': state.zindex,
    }).finish().animate(state, 1000)
})
var num1 = 0
$('.next').click(function () {
    move()
    clearInterval(star)
    star= setInterval(move,3000)
    
})
    var star
function move() {
    num1 = num1 == states.length ? 0 : num1
    num1++
    $('li').each(function (index, item) {
        var num = index + num1
        num = num >= states.length ? num - states.length : num
        var state = states[num]
        $(item).css({
            'z-index': state.zindex,
        }).finish().animate(state, 1000)
    })
}
star= setInterval(move,3000)
$('.prev').click(function () {
    num1 = num1 <= 0 ? states.length : num1
    num1--
    $('li').each(function (index, item) {
        var num = index + num1
        num = num >= states.length ? num - states.length : num
        var state = states[num]
        $(item).css({
            'z-index': state.zindex,
        }).finish().animate(state, 1000)
    })

    clearInterval(star)
    star= setInterval(move,3000)
})