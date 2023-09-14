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
        name: "左手指月",
        artist: '萨顶顶',
        url: 'http://m801.music.126.net/20230915053859/85dc131e45cae6e07a734d7b6a2969f7/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/15655489139/2358/b097/4bdb/12325723f16f5731cdf16f1825cb98b5.mp3',
        cover: 'https://wenqidao.oss-cn-shanghai.aliyuncs.com/img/202309150523977.png', 
    },
    ]
});