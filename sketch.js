var database;
var gamestate=0
var playercount
var form,player,game1;
function setup(){
database=firebase.database();
    createCanvas(500,500);
    game1=new game();
    game1.getstate();
    game1.start();
}
//.ref() is used to refer to the location of the
//database value we care about.

//.on() creates a listener which keeps
//listening to the changes in the database.

//.set() is used to set the value in the database.
function draw(){

}
    