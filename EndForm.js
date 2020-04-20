class EndForm {
constructor(){
this.gameOver = createElement('h2');
this.collect = createElement('h2');
this.miss = createElement('h2');
this.waysl = createElement('h2');
this.ways2 = createElement('h2');
this.Rank = createElement('h2');
this.retry = createButton("Retry");
this.n = score/200;
this.r = misses/200;
this.rank = createElement('h2');

}
done(){
    this.gameOver.hide();
    this.collect.hide();
    this.miss.hide();
    this.waysl.hide();
    this.ways.hide();
    this.Rank.hide();
    this.retry.hide();
}
display(){
 if(score<1000) {
this.rank =  "Novice";
 }  
 if(score<2000) {
    this.rank = " Star";
     }  
     if(score<3000) {
        this.rank =  "King";
         }  
         if(score<4000) {
            this.rank = "Master";
             }  
             if(score<6000) {
                this.rank =  "Legend";
                 }  
this.gameOver.html("This was indeed an excellent try !!!");
this.gameOver.position(80,90);
this.collect.html(" You collected "+ score+"ml of water which filled the thirst of "+ this.n + " members of your tribe.");
this.collect.position(80,190);
this.miss.html("You missed "+ misses+"ml of water which could fill the thirst of "+ this.r +" more members of your tribe.")
this.miss.position(80,290);
this.Rank.html("Your rank : " + this.rank)
this.Rank.position(80,390);
this.waysl.html("You Dont know it's true worth until it's gone. SAVE WATER")
this.waysl.position(80,490);
this.ways2.html("A drop of water is Worth more than a sack of gold to a thirsty man.")
this.ways2.position(80,590);
this.retry.position(80,690);

this.retry.mousePressed(()=>{
frameCount = 0;
car.velocity.y = 24;
puddle.velocity.y = 24;
misses = 0;
score = 0;
player.visible = true;
car.visible = true;
puddle.visible = true;
ground.visible = true;
gameState = "play";
this.done();
})






}




}