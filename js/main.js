// トップページのアニメーション
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
if (windowwidth > 768) {
    var responsiveImage = [ //PC用の画像
        // ./img/この部分だけを変える。必ず英語名に！！
        { src: './img/top-slider/2022album.JPG' }, //1枚目
        { src: './img/top-slider/2022bachelor.JPEG' }, //2枚目
        { src: './img/top-slider/title_3.JPG' } //3枚目
    ];
} else {
    var responsiveImage = [ //タブレットサイズ（768px）以下用の画像
        { src: './img/top-slider/2022album.JPG' }, //1枚目
        { src: './img/top-slider/2022bachelor.JPEG' }, //2枚目
        { src: './img/top-slider/title_3.JPG' } //3枚目
    ];
}

//Vegas全体の設定

$('#slider').vegas({
    overlay: true, //画像の上に網線やドットのオーバーレイパターン画像を指定。
    transition: 'fade2', //切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
    transitionDuration: 2000, //切り替わりのアニメーション時間をミリ秒単位で設定
    delay: 5000, //スライド間の遅延をミリ秒単位で。
    animationDuration: 20000, //スライドアニメーション時間をミリ秒単位で設定
    animation: 'random', //スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
    slides: responsiveImage, //画像設定を読む
});
// ハンバーガーメニュー
$(".hum-btn").click(function() {
    $(this).toggleClass('active');
});

// モーダル用JS
$(".gallery").modaal({
    type: 'image',
    overlay_close: true, //モーダル背景クリック時に閉じるか
    before_open: function() { // モーダルが開く前に行う動作
        $('html').css('overflow-y', 'hidden'); /*縦スクロールバーを出さない*/
    },
    after_close: function() { // モーダルが閉じた後に行う動作
        $('html').css('overflow-y', 'scroll'); /*縦スクロールバーを出す*/
    }
});
// ふわっと出現させる


// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function() {
    // ふわっ
    $('.fadeUpTrigger').each(function() { //fadeUpTriggerというクラス名が
        var elemPos = $(this).offset().top + 100; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp'); // 画面内に入ったらfadeUpというクラス名を追記
        } else {
            $(this).removeClass('fadeUp'); // 画面外に出たらfadeUpというクラス名を外す
        }
    });

}); // ここまで画面をスクロールをしたら動かしたい場合の記述

lightbox.option({
    'wrapAround': true, //グループ最後の写真の矢印をクリックしたらグループ最初の写真に戻る
    'albumLabel': ' %1 / total %2 ' //合計枚数中現在何枚目かというキャプションの見せ方を変更できる
})