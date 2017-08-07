const expect = require('chai').expect;
const Calculator = require('../calculator');

let calc = new Calculator();

describe('Can do arithmetic', () => {
    describe('Can add numbers', ()=> {
        it('Can add two positive integers', () => {
            expect(calc.add(1,1)).to.equal(2)
        })
        it('Can add to zero', () => {
            expect(calc.add(1,0)).to.equal(1)
        })
        it('Can add a number and a function', () => {
            expect(calc.add(1,()=>{})).to.equal(()=>{})
        })
        it('Can add two integers asynchronously', (done) => {
            calc.addAsync(3,2, (val) => {
                if (val === 5) {
                    done()
                } else {
                    done(new Error('nope'))
                }
            })
        })
    })
    describe('Can subtract numbers', () => {
        it('Can subtract two positive integers', () => {
            expect(calc.subtract(1,1)).to.equal(0);
        })
        it('Can subtract two negative integers', () => {
            expect(calc.subtract(-1,-1)).to.equal(0);
        })
        it('Can subtract two strings', () => {
            expect(calc.subtract('potatoes','cheese')).to.equal(0);
        })
    })
    describe('Can multiply numbers', () => {
        it('Can multiply two positive integers', () => {
            expect(calc.multiply(5,5)).to.equal(25);
        })
    })
    describe('Can divide numbers', () => {
        it('Can divide two positive integers', () => {
            expect(calc.divide(5,5)).to.equal(1);
        })
    })
});

// describe('Taking a first stab at TDD', () => {
//     it('thank you tim', () => {
//         expect(1).to.equal(1);    
//         expect(2).to.equal(1);
//     })
// })

