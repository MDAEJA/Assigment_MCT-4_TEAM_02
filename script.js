let displayCard = document.querySelector(".display-card");

const teamDetails = [{
    
    Name : "Aejaz Ahmed",
    title : "chrome Extension",
    github : "https://github.com/MDAEJA/Assigment_MCT-4_chrome_extension.git",
    hostedLink : "https://chromewebstore.google.com/detail/olhnmcfjcgfmdppcgkmmcbndjlejhjhj/preview?hl=en-GB&authuser=0",
    video : "",
    linkedin : "",
    website_img : "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc : "A Chrome extension is a small software program that enhances the functionality of the Google Chrome web browser." 
},
{
    
    Name : "Priyanka",
    title : "Invoice Generator",
    github : "https://github.com/priyanka680shaw/mct4-invoiceGenerator",
    hostedLink : "https://priyanka680shaw.github.io/mct4-invoiceGenerator/",
    video : "",
    linkedin : "",
    website_img : "https://tse4.mm.bing.net/th?id=OIP.VI5iQ_CM7zcYoCTbddJiWgAAAA&pid=Api&P=0&h=180",
    desc : "An invoice generator is a software tool or application designed to create professional invoices for businesses and freelancers."
},

{
    
    Name : "Ruchika",
    title : "Payment Integration",
    github : "https://github.com/RuchikaKadam/MCT-4-Payment-integration-",
    hostedLink : "https://ruchikakadam.github.io/MCT-4-Payment-integration-/index.html",
    video : "https://drive.google.com/drive/folders/1P9zy4zSZqBlNyJU99l5SbKIVFx4D2Hnh?usp=sharing",
    linkedin : "https://www.linkedin.com/posts/ruchika-kadam-145369194_javascript-webdevelopment-paymentintegration-activity-7163229048498810881-9reN?utm_source=share&utm_medium=member_desktop",
    website_img : "https://cdn-icons-png.flaticon.com/128/1813/1813870.png",
    desc : "A payment integration is a software solution that enables businesses to accept payments from customers electronically, typically over the internet."
},

{
    
    Name : "Pankaj Kumar",
    title : "Typing Speed",
    github : "https://github.com/Pankajsikar/Typing-speed-test-app?authuser=0",
    hostedLink : "https://pankajsikar.github.io/Typing-speed-test-app/?authuser=0",
    video : "",
    linkedin : "https://www.linkedin.com/posts/pankaj-kumar-bb5056201_test-your-typing-skills-activity-7162881661230161921-3us2?utm_source=share&utm_medium=member_android",
    website_img : "https://img.freepik.com/free-photo/3d-rendering-kid-playing-digital-game_23-2150898496.jpg?size=626&ext=jpg&ga=GA1.1.1273426722.1700669609&semt=sph",
    desc : "A typing speed game is an interactive application or web-based tool designed to help users improve their typing skills while making the learning process engaging and entertaining."
},

{
    
    Name : "Saurabh Yadav",
    title : "Mine Game",
    github : "https://github.com/saurabhy990/MIneSweeper_Game_JS",
    hostedLink : "https://saurabhy990.github.io/MIneSweeper_Game_JS/",
    video : "",
    linkedin : "https://www.linkedin.com/in/saurabh2904",
    website_img : "https://img.freepik.com/free-vector/press-start_23-2147573372.jpg?size=626&ext=jpg&ga=GA1.1.1273426722.1700669609&semt=ais",
    desc : "A mine game, often referred to as Minesweeper, is a classic single-player puzzle game that challenges players to clear a grid of hidden mines without detonating any of them. "
},


]

