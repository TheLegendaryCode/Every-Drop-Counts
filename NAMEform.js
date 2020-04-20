class NAMEform {

 constructor(){
   this.input = createInput("Userame");
   this.play = createButton("Play");
   this.start = createButton("Start");
   this.continue = createButton("Continue");
   this.title = createSprite(600,150,485,70);
   this.greeting = createElement('h2');
  this.gender = createElement('h2');
  this.name = createElement('h2') ;
  this.logo2 = createSprite(600,350,300,450);
  this.logo1 = createSprite(600,350,300,450);
  this.present = createElement('h2');
  this.male = createButton("Male");
  //44.1,21
  this.female = createButton("Female");
   this.fact1 = createElement('h2');
   this.fact2 = createElement('h2');
   this.fact3 = createElement('h2');
   this.fact4 = createElement('h2');
   this.fact5 = createElement('h2');


 }
hide(){
this.greeting.hide();
this.male.hide();
this.female.hide();
//this.title.hide();
this.input.hide();
this.start.hide();
}

display(){

   this.logo2.addImage(logo2img);
   this.logo1.addImage(logo1img);
   this.title.addImage(capture);
   //this.male.addImage(maleB);
   //this.title.visible = false;
 // this.logo2.visible = false;
    this.present.html("Proudly Presents...");
    this.present.position(600,625);
    setTimeout(() => {this.present.html(" ");},4500);
    setTimeout(() => {this.logo1.visible = false;},4501);
    setTimeout(() => {this.present.hide();},4502);
    setTimeout(() => {this.continue.position(600,680);},4503);

    this.continue.mousePressed(()=>{
    this.logo2.visible = false;
    this.continue.hide();
    
    //this.title.visible = true;
    //this.title.html("Every Drop Counts");
    //this.title.position(200,100);
    
    this.input.position(445,200);
    this.male.position(450,300);
    this.female.position(500,300);
    })
    this.name = this.input.value(); 

    
    

this.male.mousePressed(()=>{
this.title.visible = false;
  this.gender = "male";

 this.input.hide();
 this.male.hide();
 this.female.hide();
 this.start.position(200,300);

 this.greeting.html("Sawubona " + this.name + "(Greetings in South African)");
this.greeting.position(200,200);
})

this.female.mousePressed(()=>{
  this.title.visible = false;
this.gender = "female";

  this.input.hide();
  this.male.hide();
  this.female.hide();
  this.start.position(200,300);
 
  this.greeting.html("Sawubona " + this.name + "(Greetings in South African)");
 this.greeting.position(200,200);
 })




this.start.mousePressed(()=>{
this.hide();

this.fact1.html("While an average family uses 552 gallons of water a day, an average African family only gets 5 gallons of water a day ");
this.fact1.position(80,90);
setTimeout(() => {this.fact2.html("When most families get their water deliveried to their houses, African women have to walk an average of 6.4 km, this results in an average 40 billion work hours being lost each year in Africa.");  },4500);
this.fact2.position(80,190);
setTimeout(() => {this.fact3.html("It is reported that 115 people in africa die every hour due to poor sanitation and contaminated water."); }, 11300);
this.fact3.position(80,290);
setTimeout(() => {this.fact4.html("You,"+ this.name + " are an African " + this.gender + ".Your main goal is to amass as much water as you can which will be used for you and your tribe.Remember you need to do this task while dodging the sudanese militants who treat the public in a really ill manner."); }, 17000);
this.fact4.position(80,390);
setTimeout(() => {this.fact5.html("Best of luck and remember Every Drop Counts !!!"); }, 26000);
this.fact5.position(80,490);
this.play.position(80,530);

})

this.play.mousePressed(()=>{
this.fact1.hide();
this.fact2.hide();
this.fact3.hide();
this.fact4.hide();
this.fact5.hide();
this.play.hide();

//use = new Use();
//use.display();
gameState = "play";


})




    

drawSprites();
}











}