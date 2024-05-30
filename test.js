// connect to a websocket server.
var ws = new WebSocket("ws://10.115.16.218:8881/websocket")
ws.onopen = function () {
    alert("Websocket opened")
}

// var AudioRecorder;
// var AudioChunks = []
// // function: record audio


document.getElementById("start").addEventListener("click", async function () {
    document.getElementById("start").style.backgroundColor = '#01C864'
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    
    const AudioRecorder = new MediaRecorder(stream)
    AudioRecorder.start()
    const AudioChunks = []
    
    AudioRecorder.ondataavailable = (e) => {
        AudioChunks.push(e.data)
        console.log (AudioChunks.length)
    }

    AudioRecorder.onstop = (e) => {
        const audioblob = new Blob(AudioChunks)
        alert(audioblob.size)
    }

    document.getElementById("stop").addEventListener("click",function () {
        document.getElementById("start").style.backgroundColor = '#DB0101'
        alert("stopping recorder")
        AudioRecorder.stop()
        // const blob = new Blob(AudioChunks,{type:"audio/mp3; codecs=mp3"})
        // alert (blob.size)
    })
})




// document.getElementById("start").addEventListener("click", function() {
//     startAudio();
// });







// // Function 1 - Record Audio
// const recordAudio = () =>
//   new Promise(async resolve => {
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     const mediaRecorder = new MediaRecorder(stream);
//     const audioChunks = [];

//     mediaRecorder.addEventListener("dataavailable", event => {
//       audioChunks.push(event.data);
//     });

//     const start = () => mediaRecorder.start();

//     const stop = () =>
//       new Promise(resolve => {
//         mediaRecorder.addEventListener("stop", () => {
//             const audioBlob = new Blob(audioChunks);
//             const audioUrl = URL.createObjectURL(audioBlob);
//             const audio = new Audio(audioUrl);
//             const play = () => audio.play();
//             resolve({ audioBlob, audioUrl, play });

//             const a = document.createElement('a');
//             a.style.display = 'none';
//             a.href = audioUrl;
//             a.download = "Audio.mp3";
//             document.body.appendChild(a);
//             a.click();
//         });

//         mediaRecorder.stop();
//     });

//     resolve({ start, stop });
// });

// // Function 2 - Start & End Audio
// async function startAudio() {
//     const recorder = await recordAudio();
//     recorder.start();

//     document.getElementById("stop").addEventListener("click", async function() {
//         const audio = await recorder.stop();
//         audio.play();
//     });
// }






