const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    length: 0,
    arr: [],

    getLength() {
        return this.length;
    },
    addLink(value = '') {



        if(value === ''){
            this.length++;

            this.arr.push(`(${''})`);
            return this;
        }
        this.arr.push(`( ${value} )`);
        this.length++;
        return this;

    },
    removeLink(position) {
        if ( position === 0  || position > this.length || position < 0 || typeof position === 'string' ) {
            this.arr = []
            throw 'You can\'t remove incorrect link!';
        }
        this.arr.splice(position-1,1);
        this.length--;
        return this;
    },
    reverseChain() {
        this.arr = this.arr.reverse()
        return this;
    },
    finishChain() {
        const result = this.arr.join('~~');
        this.length = 0;
        this.arr = [];
        return result ;
    }


};

module.exports = {
  chainMaker
};
