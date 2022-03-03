$(window).on('load', function() {

    // 1度だけ実行する処理内容
    $("#splash").delay(1500).fadeOut('slow'); //ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(1200).fadeOut('slow'); //ロゴを1.2秒（1200ms）待機してからフェードアウト

});