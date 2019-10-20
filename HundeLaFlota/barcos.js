class patera{
	constructor(){
		this.health= new Array();
		this.health[0]=1;
		this.pos=new Array();
	}
}
class destructor{
	constructor(){
		this.health= new Array();
		for(var i=0; i<2; i++) {
    		this.health[i]= 1;
		}
		this.pos=new Array();
		this.dir="";
	}
}
class acorazado{
	constructor(){
		this.health= new Array();
		for(var i=0; i<3; i++) {
    		this.health[i]= 1;
		}
		this.pos=new Array();
		this.dir="";
	}
}
class portaaviones{
	constructor(){
		this.health= new Array();
		for(var i=0; i<4; i++) {
    		this.health[i]= 1;
		}
		this.pos=new Array();
		this.dir="";
	}
}
class tablero{
	constructor(){
		this.tableroA = new Array(10);
		for(var i=0; i<10; i++) {
    		this.tableroA[i] = new Array(10);
		}
		for(var i=0; i<10; i++) {
			for (var j=0; j<10; j++){
    		this.tableroA[i][j] = 0;
			}
		}
	}
}
