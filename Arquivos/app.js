const root = document.documentElement;
const btn = document.getElementById("btnTema")

btn.addEventListener("click", () => {
    const escuro = root.getAttribute("data-tema") === 'escuro'

    if (escuro) {
        root.removeAttribute("data-tema")
    }  else {
        root.setAttribute("data-tema", "escuro")
    }

    
})