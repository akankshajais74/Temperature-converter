const calculateTemp=()=>{
    const numberTemp=document.getElementById("temp");
    const tempSelected = document.getElementById("temp_diff");
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    const celTofeh=(x)=>{
     let feh=Math.round((x*9/5)+32);
     return feh;}
     const fehTocel=(y)=>{
        let cel=Math.round((y-32)*5/9);
        return cel;
    }
    let result;
    if(valueTemp=='cel'){
        result=celTofeh(numberTemp);
     document.getElementById('resultContainer').innerHTML='${result}ferhenit';
    }
    else{
        result=fehTocel(numberTemp);
        document.getElementById('resultContainer').innerHTML='${result}celsius';
    }
}