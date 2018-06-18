
function calc(nums) {
    Number(nums);
    return nums;
}

if(calc(2+2) == 4) {
    console.log('Todo bien, todo correcto');
}else {
    console.log('Lo siento, ha salido algo mal');
}

if(calc(5+4*2/2) == 9) {
    console.log('Todo bien, todo correcto');
}else {
    console.log('Lo siento, ha salido algo mal');
}

if(calc(3/2) == 3/2) {
    console.log('Error en el calculo');
}

if(calc('**4-2') == '**4-2') {
    console.log('Error en el calculo');
}

if(calc(45-2) == 45-2) {
    console.log('Error en el calculo');
}