var Images = [
  "assets/images/1.jpg",
  "assets/images/2.jpg",
  "assets/images/3.jpg",
  "assets/images/4.jpg",
  "assets/images/5.jpg",
  "assets/images/6.jpg",
  "assets/images/7.jpg",
  "assets/images/8.jpg",
  "assets/images/9.jpg",
  "assets/images/10.jpg",
  "assets/images/guts.png",
  "assets/images/panda.jpg",
];

console.log(Images);
for( i=Images.length -1, i>=1; i--){
  var a = Math.floor(Math.random()*(i+1));

  var b = Images[i];
  Images[i] = Images[a];
  Images[a] = b;
}
console.log(Images);
