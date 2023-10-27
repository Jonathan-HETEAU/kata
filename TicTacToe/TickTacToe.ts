export class Game {

    fields: String[][];
    
    
    player:String;
    

    constructor(fields: String[][],player:String="X") {
        this.fields = fields;
        this.player = player;
    }

    public isOver(): boolean {
        return  this.hasWinner() || this.isFull();
    }

    private hasDiagonalFullPlayer(): boolean{
        var hasDiagonalFull = false;
        hasDiagonalFull = hasDiagonalFull || !this.cellIsEmpty(this.fields[0][0]) && this.fields[0][0] == this.fields[1][1] && this.fields[1][1] == this.fields[2][2] ;
        hasDiagonalFull = hasDiagonalFull || !this.cellIsEmpty(this.fields[0][2]) && this.fields[0][2] == this.fields[1][1] && this.fields[1][1] == this.fields[2][0] ;
        return hasDiagonalFull;
    }

    private hasColumnFullPlayer(): boolean{
        var hasColumnFull = false;
        for(var x in [0,1,2]){
            hasColumnFull = hasColumnFull || !this.cellIsEmpty(this.fields[0][x]) && this.fields[0][x] == this.fields[1][x] && this.fields[1][x] == this.fields[2][x] ;
        }
        return hasColumnFull;
    }

    private hasRowFullPlayer(): boolean{
        var hasRowFull = false;
        for(var y in [0,1,2]){
            hasRowFull = hasRowFull || !this.cellIsEmpty(this.fields[y][0]) && this.fields[y][0] == this.fields[y][1] && this.fields[y][1] == this.fields[y][2] ;
        }
        return hasRowFull;
    }

    public hasWinner():boolean{
        return this.hasColumnFullPlayer() || this.hasRowFullPlayer() || this.hasDiagonalFullPlayer();
    }

    private isFull(): boolean {
        var isfull = true;
        this.fields.forEach(row => row.forEach( cell => isfull = (isfull && !this.cellIsEmpty(cell)) ));
        return isfull;
    }

    private cellIsEmpty(cell:String):boolean {
        return cell.length == 0;
    }

    public getPossiblePlayPositions():Position[]{
        var positions:Position[] =  [];
        for( var x = 0 ; x < 3 ; x ++){
            for( var y = 0 ; y < 3 ; y ++){
                if(this.cellIsEmpty(this.fields[x][y])){
                    positions.push(new Position(x,y));
                } 
            }    
        }
        return positions;
    }

    public play(position:Position){
        if(!this.isOver()){
            if(this.cellIsEmpty(this.fields[position.getX()][position.getY()])){
                this.fields[position.getX()][position.getY()] = "X";
            }
            this.nextPlayer();
        }
    }

    private nextPlayer(){
        if(!this.isOver()){
            this.player = (this.player == "X" ? "O" : "X");
        }
    }

    public currentPlayer():String{
        return this.player;
    }
}

class Position {

    x = 0;
    y = 0;

    constructor(x:number,y:number) {
        this.x = x;
        this.y = y;        
    }

    public getX():number{
        return this.x;
    }

    public getY():number{
        return this.y;
    }

}