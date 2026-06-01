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
        const styleElement = document.createElement('style');
        const akazaContainer = document.createElement('article');
        const akazaOlhoAzul = document.createElement('div');
        const akazaOlhoAmarelo = document.createElement('div');
        const akazaListra = document.createElement('div');

        document.body.prepend(styleElement);
        secaoAnime.appendChild(akazaContainer); 
        akazaContainer.prepend(akazaListra);
        akazaContainer.appendChild(akazaOlhoAzul);
        akazaOlhoAzul.appendChild(akazaOlhoAmarelo);

        akazaContainer.classList.add('card-container');
        akazaContainer.classList.add('akaza-background');
        akazaListra.classList.add('akaza-stripe');
        akazaOlhoAzul.classList.add('akaza-eye-blue');
        akazaOlhoAmarelo.classList.add('akaza-eye-yellow');

        akazaContainer.style.minWidth = "400px";

        styleElement.textContent = `
        .akaza-background {
            background: var(--color-gray);
            border-color: var(--color-dark-blue);
            box-shadow: inset 0 25px 50px 3px var(--color-dark-gray);
            overflow: hidden;
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
        }

        .akaza-eye-blue {
            height: 150px;
            width: 245px;
            background-color: var(--color-bright-blue);
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 70px 65px;
            outline: 5px solid black;
            overflow: hidden;
            transform: skew(-25deg) rotate(-5deg);  /*o skew irá afetar todos os filhos diretos e indiretos */
            border-radius: 70% 0px 30px 0px / 70% 0px 90px 0px;
            box-shadow: inset 25px 10px 25px 3px,
            5px -10px 0 20px var(--color-pink),  /*contorno rosa do olho */
            5px -10px 0 23px black; /* borda preta em volta do contorno rosa, com um scale 3px maior que o scale do contorno rosa */ 
        }

        .akaza-eye-yellow {
            width: 160px;
            aspect-ratio: 1;
            background: linear-gradient(to bottom, #F3AC3C 45%, #F9C96C 55%);
            display: flex;
            justify-content:center;
            align-items: center;
            border-radius: 50%;
            transform: skew(25deg) rotate(5deg) translate(-10px,-15px); /*o skew negativo é para anular o skew herdado da classe '.akaza-eye-blue' */  
            box-shadow: inset 0 0 5px 10px white, 
            0 100px 30px 50px #AFEEEE; /*este box - shadow está dando o efeito clareado na parte azul inferior do olho*/  
            outline: 5px solid black;
        }

        .akaza-eye-yellow::before {
            content: "参";
            font-size: 120px;
            font-weight: bold;
            color: #000;
            text-shadow:0 0 5px hotpink;
        }`;

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