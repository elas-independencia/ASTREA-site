// ================================
// ASTREA — JAVASCRIPT
// ================================


// MENU — rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if (destino) {

            event.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ================================
// MENU ATIVO
// ================================

const secoes = document.querySelectorAll("section[id]");
const linksMenu = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let secaoAtual = "";

    secoes.forEach(secao => {

        const distancia = secao.offsetTop - 120;

        if (window.scrollY >= distancia) {
            secaoAtual = secao.id;
        }

    });

    linksMenu.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + secaoAtual
        ) {
            link.classList.add("active");
        }

    });

});


// ================================
// BOTÕES "SAIBA MAIS"
// ================================

const botoes = document.querySelectorAll(".card a");

botoes.forEach(botao => {

    botao.addEventListener("click", function(event) {

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if (destino) {

            event.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ================================
// EFEITO NOS CARDS
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-4px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});


// ================================
// BOTÃO COMEÇAR
// ================================

const botaoComecar =
    document.querySelector(".start-button");

if (botaoComecar) {

    botaoComecar.addEventListener("click", function() {

        const areas =
            document.querySelector("#areas");

        if (areas) {

            areas.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


// ================================
// ANIMAÇÃO AO APARECER NA TELA
// ================================

const elementos =
    document.querySelectorAll(
        ".card, .goal, .research-item"
    );

const observador =
    new IntersectionObserver(

        (entradas) => {

            entradas.forEach(entrada => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


elementos.forEach(elemento => {

    observador.observe(elemento);

});
