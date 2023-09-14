const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    loop: 'all',
    mini: true,
    theme: '#333',
    preload: 'auto',
    listFolded: true,
    audio: [
    {
        name: "如愿",
        artist: '王菲',
        url: 'hhttps://cdn.jsdelivr.net/gh/baduyifei/tuchuang/ruyuan.mp3',
        cover: 'https://wenqidao.oss-cn-shanghai.aliyuncs.com/img/202309150523977.png', 
    },
    ]
});