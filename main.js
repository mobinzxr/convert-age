

    let yearnow = 1401
    let monthnow = 10
    let daynow = 28
    let yearOfBirthday = document.querySelector(".userYearBirth")
    let monthOfBirthday = document.querySelector(".userMonthBirth")
    let dayOfBirthday = document.querySelector(".userDayBirth")
    let todayDate = document.getElementById("dateNow")
    
 function convert(){
     yearOfBirthday = Number(yearOfBirthday.value)
    monthOfBirthday = Number(monthOfBirthday.value)
    dayOfBirthday = Number(dayOfBirthday.value)
    todayDate.innerHTML = "تاریخ امروز:"+yearnow+"/"+monthnow+"/"+daynow
    let passYear = yearnow - yearOfBirthday
    let passMonth = monthnow - monthOfBirthday
    let passDay = daynow - dayOfBirthday
    if (passMonth <= 0) {
        passYear = passYear - 1
        passMonth = 12 + passMonth
    }
    if (passDay <= 0) {
        passMonth = passMonth - 1
        passDay = 30 + passDay
    }
    if(passMonth === 12){
        passYear++;
        passMonth = 0;
    }
    console.log(passYear);
    console.log(passMonth);
    console.log(passDay);
    
 }
    
