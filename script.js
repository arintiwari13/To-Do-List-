const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addthetask(){
    if(inputbox.value == ''){
        alert('please write the text');
    }
    else{
        let list1 = document.createElement("li");
        list1.innerHTML = inputbox.value;
        listcontainer.appendChild(list1);

        // creating crossbar in front of list

        let para = document.createElement("span");
        para.innerHTML = "&#10006";
        list1.appendChild(para);
    }
        inputbox.value = '';
        savedata();
}
console.log("addthefunc completed");

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentNode.remove();
        savedata();
    }
});

console.log("done till here");


            // to save the data in the browser 

 function savedata(){
    localStorage.setItem("data" , listcontainer.innerHTML);
 };

 function showdata(){
    listcontainer.innerHTML = localStorage.getItem("data");
 };
 showdata();