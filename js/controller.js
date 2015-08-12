console.log("controller");

/**
 * 生成 html 代码
 * @param  {Array} dataArr 数组
 * @return {[type]}         [description]
 */
var cardGenerator = function(dataArr) {
    var oBody = document.getElementById('body');
    var htmlStr = ['<h1 class="title">Love Story</h1>', '<div class="time"></div>'];

    for (var i = 0; i < dataArr.length; i++) {
        if (i / 2 === 0) {
            htmlStr.push('<div class="card left">');
            htmlStr.push('<h2>' + dataArr[i].title + ' ' + dataArr[i].date + '</h2>');
        } else {
            htmlStr.push('<div class="card right">');
            htmlStr.push('<h2>' + dataArr[i].date + ' ' + dataArr[i].title + '</h2>');

        }
        htmlStr.push('<div class="circle"></div>');
        htmlStr.push('<div class="pic-words">');
        htmlStr.push('<img src="' + dataArr[i].img + '" alt="">');
        htmlStr.push('<p>' + dataArr[i].content + '</p>');
        htmlStr.push('</div></div>');
    }

    oBody.innerHTML = htmlStr.join('');
};

cardGenerator(together);