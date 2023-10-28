export class Game {

    

    fields: string[][];
    
    
    player:Player;
    

    constructor(fields: string[][],player:Player=Player.X) {
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
        var hasEmptyCell = false;
        this.fields.forEach(row => row.forEach(cell =>{
            hasEmptyCell = hasEmptyCell || this.cellIsEmpty(cell);
        }))
        return !hasEmptyCell;
    }

    private cellIsEmpty(cell:string):boolean {
        return cell === " ";
    }

    public getPossiblePlayPositions():Position[]{
        var positions:Position[] =  [];
        var x = 0;
        this.fields.forEach(row =>{
            var y = 0; 
            row.forEach(cell =>{
                if(this.cellIsEmpty(cell)){
                    positions.push(new Position(x,y));
                }
                y ++;                
            })
            x ++;
        })
        return positions;
    }

    public play(position:Position){
        if(!this.isOver()){
            if(this.cellIsEmpty(this.fields[position.getX()][position.getY()])){
                this.fields[position.getX()][position.getY()] = this.player.toString();
            }
            this.nextPlayer();
        }
    }

    private nextPlayer(){
        if(!this.isOver()){
            this.player = (this.player == Player.X ? Player.O : Player.X);
        }
    }

    public currentPlayer():Player{
        return this.player;
    }
}

enum Player{
    X,
    O
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