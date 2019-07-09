function isValid(start, end) {
    return start <= end && start > 0 && end <= 1000;
}

function createMultiplicationTable(start, end) {
    if (!isValid(start, end)) return null;
    var table='';
    for (let i=start;i<=end;i++){
        for(let j=start;j<=i;j++){
            table+=j+'*'+i+'='+i*j+'  ';
        }
        table = table.substring(0, table.length-2);
        table+='\n';
    }
    table = table.substring(0, table.length - 1);
    return table;
}

module.exports={
    isValid,createMultiplicationTable,
};