teamDetails.forEach((ele)=>{
    let flip_cart = document.createElement("div");
    flip_cart.classList.add("flip-card");
    displayCard.append(flip_cart);

    let flip_cart_inner = document.createElement("div")
    flip_cart_inner.classList.add("flip-card-inner");
    flip_cart.append(flip_cart_inner);

    let front_div = document.createElement("div");
    front_div.classList.add("flip-card-front");

    front_div.innerHTML = `<div>
    <div class="member-name">${ele.Name}</div>

    <div class="tiltle-name">
    <div><h3><h3></div>
    <div><h2>${ele.title}</h2></div>
    </div>

    <div class="des-name">
    
    <div class="dec-handle"><p>${ele.desc}</p></div>
    </div>

    </div>`
    flip_cart_inner.append(front_div);

    let back_div = document.createElement("div");
    back_div.classList.add("flip-card-back");
    back_div.innerHTML = `<div>
    <div class="back-name">${ele.Name}</div>

    <div class="tiltleback-name">
    <div><h3><h3></div>
    <div><h2>${ele.title}</h2></div>
    </div>

    <div class="img-sec">
    
    <img src="${ele.website_img}" width="100px" height="100px"></img>
    </div>

    <div class="link-added">

    <div class="github">
    <a href="${ele.github}"><img src="https://tse1.mm.bing.net/th?id=OIP.8SVgggxQcO5L6Dw_61ac4QHaEK&pid=Api&rs=1&c=1&qlt=95&w=195&h=109" width="50px" height="50px"></img></a>
    </div>

    <div class="github">
    <a href="${ele.hostedLink}"><img src="https://tse1.mm.bing.net/th?id=OIP.Kc9SysN4irL0s5rzpNWYygHaHa&pid=Api&rs=1&c=1&qlt=95&w=111&h=111" width="50px" height="50px"></img></a>
    </div>

    <div class="github">
    <a href="${ele.video}"><img src="https://tse1.mm.bing.net/th?id=OIP.yGbEVZ1GC50j7CUyE06NYQHaER&pid=Api&rs=1&c=1&qlt=95&w=184&h=105" width="50px" height="50px"></img></a>
    </div>

    <div class="github">
    <a href="${ele.linkedin}"><img src=https://tse1.mm.bing.net/th?id=OIP.P_z8uTsVJ8tmPn2prJwOpQHaHa&pid=Api&rs=1&c=1&qlt=95&w=109&h=109" width="50px" height="50px"></img></a>
    </div>


    </div>

    

    </div>`
    
    flip_cart_inner.append(back_div);

    

})

//search by name of the team menber

//search

let search = document.querySelector("#search");
let button = document.querySelector(".btn");

button.addEventListener("click",()=>{
    if(search.value === "") return alert("Enter Name");
    displayCard.innerHTML = "";
    displayCard.innerHTML = `<div><h1>loading...</h1></div>`
    setTimeout(()=>{
        displayCard.innerHTML = "";
        console.log(search.value);
        teamDetails.forEach((ele)=>{
   if(search.value === ele.Name){
    let flip_cart = document.createElement("div");
    flip_cart.classList.add("flip-card");
    displayCard.append(flip_cart);

    let flip_cart_inner = document.createElement("div")
    flip_cart_inner.classList.add("flip-card-inner");
    flip_cart.append(flip_cart_inner);

    let front_div = document.createElement("div");
    front_div.classList.add("flip-card-front");

    front_div.innerHTML = `<div>
    <div class="member-name">${ele.Name}</div>

    <div class="tiltle-name">
    <div><h3>Title<h3></div>
    <div><h2>#${ele.title}#</h2></div>
    </div>

    <div class="des-name">
    <div><h3>Description<h3></div>
    <div class="dec-handle"><p>${ele.desc}</p></div>
    </div>

    </div>`
    flip_cart_inner.append(front_div);

    let back_div = document.createElement("div");
    back_div.classList.add("flip-card-back");
    back_div.innerHTML = `<div>
    <div class="back-name">${ele.Name}</div>

    <div class="tiltleback-name">
    <div><h3>Title<h3></div>
    <div><h2>#${ele.title}#</h2></div>
    </div>

    <div class="img-sec">
    
    <img src="${ele.website_img}" width="100px" height="100px"></img>
    </div>

    <div class="link-added">

    <div class="github">
    <a href="${ele.github}"><img src="https://tse1.mm.bing.net/th?id=OIP.8SVgggxQcO5L6Dw_61ac4QHaEK&pid=Api&rs=1&c=1&qlt=95&w=195&h=109" width="50px" height="50px"></img></a>
    </div>

    <div class="github">
    <a href="${ele.hostedLink}"><img src="https://tse1.mm.bing.net/th?id=OIP.Kc9SysN4irL0s5rzpNWYygHaHa&pid=Api&rs=1&c=1&qlt=95&w=111&h=111" width="50px" height="50px"></img></a>
    </div>

    <div class="github">
    <a href="${ele.video}"><img src="https://tse1.mm.bing.net/th?id=OIP.yGbEVZ1GC50j7CUyE06NYQHaER&pid=Api&rs=1&c=1&qlt=95&w=184&h=105" width="50px" height="50px"></img></a>
    </div>

    <div class="github">
    <a href="${ele.linkedin}"><img src=https://tse1.mm.bing.net/th?id=OIP.P_z8uTsVJ8tmPn2prJwOpQHaHa&pid=Api&rs=1&c=1&qlt=95&w=109&h=109" width="50px" height="50px"></img></a>
    </div>


    </div>
    </div>`
    
    flip_cart_inner.append(back_div);

   }
//    else{
//     displayCard.innerHTML = `<div><h2>Please Enter the correct name</h2></div>`;
//    }
        })
    },2000);
})
//reset

