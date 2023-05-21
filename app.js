
  const billTotal = document.querySelector("#bill");
  const inputElement = document.querySelector('.display__2 input[type="text"]');
  const numberP = document.querySelector("#number_people");
  const resetBtn = document.querySelector(".ctn");
  const tipLists = document.querySelectorAll(".grid__items");
  const errorMessage = document.querySelector(".error");
  
  const tipAmount = document.querySelector(".Tip");
  const totalAmount = document.querySelector(".Total");
  const customEl = document.querySelector(".grid__items-last")
  customEl.addEventListener("mouseover",()=>{
    customEl.textContent ="40|";
    customEl.style.placeContent ="center end"
    customEl.style.paddingRight = "10px";
  })
  customEl.addEventListener("mouseout",()=>{
    customEl.textContent ="Custom";
    customEl.style.placeContent ="center";
    customEl.style.paddingRight = "";
  })

  
  function tipItemClickHandler() {

    const tipValue = parseFloat(this.textContent);
    let inputBill = parseFloat(billTotal.value);
    let inputNumber = parseFloat(numberP.value);
    if (isNaN(inputBill) || inputBill <= 0 || isNaN(inputNumber) || inputNumber <= 0) {
        errorMessage.textContent = "Can't be zero";
        inputElement.style.border = "1px solid red";
        tipAmount.textContent = "0.00";
    totalAmount.textContent = "0.00";
      }
    else{
      let tip = (((inputBill * tipValue)/100)/ inputNumber).toFixed(2);
       let TotalPerPerson = ( ((inputBill * tipValue)/100) + inputBill) / inputNumber; 
    tipAmount.textContent = tip;
    totalAmount.textContent = TotalPerPerson.toFixed(2);
    }
    
  }
  
  function resetValues() {
    inputElement.value = "";
    billTotal.value = "0";
    numberP.value = "0";
    errorMessage.textContent = "";
    inputElement.style.border = "none";
    tipAmount.textContent = "0.00";
    totalAmount.textContent = "0.00";
  /*  resetBtn.style.backgroundColor="var(--Strong-cyan)"; */
    
  }
  
  resetBtn.addEventListener("click", resetValues);
  
  tipLists.forEach((tipItem) => {
    tipItem.addEventListener("click", tipItemClickHandler);
    
    
  });
  
 
  