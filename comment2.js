const showContainers=document.querySelectorAll(".show-reply");

showContainers.forEach(btn=> btn.addEventListener("click",(e)=> {
    console.log("button cilcked");
    let parentContainer= e.target.closest(".comment-container");
    let _id=parentContainer.id;
    if(_id){
        let childrenContainer=parentContainer.querySelectorAll(`[dataset=${_id}]`);
        childrenContainer.forEach(child => child.classList.toggle("opened"));
    }
}));








let count=  1
isAble=true
let count_1= 1
let count2= 1
let count3=1

let countA= 1
let count11=2
let count12=3
let count13=3
let count14= 2
let count15=2

let count16=2
let count17=2
let count18=2
let count19=2
let count20=2



 const countEl=document.querySelector("#count-el")
 let   deCountEl=document.querySelector("#decount-el")
 const count_1_El=document.querySelector("#count_1-el")
 const deCount_1_El=document.querySelector("#decount_1-el")


 

//  const commentEl=document.querySelector("comment-el")
 const commentAEl=document.getElementById("commentA-el")
 const commentBEl=document.getElementById("commentB-el")
 const commentCEl=document.getElementById("commentC-el")
 const commentDEl=document.getElementById("commentD-el")
 const commentEEl=document.getElementById("commentE-el")
 const commentFEl=document.getElementById("commentF-el")
 const commentGEl=document.getElementById("commentG-el")
 const commentHEl=document.getElementById("commentH-el")
 const commentIEl=document.getElementById("commentI-el")
 const commentJEl=document.getElementById("commentJ-el")
 const commentKEl=document.getElementById("commentK-el")
 const commentLEl=document.getElementById("commentL-el")
 const reD= document.getElementById("red")
 const reD1= document.getElementById("red1")
 const reD2= document.getElementById("red2")
 const reD3= document.getElementById("red3")
 const reD4= document.getElementById("red4")
 const reD10= document.getElementById("red10")
 const reD11= document.getElementById("red11")
 const reD220= document.getElementById("red20")





console.log(reD)
console.log(countEl)
console.log(deCountEl)
console.log(commentAEl)
console.log(commentBEl)


function increment_A(){
    //  count= count+ 1
    // countEl.textContent = count

    if(reD10.src.match('heart.jpg')){
        reD10.src='redheart.png'
    } else{
        reD10.src='heart.jpg'
    }

    // if(count < 1){
    //     console.log("You havent reacted!")
    //     isAble=true
    //     count=count+1
    //     countEl.textContent= count
        
    
    
    // }else if(count ===1){
    //     console.log("you have reacted!")
    //     isAble= false
    //     count=count+1
    //     countEl.textContent= count
    // } else if (count >1){
    //     console.log("limited")
    //     isAble=false
            
    //     count=count+1
    //     countEl.textContent= count
        
    // }
    
    

} 
function decrement_A(){
    // console.log("delete")
    // count=count-1
    // countEl.textContent= count
    // count2.push(deCountEl.value)

    // localStorage.setItem("count2", count2)
    // deCountEl=localStorage.getItem("count2")
    

    if(count2 < 1){
        console.log("You havent reacted!")
        isAble=true
        count2=count2 + 1
        deCountEl.textContent= count2 
        
    
    
    }else if(count2 ===1){
        console.log("you have reacted!")
        isAble= false
        count2=count2 + 1
        deCountEl.textContent= count2
    } else if(count2 > 1){
        console.log("limited")
        isAble=true
        count2= count2 + 1
        
        deCountEl.textContent= count2
            
        
    }
    
}



