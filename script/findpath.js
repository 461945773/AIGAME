var CbobsMap = {
    MAP_HEIGHT: 10,
    MAP_WIDTH: 15,
    map: 0,
    memory: 0,
    ctor: function() {
        
        var temple = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1,
            8, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1,
            1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1,
            1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1,
            1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1,
            1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 5,
            1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        
        this.map = new Array();
        for (var i = 0; i < this.MAP_HEIGHT; i++) {
            this.map[i] = new Array();
            for (var j = 0; j < this.MAP_WIDTH; j++) {
                this.map[i][j] = temple[i*this.MAP_HEIGHT+j];
            }
        }
        
        this.memory = new Array();
        for (var i = 0; i < this.MAP_HEIGHT; i++) {
            this.memory[i] = new Array();
            for (var j = 0; j < this.MAP_WIDTH; j++) {
                this.memory[i][j] = 0;
            }
        }
    }
}

$(function() {
    CbobsMap.ctor();
    console.log(CbobsMap.map.toString());
});