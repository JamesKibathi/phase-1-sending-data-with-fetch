// Add your code here



//Fetch syntax ======= > fetch (destinationURL, configurationObject);

/*Data to add to our db.json*/



function submitData(name,email){
  
    const formData={
        name:"Steve",
        email:"steve@steve.com"
    };

   return (fetch("http://localhost:3000/users",{

    method:"POST",
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json",
    },
    body:JSON.stringify(formData),
        
    })
    .then(response=>response.json())
    .then(user=>{
        document.body.innerHTML=user.id
    })
    .catch(error=>{
        document.body.innerHTML=error.message
    })
   )

}




/*

const formData={
    dogName:"Adding response",
    dogBreed:"Testing fetch response",
}; 

*/

/* Declare the configuration object we pass as a parameter to the fetch method*/

/*
const configurationObject={
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
    },
    body:JSON.stringify(formData),

};

 fetch("http://localhost:3000/dogs", configurationObject)

 */

/* *This is the server response from fetch method* */

// first promise to convert the response to Json

/*
.then(function(response){
    return response.json();

})
*/
// second promise that mostly outputs the server response data
/*
.then(function (object){
    console.log(object);
})
*/
/* *You can also include the catch() to catch errors incase you make error in your code*/
/*
.catch(function(error){
    alert("Bad things! James!")
    console.log(error.message);
});
*/
