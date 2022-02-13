let calculate = document.querySelector("#calculate");
let amount = document.querySelector("#amount");
let interest = document.querySelector("#interest");
let duration = document.querySelector("#duration");

calculate.addEventListener("click", function(){
    let amountVal = parseInt(amount.value)
    let interestVal = parseInt(interest.value)
    let durationVal = parseInt(duration.value)
    
    let finalAmount = amountVal + ((amountVal*interestVal/100)*durationVal);
    let reminder = finalAmount%durationVal;
    let monthlyPayment = (finalAmount - reminder)/durationVal;

    let paymentStartDate = new Date();

    for (let index = 1; index < durationVal; index++) {
        let item = document.createElement("div");
            item.classList.add("col-md-3", "mb-3", "border", "rounded", "text-center", "py-5");
            itemInner.innerHTML = monthlyPayment + reminder;
            item.append(itemInner);
            results.append(item);
            paymentStartDate = paymentStartDate.addDays(30)

        if(i == durationVal){
            let item = document.createElement("div");
            item.classList.add("col-md-3", "mb-3", "border", "rounded", "text-center", "py-5");
            itemInner.innerHTML = monthlyPayment + reminder;
            item.append(itemInner);
            results.append(item);
            break;
        }
    }
    let h2 = document.createElement("h2");
    h2.innerHTML = "Toplam: " + finalAmount;
    results.append(h2);
})
