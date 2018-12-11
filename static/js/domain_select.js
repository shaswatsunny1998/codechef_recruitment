localStorage.clear();
let technical=false, management = false, design = false, documentation = false;

localStorage.setItem("technical",technical) 
localStorage.setItem("design",design)
localStorage.setItem("management",management)
localStorage.setItem("documentation",documentation)


$("#technical").on("click",()=>{

    if(!technical){
        $("#technical").css("background-color", "#222")
        $("#technical_h3").css("color", "white")
        technical=!technical;
    } else {
        $("#technical").css("background-color", "#fafafa")
        $("#technical_h3").css("color", "black")
        technical=!technical;
    }
    localStorage.setItem("technical",technical)

   
})

$("#management").on("click",()=>{
    if(!management){
        $("#management").css("background-color", "#222")
        $("#management_h3").css("color", "white")
        management=!management;

    } else {
        $("#management").css("background-color", "#fafafa")
        $("#management_h3").css("color", "black")
        management=!management;

    }
    localStorage.setItem("management",management)

})

$("#design").on("click",()=>{
    if(!design){
        $("#design").css("background-color", "#222")
        $("#design_h3").css("color", "white")
        design=!design;

    } else {
        $("#design").css("background-color", "#fafafa")
        $("#design_h3").css("color", "black")
        design=!design;

    }
    localStorage.setItem("design",design)

    
})

$("#documentation").on("click",()=>{
    if(!documentation) {
        $("#documentation").css("background-color", "#222")
        $("#documentation_h3").css("color", "white")
        documentation=!documentation;

    } else {
        $("#documentation").css("background-color", "#fafafa")
        $("#documentation_h3").css("color", "black")
        documentation=!documentation;

    }
    localStorage.setItem("documentation",documentation)

})


$("#domain_sub").on("click", (e)=>{
    e.preventDefault();
    let count = 4;
    if(!technical)
        count--;
    if(!management)
        count--;
    if(!design)
        count--;
    if(!documentation)
        count--;
    localStorage.setItem("count", count);
    window.location.replace("/quiz");
})