let reset = document.querySelector(".reset");
reset.addEventListener("click",()=>{
    search.value = "";
    displayCard.innerHTML = `<h3>Restart...</h3>`;
    setTimeout(()=>{
        displayCard.innerHTML = "";

        teamDetails.forEach((ele)=>{
            let flip_cart = document.createElement("div");
            flip_cart.classList.add("flip-card");
            displayCard.append(flip_cart);
        
            let flip_cart_inner = document.createElement("div")
            flip_cart_inner.classList.add("flip-card-inner");
            flip_cart.append(flip_cart_inner);
        
            let front_div = document.createElement("div");
            front_div.classList.add("flip-card-front");
        
            front_div.innerHTML = `<div>
            <div class="member-name">${ele.Name}</div>
        
            <div class="tiltle-name">
            <div><h3>Title<h3></div>
            <div><h2>#${ele.title}#</h2></div>
            </div>
        
            <div class="des-name">
            <div><h3>Description<h3></div>
            <div class="dec-handle"><p>${ele.desc}</p></div>
            </div>
        
            </div>`
            flip_cart_inner.append(front_div);
        
            let back_div = document.createElement("div");
            back_div.classList.add("flip-card-back");
            back_div.innerHTML = `<div>
            <div class="back-name">${ele.Name}</div>
        
            <div class="tiltleback-name">
            <div><h3>Title<h3></div>
            <div><h2>#${ele.title}#</h2></div>
            </div>
        
            <div class="img-sec">
            
            <img src="${ele.website_img}" width="100px" height="100px"></img>
            </div>
        
            <div class="link-added">
        
            <div class="github">
            <a href="${ele.github}"><img src="https://tse1.mm.bing.net/th?id=OIP.8SVgggxQcO5L6Dw_61ac4QHaEK&pid=Api&rs=1&c=1&qlt=95&w=195&h=109" width="50px" height="50px"></img></a>
            </div>
        
            <div class="github">
            <a href="${ele.hostedLink}"><img src="https://tse1.mm.bing.net/th?id=OIP.Kc9SysN4irL0s5rzpNWYygHaHa&pid=Api&rs=1&c=1&qlt=95&w=111&h=111" width="50px" height="50px"></img></a>
            </div>
        
            <div class="github">
            <a href="${ele.video}"><img src="https://tse1.mm.bing.net/th?id=OIP.yGbEVZ1GC50j7CUyE06NYQHaER&pid=Api&rs=1&c=1&qlt=95&w=184&h=105" width="50px" height="50px"></img></a>
            </div>
        
            <div class="github">
            <a href="${ele.linkedin}"><img src=https://tse1.mm.bing.net/th?id=OIP.P_z8uTsVJ8tmPn2prJwOpQHaHa&pid=Api&rs=1&c=1&qlt=95&w=109&h=109" width="50px" height="50px"></img></a>
            </div>
        
        
            </div>
        
            
        
            </div>`
            
            flip_cart_inner.append(back_div);
        
            
        
        })
        console.log("reset")

    },2000);
})
