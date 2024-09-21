
document.getElementById('btn-cash-out').addEventListener('click', function(event){

    event.preventDefault();

    const cashOut = getInputFiledById('input-cash-out')
    const pinNumber =getInputFiledById('input-cash-out-pin')

    // console.log('click handler', cashOut, pinNumber)

    if(pinNumber === 1234){

        const balance= getTextFiledBYId('account-balance')
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction
       const div = document.createElement('div');
       div.classList.add('bg-red-500');
       div.innerHTML =`
       <h3 class = "text-2xl font-bold">Cash Out</h3>
       <p> ${cashOut} Withdrow. new balance ${newBalance}`


       document.getElementById('Transactions-continer').appendChild(div)
    }
    else{
        alert(' No money for you...DGM')
    }

})