function increment_B(){
    //  count2= count+ 1
    // countEl.textContent = count
    if(red20.src.match('heart.jpg')){
        red20.src='redheart.png'
    } else{
        red20.src='heart.jpg'
    }

    // if(count_1 < 1){
    //     console.log("You havent reacted!")
    //     isAble=true
    //     count_1=count_1+1
    //     count_1_El.textContent= count_1
        
    
    
    // }else if(count_1 ===1){
    //     console.log("you have reacted!")
    //     isAble= false
    //     count_1=count_1+1
    //     count_1_El.textContent= count_1
    // } else if (count_1 >1){
    //     console.log("limited")
    //     isAble=false
            
    //     count_1=count_1+1
    //     count_1_El.textContent= count_1
        
    // }
    
    

} 
function decrement_B(){
    // console.log("delete")
    // count=count-1
    // countEl.textContent= count

    if(count3 < 1){
        console.log("You havent reacted!")
        isAble=true
        count3=count3 +1
        deCount_1_El.textContent= count3
        
    
    
    }else if(count3 ===1){
        console.log("you have reacted!")
        isAble= false
        count3=count3+1
        deCount_1_El.textContent= count3
    } else if(count3 > 1){
        console.log("limited")
        isAble=true
        count3= count3+1
        
        deCount_1_El.textContent= count3
            
        
    }
    


    



    
}




















function increment_C(){
    //  count= count+ 1
    // countEl.textContent = count

    if(reD.src.match('heart.jpg')){
        reD.src='redheart.png'
    } else{
        reD.src='heart.jpg'
    }

    // if(countA < 1){
    //     console.log("You havent reacted!")
    //     isAble=true
    //     countA=countA +1
    //     commentAEl.textContent= countA
        
    
    
    // }else if(countA ===10){
    //     console.log("you have reacted!")
    //     commentAEl.textContent= countA
        
    // } else if(countA > 1){
    //     console.log("limited")
        
    //     countA=0
    //     commentAEl.textContent= countA
        
    // }
    
    

}
function decrement_C(){
    

    if(count11 < 1){
        console.log("You havent reacted!")
        isAble=true
        count11=count11 +1
        commentBEl.textContent= count11
        
    
    
    }else if(count11 ===1){
        console.log("you have reacted!")
        isAble= false
    } else{
        console.log("limited")
        isAble=false
        count11=count11+1
        commentBEl.textContent= count11
        
        
    }

}



function increment_D(){
    //  count= count+ 1
    // countEl.textContent = count
    if(reD1.src.match('heart.jpg')){
        reD1.src='redheart.png'
    } else{
        reD1.src='heart.jpg'
    }

    // if(count12 < 1){
    //     console.log("You havent reacted!")
    //     isAble=true
    //     count12=count12+1
        
    //     commentCEl.textContent= count12
    
    
    // }else if(count12 ===1){
    //     console.log("you have reacted!")
    //     isAble= false
    // } else{
    //     console.log("limited")
    //     isAble=false
    //     count12=count12
        
    //     commentCEl.textContent= count12
        
    // }
    
    

}
function decrement_D(){
    

    if(count13 >= 1){
        console.log("You havent reacted!")
        isAble=true
        count13=count13+1
        
        commentDEl.textContent= count13
    
    
    }else if(count13 === 1){
        console.log("you have reacted!")
        isAble= false
    } else{
        console.log("limited")
        isAble=false
        count13=count13+1
        
        commentDEl.textContent= count13
        
    }
    
    
}


function increment_E(){
    //  count= count+ 1
    // countEl.textContent = count
    if(reD2.src.match('heart.jpg')){
        reD2.src='redheart.png'
    } else{
        reD2.src='heart.jpg'
    }

    // if(count14 < 1){
    //     console.log("You havent reacted!")
    //     isAble=true
    //     count14=count14+1
    //     commentEEl.textContent= count14
        
    
    
    // }else if(count14 ===1){
    //     console.log("you have reacted!")
    //     isAble= false
    //     count14=count14+1
    //     commentEEl.textContent= count14
    // } else if (count14 >1){
    //     console.log("limited")
    //     isAble=false
            
    //     count14=count14+1
    //     commentEEl.textContent= count14
        
    // }
    
    

} 
function decrement_E(){
    // console.log("delete")
    // count=count-1
    // countEl.textContent= count

    if(count15 < 1){
        console.log("You havent reacted!")
        isAble=true
        count15=count15 + 1
        commentFEl.textContent= count15
        
    
    
    }else if(count15 ===1){
        console.log("you have reacted!")
        isAble= false
        count15=count15 + 1
        commentFEl.textContent= count15
    } else if(count15 > 1){
        console.log("limited")
        isAble=true
        count15= count15 + 1
        
        commentFEl.textContent= count15
            
        
    }
    
}


