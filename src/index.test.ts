import { GildedRose, Item } from '.'

describe('When the test start', () => {
    test('Setup is OK', () => {
        expect(true).toEqual(true)

        expect(new GildedRose().updateQuality()).toEqual([])
    })
    describe('when day ends', function() {
        describe('when it\'s an standard item',function (){
            test('The standard item sellIn is decrease by one', function(){ 
                //arrange 
                const initialSellIn = 1
                const expectedResult = 0
                //act
                const decreaseSellin = updateQuality()
                //assert
                expect(decreaseSellin).toEqual(expectedResult)
            })
            test('The standard item Quality is decrease by one',function(){
                expect(updateQuality()).toEqual(expectedResult)
            })
            test('The quality is never negative',function(){
                //arrange 
                const initialQuality = 0
                const expectedResult = 0
                //act
                const decreaseSellin = updateQuality()
                //assert
                expect(decreaseSellin).toEqual(expectedResult)
            })
            describe('When sellIn is equal or under 0',function(){
                test('The standard item Quality is decrease by 2',function(){
                    expect(updateQuality()).toEqual(expectedResult)
                })
            })
        })
        describe('when it\'s an Aged Brie',function (){
            test('item sellIn is decrease by one', function(){ 
                //arrange 
                const initialSellIn = 1
                const expectedResult = 0
                //act
                const decreaseSellin = updateQuality()
                //assert
                expect(decreaseSellin).toEqual(expectedResult)
            })
            test('The item Quality is increase by one',function(){
                expect(updateQuality()).toEqual(expectedResult)
            })
            test('The quality is never superior to 50',function(){
                expect(updateQuality()).toEqual(expectedResult)
            })
        })
        describe('when it\'s an Sulfuras',function (){
            test('item sellIn is never update', function(){ 
                //arrange 
                const initialSellIn = 1
                const expectedResult = 1
                //act
                const decreaseSellin = updateQuality()
                //assert
                expect(decreaseSellin).toEqual(expectedResult)
            })
            test('The item Quality is never update',function(){
                expect(updateQuality()).toEqual(expectedResult)
            })        
        })
        describe('when it\'s an Bacstage passes',function (){
            test('item sellIn is decrease by one', function(){ 
                //arrange 
                const initialSellIn = 1
                const expectedResult = 0
                //act
                const decreaseSellin = updateQuality()
                //assert
                expect(decreaseSellin).toEqual(expectedResult)
            })
            test('The item Quality is increase by one',function(){
                expect(updateQuality()).toEqual(expectedResult)
            })
            describe('when the sellIn is equal or under 10',function(){
                test('The quality is increase by 2',function(){
                    expect(updateQuality()).toEqual(expectedResult)
                })
            })
            describe('when the sellIn is equal or under 5',function(){
                test('The quality is increase by 3',function(){
                    expect(updateQuality()).toEqual(expectedResult)
                })
            })
            describe('when the sellIn is equal or under 0',function(){
                test('The quality is equal to 0',function(){
                    expect(updateQuality()).toEqual(expectedResult)

                })
            })
        })
        describe('when it\'s an conjured item',function (){
            test('The standard item sellIn is decrease by one', function(){ 
                //arrange 
                const initialSellIn = 1
                const expectedResult = 0
                //act
                const decreaseSellin = updateQuality()
                //assert
                expect(decreaseSellin).toEqual(expectedResult)
            })
            test('The standard item Quality is decrease by two',function(){
                expect(updateQuality()).toEqual(expectedResult)
            })
            test('The quality is never negative',function(){
                //arrange 
                const initialQuality = 0
                const expectedResult = 0
                //act
                const decreaseSellin = updateQuality()
                //assert
                expect(decreaseSellin).toEqual(expectedResult)
            })
            describe('When sellIn is equal or under 0',function(){
                test('The standard item Quality is decrease by 4',function(){
                    expect(updateQuality()).toEqual(expectedResult)
                })
            })
        })
    })
})
