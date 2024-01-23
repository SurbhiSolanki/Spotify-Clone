console.log("Welcome to Spotify");
let audioElement = new Audio('music/0.mp3');
//audioElement.play();
let songIndex = 0;
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gifi');
//toget array item
let songItems = Array.from(document.getElementsByClassName('songItem'));
let mastersongname = document.getElementById('mastersongname');

let songs =[
  {songname: "Ve-Kamleya", filepath:"music/vekamleya.mp3",coverpath:"cover/download1.jpeg"},
  {songname: "Heeriye", filepath:"music/heeriye.mp3",coverpath:"cover/download8.jpeg"},
  {songname: "Ayaat", filepath:"music/ayat.mp3",coverpath:"cover/download3.jpeg"},
  {songname: "Abaad-Barbaad", filepath:"music/abad.mp3",coverpath:"cover/download4.jpeg"},
  {songname: "Tera-Yaar-Hoon-Main", filepath:"music/tyhm.mp3",coverpath:"cover/download5.jpeg"},
  {songname: "Kabira", filepath:"music/kabira.mp3",coverpath:"cover/download.jpeg"},
  {songname: "agar-tum-sath-ho", filepath:"music/atsh.mp3",coverpath:"cover/tamasha.jpg"},
]
//to upload cover music and name from the array
songItems.forEach((element,i)=>{
  console.log(element,i);
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName('songName')[0].innerText = songs[i].songname;

})

//to start and stop music 
masterplay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    //to add gif
    gif.style.opacity=1;

  }
  else{
    audioElement.pause();
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
    gif.style.opacity=0;
  }
})
// to show audio progressipn
audioElement.addEventListener('timeupdate',()=>{
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  myprogressbar.value = progress;
})
myprogressbar.addEventListener('change',()=>{
  audioElement.currentTime = myprogressbar.value*audioElement.duration/100;
})
const makeallplays =() =>{
  Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    
  })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    makeallplays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `music/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity =1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    mastersongname.innerText = songs[songIndex].songname;
    // if(audioElement.paused || audioElement.currentTime<=0){
    //   e.target.classList.remove('fa-pause-circle');
    //   e.target.classList.add('fa-play-circle');
    // }
    
  })
})
document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>=6){
    songIndex=0;
  }
  else{
    songIndex +=1;
  }
  mastersongname.innerText = songs[songIndex].songname;
  audioElement.src = `music/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity =1;
  masterplay.classList.remove('fa-play-circle');
  masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex<=0){
    songIndex=0;
  }
  else{
    songIndex -=1;
  }
  mastersongname.innerText = songs[songIndex].songname;
  audioElement.src = `music/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity =1;
  masterplay.classList.remove('fa-play-circle');
  masterplay.classList.add('fa-pause-circle');
})