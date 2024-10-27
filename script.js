// var arr = [{dp:"https://i.pinimg.com/474x/d8/7f/49/d87f4975241226f27e2c100f6bdaca7d.jpg",story:"https://i.pinimg.com/236x/c8/45/fb/c845fba44d280bd8f4898d2e5430c607.jpg"},{dp:"https://i.pinimg.com/236x/1f/1d/22/1f1d224fb713a761a78847b4d7398cdd.jpg",story:"https://i.pinimg.com/236x/1f/1d/22/1f1d224fb713a761a78847b4d7398cdd.jpg"},{dp:"https://i.pinimg.com/236x/7c/b5/7e/7cb57e1b94b607378fb66958d6336308.jpg",story:"https://i.pinimg.com/236x/7c/b5/7e/7cb57e1b94b607378fb66958d6336308.jpg"},{dp:"https://i.pinimg.com/236x/cb/0f/2a/cb0f2ab433f945d5822e54c68137648d.jpg",story:"https://i.pinimg.com/236x/5a/58/9c/5a589c692916a4788ce65b787cd37f45.jpg"

// } ,{dp:"https://i.pinimg.com/474x/be/72/a4/be72a48514970aa093e2d794f0495ef0.jpg",story:"https://i.pinimg.com/236x/b0/10/01/b01001c13ce651cbeefcca35cd105bda.jpg"},{dp:"https://i.pinimg.com/236x/0f/cd/21/0fcd215a4e5ebeb90e82c586b9d7aec6.jpg",story:"https://i.pinimg.com/236x/d6/b4/19/d6b419338f8134e0e3e6882561b48b70.jpg"}
// ]

// var storiyan = document.querySelector(".storiyan")
// // console.log(storiyan)

// var clutter = ""
// arr.forEach(function(el,idx){
//     clutter += `<div class="story">
//                 <img id="${idx}" src="${el.dp}" alt="">
//             </div>`
    
// })
// // console.log(clutter)

// storiyan.innerHTML = clutter;


// storiyan.addEventListener("click",function(dets){
//     var value = arr[dets.target.id].story
//     document.querySelector("#full-screen").style.display = "block"
//     document.querySelector("#full-screen").style.backgroundImage = `url(${value})`

//     setTimeout(function(){
//         document.querySelector("#full-screen").style.display = "none"
        
//     }, 3000);
// });
var arr = [
    {dp: "https://i.pinimg.com/474x/d8/7f/49/d87f4975241226f27e2c100f6bdaca7d.jpg", story: "https://i.pinimg.com/236x/c8/45/fb/c845fba44d280bd8f4898d2e5430c607.jpg"},
    {dp: "https://i.pinimg.com/236x/1f/1d/22/1f1d224fb713a761a78847b4d7398cdd.jpg", story: "https://i.pinimg.com/564x/cf/71/aa/cf71aaafafb12d83d5706dbc39294962.jpg"},
    {dp: "https://i.pinimg.com/236x/7c/b5/7e/7cb57e1b94b607378fb66958d6336308.jpg", story: "https://i.pinimg.com/236x/4d/7b/34/4d7b34751dc0148f0a77904336c00659.jpg"},
    {dp: "https://i.pinimg.com/236x/cb/0f/2a/cb0f2ab433f945d5822e54c68137648d.jpg", story: "https://i.pinimg.com/236x/5a/58/9c/5a589c692916a4788ce65b787cd37f45.jpg"},
    {dp: "https://i.pinimg.com/474x/be/72/a4/be72a48514970aa093e2d794f0495ef0.jpg", story: "https://i.pinimg.com/236x/b0/10/01/b01001c13ce651cbeefcca35cd105bda.jpg"},
    {dp: "https://i.pinimg.com/236x/0f/cd/21/0fcd215a4e5ebeb90e82c586b9d7aec6.jpg", story: "https://i.pinimg.com/236x/d6/b4/19/d6b419338f8134e0e3e6882561b48b70.jpg"},{dp:"https://i.pinimg.com/236x/aa/e4/49/aae449f5ad49df7f7fa461f57bc5ed9b.jpg",story:"https://i.pinimg.com/236x/6b/00/7b/6b007bd847a7a11d16421c0662f5f1a4.jpg"},{dp:"https://i.pinimg.com/236x/74/77/ad/7477ad3ff028d750e99bb5ff935373c3.jpg",story:"https://i.pinimg.com/236x/fa/3b/f2/fa3bf2b864f0b4f7903c9ae04f7d0433.jpg"},{dp:"https://i.pinimg.com/236x/a5/85/3d/a5853de9d62e70bec4e9b40203d432f0.jpg",story:"https://i.pinimg.com/474x/65/cb/3b/65cb3b4e6e39034207bbcc3a4efb3489.jpg"}
];

var storiyan = document.querySelector(".storiyan");

var clutter = "";
arr.forEach(function(el, idx) {
    clutter += `<div class="story">
                <img id="${idx}" src="${el.dp}" alt="">
            </div>`;
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function(dets) {
    var value = arr[dets.target.id].story;
    document.querySelector("#full_screen").style.display = "block";
    document.querySelector("#full_screen").style.backgroundImage = `url(${value})`;

    setTimeout(function() {
        document.querySelector("#full_screen").style.display = "none";
    }, 3000);
});
