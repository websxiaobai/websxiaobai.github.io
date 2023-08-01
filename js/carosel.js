var box = document.querySelector('#box')
var arr = document.querySelector('#arr')
var left = document.querySelector('#left')
var right = document.querySelector('#right')
var screen = document.querySelector('.screen') //展示区，移动距离
var ul = document.querySelector('ul')
var ol = document.querySelector('ol');
var lis = ol.querySelectorAll('li');
var timer //定时器//索引
var timer2;
var index = 0;
box.addEventListener('mouseover', function() {
    arr.style.display = 'block'
    clearInterval(timer2);
    timer2 = null;
})

box.addEventListener('mouseout', function() {
    arr.style.display = 'none'
    timer2 = setInterval(function() {
        right.click();
    }, 2000)
})
for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', i);
    lis[i].addEventListener('click', function() {
        index = this.getAttribute('index');
        circle = this.getAttribute('index');
        for (var j = 0; j < lis.length; j++) {
            lis[j].className = '';
        }
        this.className = 'current';
        animationShow(-screen.offsetWidth * index);
    })
}
var circle = 0;
right.addEventListener('click', function() {
    if (index == ul.children.length - 1) {
        index = 0
        ul.style.left = '0px'
    }
    index++;
    animationShow(-screen.offsetWidth * index)
    console.log(ul.offsetLeft)

    circle++;
    for (var i = 0; i < ul.children.length - 1; i++) {
        ol.children[i].className = '';
    }
    if (circle > ul.children.length - 2) {
        circle = 0;
    }
    ol.children[circle].className = 'current';
})

left.addEventListener('click', function() {
    if (index == 0) {
        index = ul.children.length - 1;
        ul.style.left = -(index * screen.offsetWidth) + 'px';
    }
    index--
    animationShow(-screen.offsetWidth * index)
    console.log(ul.offsetLeft)
    circle--;
    for (var i = 0; i < ul.children.length - 1; i++) {
        ol.children[i].className = '';
    }
    if (circle < 0) {
        circle = ul.children.length - 2;
    }
    ol.children[circle].className = 'current';
})


function animationShow(target) {
    clearInterval(timer)
    timer = setInterval(function() {
            var current = ul.offsetLeft
            var step = (target - current) / 10;
            step = step < 0 ? Math.floor(step) : Math.ceil(step)
            current += step
            ul.style.left = current + 'px'
            if (current == target) {
                clearInterval(timer)
            }
        }, 20) //定时器


}