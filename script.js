// DIAGNÓSTICO

const diagnosticos = [

{
icone:"🌾",
titulo:"Agricultura Dependente",
texto:"Muitas culturas agrícolas dependem da polinização."
},

{
icone:"⚠️",
titulo:"Uso de Agrotóxicos",
texto:"Produtos químicos podem prejudicar populações de abelhas."
},

{
icone:"🌳",
titulo:"Perda de Habitat",
texto:"Desmatamento reduz locais de alimentação e reprodução."
},

{
icone:"🌡️",
titulo:"Mudanças Climáticas",
texto:"Alteram ciclos de florescimento e polinização."
}

];

const diagnosticCards = document.getElementById("diagnosticCards");

diagnosticos.forEach(item=>{
diagnosticCards.innerHTML += `
<div class="card">
<h3>${item.icone} ${item.titulo}</h3>
<p>${item.texto}</p>
</div>
`;
});

// INDICADORES

const indicadores = [

{
numero:"75%",
titulo:"Culturas Dependentes",
texto:"Dependem em algum grau da polinização."
},

{
numero:"35%",
titulo:"Produção Mundial",
texto:"Relacionada aos polinizadores."
},

{
numero:"20 mil",
titulo:"Espécies",
texto:"Existem milhares de espécies de abelhas."
},

{
numero:"1 planeta",
titulo:"Benefício Global",
texto:"Impacto na biodiversidade."
}

];

const indicators = document.getElementById("indicators");

indicadores.forEach(i=>{
indicators.innerHTML += `
<div class="indicator">
<h3>${i.numero}</h3>
<h4>${i.titulo}</h4>
<p>${i.texto}</p>
</div>
`;
});

// TABS

const tabData = {

ambiental:
"Sem as abelhas ocorre redução da biodiversidade e desequilíbrio ecológico.",

social:
"A produção de alimentos pode diminuir afetando comunidades.",

economico:
"Agricultura e comércio podem sofrer prejuízos bilionários.",

educacional:
"O tema promove educação ambiental e cidadania."
};

const tabs = document.querySelectorAll(".tab");
const tabContent = document.getElementById("tabContent");

tabContent.innerHTML = tabData.ambiental;

tabs.forEach(tab=>{

tab.addEventListener("click",()=>{

tabs.forEach(t=>t.classList.remove("active"));

tab.classList.add("active");

tabContent.innerHTML =
tabData[tab.dataset.tab];

});

});

// QUIZ

const quizArea = document.getElementById("quizArea");

document.getElementById("startQuiz")
.addEventListener("click",()=>{

quizArea.innerHTML=`
<p>Qual a principal função das abelhas na produção de alimentos?</p>

<button class="quizBtn">Produzir mel</button>
<button class="quizBtn correct">Polinizar plantas</button>
<button class="quizBtn">Controlar pragas</button>
`;

document.querySelectorAll(".quizBtn")
.forEach(btn=>{

btn.addEventListener("click",()=>{

if(btn.classList.contains("correct")){
alert("Correto! 🎉");
}else{
alert("Tente novamente.");
}

});

});

});

// CARROSSEL

const slides = [

{
img:"polinização.png",
title:"Polinização Natural",
desc:"Abelhas visitam flores e transportam pólen."
},

{
img:"agri.png",
title:"Produção Agrícola",
desc:"Frutas e vegetais dependem desse processo."
},

{
img:"bio.png",
title:"Biodiversidade",
desc:"Abelhas ajudam a manter ecossistemas saudáveis."
}

];

let current=0;

const image=document.getElementById("carouselImage");
const title=document.getElementById("carouselTitle");
const desc=document.getElementById("carouselDescription");

function renderSlide(){

image.src=slides[current].img;
title.textContent=slides[current].title;
desc.textContent=slides[current].desc;

}

renderSlide();

document.querySelector(".next")
.addEventListener("click",()=>{

current=(current+1)%slides.length;
renderSlide();

});

document.querySelector(".prev")
.addEventListener("click",()=>{

current=(current-1+slides.length)%slides.length;
renderSlide();

});

setInterval(()=>{

current=(current+1)%slides.length;
renderSlide();

},5000);

// SOLUÇÕES

const solucoes=[

{
icone:"🌸",
titulo:"Plantar Flores",
texto:"Criar ambientes favoráveis para polinizadores."
},

{
icone:"🚫",
titulo:"Reduzir Agrotóxicos",
texto:"Diminuir impactos sobre as abelhas."
},

{
icone:"🏡",
titulo:"Jardins Polinizadores",
texto:"Promover biodiversidade urbana."
},

{
icone:"📚",
titulo:"Educação Ambiental",
texto:"Conscientizar a população."
}

];

const solutionsGrid =
document.getElementById("solutionsGrid");

solucoes.forEach(s=>{

solutionsGrid.innerHTML += `
<div class="card">
<h3>${s.icone} ${s.titulo}</h3>
<p>${s.texto}</p>
</div>
`;

});

// FAQ

const faqData=[

{
q:"Por que as abelhas são importantes?",
a:"Porque ajudam na polinização das plantas."
},

{
q:"Elas produzem alimentos?",
a:"Indiretamente, ajudam plantas a produzirem frutos."
},

{
q:"Como ajudar?",
a:"Plantando flores e evitando uso excessivo de pesticidas."
}

];

const faqContainer =
document.getElementById("faqContainer");

faqData.forEach(item=>{

const div=document.createElement("div");

div.className="faq-item";

div.innerHTML=`
<div class="faq-question">${item.q}</div>
<div class="faq-answer">${item.a}</div>
`;

faqContainer.appendChild(div);

});

document.querySelectorAll(".faq-question")
.forEach(question=>{

question.addEventListener("click",()=>{

document.querySelectorAll(".faq-item")
.forEach(i=>i.classList.remove("active"));

question.parentElement.classList.add("active");

});

});

// CONTRASTE

document.getElementById("contrastBtn")
.addEventListener("click",()=>{

document.body.classList.toggle("high-contrast");

});

// TAMANHO FONTE

let size=100;

document.getElementById("increaseFont")
.addEventListener("click",()=>{

size+=10;
document.body.style.fontSize=size+"%";

});

document.getElementById("decreaseFont")
.addEventListener("click",()=>{

size-=10;
document.body.style.fontSize=size+"%";

});

// SCROLL REVEAL

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(el=>{

const top=
el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
el.classList.add("active");
}

});

});