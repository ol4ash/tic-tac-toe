class TicTacToe {
    constructor() {
        this.matrix=[[null,null,null],[null,null,null],[null,null,null]];
        this.playerSymbol='x';
        this.winner=null;
        this.finished=false;
        this.draw=false;
        this.noTurns=false;
        
    }

    getCurrentPlayerSymbol() {
        return this.playerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex]==null){
            this.matrix[rowIndex][columnIndex]=this.playerSymbol;
            
            if (this.playerSymbol=='x'){
                this.playerSymbol='o'
            }
            else {this.playerSymbol='x'
            }
        }

        if ((this.matrix[0][0]==this.matrix[0][1])&&(this.matrix[0][1]==this.matrix[0][2])){
    		this.winner=this.matrix[0][0];
    	}
    	else if ((this.matrix[1][0]==this.matrix[1][1])&&(this.matrix[1][1]==this.matrix[1][2])){
    		this.winner=this.matrix[1][0];
    	}
    	else if((this.matrix[2][0]==this.matrix[2][1])&&(this.matrix[2][1]==this.matrix[2][2])){
    		this.winner=this.matrix[2][0];
    	}
    	else if((this.matrix[0][0]==this.matrix[1][0])&&(this.matrix[1][0]==this.matrix[2][0])){
    		this.winner=this.matrix[0][0];
    	}
    	else if((this.matrix[0][1]==this.matrix[1][1])&&(this.matrix[1][1]==this.matrix[2][1])){
    		this.winner=this.matrix[0][1];
    	}
    	else if((this.matrix[0][2]==this.matrix[1][2])&&(this.matrix[1][2]==this.matrix[2][2])){
    		this.winner=this.matrix[0][2];
    	}
    	else if((this.matrix[0][0]==this.matrix[1][1])&&(this.matrix[1][1]==this.matrix[2][2])){
    		this.winner=this.matrix[0][0];
    	}
    	else if((this.matrix[0][2]==this.matrix[1][1])&&(this.matrix[1][1]==this.matrix[2][0])){
    		this.winner=this.matrix[0][2];
        }

        let count=0;
        for (let i=0; i<3; i++){
            for(let j=0; j<3; j++){
                if (this.matrix[i][j]==null){
                    count++;
                }
            }
        }
        if (count==0){
            this.noTurns=true;
        }

        if ((this.noTurns==true)&&(this.winner==null)){
            this.draw=true;
        }

        if ((this.draw==true)||(this.winner!=null)){
            this.finished=true;
        }
    }

    isFinished() {	
    	return this.finished;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return this.noTurns;
    }

    isDraw() {      
        return this.draw
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
