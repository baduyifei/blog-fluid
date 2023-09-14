const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: true,
    autoplay: true,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    theme: '#333', //主题色
    audio: [
        {
            name: '如愿',
            artist: '王菲',
            url: '1.王菲 - 如愿.mp3',
            cover: '',
        },
        {
            name: '左手指月',
            artist: '萨顶顶',
            url: '2.萨顶顶 - 左手指月.mp3',
            cover: 'cover2.jpg',
        }
    ]
});