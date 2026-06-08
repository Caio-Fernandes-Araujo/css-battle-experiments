// Início da Lógica da troca de Seções

        //v2 - mais otimizado, função reutilizável:
        const buttons = document.querySelectorAll('.btn-container');
        const botaoAnime = document.querySelector('#btn-anime');
        const botaoHero = document.querySelector('#btn-hero');
        const botaoHypno = document.querySelector('#btn-hypno');

        const sections = document.querySelectorAll('.section-container');
        const secaoAnime = document.querySelector('#sec-anime');
        const secaoHero = document.querySelector('#sec-hero');
        const secaoHypno = document.querySelector('#sec-hypno');

        function AddStyleButtom(botaoParaAtivar) {
            buttons.forEach(el => {
                el.classList.remove('btnActive')
            });

            botaoParaAtivar.classList.add('btnActive');
        }

        function showSection(secaoParaAtivar) {
            sections.forEach(el => {
                el.classList.remove('sectionActive')
            });

            secaoParaAtivar.classList.add('sectionActive');
        }

        botaoAnime.addEventListener('click', () => {
            AddStyleButtom(botaoAnime);
            showSection(secaoAnime);
        })

        botaoHero.addEventListener('click', () => {
            AddStyleButtom(botaoHero);
            showSection(secaoHero);
        })

        botaoHypno.addEventListener('click', () => {
            AddStyleButtom(botaoHypno);
            showSection(secaoHypno);
        });

       /*v1 - mais verboso, feito na mão:
        const botaoAnime = document.querySelector('#btn-anime');
        const botaoHero = document.querySelector('#btn-hero');
        const botaoHypno = document.querySelector('#btn-hypno');

        const secaoAnime = document.querySelector('#sec-anime');
        const secaoHero = document.querySelector('#sec-hero');
        const secaoHypno = document.querySelector('#sec-hypno');

            function btnAnimeActive() {
                botaoAnime.classList.add('btnActive');
                botaoHero.classList.remove('btnActive');
                botaoHypno.classList.remove('btnActive');
            }

            function btnHeroActive() {
                botaoAnime.classList.remove('btnActive');
                botaoHero.classList.add('btnActive');
                botaoHypno.classList.remove('btnActive');
            }

            function btnHypnoActive() {
                botaoAnime.classList.remove('btnActive');
                botaoHero.classList.remove('btnActive');
                botaoHypno.classList.add('btnActive');
            }

            function SecAnimeActive() {
                secaoAnime.classList.add('sectionActive');
                secaoHero.classList.remove('sectionActive');
                secaoHypno.classList.remove('sectionActive');
            }

            function SecHeroActive() {
                secaoAnime.classList.remove('sectionActive');
                secaoHero.classList.add('sectionActive');
                secaoHypno.classList.remove('sectionActive');
            }

            function SecHypnoActive() {
                secaoAnime.classList.remove('sectionActive');
                secaoHero.classList.remove('sectionActive');
                secaoHypno.classList.add('sectionActive');
            }

        botaoAnime.addEventListener('click', () => {
            SecAnimeActive();
            btnAnimeActive();
        })

        botaoHero.addEventListener('click', () => {
            SecHeroActive();
            btnHeroActive();
        })

        botaoHypno.addEventListener('click', () => {
            SecHypnoActive();
            btnHypnoActive();
        })*/

        // Fim da Lógica da troca de Seções

        // Inicio da lógica de criar um botao dinamicamente e ligar/desligar o cursor customizado por ele (para teste)

        // criar o botao
        /*const menuList = document.querySelector('.menu-list-container');
        const btnTeste = document.createElement('li');
        const aElement = document.createElement('a');

        menuList.appendChild(btnTeste);
        btnTeste.classList.add('btn-container')
        btnTeste.appendChild(aElement);
        aElement.textContent = "Customizar Cursor";
        aElement.href = "#";
        
        // customizar o cursor
        const bodyElement = document.querySelector('body');
        const cursorDivElement = document.createElement('div');
        bodyElement.appendChild(cursorDivElement);

        function estilizarCursor() {

            cursorDivElement.classList.toggle('cursorCustomized');

            if(cursorDivElement.classList.contains('cursorCustomized')) {
                bodyElement.style.cursor = "none";
            } else {
                bodyElement.style.cursor = "default";
            }
    
        }

        document.addEventListener('mousemove', (e) => {
            cursorDivElement.style.top = e.clientY + "px";
            cursorDivElement.style.left = e.clientX + "px";
            
        })

        btnTeste.addEventListener('click', () => {
            estilizarCursor();
        })*/

        // Fim da lógica de criar um botao dinamicamente e ligar/desligar o cursor customizado por ele (para teste)
        
        //Função de toggle simples reutilizável  
        function alternarClasse(elemento, classe) {
            elemento.classList.toggle(classe);
        };

        //Função de toggle com forEach reutilizável
        function alternarClasseForEach(elemento, classe) {
            elemento.forEach(el => {
                el.classList.toggle(classe)
            })
        };

        // Início do Ryuk

        const ryukContainer = document.querySelector('.ryuk-background');
        const ryukCabelo = document.querySelector('.ryuk-hair');
        const ryukContornoOlho = document.querySelectorAll('.ryuk-eye-contour');
        const ryukOlhosVerdeEscuro = document.querySelectorAll('.ryuk-eye-dark-green-circle');
        const ryukOlhosVerdeClaro = document.querySelectorAll('.ryuk-eye-light-green-circle');
        const ryukOlhosMarrons = document.querySelectorAll('.ryuk-eye-brown-circle');

        function ryukNegativeColors() {

            ryukContainer.classList.toggle('ryukBackgroundNegative');

            ryukCabelo.classList.toggle('ryukHairNegative');

            ryukContornoOlho.forEach(el => {
                el.classList.toggle('ryukEyeContourNegative')
            });

            ryukOlhosVerdeEscuro.forEach(el => {
                el.classList.toggle('ryukEyeDarkGreenNegative')
            });

            ryukOlhosVerdeClaro.forEach(el => {
                el.classList.toggle('ryukEyeLightGreenNegative')
            });

            ryukOlhosMarrons.forEach(el => {
                el.classList.toggle('ryukEyeBrownNegative')
            });

        }

        ryukContainer.addEventListener('click', () => {

            ryukNegativeColors();

        })

        // Fim do Ryuk

        // Início do Amegakure

        // v2 do script do amegakure com a lógica de trava de clique durante a animação
        const amegakureContainer = document.querySelector('.amegakure-background');
        const amegakurePlate = document.querySelector('.amegakure-plate');
        const amegakureDiv = document.createElement('div');

        let riskIsAnimating = false;

            function amegakureRiskCross() {
                if(riskIsAnimating) return;

                riskIsAnimating = true;

                amegakureContainer.classList.toggle('amegakureContainerActive');
                amegakurePlate.appendChild(amegakureDiv);
                amegakureDiv.classList.add('amegakureRisk');
                
                if(!amegakureDiv.classList.contains('amegakureRiskAnimation')) {
                    amegakureDiv.classList.remove('amegakureRiskAnimationReverse');
                    amegakureDiv.classList.add('amegakureRiskAnimation');
                } else {
                    amegakureDiv.classList.remove('amegakureRiskAnimation');
                    amegakureDiv.classList.add('amegakureRiskAnimationReverse');
                    setTimeout(() => {
                        amegakureDiv.classList.remove('amegakureRisk');
                    }, 500);
                }
            }

        amegakureDiv.addEventListener('animationend', () => {
            riskIsAnimating = false;
        });
        amegakureContainer.addEventListener('click', () => {
            amegakureRiskCross();
        });

        // v1 do script do amegakure - sem trava de clique
        /*const amegakureContainer = document.querySelector('.amegakure-background');
        const amegakurePlate = document.querySelector('.amegakure-plate');
        const amegakureDiv = document.createElement('div');

            function amegakureRiskCross() {
                amegakurePlate.appendChild(amegakureDiv);
                amegakureDiv.classList.add('amegakureRisk');
                
                if(!amegakureDiv.classList.contains('amegakureRiskAnimation')) {
                    amegakureDiv.classList.remove('amegakureRiskAnimationReverse');
                    amegakureDiv.classList.add('amegakureRiskAnimation');
                } else {
                    amegakureDiv.classList.remove('amegakureRiskAnimation');
                    amegakureDiv.classList.add('amegakureRiskAnimationReverse');
                    setTimeout(() => {
                        amegakureDiv.classList.remove('amegakureRisk');
                        amegakureDiv.classList.remove('amegakureRiskAnimationReverse');
                    }, 450);
                }
            }
  

        amegakureContainer.addEventListener('click', () => {
            amegakureRiskCross();
        })

            //função de toggle simples reutilizável
        //     alternarClasse(amegakureRisco, 'amegakureRiskActive');
        // });*/

        // Fim do Amegakure

        // Início do Kurama

        const kuramaContainer = document.querySelector('.kurama-background');
        const kuramaContornoOlho = document.querySelector('.kurama-eye-contour');
        const kuramaOlhoVermelho = document.querySelector('.kurama-eye-red');
        let eyeIsAnimating = false;

        function kuramaChangeColors() {

                if(eyeIsAnimating) return;

                eyeIsAnimating = true;
                
                if(!kuramaOlhoVermelho.classList.contains('kuramaEyeAnimation')) {
                    kuramaContainer.classList.add('kuramaContainerActive');
                    kuramaContornoOlho.classList.add('kuramaEyeContourActive');
                    kuramaOlhoVermelho.classList.remove('kuramaEyeAnimationReverse');
                    kuramaOlhoVermelho.classList.add('kuramaEyeAnimation');
                } else {
                    kuramaContainer.classList.remove('kuramaContainerActive');
                    kuramaContornoOlho.classList.remove('kuramaEyeContourActive');
                    kuramaOlhoVermelho.classList.remove('kuramaEyeAnimation');
                    kuramaOlhoVermelho.classList.add('kuramaEyeAnimationReverse');
                }
            };   
            
        kuramaOlhoVermelho.addEventListener('animationend', () => {
                eyeIsAnimating = false;
        });

        kuramaContainer.addEventListener('click', () => {
            kuramaChangeColors();         
        });

        // Fim do Kurama

        // Início do Obito

        const obitoContainer = document.querySelector('.obito-container');
        const obitoFuroMascara = document.querySelector('.obito-mask-hole');
        const obitoOlhoBranco = document.querySelector('.obito-white-eye');
        const obitoOlhoVermelho = document.querySelector('.obito-red-eye');

        // ajuste na largura do container via js devido ao overflow: hidden diminuir a largura de seu container
        obitoContainer.style.minWidth = "400px";

        function obitoChangeColors() {
            obitoContainer.classList.toggle('obitoContainerActive');
            obitoFuroMascara.classList.toggle('obitoMaskHoleActive');
            obitoOlhoBranco.classList.toggle('obitoWhiteEyeActive');
            obitoOlhoVermelho.classList.toggle('obitoRedEyeActive');
        }

        obitoContainer.addEventListener('click', obitoChangeColors);

        // Fim do Obito

        // Início do One Piece

        // v3 do script do one piece com trava de cliques durante a animação
        const onePieceContainer = document.querySelector('.one-piece-background');
        const onePieceDiv = document.createElement('div');

        let hatIsAnimating = false;

        function addHat() {
            if(hatIsAnimating) return;
            
            hatIsAnimating = true;

            onePieceContainer.appendChild(onePieceDiv);
            onePieceDiv.classList.add('onePieceHat');

            if(!onePieceDiv.classList.contains('onePieceHatAnimation')) {
                onePieceContainer.classList.add('onePieceContainerActive');
                onePieceDiv.classList.remove('onePieceHatAnimationReverse');
                onePieceDiv.classList.add('onePieceHatAnimation');
            } else {
                onePieceContainer.classList.remove('onePieceContainerActive');
                onePieceDiv.classList.remove('onePieceHatAnimation');
                onePieceDiv.classList.add('onePieceHatAnimationReverse');
                setTimeout(() => {
                   onePieceDiv.classList.remove('onePieceHat')
                }, 1750);
            }
        }

        onePieceDiv.addEventListener('animationend', () => {
            hatIsAnimating = false
        });
        onePieceContainer.addEventListener('click', () => {
            addHat();
        });

        // v2 do script do chapéu finalizada
        /*const onePieceContainer = document.querySelector('.one-piece-background');
        const onePieceDiv = document.createElement('div');

        function addHat() {
            onePieceContainer.classList.toggle('onePieceContainerActive');
            onePieceContainer.appendChild(onePieceDiv);
            onePieceDiv.classList.add('onePieceHat');

            if(!onePieceDiv.classList.contains('onePieceHatAnimation')) {
                onePieceDiv.classList.remove('onePieceHatAnimationReverse');
                onePieceDiv.classList.add('onePieceHatAnimation');
            } else {
                onePieceDiv.classList.remove('onePieceHatAnimation');
                onePieceDiv.classList.add('onePieceHatAnimationReverse');
                setTimeout(() => {
                   onePieceDiv.classList.remove('onePieceHat')
                }, 1750);
            }
        }

        onePieceContainer.addEventListener('click', () =>{
            addHat();
        })*/

        // Fim do One Piece

        //Início do Akaza (html e css recriado 100% dinamicamente com js para treino)

        // v2 da inserção de regras css dinamicamente, menos verbosa porém menos controle
        // v2 da inserção de regras css dinamicamente, menos verbosa porém menos controle
        const styleElement = document.createElement('style');
        const linkElement = document.createElement('link');
        const akazaContainer = document.createElement('article');
        const akazaOlhoAzul = document.createElement('div');
        const akazaOlhoAmarelo = document.createElement('div');
        const akazaListra = document.createElement('div');

        document.head.appendChild(linkElement);
        document.body.prepend(styleElement);
        secaoAnime.appendChild(akazaContainer); 
        akazaContainer.prepend(akazaListra);
        akazaContainer.appendChild(akazaOlhoAzul);
        akazaOlhoAzul.appendChild(akazaOlhoAmarelo);

        linkElement.href = "https://fonts.googleapis.com/css2?family=Yuji+Syuku&display=swap";
        linkElement.rel = "stylesheet";

        akazaContainer.classList.add('card-container','akaza-background');
        akazaListra.classList.add('akaza-stripe');
        akazaOlhoAzul.classList.add('akaza-eye-blue');
        akazaOlhoAmarelo.classList.add('akaza-eye-yellow');

        akazaContainer.style.minWidth = "400px";

        styleElement.textContent = 
        
        `.akaza-background {
            background: var(--color-gray);
            border-color: var(--color-bright-blue);
            box-shadow: inset 0 25px 50px 3px var(--color-dark-gray);
            overflow: hidden;
            transition: var(--transition-slow);
        }

        .akaza-stripe {
            width: 1000px;
            aspect-ratio: 1;
            border: 60px solid var(--color-dark-blue);
            box-sizing: border-box;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: -380px;
            left: 45px; 
            transition: var(--transition-slow);
            box-shadow: inset 0 0 20px 2px var(--color-bright-blue), 0 0 20px 2px var(--color-bright-blue);    
        }

        .akaza-stripe::before {
            content: "";
            display: block;
            width: 800px;
            aspect-ratio: 1;
            border: 60px solid var(--color-dark-blue);
            box-sizing: border-box;
            border-radius: 50%;
            position: absolute;
            transition: var(--transition-slow);
            box-shadow: inset 0 0 20px 2px var(--color-bright-blue), 0 0 20px 2px var(--color-bright-blue);
        }

        .akaza-stripe::after {
            content: "";
            display: block;
            width: 600px;
            aspect-ratio: 1;
            border: 60px solid var(--color-dark-blue);
            box-sizing: border-box;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            transition: var(--transition-slow);
            box-shadow: inset 0 0 20px 2px var(--color-bright-blue), 0 0 20px 2px var(--color-bright-blue);
        }

        .akaza-eye-blue {
            height: 150px;
            width: 245px;
            background: repeating-conic-gradient(
                from 0deg,
                black 0deg 2deg,
                var(--color-bright-blue) 2deg 28deg
            );
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 70px 65px;
            outline: 5px solid black;
            overflow: hidden;
            transform: skew(-25deg) rotate(-5deg);  /*o skew irá afetar todos os filhos diretos e indiretos */
            border-radius: 70% 0px 30px 2px / 70% 0px 90px 2px;
            transition: var(--transition-slow);
            box-shadow: inset 0px 10px 25px 3px, /*sombreamento na parte superior do olho azul */
            5px -10px 0 20px var(--color-pink),  /*contorno rosa do olho */
            5px -10px 0 26px black;/* borda preta em volta do contorno rosa, com um scale 6px maior que o scale do contorno rosa */ 
            
        }

        .akaza-eye-yellow {
            width: 160px;
            aspect-ratio: 1;
            background: linear-gradient(to bottom, #F3AC3C 45%, #F9C96C 55%);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            outline: 5px solid black;
            transform: skew(25deg) rotate(5deg) translate(-10px,-15px); /*o skew negativo é para anular o skew herdado da classe '.akaza-eye-blue' */  
            transition: var(--transition-slow);
            box-shadow: inset 0 0 5px 10px white;
        }

        .akaza-eye-yellow::before {
            content: "参";
            display: block;
            position: absolute;
            top: -25px;
            left: 15px;
            font-family: 'Yuji Syuku', serif;
            font-size: 135px;
            font-weight: normal;
            color: #000;
            text-shadow:0 0 5px var(--color-red);
        }
            
        .akazaContainerActive {
            background-color: var(--color-teal-gray);
            border-color: var(--color-bright-blue);
            box-shadow: inset 0 25px 50px 3px var(--color-dark-gray);
        }

        .akazaStripeActive {
            border-color: var(--color-dark-gray);
            box-shadow: inset 0 0 20px 2px var(--color-bright-blue), 0 0 20px 2px var(--color-bright-blue);
        }

        .akazaStripeActive.akaza-stripe::before, .akazaStripeActive.akaza-stripe::after {
            border-color: var(--color-dark-gray);
            box-shadow: inset 0 0 20px 2px var(--color-bright-blue), 0 0 20px 2px var(--color-bright-blue);
        }

        .akazaEyeBlueActive {
            box-shadow: inset 0px 10px 25px 3px, /*sombreamento na parte superior do olho azul */
            5px -10px 0 20px var(--color-dark-pink),  /*contorno rosa do olho */
            5px -10px 0 26px black, /* borda preta em volta do contorno rosa, com um scale 6px maior que o scale do contorno rosa */
            5px -10px 15px 26px var(--color-dark-pink); /*luminosidade rosa sutil do olho */
        }

        .akazaEyeYellowActive {
            box-shadow: inset 0 0 5px 10px white, /*contorno interno do olho amarelo */
            0 0 25px 10px var(--color-yellow); /*contorno externo do olho amarelo */
            // 30px 220px 30px 30px #AFEEEE, /*efeito de luz na parte inferior do olho azul, inserir o mesmo valor da classe original, mas com um posicionamento mais abaixo, cria um efeito de luz se deslocando gradativamente */

        }`;



        function akazaChangeColors() {
            akazaContainer.classList.toggle('akazaContainerActive');
            akazaListra.classList.toggle('akazaStripeActive');
            akazaOlhoAzul.classList.toggle('akazaEyeBlueActive');
            akazaOlhoAmarelo.classList.toggle('akazaEyeYellowActive');
        }

        akazaContainer.addEventListener('click', () => {
            akazaChangeColors();
        });

        

        // v1 da inserção de regras css dinamicamente, mais controle porém mais verbosa
        // styleElement.sheet.insertRule(
        //     `.akaza-background {
        //     background-color: var(--color-gray);
        //     }`, styleElement.sheet.cssRules.length);

        // styleElement.sheet.insertRule(
        //     `.akaza-eye-blue {
        //     height: 150px;
        //     width: 245px;
        //     background-color: var(--color-bright-blue);
        //     display: flex;
        //     justify-content: center;
        //     align-items: center;
        //     margin: 70px 65px;
        //     outline: 5px solid black;
        //     overflow: hidden;
        //     transform: skew(-25deg) rotate(-5deg);  /*o skew irá afetar todos os filhos diretos e indiretos */
        //     border-radius: 70% 0px 30px 0px / 70% 0px 90px 0px;
        //     box-shadow: 5px -10px 0 20px var(--color-pink),  /*contorno rosa do olho */
        //     5px -10px 0 23px black; /* borda preta em volta do contorno rosa, com um scale 3px maior que o scale do contorno rosa */ 
        // }`, styleElement.sheet.cssRules.length);

        // styleElement.sheet.insertRule(`
        //     .akaza-eye-yellow {
        //     width: 170px;
        //     aspect-ratio: 1;
        //     background: linear-gradient(to bottom, #F3AC3C 45%, #F9C96C 55%);
        //     display: flex;
        //     justify-content:center;
        //     align-items: center;
        //     border-radius: 50%;
        //     transform: skew(25deg) rotate(5deg) translate(-10px,-15px); /*o skew negativo é para anular o skew herdado da classe '.akaza-eye-blue' */  
        //     box-shadow: inset 0 0 5px 10px white, 
        //     0 100px 30px 50px #AFEEEE; /*este box - shadow está dando o efeito clareado na parte azul inferior do olho*/  
        //     outline: 5px solid black;
        // }`, styleElement.sheet.cssRules.length);

        // styleElement.sheet.insertRule(
        //     `.akaza-eye-yellow::before {
        //     content: "参";
        //     font-size: 130px;
        //     font-weight: bold;
        //     color: #000;
        //     text-shadow:0 0 5px hotpink;
        // }`, styleElement.sheet.cssRules.length);

        //Fim do akaza
        

        // Início do Kokushibo (100% dinânico para treino)

        const kokushiboContainer = document.createElement('article');
        const kokushiboMarca = document.createElement('div');
        const kokushiboOlhoVermelhoTopo = document.createElement('div');
        const kokushiboOlhoVermelhoMeio = document.createElement('div');
        const kokushiboOlhoVermelhoBaixo = document.createElement('div');
        const kokushiboOlhoAmareloTopo = document.createElement('div');
        const kokushiboOlhoAmareloMeio = document.createElement('div');
        const kokushiboOlhoAmareloBaixo = document.createElement('div');

        secaoAnime.appendChild(kokushiboContainer);
        kokushiboContainer.prepend(kokushiboMarca);

        kokushiboMarca.after(kokushiboOlhoVermelhoTopo);
        kokushiboOlhoVermelhoTopo.after(kokushiboOlhoVermelhoMeio);
        kokushiboOlhoVermelhoMeio.after(kokushiboOlhoVermelhoBaixo);

        kokushiboOlhoVermelhoTopo.appendChild(kokushiboOlhoAmareloTopo);
        kokushiboOlhoVermelhoMeio.appendChild(kokushiboOlhoAmareloMeio);
        kokushiboOlhoVermelhoBaixo.appendChild(kokushiboOlhoAmareloBaixo);

        kokushiboContainer.classList.add('card-container','kokushibo-background');
        kokushiboMarca.classList.add('kokushibo-mark');
        kokushiboOlhoVermelhoTopo.classList.add('kokushibo-eye-red','kokushibo-eye-red--top');
        kokushiboOlhoVermelhoMeio.classList.add('kokushibo-eye-red','kokushibo-eye-red--mid');
        kokushiboOlhoVermelhoBaixo.classList.add('kokushibo-eye-red','kokushibo-eye-red--bottom');
        kokushiboOlhoAmareloTopo.classList.add('kokushibo-eye-yellow', 'kokushibo-eye-yellow--top');
        kokushiboOlhoAmareloMeio.classList.add('kokushibo-eye-yellow', 'kokushibo-eye-yellow--mid');
        kokushiboOlhoAmareloBaixo.classList.add('kokushibo-eye-yellow', 'kokushibo-eye-yellow--bottom');

        // inserção de regras de estilo mais verbosa, porém com mais controle

        // a tag style já havia sido criada no akaza
        styleElement.sheet.insertRule(`.kokushibo-background {
            background: var(--color-bege);
            min-width: 400px;
            height: auto;
            border-color: var(--color-red);
            box-shadow:inset 20px 10px 70px 15px var(--color-dark-gray);
            transition: var(--transition-slow);
        }`, styleElement.sheet.cssRules.length);


        styleElement.sheet.insertRule(`.kokushibo-mark {
            position: absolute;
        }`, styleElement.sheet.cssRules.lenght);

        styleElement.sheet.insertRule(`.kokushibo-eye-red {
            height: 200px;
            width: 250px;
            background: repeating-conic-gradient(
                 from 45deg,
                 black 0deg 2deg,
                 var(--color-bright-red) 2deg 15deg
            );
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 65px;
            margin-bottom: 70px ;
            outline: 5px solid black;
            transition: var(--transition-slow);
            box-shadow: inset 0px 15px 30px 3px; /*sombreamento na parte superior do olho vermelho */
             // 5px -10px 0 26px black;/* borda preta em volta do contorno vermelho
        }`,styleElement.sheet.cssRules.length);

         styleElement.sheet.insertRule(`.kokushibo-eye-red--top {
            transform: skew(10deg) rotate(0deg) translate(20px,60px);  /*o skew irá afetar todos os filhos diretos e indiretos */
            border-radius: 10px 70%;
        }`, styleElement.sheet.cssRules.length);

        styleElement.sheet.insertRule(`.kokushibo-eye-red--mid {
            transform: skew(10deg) rotate(0deg);  /*o skew irá afetar todos os filhos diretos e indiretos */
            border-radius: 10px 70%;
        }`, styleElement.sheet.cssRules.length);

        styleElement.sheet.insertRule(`.kokushibo-eye-red--bottom {
            transform: skew(-10deg) rotate(0deg);  /*o skew irá afetar todos os filhos diretos e indiretos */
            border-radius:70% 10px;
        }`, styleElement.sheet.cssRules.length);

        styleElement.sheet.insertRule(`.kokushibo-eye-yellow {
            width: 120px;
            aspect-ratio: 1;
            background: radial-gradient(circle at 50%, var(--color-yellow) 30%, var(--color-orange) 40%);
            // background: repeating-conic-gradient( from 0deg, black 0deg 5deg, var(--color-golden-yellow) 5deg 72deg);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            outline: 5px solid black;
            transition: var(--transition-slow);
            box-shadow: inset 0 0 10px 10px var(--color-yellow);
        }`, styleElement.sheet.cssRules.lenght);

        styleElement.sheet.insertRule(`.kokushibo-eye-yellow--top {
            transform: skew(-10deg) rotate(0deg) translate(0px,0px); /*o skew negativo é para anular o skew herdado da classe '.kokushibo-eye-red--top' */
        }`, styleElement.sheet.cssRules.lenght);

        styleElement.sheet.insertRule(`.kokushibo-eye-yellow--mid {
            transform: skew(-10deg) rotate(0deg) translate(0px,0px); /*o skew negativo é para anular o skew herdado da classe '.kokushibo-eye-red--mid' */
        }`, styleElement.sheet.cssRules.lenght);

        styleElement.sheet.insertRule(`.kokushibo-eye-yellow--bottom {
            transform: skew(10deg) rotate(0deg) translate(0px,0px); /*o skew positivo é para anular o skew negativo herdado da classe '.kokushibo-eye-red--bottom' */
        }`, styleElement.sheet.cssRules.lenght);


        styleElement.sheet.insertRule(`.kokushibo-eye-yellow--mid::before {
            content: "壱";
            display: block;
            position: absolute;
            top: -20px;
            font-family: 'Yuji Syuku', serif;
            font-size: 100px;
            font-weight: normal;
            color: #000;
            text-shadow:0 0 5px var(--color-red);
         }`, styleElement.sheet.cssRules.lenght)

         styleElement.sheet.insertRule(`.kokushibo-eye-yellow--top::before, .kokushibo-eye-yellow--bottom::before {
            content: "";
            display: block;
            width: 30px;
            aspect-ratio: 1;
            background: black;
            border-radius: 50%;
        }`, styleElement.sheet.cssRules.lenght);

        // fim do Kokushibo


        // Início do Punisher

        const punisherContainer = document.querySelector('.punisher-container');
        const punisherShapesBlack = document.querySelectorAll('.js-punisher-black')
        const punisherShapesShadow = document.querySelectorAll('.js-punisher-shadow');
        const punisherTeethShadow = document.querySelectorAll('.punisher-teeth');

        function punisherChangeColors() {
                punisherContainer.classList.toggle('punisherContainerActive');

                punisherShapesBlack.forEach( el => {
                    el.classList.toggle('punisherShapeBlackActive')
                });

                punisherShapesShadow.forEach( el => {
                    el.classList.toggle('punisherShapeShadowActive')
                });
                
                punisherTeethShadow.forEach( el => {
                    el.classList.toggle('punisherTeethShadowActive')
                });
            };           

        punisherContainer.addEventListener('click', () => {
            punisherChangeColors();
        });

        // Fim do Punisher

        // Início do Wolverine

        const wolverineContainer = document.querySelector('.wolverine-background');
        const wolverineFaceShapes = document.querySelectorAll('.js-wolverine');

            function wolverineChangeColors() {

                wolverineContainer.classList.toggle('wolverineContainerActive');

                wolverineFaceShapes.forEach(el => {
                    el.classList.toggle('wolverineFaceActive')
                });
            }

        wolverineContainer.addEventListener('click', () => {

            wolverineChangeColors();

        });

        // Fim do Wolverine

        // Início do Green Lantern

        const greenLanternContainer = document.querySelector('.green-lantern-background');
        const greenLanternShapes = document.querySelectorAll('.js-lantern');
        const insetBoxShadow = document.querySelector('.green-lantern-core');

        function lanternChangeColors() {
                greenLanternContainer.classList.toggle('lanternActive');

                greenLanternShapes.forEach( el => {
                    el.classList.toggle('lanternActive');
                });

                insetBoxShadow.classList.toggle('lanternCoreActive');
            }    

        greenLanternContainer.addEventListener('click', () => {

            lanternChangeColors();

        });

        //Acessibilidade
        
        greenLanternContainer.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                lanternChangeColors();
            }});

        // Fim do Green Lantern


        // Início do look away

        const lookAwayContainer = document.querySelector('.look-away-background');
        const lookAwayCorpo = document.querySelector('.look-away-body');
        const lookAwayShapes = document.querySelectorAll('.js-lookAway');


        function lookAwayActive() {
                lookAwayContainer.classList.toggle('lookAwayContainerActive');

                lookAwayCorpo.classList.toggle('lookAwayBodyActive');

                lookAwayShapes.forEach( el => {
                    el.classList.toggle('lookAwayBlueShapesActive');
                });
            }    


        lookAwayContainer.addEventListener('click', () =>{

            lookAwayActive();

        });

        // Início do look away

        // Início do atom

        const atomContainer = document.querySelector('.atom-background');
        const atomShapes = document.querySelectorAll('.js-atom');

        function atomChangeColors() {
                atomContainer.classList.toggle('atomContainerActive');

                atomShapes.forEach( el => {
                    el.classList.toggle('atomRingsActive');
                });
            }   

        atomContainer.addEventListener('click', () => {

            atomChangeColors();


        });

        // Fim do atom

        // início do fountain

        const fountainContainer = document.querySelector('.fountain-background')
        const fountainShapes = document.querySelectorAll('.js-fountain');

        function fountainActive() {
            fountainContainer.classList.toggle('fountainActive');

            fountainShapes.forEach(el => {
            el.classList.toggle('fountainActive')
            });     

        }

        fountainContainer.addEventListener('click', () => {

            fountainActive();

        });

        // Fim do fountain

        // Início do mosaic

            const mosaicContainer = document.querySelector('.mosaic-container');
            const mosaicShapes = document.querySelectorAll('.mosaic__block');

            function mosaicChangeColors() {

                mosaicShapes.forEach(el => {
                    el.classList.toggle('mosaicActive')
                });

            }

            mosaicContainer.addEventListener('click', () =>{

                mosaicChangeColors();

            });

        // Fim do mosaic

        // Início do monopoly

        const monopolyContainer = document.querySelector('.monopoly-background');
        const monopolyShapes = document.querySelectorAll('.js-monopoly');

        function monopolyChangeColors() {
            monopolyContainer.classList.toggle('monopolyContainerActive');
            monopolyShapes.forEach(el => {
                el.classList.toggle('monopolyShapesActive');
            })
        }

        monopolyContainer.addEventListener('click', () => {
            monopolyChangeColors();
        })

        // Fim do monopoly