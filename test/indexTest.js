const assert= require('assert')
const calculator= require('../index')

 describe('Calculator', ()=>{
     describe('Additon', ()=>{
         it('should add two numbers', ()=>{
             assert.strictEqual(calculator.add(6,2), 8)
         })
     })
     describe('Subtraction', ()=>{
         it('should subtract two numbers', ()=>{
             assert.strictEqual(calculator.subtract(7,2), 5)
         })
     })
     describe('Multiply', ()=>{
         it('should multiply two numbers', ()=>{
             assert.strictEqual(calculator.multiply(5,2), 10)
         })
     })
     describe('Divison', () => {
         it('should divide two numbers', ()=>{
             assert.strictEqual(calculator.divide(4,2),2)
         })
         
     })
     
 })



