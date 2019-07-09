const multiplicationTable=require('../multiplicationTable');
it('should return false when invoke isValid given start bigger end',()=>{
    //give
    const start=5,end=1;
    //when
    const res=multiplicationTable.isValid(start,end);
    //then
    expect(res).toBe(false);
});

it('should return false when invoke isValid given start is minus',()=>{
    //give
    const start=-1,end=2;
    //when
    const res=multiplicationTable.isValid(start,end);
    //then
    expect(res).toBe(false);
});

it('should return false when invoke isValid given end bigger than 1000',()=>{
    //give
    const start=1,end=1900;
    //when
    const res=multiplicationTable.isValid(start,end);
    //then
    expect(res).toBe(false);
});

it('should return true when invoke isValid given start 2 end 4',()=>{
    //give
    const start=2,end=4;
    //when
    const res=multiplicationTable.isValid(start,end);
    //then
    expect(res).toBe(true);
});

it('should return multiplication table when invoke createMultiplicationTable given start 2 end 4',()=>{
    //give
    const start=2,end=4;
    //when
    const res=multiplicationTable.createMultiplicationTable(start,end);
    //then
    expect(res).toBe(
        '2*2=4\n' +
        '2*3=6  3*3=9\n' +
        '2*4=8  3*4=12  4*4=16');
});