const noteContainer=document.querySelector(".note-container");

function add(){
    let title=document.getElementById("title");
    let addtext=document.getElementById("addtext");
    let notes=localStorage.getItem("fixed-container");
    if(notes==null)
    {
        notesobj=[];
    }
    else{
        notesobj=JSon.parse(notes);
    }
    notesobj.push(title.value);
   
    notesobj.push(addtext.value);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    title.value="";
  
    addtext.value="";

    console.log(notesobj)
    
    shownotes();
}

function shownotes()
{
    let notes=localStorage.getItem("fixed-container");
    if(notes==null)
    {
        notesobj=[];
    }
    else{
        notesobj=JSon.parse(notes);
    }
    let html="";
    notesobj.forEach(function(element,index){
    html+=`


    <div class="note">
        <label for="">Tittle ${index} 


        </label>
        <label for="">Content</label>
        <Textarea>${element}</Textarea>
    </div>
    </div>
    
    
    
    
    `
})

let noteElement=document.getElementById("note-container");
if(notesobj.length !=0)
{
    noteElement.innerHTML=html;

}

}
