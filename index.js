const readline = require('readline');
let arg1 = Number(process.argv[2]); // Изначальная стоимость инвестиционного портфеля
function fsd(){
    const arg = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    arg.question('Укажите проценты? ', (arg2) => {
        
        arg2 = arg2.split(' ');
        let summ = 0;
        let res;
        let arr = [];
        for (let i = 0; i < arg2.length; i++){
            let a;
            a = arg2[i] / 100;
            a = arg1 * a;
            arr.push(a);
            res = arg1 + a; 
            console.log(arg2[i]+'%');
            console.log(res);
        }
        //console.log(arr);
        for (let i = 0; i < arr.length; i++){
            if ( arr[i-1] != isNaN){
                summ = arr[i] + summ;
            } else{ 
                summ = arr[i];
            }    
        }
        summ = summ + arg1;
            console.log(summ);
        arg.close();
    });
}
fsd();
    