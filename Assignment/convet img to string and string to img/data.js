var reader;

let convetImagetoString=()=>{
    let imageFile=document.getElementById('img_document').files[0];
    reader = new FileReader();
    reader.readAsDataURL(imageFile)
    reader.addEventListener("load",()=>{
        document.getElementById('string_tag').innerHTML=reader.result;
    }
)

}
let stringtoImage=()=>{
    console.log(reader.result)
    document.getElementById('image_tag').src=reader.result;
}