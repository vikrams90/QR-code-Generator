const form = document.querySelector("form")
const input = document.querySelector("input")
const select = document.querySelector("#select")
const img = document.querySelector(".img-fluid")
const download = document.querySelector(".btn-info")


const getQR = async(e) => {
    e.preventDefault()
    console.log(select.value,input.value)
    const response = await fetch('https://api.qrserver.com/v1/create-qr-code/?size='+ select.value + '&data=' + input.value)
    img.setAttribute("src",response.url)
    let src1 = img.getAttribute("src")

    // 
    const image = await fetch(src1);

    const blobImage = await image.blob();
  
    const href = URL.createObjectURL(blobImage);
    
    // 

    download.href=href
    download.setAttribute("download","QR_Image.jpeg")
    download.classList.remove("d-none")

}


form.addEventListener("submit",getQR)