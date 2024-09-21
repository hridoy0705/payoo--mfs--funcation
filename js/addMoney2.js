
    document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFiledById('input-add-money')
    const pinNumber = getInputFiledById('input-pin-number')

    if(isNaN(addMoney)){
        return;
    }

    if(pinNumber === 1234){

    const balance = getTextFiledBYId('account-balance');
    const newBalance = balance + addMoney;
    document.getElementById('account-balance').innerText = newBalance;
     const p = document.createElement('p');
        p.innerText =`Added:${addMoney} Tk. balance: ${newBalance}`;
        console.log(p)

        // should be common funcation
        document.getElementById('Transactions-continer').appendChild(p)
    }
    else{
    alert('Faild to add the money');

    }

    })