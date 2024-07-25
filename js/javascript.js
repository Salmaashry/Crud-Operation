
var form =document.getElementById("form-info");
var fixedBox=document.getElementById('table');
var siteName=document.getElementById("siteName");
var urlink=document.getElementById("siteUrl");

siteList= [];

form.addEventListener('submit',function(e){
    e.preventDefault();
    validateSite();

})

siteList= [];
if(localStorage.getItem("Sites") !=null){
    siteList=JSON.parse( localStorage.getItem("Sites"));
    display(siteList);
}else{
        siteList=[];
    }

function AddSite(){
    if(validateSite()==true){
        
        var Sites={
        sName:siteName.value,
        Link:urlink.value,

    }
    siteList.push(Sites);
    localStorage.setItem("Sites" , JSON.stringify(siteList));
    
   
    display()


    
    console.log(Sites);

    }else {
        alert('invalid')

    }
    
}


function display(){
    var cartoona="";
    for(var i=0 ; i<siteList.length ; i++){
        cartoona+=`<tr>
        <td>${i+1}</td>
        <td>${siteList[i].sName}</td>
        <td><a  onclick="visitSite(${i})"><i class="fa-solid fa-eye fs-4 text-warning"></i></a></td>
         <td><a onclick="deleteSite(${i})"><i class="fa-solid fa-trash fs-4 text-danger"></i></a></td>
       
    </tr>`
    }
    document.getElementById('tebleBody').innerHTML=cartoona;
}


function deleteSite(index){
    siteList.splice(index ,1);
    localStorage.setItem("Sites", JSON.stringify(siteList));
    display();

}

function clearForm(){

    siteName.value ="";
       urlink.value="";

}


function visitSite(index){

  window.open(siteList[index].Link)
   

}

function validateSite()
{
    var regex =/^(https?:\/\/)?([\da-z*.-]+)\.([a-z\.]{2,6})([\/\w*\s(|%20).-]*)*\/?$/
    validateName();
    validateSiteURL();
return regex.test(urlink.value);

}


function validateSiteURL()
{ 
    var form =document.getElementById("form");
    var text=document.getElementById('text');
    var urlink=document.getElementById("siteUrl").value;
    var regex =/^(https?:\/\/)?([\da-z*.-]+)\.([a-z\.]{2,6})([\/\w*\s(|%20).-]*)*\/?$/
    

   if(urlink.match(regex)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML="Your URL is valid"
    text.style.color="green"
      
   

   }else{
   form.classList.remove("valid");
   form.classList.add("invalid");
  
   text.innerHTML="Please Enter Valid URL"
    text.style.color="#ff0000"
    
}

}

 

function validateName(){
    var form =document.getElementById("form");
    var siteName=document.getElementById("siteName").value;
    var textName=document.getElementById('textName');
    var regexName=/^[A-Z]{1}[a-z]{3,9}$/; 
    if(siteName.match(regexName)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        textName.innerHTML="Name is valid"
        textName.style.color="green"
    }else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        textName.innerHTML="Enter Valid Name"
        textName.style.color="red"
    }

}


