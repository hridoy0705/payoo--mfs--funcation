
function getInputFiledById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    console.log(id , inputValue, inputNumber)
    return inputNumber;

}

function getTextFiledBYId(id){
    const textValue =document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
} 

function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('Transactions-History').classList.add('hidden')

    // show the section provide with parameters
    document.getElementById(id).classList.remove('hidden');

}