function data(){
    let a = document.getElementById("Number").value
    if ( a>80 && a<=100){
        document.getElementById("outputdata").innerText="a+"
    }
     else if ( a>70 && a<79){
        document.getElementById("outputdata").innerText="a-"
    }
    else if ( a>60 && a<69){
        document.getElementById("outputdata").innerText="b"
    }
    
    else if ( a>50 && a<59){
        document.getElementById("outputdata").innerText="c"
    }
    
    else if ( a>32 && a<50){
        document.getElementById("outputdata").innerText="D"
    }
    else{
         document.getElementById("outputdata").innerText="fail"
    }
}