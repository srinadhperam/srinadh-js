
const list =[
    {
        video:'images/video-1.mp4',
        titel:'3D helicopter animation'
    },
    {
        video:'images/video-2.mp4',
        titel:'Nature falling animation'
    },
    {
        video:'images/video-3.mp4',
        titel:'Water flow animation'
    },
    {
        video:'images/video-4.mp4',
        titel:'gameing  animation'
    },
]
const categories = Array.from(new Set(list.map(item => item.video)))
    .map(video => {
        return list.find(item => item.video === video);
    });

document.getElementById('list').innerHTML = categories.map((item) => {
    const { video, title } = item;
    return `
        <div class="list active">
            <video src="${video}" class="list-video" controls></video>
            <h3 class="list-title">${title}</h3>
        </div>
    `;
}).join('');

let videolist = document.querySelectorAll('.video-list .list');

videolist.forEach(remove => {
    remove.classList.remove('active');
});

videolist.forEach(vid => {
    vid.onclick = () => {
        videolist.forEach(remove => {
            remove.classList.remove('active');
        });
        
        vid.classList.add('active');
        
        let src = vid.querySelector('.list-video').src;
        vid.querySelector('.list-title').innerHTML
        
        document.querySelector('.main-video .main').src = src;
        document.querySelector('.main-video .main').play();
        
        document.querySelector('.main-video .main-titel').innerHTML = title;
    };
});
