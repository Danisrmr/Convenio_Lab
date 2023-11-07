
formulario = document.querySelector("#myform").addEventListener('submit', e=>{
    e.preventDefault()
    generate()
})

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}

function generate() {
    nom_rep = document.getElementById("nom_rep").value.toUpperCase()
    cargo = document.getElementById("cargo").value
    org = document.getElementById("org").value
    ant = document.getElementById("ant").value
    conv = document.getElementById("conv").value
    aut = document.getElementById("aut").value
    dom = document.getElementById("dom").value
    serv_lab = document.getElementById("serv_lab").value
    serv_ext = document.getElementById("serv_ext").value
    nom_rep_op = document.getElementById("nom_rep_op").value

    loadFile(
      "./Formato_.docx",
      function (error, content) {
        if (error) {
          throw error;
        }
        const zip = new PizZip(content);
        const doc = new window.docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
        });
  
        doc.render({
          nom_rep: nom_rep,
          cargo: cargo,
          org: org,
          ant: ant,
          conv: conv,
          aut: aut,
          dom : dom,
          serv_lab : serv_lab, 
          serv_ext : serv_ext,
          nom_rep_op : nom_rep_op
        });
  
        const blob = doc.getZip().generate({
          type: "blob",
          mimeType:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          // compression: DEFLATE adds a compression step.
          // For a 50MB output document, expect 500ms additional CPU time
          compression: "DEFLATE",
        });
        // Output the document using Data-URI
        saveAs(blob, "convenio.docx");
      }
    );
  };


const textarea = document.getElementById('aut');

textarea.addEventListener('input', () => {
  autoResizeTextarea();
});

function autoResizeTextarea() {
  const contentHeight = textarea.scrollHeight; // Altura total del contenido del textarea
  textarea.style.height = `${contentHeight}px`; // Asigna la altura al textarea
}
  


var swiper = new Swiper(".mySwiper",{
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect:{
        rotate:15,
        strech:0,
        depth:300,
        modifier:1,
        slideShadows: true,
    },
    loop:true,
})