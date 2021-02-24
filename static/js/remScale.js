// JavaScript Document
(function (doc, win) {
        // html
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                // 1.js获取当前的屏幕宽
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                // 2.
                if(clientWidth>=750){
                    docEl.style.fontSize = '100px';
                }else{
                    //  1rem  100px    750px
                    //  1rem   f=50    = 375px
                                                // f=375/750*100
                                                // f=当前屏幕宽/750*100
                    //  1rem   f?    = 320px(js自己可以获取)
                    // 3.
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                }
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false); //绑定事件
        doc.addEventListener('DOMContentLoaded', recalc, false);
		
})(document, window);