function increment_F(){
    //  count= count+ 1
    // countEl.textContent = count
    if(reD3.src.match('heart.jpg')){
        reD3.src='redheart.png'
    } else{
        reD3.src='heart.jpg'
    }

    // if(count16 < 1){
    //     console.log("You havent reacted!")
    //     isAble=true
    //     count16=count16+1
    //     commentGEl.textContent= count16
        
    
    
    // }else if(count16 ===1){
    //     console.log("you have reacted!")
    //     isAble= false
    //     count16=count16+1
    //     commentGEl.textContent= count16
    // } else if (count16 >1){
    //     console.log("limited")
    //     isAble=false
            
    //     count16=count16+1
    //     commentGEl.textContent= count16
        
    // }
    
    

} 
function decrement_F(){
    // console.log("delete")
    // count16=count-1
    // countEl.textContent= count


    if(count17 < 1){
        console.log("You havent reacted!")
        isAble=true
        count17=count17 + 1
        commentHEl.textContent= count17
        
    
    
    }else if(count17 ===1){
        console.log("you have reacted!")
        isAble= false
        count17=count17 + 1
        commentHEl.textContent= count17
    } else if(count17 > 1){
        console.log("limited")
        isAble=true
        count17= count17 + 1
        
        commentHEl.textContent= count17
            
        
    }
    
}


 


function increment_G(){
    //  count= count+ 1
    // countEl.textContent = count

    if(reD4.src.match('heart.jpg')){
        reD4.src='redheart.png'
    } else{
        reD4.src='heart.jpg'
    }

    // if(count18 < 1){
    //     console.log("You havent reacted!")
    //     isAble=true
    //     count18=count18+1
    //     commentIEl.textContent= count18
        
    
    
    // }else if(count18 ===1){
    //     console.log("you have reacted!")
    //     isAble= false
    //     count18=count18+1
    //     commentIEl.textContent= count18
    // } else if (count18 >1){
    //     console.log("limited")
    //     isAble=false
            
    //     count18=count18+1
    //     commentIEl.textContent= count18
        
    // }
    
    

} 
function decrement_G(){
    // console.log("delete")
    // count16=count-1
    // countEl.textContent= count

    if(count18 < 1){
        console.log("You havent reacted!")
        isAble=true
        count18=count18 + 1
        commentJEl.textContent= count18
        
    
    
    }else if(count18 ===1){
        console.log("you have reacted!")
        isAble= false
        count18=count18 + 1
        commentJEl.textContent= count18
    } else if(count18 > 1){
        console.log("limited")
        isAble=true
        count18= count18 + 1
        
        commentJEl.textContent= count18
            
        
    }
    
}





function increment_H(){
    //  count= count+ 1
    // countEl.textContent = count
    if(reD11.src.match('heart.jpg')){
        reD11.src='redheart.png'
    } else{
        reD11.src='heart.jpg'
    }

    // if(count19 < 1){
    //     console.log("You havent reacted!")
    //     isAble=true
    //     count19=count19+1
    //     commentKEl.textContent= count19
        
    
    
    // }else if(count19 ===1){
    //     console.log("you have reacted!")
    //     isAble= false
    //     count19=count19+1
    //     commentKEl.textContent= count19
    // } else if (count19 >1){
    //     console.log("limited")
    //     isAble=false
            
    //     count19=count19+1
    //     commentKEl.textContent= count19
        
    // }
    
    

} 
function decrement_H(){
    // console.log("delete")
    // count16=count-1
    // countEl.textContent= count

    if(count20 < 1){
        console.log("You havent reacted!")
        isAble=true
        count20=count20 + 1
        commentLEl.textContent= count20
        
    
    
    }else if(count20 ===1){
        console.log("you have reacted!")
        isAble= false
        count20=count20 + 1
        commentLEl.textContent= count20
    } else if(count20 > 1){
        console.log("limited")
        isAble=true
        count20= count20 + 1
        
        commentLEl.textContent= count20
            
        
    }
    
}
