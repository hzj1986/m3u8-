// main.js 
var videoElement = document.getElementById('myVideo');
 
// ���ڲ��ź���ͣ��Ƶ�ĺ��� 
function togglePlay() {
    if (videoElement.paused || videoElement.ended) {
        videoElement.play();
    } else {
        videoElement.pause();
    }
}
 
// ����Ƶ����ʱ��ע���¼������� 
videoElement.addEventListener('loadedmetadata', function() {
    // ����Ĭ�ϲ���״̬Ϊ��ͣ 
    videoElement.defaultPlaybackRate = 1.0; // �����ٶȲ��� 
    videoElement.playbackRate = 1.0; // �����ٶȲ��� 
 
    // �󶨲���/��ͣ��ť�¼� 
    document.getElementById('play-pause-button').addEventListener('click', togglePlay);
});