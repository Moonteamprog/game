let a =document.getElementById("sod");

// a.innerHTML +="لا تخاف شبك ";
// document.body.style.background="darkslategrey";
document.body.style.color="black";
document.body.style.fontSize="30px";

let textarr=[
   " خسرت , حاول مرة اخرى حاجتك خسارة" ,
   " خسرت , حاول مرة اخرى حاجتك ولو" ,
   " خسرت , حاول مرة اخرى حاجتك خسارة" ,
   " خسرت , حاول مرة اخرى حاجتك ما خرجك" ,
   " خسرت , حاول مرة اخرى حاجتك  لازم تربح" ,
   " ربحت و اخيرا" ,
    'بعرف ما ربحت ',
]


for( var i=0; i<= Math.random(textarr) ; i++ )
document.innerHTML+=i ;

const btn = document.getElementsByClassName('btn_c') ;

let new_array = [
    " خسرت , حاول مرة اخرى حاجتك  لازم تربح" ,
    " خسرت , حاول مرة اخرى حاجتك  لازم تربح" ,
    " خسرت , حاول مرة اخرى حاجتك  لازم تربح" ,
    " خسرت , حاول مرة اخرى حاجتك  لازم تربح" ,
]

let value_true = Math.floor( Math.random() * 4 )
new_array[ value_true ] = " ربحت و اخيرا"



function fun(id){

    if( value_level < 2 ) {
        nteja.innerHTML = new_array[id]
        
        document.getElementById('window').style.display = 'block'
    
        if( id == value_true ) btn_back.onclick = () => document.location = ''
        else pat()
    }
    else {
        alert('أنت فاشلً')
        document.location = ''
    }


    
     
 }
 



function fun4(){
    
   let b =  confirm("متاكد بدك تمسح");
   if( b  )
    document.location=""

    // onclick.res= window.onload

}


//   let f= document.getElementById("lite");


// // s.innerHTML='om'


// let name=" omar ";
// let soy="ajaj";
// let z=`  wwlcome ${ name }  ${ soy }   `;

// f.innerHTML+=z;


// `   `
//  let h= document.getElementById("ico");

//  var p=document.getElementById("one");
// var arra6=[
// '     <div id="one" onclick="pat()"  ><i class="fas fa-heart"></i></div>',



// ]

// for( var m= 0;  m<= arra6.length ; m++ )

let value_level = 0
 function pat() {
    if( value_level < 3 ) {
        document.getElementsByClassName('heart')[value_level].style.opacity = 0.3
        value_level++
    }
}
// h.document.style.color="red";

// let array5=[
//     "1",
//     "2",
//     "3"
// ]
// document.getElementById("lite").innerHTML=array5[2]  ;
