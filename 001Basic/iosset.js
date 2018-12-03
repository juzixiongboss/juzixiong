var oAudio = document.getElementById('lotteryAudio');
if(window.WeixinJSBridge) {
    WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
        oAudio.play();
    }, false);
} else {
    document.addEventListener("WeixinJSBridgeReady", function() {
        WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
            oAudio.play();
        });
    }, false);
}
oAudio.play();
