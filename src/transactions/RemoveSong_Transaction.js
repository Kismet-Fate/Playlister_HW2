import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author Ailun Yu
 */
export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, song, index) {
        super();
        this.app = initApp;
        let s = song;
        this.song = s;
        this.index = index;
    }

    doTransaction() {
        this.app.deleteSong(this.index);
    }
    
    undoTransaction() {
        this.app.addSong(this.song, this.index-1);
    }
}