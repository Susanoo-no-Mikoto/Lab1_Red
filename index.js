const readline = require('readline');
let arg1 = Number(process.argv[2]); // Изначальная стоимость инвестиционного портфеля
function fsd(){
    const arg = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    arg.question('Укажите проценты? ', (arg2) => {
        
        arg2 = arg2.split(' ');
        let res;
        for (let i = 0; i < arg2.length; i++){
            let a = Number;
            a = arg2[i] / 100;
            a = arg1 * a;
            res = arg1 + a;
        //hhh();
        //arr.push(answer);
            console.log(arg2[i]+'%');
            console.log(res);
        }
        arg.close();
        //console.log(arg2);
    });
}
fsd();
    