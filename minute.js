class Minute {
   constructor(mn){
    mnAngle = map(mn, 0, 60, 0, 360);
   }

   display(){
    push ();
    rotate (mnAngle);
  stroke ("blue");
  strokeWeight(7);
  line(400,200,300,0);
  pop();
   }
}