const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    const bmi= (weight/(height*height)).toFixed(2);
    // const bmi= 42;

    if (isNaN(bmi)) {
        result.innerHTML = `please enter a valid number `

        
    }
    else if (bmi<19) {
        result.innerHTML = `Your BMI is ${bmi} <br> you are underweight `
        
    }
    else if (bmi>25) {
        result.innerHTML = `Your BMI is ${bmi} <br> you are overweight`
        
    } else {
        
        result.innerHTML = `Your BMI is ${bmi} <br> you are in normal range`
    }


})