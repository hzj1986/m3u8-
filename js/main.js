// main.js 
var videoElement = document.getElementById('myVideo');
 
// 用于播放和暂停视频的函数 
function togglePlay() {
    if (videoElement.paused || videoElement.ended) {
        videoElement.play();
    } else {
        videoElement.pause();
    }
}
 
// 当视频就绪时，注册事件监听器 
videoElement.addEventListener('loadedmetadata', function() {
    // 设置默认播放状态为暂停 
    videoElement.defaultPlaybackRate = 1.0; // 正常速度播放 
    videoElement.playbackRate = 1.0; // 正常速度播放 
 
    // 绑定播放/暂停按钮事件 
    document.getElementById('play-pause-button').addEventListener('click', togglePlay);
});