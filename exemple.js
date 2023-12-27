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
        this.arr = []
        return result;
    }


};

console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(),chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain())
console.log(chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain())
