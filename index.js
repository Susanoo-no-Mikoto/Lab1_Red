const readline = require('readline');
let arg1 = Number(process.argv[2]); // Изначальная стоимость инвестиционного портфеля
function fsd(){
    const arg = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    arg.question('Укажите проценты? ', (arg2) => {
        
        arg2 = arg2.split(' ');
        let summ = arg1;
        let res;
        let arr = [];
        for (let i = 0; i < arg2.length; i++){
            let a;
            a = arg2[i] / 100;
            a = summ * a;
            arr.push(a);
            res = arg1 + a; 
            console.log(arg2[i]+'%');
            console.log(res);
            let ss = 0;
            for (let j = 0; j < arr.length; j++){
                if ( arr[j-1] != isNaN){
                    ss = arr[j] + ss;
                } else{ 
                    ss = arr[j];
                }    
            }
            summ = ss + arg1;
        }
        //console.log(arr);
        
        
        console.log(summ);
        arg.close();
    });
}
fsd();
    