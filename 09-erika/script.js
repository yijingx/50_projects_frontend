const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach((sound)=>{
    const btn = document.createElement("button");
    btn.innerText = sound;
    btn.classList.add('btn');
    const audio = document.getElementById(sound);
    btn.addEventListener("click",()=>{
        stopPlay();
        audio.play()
    })
    document.getElementById('buttons').appendChild(btn)
})

function stopPlay(){
    sounds.forEach(sound=>{
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0;
    })
}