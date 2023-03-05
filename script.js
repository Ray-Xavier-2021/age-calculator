let date = document.querySelector("#date");
let month = document.querySelector("#month");
let birthYear = document.querySelector("#year");
let calcBtn = document.querySelector(".submit-btn");

const results = document.querySelector('.results')

let currentYear = new Date().getFullYear()

// function getValue(e) {
//   year = e.target.value
//   month = e.target.value
//   date = e.target.value
//   console.log(currentYear)
//   console.log(`${date}`)
//   console.log(month)
//   console.log(year)
// }

calcBtn.addEventListener('click', function() {
  
  // Get date of birth
  let dob = new Date(`${month.value}/${date.value}/${birthYear.value}`)

  let current = new Date().getTime()
  console.log(current)

  // Get month diff from current time
  let monthDifferential = current - dob.getTime()
  console.log(monthDifferential)

  // Get age diff
  let ageDF = new Date(monthDifferential)
  console.log(ageDF)

  // Get year
  let year = ageDF.getFullYear()
  console.log(year)

  // Get age
  let age = Math.abs(year - birthYear.value)
  console.log(age)

  results.innerHTML = `<p>Age is ${age} years.</p>`
  console.log(results)
})


