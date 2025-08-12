let langs = document.querySelector(".langs");
let link = document.querySelectorAll("a");

let title2 = document.querySelector(".titleTwo");
let title3 = document.querySelector(".titleThree");
let title4 = document.querySelector(".titleFour");
let title5 = document.querySelector(".titleFive");
let title6 = document.querySelector(".titleSix");
let title7 = document.querySelector(".titleSeven");
let title8 = document.querySelector(".titleEight");

let p1 = document.querySelector(".pOne");
let b1 = document.querySelector(".bOne");

let pf1 = document.querySelector(".pFamOne");
let pf2 = document.querySelector(".pFamTwo");
let pf3 = document.querySelector(".pFamThree");
let pf4 = document.querySelector(".pFamFour");
let pf5 = document.querySelector(".pFamFive");
let pf6 = document.querySelector(".pFamSix");

let tm1 = document.querySelector(".teamMemberOne");
let tm2 = document.querySelector(".teamMemberTwo");
let tm3 = document.querySelector(".teamMemberThree");

let tmp1 = document.querySelector(".tmpOne");
let tmp2 = document.querySelector(".tmpTwo");
let tmp3 = document.querySelector(".tmpThree");
let tmp4 = document.querySelector(".tmpFour");
let tmp5 = document.querySelector(".tmpFive");
let tmp6 = document.querySelector(".tmpSix");

let offer1 = document.querySelector(".offerOne");
let offer2 = document.querySelector(".offerTwo");
let offer3 = document.querySelector(".offerThree");
let offer4 = document.querySelector(".offerFour");

let offerP1 = document.querySelector(".offerPOne");
let offerP2 = document.querySelector(".offerPTwo");
let offerP22 = document.querySelector(".offerP2Two");
let offerP3 = document.querySelector(".offerPThree");
let offerP4 = document.querySelector(".offerPFour");
let offerP5 = document.querySelector(".offerPFive");
let offerP6 = document.querySelector(".offerPSix");
let offerP7 = document.querySelector(".offerPSeven");
let offerP8 = document.querySelector(".offerPEight");

let nota = document.getElementById("notaImportante");

let whr = document.querySelector(".where");

let nota2 = document.getElementById("notaImportantes");

link.forEach(el=>{
    el.addEventListener("click", ()=>{
        langs.querySelector(".active").classList.remove("active");
        el.classList.add("active");
        
        let attr = el.getAttribute("language")

        title2.textContent = data[attr].titleTwo
        title3.textContent = data[attr].titleThree
        title4.textContent = data[attr].titleFour
        title5.textContent = data[attr].titleFive
        title6.textContent = data[attr].titleSix
        title7.textContent = data[attr].titleSeven
        title8.textContent = data[attr].titleEight

        p1.innerHTML = data[attr].pOne;
        b1.textContent = data[attr].bOne

        pf1.textContent = data[attr].pFamOne
        pf2.textContent = data[attr].pFamTwo
        pf3.textContent = data[attr].pFamThree
        pf4.innerHTML = data[attr].pFamFour
        pf5.innerHTML = data[attr].pFamFive
        pf6.textContent = data[attr].pFamSix

        tm1.textContent = data[attr].teamMemberOne
        tm2.textContent = data[attr].teamMemberTwo
        tm3.textContent = data[attr].teamMemberThree

        tmp1.textContent = data[attr].tmpOne
        tmp2.textContent = data[attr].tmpTwo
        tmp3.textContent = data[attr].tmpThree
        tmp4.innerHTML = data[attr].tmpFour
        tmp5.textContent = data[attr].tmpFive
        tmp6.textContent = data[attr].tmpSix

        offer1.textContent = data[attr].offerOne
        offer2.textContent = data[attr].offerTwo
        offer3.textContent = data[attr].offerThree
        offer4.textContent = data[attr].offerFour

        offerP1.innerHTML = data[attr].offerPOne
        offerP2.innerHTML = data[attr].offerPTwo
        offerP3.textContent = data[attr].offerPThree
        offerP4.textContent = data[attr].offerPFour
        offerP5.textContent = data[attr].offerPFive
        offerP6.textContent = data[attr].offerPSix
        offerP7.textContent = data[attr].offerPSeven
        offerP8.textContent = data[attr].offerPEight

        nota.innerHTML = data[attr].notaImportante

        whr.textContent = data[attr].where
         
        nota2.innerHTML = data[attr].notaImportantes
    })
})

