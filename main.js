const inpt1 = document.querySelector("#input1-el");
const err1 = document.querySelector(".div");
const label = document.getElementById("day")

const inpt2 = document.querySelector("#input2-el");
const err2 = document.querySelector(".div2");
const label2 = document.getElementById("month")

const inpt3 = document.querySelector("#input3-el");
const err3 = document.querySelector(".div3");
const label3 = document.getElementById("year")

let hldEL = document.getElementById("num-el1") 
let hldEL2 = document.getElementById("num-el2") 
let hldEL3 = document.getElementById("num-el3") 


function error1(){
    if(inpt1.value > 31  ){
        inpt1.style.border = "1px solid red"
        err1.innerHTML = "Must be a valid day"
        label.style.color = "red"
        return false
    }
    else if( inpt1.value == ""){
        inpt1.style.border = "1px solid red"
        err1.innerHTML = "This field is required"
        label   .style.color = "red"
        return false
    }
    inpt1.style.border = " 1px solid grey"
    err1.innerHTML = ""
    label.style.color = ""
    return true
}


function error2(){
    if(inpt2.value > 12){
        inpt2.style.border = "1px solid red"
        err2.innerHTML = "Must be a valid month"
        label2.style.color = "red"
        return false
    }
    else if( inpt2.value == ""){
        inpt2.style.border = "1px solid red"
        err2.innerHTML = "This field is required"
        label2.style.color = "red"
        return false
    }
    inpt2.style.border = " 1px solid grey"
    err2.innerHTML = ""
    label2.style.color = ""
    return true
}

function validYear(){
    if(inpt3.value > 2023){
        inpt3.style.border = "1px solid red"
        err3.innerHTML = "Must be in the past"
        label3.style.color = "red"
        return false
    }
    else if( inpt3.value == ""){
        inpt3.style.border = "1px solid red"
        err3.innerHTML = "This field is required"
        label3.style.color = "red"
        return false
    }
    inpt3.style.border = " 1px solid grey"
    err3.innerHTML = ""
    label3.style.color = ""
    return true
}

function erease(){
    if(inpt1.value == ""){
        inpt1.style.border = " 1px solid grey"
        err1.innerHTML = ""
        label.style.color = ""
        return true

    }
    else if(inpt2.value == ""){
        inpt2.style.border = " 1px solid grey"
        err2.innerHTML = ""
        label2.style.color = ""
        return true

    }
   else if(inpt2.value == ""){
        inpt2.style.border = " 1px solid grey"
        err2.innerHTML = ""
        label2.style.color = ""
        return true

    }

}

const date = new Date()
let day = date.getDate()
let month = 1 +  date.getMonth()
let year = date.getFullYear()

const months = [31,28,31,30,31,30,31,31,30,31,30,31]

function sub(e){
    if(error1(),error2(),validYear()){
        if(inpt1.value >day){
            day = day + months[month-1]
            month = month-1
        }
        if(inpt2.value >month){
            month = month +12
            year = year - 1
        }
        const d = day - inpt1.value
        const m = month - inpt2.value
        const y = year  - inpt3.value

        hldEL.innerHTML = y
        hldEL2.innerHTML = m
        hldEL3.innerHTML = d
    }

}
