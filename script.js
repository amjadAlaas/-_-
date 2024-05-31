const calcBtn = document.getElementById('calc-btn')
const output = document.getElementById('output')

calcBtn.addEventListener('click', function (e) {
    e.preventDefault()
    //declare objects of current and birth and get the result of diff
    var userBirthDate = document.getElementById('birth-date').value
    let currentDate = new Date()
    let birthDate = new Date(userBirthDate)
    let diff = currentDate.getTime() - birthDate.getTime()
    //check if birthday is valid
    if (diff > 0 && birthDate.getFullYear()) {
        //declare varaibles of dates
        let diffDate = new Date(diff)
        let ageInDays = diffDate.getDate()
        let ageInMonths = diffDate.getMonth()
        let ageInYears = diffDate.getFullYear() - 1970 // the date in js started in 1970

        //adding and removing classes to render message of result
        output.classList.remove('err-msg')
        output.classList.remove('hidden')
        output.classList.add('show')
        output.classList.add('success-msg')

        output.innerHTML = `<div>your age is <b> ${ageInYears}  years</b>
        and <b> ${ageInMonths} Months</b>
        and <b> ${ageInDays} days</b><span class="close" id="close">&times;</span></div>`
    } else {
        //adding and removing classes to render error message
        output.innerHTML = `<div>Invalid Date <span class="close" id="close">&times;</span></div>`
        output.classList.remove('hidden')
        output.classList.add('show')
        output.classList.remove('success-msg')
        output.classList.add('err-msg')
    }
    // close btn
    let closeBtn = document.getElementById('close')
    closeBtn.addEventListener('click', () => {
        closeBtn.parentElement.parentElement.classList.remove('show')
        closeBtn.parentElement.parentElement.classList.add('hidden')
    })
})
