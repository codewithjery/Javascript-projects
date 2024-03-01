const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);

  const weight = parseInt(document.querySelector("#weight").value);

  if (height === '' || height < 1 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height`
    results.style.backgroundColor = ' rgb(228, 230, 173)';
    results.style.borderRadius = '40px'
    results.style.boxShadow = '0 0 10px #fff'
    results.style.boder = '2px solid rgb(144, 0, 255)'
  } 
  
  else if (weight === '' || weight < 1 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight`;
    results.style.backgroundColor = ' rgb(228, 230, 173)';
    results.style.borderRadius = '40px'
    results.style.boxShadow = '0 0 10px #fff'
    results.style.boder = '2px solid rgb(144, 0, 255)'
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (bmi < 18.6) {
    results.innerHTML = `Under Weight : ${bmi}`;
    results.style.backgroundColor = ' rgb(228, 230, 173)';
    results.style.borderRadius = '40px'
    results.style.boxShadow = '0 0 10px #fff'
    results.style.boder = '2px solid rgb(144, 0, 255)'
  } else if (bmi < 24.9 && bmi > 18.6) {
    results.innerHTML = `Normal Range : ${bmi}`;
    results.style.backgroundColor = ' rgb(228, 230, 173)';
    results.style.borderRadius = '40px'
    results.style.boxShadow = '0 0 10px #fff'
    results.style.boder = '2px solid rgb(144, 0, 255)'
  } else if(bmi > 24.9){
    results.innerHTML = `Overweight : ${bmi}`;
    results.style.backgroundColor = ' rgb(228, 230, 173)';
    results.style.borderRadius = '40px'
    results.style.boxShadow = '0 0 10px #fff'
    results.style.boder = '2px solid rgb(144, 0, 255)'
  }
});
