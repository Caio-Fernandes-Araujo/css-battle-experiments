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
        const kuramaOlhoVermelho = document.querySelector('.kurama-eye-red');

        function kuramaChangeColors() {
                kuramaContainer.classList.toggle('kuramaContainerActive');

                kuramaOlhoVermelho.classList.toggle('kuramaEyeActive');
            }           

        kuramaContainer.addEventListener('click', () => {
            kuramaChangeColors();         
        });

        // Fim do Kurama

        // Início do One Piece

        // v3 do script do one piece com trava de cliques durante a animação
        
        const onePieceContainer = document.querySelector('.one-piece-background');
        const onePieceDiv = document.createElement('div');

        let hatIsAnimating = false;

        function addHat() {
            if(hatIsAnimating) return;
            
            hatIsAnimating = true;

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