let data = {
    spanish: {
        
        titleTwo: "Paseadores caninos",

        titleThree: "Mientras tú trabajas, él se lo pasa de lujo.",
        pOne: "¿Trabajo, recados, compras, etc?<br>Nosotros cuidamos de tu perro.",
        bOne: "Conócenos",

        titleFour: "Sobre nosotros",
        pFamOne: "¡Hola!",
        pFamTwo: "Somos una familia de tres que, tras entender las necesidades de nuestro perro Wilson, decidimos abrir este pequeño negocio dedicado a aquellos propietarios que, por diversas razones, no pueden pasear a su compañero tanto como él o ella necesita. 🐺🐶🦊",
        pFamThree: "Sabemos que los perros son animales sociales, activos y curiosos por naturaleza. Diversos estudios científicos han demostrado que un paseo adecuado no solo mejora la salud física de tu perro, sino también su bienestar emocional, ayudándole a reducir estrés y ansiedad.",
        pFamFour: "Sabemos que los perros son animales sociales, activos y curiosos por naturaleza. Diversos estudios científicos han demostrado que un paseo adecuado no solo mejora la salud física de tu perro, sino también su bienestar emocional, ayudándole a reducir estrés y ansiedad.",
        pFamFive: "En <b>Los Wilsons</b>, entendemos que salir al banco de enfrente del portal de casa no siempre es suficiente. Por eso ofrecemos paseos enriquecedores que permiten a tu mascota explorar nuevos entornos, descubrir olores estimulantes e interactuar con otros perros, fomentando así un comportamiento equilibrado y feliz.",
        pFamSix: "Confía en nosotros para regalarle a tu perro ese pequeño gran momento del día, donde podrá ejercitar cuerpo y mente, y regresar a casa más sano y alegre que nunca.",



        titleFive: "El equipo",
        teamMemberOne: "Directora jefa.",
        tmpOne: "Hola, bienvenido",
        tmpTwo: "Soy la encargada de gestionar los horarios, ver las necesidades de nuestros clientes y las de los propietarios.",
        tmpThree: "Queremos que todo salga bien.",

        teamMemberTwo: "Departamento de Admisión.",
        tmpFour: "No molestar, gracias.<br> Estoy persiguiendo algo en mis sueños.<br>¿Has dicho PREMIOS?<br>¿PARQUE?",

        teamMemberThree: "Lo que diga Laura y Wilson.",
        tmpFive: "¡Hola!",
        tmpSix: "Yo soy el que se encarga de dar los paseos con los perretes.",


        titleSix: "Qué ofrecemos",
        offerOne: "Largos paseos",
        offerPOne: "Sabemos lo importante que es para un perro poder explorar, oler y disfrutar del mundo que lo rodea. <br>En Los Wilsons ofrecemos paseos enriquecedores, siempre cerca de tu barrio, donde tu cachorro podrá descubrir nuevos lugares, interactuar con el entorno y comportarse con naturalidad.",

        offerTwo: "Cuidado de perros",
        offerPTwo: "<b>W</b>ilson también salió delicado, por tanto, entendemos que otros perros requieran de trato especial.",
        offerPThree: "Cuentanos su historial y si precisa de medicinas se las suministraremos según nos indiques.",

        offerThree: "Educación",
        offerPFour: "Como siempre, hay ciertas cosas que se aprenden en casa.",
        offerPFive: "Y a nuestros cachorros se les puede hablar en varias lenguas.",
        offerPSix: "Cuentanos cuales son sus comandos, para que nos haga un poco de caso.",

        offerFour: "Espectativa",
        offerPSeven: "Esperamos que tras un rato con nosotros, jugando y oliendo, lleguen a casa echándonos de menos y deseando volver.",
        offerPEight: "Y muy importante, con ganas de una buena siesta.",

        notaImportante: `
        <div class="section-offer-important">
        <h3 class="impOne">🐾 Nota importante</h3>
        <p>Cada perro es único, y su forma de relacionarse con otros también. <br> Para que los paseos en   grupo sean seguros y agradables para todos, es importante conocer cómo se comporta tu perro con otros compañeros peludos. Antes de empezar, te pediremos que nos cuentes un poco sobre su carácter, nivel de energía y experiencias previas en grupo. Así podremos organizar paseos con perros compatibles y evitar cualquier situación incómoda.
        </p>
        <p>Y si tu perro prefiere ir a su aire o necesita más tranquilidad, ¡no hay problema! También ofrecemos paseos individuales pensados especialmente para él.
        </p>
        <h3>Nuestro objetivo es que tu cachorro disfrute al máximo.</h3>
        </div>`,


        titleSeven: "Donde encontrarnos",
        where: "Zona: Vigo, capital del Mundo",

        titleEight: "Tarifas",
        notaImportantes:`
        <div class="info-prices">
            <p>No pongas precio al momento del día de tu cachorro.</p>
            <p>Pero sí.</p>
            <br>
            <table>
                <thead>
                    <tr>
                        <th>Precio</th>
                        <th>Tiempo de paseo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>8 €</td>
                        <td>1 hora</td>
                    </tr>
                    <tr>
                        <td>16 €</td>
                        <td>2 horas</td>
                    </tr>
                    <tr>
                        <td>Por determinar</td>
                        <td>2 horas o más</td>
                    </tr>
                </tbody>
            </table>
            <br>
            <p>*Estos precios son orientativos.</p>
            <p>No todos los perros necesitan lo mismo.<br>Wilson y yo estamos acostumbrados a dar paseos de hora y media como poco.</p>
        </div>`
        
    },
    galician: {
        titleTwo: "Paseadores de cans",

        titleThree: "Mentres ti traballas, el pásao en grande.",
        pOne: "¿Traballo, recados, compras, etc?<br>Nós coidamos do teu can.",
        bOne: "Coñécenos",

        titleFour: "Sobre nós",
        pFamOne: "Ola!",
        pFamTwo: "Somos unha familia de tres que, tras comprender as necesidades do noso can Wilson, decidimos abrir este pequeno negocio dedicado a aqueles propietarios que, por diversas razóns, non poden pasear ao seu compañeiro tanto como el ou ela necesita. 🐺🐶🦊",
        pFamThree: "Sabemos que os cans son animais sociais, activos e curiosos por natureza. Diversos estudos científicos demostraron que un paseo adecuado non só mellora a saúde física do teu can, senón tamén o seu benestar emocional, axudándolle a reducir o estrés e a ansiedade.",
        pFamFour: "Sabemos que os cans son animais sociais, activos e curiosos por natureza. Diversos estudos científicos demostraron que un paseo adecuado non só mellora a saúde física do teu can, senón tamén o seu benestar emocional, axudándolle a reducir o estrés e a ansiedade.",
        pFamFive: "En <b>Los Wilsons</b>, entendemos que saír ao banco que hai diante do portal da casa non sempre é suficiente. Por iso ofrecemos paseos enriquecedores que permiten á túa mascota explorar novos contornos, descubrir cheiros estimulantes e interactuar con outros cans, fomentando así un comportamento equilibrado e feliz.",
        pFamSix: "Confía en nós para regalarlle ao teu can ese pequeno gran momento do día, no que poderá exercitar corpo e mente, e volver á casa máis san e feliz ca nunca.",



        titleFive: "O equipo",
        teamMemberOne: "Directora xefa.",
        tmpOne: "Ola, benvido",
        tmpTwo: "Son a encargada de xestionar os horarios, ver as necesidades dos nosos clientes e as dos propietarios.",
        tmpThree: "Queremos que todo saia ben.",

        teamMemberTwo: "Departamento de Admisión.",
        tmpFour: "Non molestar, grazas.<br> Estou a perseguir algo nos meus soños.<br>Dixeches PREMIOS?<br>¿PARQUE?",

        teamMemberThree: "O que diga Laura e Wilson.",
        tmpFive: "Ola!",
        tmpSix: "Eu son quen se encarga de dar os paseos cos peludiños.",


        titleSix: "Que ofrecemos",
        offerOne: "Paseos longos",
        offerPOne: "Sabemos o importante que é para un can poder explorar, ulir e gozar do mundo que o rodea. <br>En Los Wilsons ofrecemos paseos enriquecedores, sempre preto do teu barrio, onde o teu cachorro poderá descubrir novos lugares, interactuar coa contorna e comportarse con naturalidade.",

        offerTwo: "Coidado de cans",
        offerPTwo: "<b>W</b>ilson tamén saíu delicado, polo tanto, entendemos que outros cans requiran dun trato especial.",
        offerPThree: "Cóntanos o seu historial e, se precisa medicación, subministrarémola segundo nos indiques.",

        offerThree: "Educación",
        offerPFour: "Como sempre, hai certas cousas que se aprenden na casa.",
        offerPFive: "E aos nosos cachorros pódese lles falar en varias linguas.",
        offerPSix: "Cóntanos cales son os seus comandos, para que nos faga un pouco de caso.",

        offerFour: "Expectativa",
        offerPSeven: "Agardamos que, tras pasar un anaco con nós xogando e ulindo, cheguen a casa bótandonos de menos e desexando volver.",
        offerPEight: "E, moi importante, con ganas dunha boa sesta.",

        notaImportante: `
        <div class="section-offer-important">
            <h3 class="impOne">🐾 Nota importante</h3>
            <p>Cada can é único, e tamén a súa forma de relacionarse cos demais. <br> 
            Para que os paseos en     grupo sexan seguros e agradables para todos, é importante coñecer como se comporta o teu can con outros compañeiros peludos. 
            Antes de comezar, pedirémosche que nos contes un pouco sobre o seu carácter, nivel de enerxía e experiencias previas en grupo. 
            Así poderemos organizar paseos con cans compatibles e evitar situacións incómodas.
            </p>
            <p>E se o teu can prefire ir ao seu aire ou precisa máis tranquilidade, non hai problema! Tamén ofrecemos paseos individuais especialmente pensados para el.
            </p>
            <h3>O noso obxectivo é que o teu cachorro goce ao máximo.</h3>
        </div>`,


        titleSeven: "Onde atoparnos",
        where: "Zona: Vigo, capital do mundo",

        titleEight: "Tarifas",
        notaImportantes: `
        <div class="info-prices">
        <p>Non lle poñas prezo ao mellor momento do día do teu cachorro.</p>
        <p>Aínda que si.</p>
        <br>
            <table>
                <thead>
                    <tr>
                        <th>Prezo</th>
                        <th>Tempo de paseo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>8 €</td>
                        <td>1 hora</td>
                    </tr>
                    <tr>
                        <td>16 €</td>
                        <td>2 horas</td>
                    </tr>
                    <tr>
                        <td>Por determinar</td>
                        <td>2 horas ou máis</td>
                    </tr>
                </tbody>
            </table>
            <br>
            <p>*Estes prezos son orientativos.</p>
            <p>Non todos os cans precisan do mesmo.<br>Wilson e máis eu estamos afeitos a dar paseos dunha hora e media como mínimo.</p>
        </div>`
    },

    english: {
        titleTwo: 'Dog walkers',

        titleThree: "While you're working, they're having a blast.",
        pOne: "Work, errands, shopping, etc?<br>We'll take care of your dog.",
        bOne: "Get to know us",

        titleFour: "About Us",
        pFamOne: "Hello!",
        pFamTwo: "We’re a family of three who, after understanding the needs of our dog Wilson, decided to open this small business dedicated to those owners who, for various reasons, cannot walk their companion as much as he or she needs. 🐺🐶🦊",
        pFamThree: "We know that dogs are social, active, and curious animals by nature. Various scientific studies have shown that a proper walk not only improves your dog’s physical health but also their emotional well-being, helping to reduce stress and anxiety.",
        pFamFour: "We know that dogs are social, active, and curious animals by nature. Various scientific studies have shown that a proper walk not only improves your dog’s physical health but also their emotional well-being, helping to reduce stress and anxiety.",
        pFamFive: "At <b>Los Wilsons</b>, we understand that going to the bench in front of the building isn’t always enough. That’s why we offer enriching walks that allow your pet to explore new environments, discover stimulating scents, and interact with other dogs—encouraging a balanced and happy behavior.",
        pFamSix: "Trust us to give your dog that special little moment of the day, where they can exercise both body and mind, and come back home healthier and happier than ever.",

        titleFive: "The Team",
        teamMemberOne: "Head Director.",
        tmpOne: "Hello, welcome",
        tmpTwo: "I'm in charge of managing schedules and checking on the needs of both our clients and the pet owners.",
        tmpThree: "We want everything to go smoothly.",
        teamMemberTwo: "Admissions Department.",        
        tmpFour: "Do not disturb, thanks.<br> I’m chasing something in my dreams.<br>Did you say TREATS?<br>PARK?",
        teamMemberThree: "Whatever Laura and Wilson say.",
        tmpFive: "Hello there!",
        tmpSix: "I’m the one in charge of walking the doggos.",


        titleSix: "What we offer",
        offerOne: "Long walks",
        offerPOne: "We know how important it is for a dog to explore, sniff, and enjoy the world around them. <br>At Los Wilsons, we offer enriching walks, always near your neighborhood, where your pup can discover new places, interact with their surroundings, and behave naturally.",

        offerTwo: "Dog care",
        offerPTwo: "<b>W</b>ilson turned out to be quite delicate too, so we understand that some dogs may require special treatment.",
        offerPThree: "Tell us about their history, and if they need medication, we’ll administer it as you instruct.",

        offerThree: "Training",
        offerPFour: "As always, some things are best learned at home.",
        offerPFive: "And our pups can be spoken to in multiple languages.",
        offerPSix: "Tell us their commands so they pay a bit of attention to us.",

        offerFour: "Expectation",
        offerPSeven: "We hope that after spending time with us, playing and sniffing, they return home missing us and looking forward to coming back.",
        offerPEight: "And most importantly, ready for a good nap.",

        notaImportante: `
        <div class="section-offer-important">
            <h3 class="impOne">🐾 Important Note</h3>
            <p>Every dog is unique, and so is the way they interact with others. <br> To ensure group walks are safe and pleasant for everyone, it’s important to understand how your dog behaves with other furry friends. Before starting, we’ll ask you to tell us a bit about their character, energy level, and previous group experiences. This way, we can plan walks with compatible dogs and avoid any uncomfortable situations.
            </p>
            <p>And if your dog prefers to do their own thing or needs a calmer walk, no worries! We also offer individual walks specially designed for them.
            </p>
            <h3>Our goal is for your pup to enjoy every moment.</h3>
        </div>`,


        titleSeven: "Where to find us",
        where: "Area: Vigo, capital of the world",

        titleEight: "Rates",
        notaImportantes: `
        <div class="info-prices">
            <p>Don't put a price on your pup's favorite moment of the day.</p>
            <p>But also, yes.</p>
            <br>
            <table>
                <thead>
                    <tr>
                        <th>Price</th>
                        <th>Walk duration</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>8 €</td>
                        <td>1 hour</td>
                    </tr>

                    <tr>
                        <td>16 €</td>
                        <td>2 hours</td>
                    </tr>

                    <tr>
                        <td>To be determined</td>
                        <td>2 hours or more</td>
                    </tr>
                </tbody>
            </table>
            <br>
            <p>*These prices are indicative.</p>
            <p>Not all dogs need the same.<br>Wilson and I are used to taking walks of at least an hour and a half.</p>
        </div>`,
    }
}