let title = document.getElementById("title");
let colorvalue = document.getElementById("colorvalue");
let textcontent = document.getElementById("textcontent");
let right = document.getElementById("right");
colorvalue.addEventListener("change", () => {
  textcontent.style.backgroundColor = colorvalue.value;
})
let appenda = "";



let btn = document.getElementById("btn").addEventListener("click", () => {
  if(title.value=="" || textcontent.value==""){
    alert("please fill the title and text")
  }
  else{
  document.getElementById("empty").innerHTML = "";
  // console.log(title.value,colorvalue.value,textcontent.value);
  //   right.innerHTML = "";

  // colorvalue.innerHTML="";
  //   let close=document.createElement("button");
  //   close.classList.add("close");
  //   close.innerHTML="X"
  //   right.innerHTML+=close;

  let newdiv = document.createElement("div");
  newdiv.classList.add("inner");
  let dicbottom=document.createElement("div");
  dicbottom.classList.add("dicbottom");

 newdiv.innerHTML += `<b id="displaytitle" style="background-color:white; font-size:25px; width:100%;">${title.value}</b> `;

//  newdiv.innerHTML += ` <textarea id="righta" style="height: 200px; width: 200px; overflow: auto; background-color:${colorvalue.value}; padding="8px">

 

// ${textcontent.value}
// </textarea>
// `;

let textarea=document.createElement("textarea");
textarea.classList.add("textarea");
textarea.style.height="200px";
textarea.style.width="200px";
textarea.style.backgroundColor=colorvalue.value;
textarea.innerHTML=textcontent.value;

newdiv.appendChild(textarea);

//   newdiv.append(heading);
//   newdiv.append(textvalue);
  let close = document.createElement("button");
  close.classList.add("close");
  close.style.height="20px";
  close.style.width="30px";
  close.innerHTML = "X";

  let edit=document.createElement("button");
  edit.classList.add("edit");
  edit.style.height="20px";
  edit.style.width="30px";
  edit.innerHTML="✏️";
  edit.addEventListener("click",()=>{
    console.log("clicked")
    textarea.style.height="300px";
    textarea.style.width="300px";
      
  })

  let daysinweel=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
  let months=["january","february","march","april","may","june","july","august","september","october","november","december"];
  let date=new Date();
  let day=date.getDay();
  let date1=date.getDate();
  let month=date.getMonth();
  let year=date.getFullYear();
  let times=date.toLocaleTimeString();
  let datea=`${daysinweel[day]}/${date1}/${months[month]}/${year}/${times}`


  dicbottom.appendChild(close);
  dicbottom.appendChild(edit);
  newdiv.appendChild(dicbottom);
  newdiv.append(datea);
 

  // newdiv.append(appenda);
  right.appendChild(newdiv);
  close.addEventListener("click", () => {
    // console.log("hello");
    newdiv.remove();
  });

  title.value = "";
  textcontent.value = "";
  colorvalue.value = "";

  
  }
})




