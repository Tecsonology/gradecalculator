let btnClick = document.querySelector('.btnClick');
let txtGrade = document.querySelector('.txtGrade')
let txtG1 = document.querySelector('#txtG1')
let txtG2 = document.querySelector('#txtG2')
let txtG3 = document.querySelector('#txtG3')
let txtG4 = document.querySelector('#txtG4')
let showGrade = document.querySelector(".showGrade")
let txtGEquiv = document.querySelector('.txtGEquiv');
let txtMessage = document.querySelector('.txtMessage')
let showGradingSystem = document.querySelector('.show-grading-system')
let btnShowGS = document.querySelector('.btnShowGS')
let retake = document.querySelector('.retake')



function computeGrade(pre, mid, pref, fin) {
    let finalAverage = (pre*0.20)+(mid*0.20)+(pref*0.20)+(fin*0.40);

    if(finalAverage > 100.00){
        return "Please check your inputs"
    } else {
         return finalAverage.toFixed(2);
    }
}

function computeEquivalent(grade){
    if(grade <= 100 && grade >= 97.50){
        return "1.00 (Excellent)"
    } else if(grade >= 94.50 && grade <= 97.49){
        return "1.25 (Very Good)"
    } else if(grade >= 91.50 && grade <= 94.49){
        return "1.50 (Very Good)"
    } else if(grade >= 88.50 && grade <= 91.49){
        return "1.75 (Very Good)"
    } else if(grade >= 85.50 && grade <= 88.49){
        return "2.00 (Satisfactory)"
    } else if(grade >= 81.50 && grade <= 85.49){
        return "2.25 (Satisfactory)"
    } else if(grade >= 77.50 && grade <= 81.49){
        return "2.50 (Satisfactory)"
    } else if(grade >= 73.50 && grade <= 77.49){
        return "2.75 (Fair)"
    } else if(grade >= 65.50 && grade <= 73.49){
        return "3.00 (Failed)"
    } else if(grade <= 64.49){
        return "5.00 (Failed)"
    } else {
        return "Please input correct grades"
    }
}




btnClick.addEventListener("click", ()=> {

    retake.style.display = "block";
    showGrade.style.display = "block";
    txtMessage.style.display = "none";


    console.log(parseFloat(txtG1.value)*0.20)
    let prelim = txtG1.value;
    let midterm = txtG2.value;
    let prefinal = txtG3.value;
    let final = txtG4.value;

    if(prelim.length > 0 || midterm.length > 0 || prefinal.length > 0 || final.length > 0){
        if(prelim.length <= 4 || midterm.length <= 4 || prefinal.length <= 4 || final.length <= 4){
            
            let finalGrade = computeGrade(prelim, midterm, prefinal, final)

            txtGrade.innerHTML = "Final Grade: "+ finalGrade;
            txtGEquiv.innerHTML = "Equivalent: "+computeEquivalent(finalGrade)
        }
    }  else {
        txtGrade.innerHTML = "Invalid";
        txtGEquiv.innerHTML = "Please input correct grades"
    }

})

const styles = window.getComputedStyle(showGradingSystem)

btnShowGS.addEventListener("click", ()=>{
    if(styles.display === "none"){
        btnShowGS.innerHTML = "hide grading system 🡡"
        showGradingSystem.style.display = "block";
    } else if(styles.display === "block"){
        showGradingSystem.style.display = "none";
        btnShowGS.innerHTML = "show grading system 🡣"
    }
})

retake.addEventListener("click", ()=> {
    txtG1.value = "";
    txtG2.value = "";
    txtG3.value = "";
    txtG4.value = "";
    txtGrade.innerHTML = "";
    txtGEquiv.innerHTML = "";
    
})



