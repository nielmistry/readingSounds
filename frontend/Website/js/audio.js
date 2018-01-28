var play_index;
var songs = [
  ["Anger",/*url*/],
  ["Fear",'https://incompetech.com/music/royalty-free/mp3-royaltyfree/Unseen%20Horrors.mp3'],
  ["Joy",'https://incompetech.com/music/royalty-free/mp3-royaltyfree/Jazz%20Brunch.mp3'],
  ["Sadness",'https://incompetech.com/music/royalty-free/mp3-royaltyfree/The%20Curtain%20Rises.mp3'/*url*/],
  ["Confidence",/*url*/],
  ["Analytical",/*url*/],
  ["Tentative",/*url*/],
];

var toPlay = new Audio(songs[-1][1]);

function which_song(tone){
  if (tone == 'anger')
  play_index = 0;
  if (tone == 'fear')
  play_index = 1;
  if (tone == 'joy')
  play_index = 2;
  if (tone == 'sadness')
  play_index = 3;
  if (tone == 'confidence')
  play_index = 4;
  if (tone == 'analytical')
  play_index = 5;
  if (tone == 'tentative')
  play_index = 6;
}

function play()
{
  var tone = 'fear';// get from server 
  which_song(tone);
  toPlay = new Audio(songs[play_index][1])
  toPlay.play();
  toPlay.loop = true;

}
function stop()
{
  toPlay.pause();
  toPlay.currentTime = 0;
}
