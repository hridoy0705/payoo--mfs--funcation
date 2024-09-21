

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    console.log('click here dear dada');

    // getInputFiledById();

    // const addMoney =getInputFiledById();
    // console.log('add money value', addMoney)




const addMoney = getInputFiledById('input-add-money')
const pinNumber = getInputFiledById('input-pin-number')
console.log('add money with parameter', addMoney, pinNumber);










    // get add amount and pin number
//    const addMoney = document.getElementById('input-add-money').value;
//    const addMoneyNumber = parseFloat(addMoney)
//    const pinNumber = document.getElementById('input-pin-number').value;
//    wrong way to varifiy pin
    // if(pinNumber === '1234'){
    //     const balance = document.getElementById('account-balance').innerText;
    //     const balanceNumber = parseFloat(balance);
    //     const newBalance = addMoneyNumber + balanceNumber;
    //     document.getElementById('account-balance').innerText = newBalance;

    // }
    // else{
    //     alert('Falied to add money')
    // }
}) 