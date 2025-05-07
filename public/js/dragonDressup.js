// TODO: Add waterwark to bg to make it obvious it's from the dressup?
// TODO: Make cert show ??? for custom colours

// Actual game start
class DragonDressup extends Phaser.Scene
{
    constructor ()
    {
        super({
            key: 'DragonDressup'
        });
    }

    preload (data)
    {  
        // Load in images and sounds
        this.add.image(584, 265, 'background').setScale(.5);

        this.load.image('UIRef', './images/UIRef.png');
        this.load.image('UIBG', './images/UIBG.png');
        this.load.image('ArrowBtn', './images/ArrowBtn.png');
        this.load.atlas('ColorsBtn', './images/ColorsBtn.png', './images/ColorsBtn.json');
        this.load.atlas('FeaturesBtn', './images/FeaturesBtn.png', './images/FeaturesBtn.json');
        this.load.atlas('PatternsBtn', './images/PatternsBtn.png', './images/PatternsBtn.json');
        this.load.atlas('LockBtn', './images/lock.png', './images/lock.json');
        this.load.image('EyesBtn', './images/EyesBtn.png');
        // this.load.image('HairBtn', './images/HairBtn.png');
        // this.load.image('HornsBtn', './images/HornsBtn.png');
        // this.load.image('SizeBtn', './images/SizeBtn.png');
        this.load.image('RandomizeBtn', './images/RandomizeBtn.png');

        this.load.image('button', './images/button.png');
        this.load.image('closeButton', './images/closeButton.png');
        this.load.image('certButton', './images/certBtn.png');
        this.load.image('certificate', './images/certificate.png');

        // this.load.spineAtlas("griffAtlas", `./2D/Griffin/skeleton.atlas`);
        // this.load.spineJson("griffJson", `./2D/Griffin/skeleton.json`);


        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });
        this.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true);
        
        this.helper = new Helper(this)
    }

    create (data)
    {
        // Makes functions easier to write
        const game = this;

        //  If you disable topOnly it will fire events for all objects the pointer is over, regardless of place on the display list
        game.input.topOnly = true;

        const ui = game.add.image(163, 269, 'UIBG').setScale(.4)
        game.tabs = {}


        // ============ Animal ============ //
        game.animal = game.add.spine(570, 265, 'griffJson', `griffAtlas`).setScale(.65);
            game.animalData = {
                view: 0,
                views: 1,
                wingsOpen: 1,
                randomiseAnimalFeatures: randomiseGriffFeatures,
                setAnimalSkin: setGriffSkin,
                tintAnimal: tintGriffin,
                setCertText: setGriffCertText
            }
            game.currentColor = 'primaryColor'

        function randomiseGriffFeatures() {
            if (!game.animalData.patternLock) {game.animalData.pattern = game.helper.randomIntFromInterval(0,4)}
            if (!game.animalData.crestLock) {
                let randomCrest = game.helper.randomIntFromInterval(0, 40)
                if (randomCrest < 10) {
                    game.animalData.crest = 0
                } else if (randomCrest < 20) {
                    game.animalData.crest = 1
                } else if (randomCrest < 30) {
                    game.animalData.crest = 2
                } else if (randomCrest < 40) {
                    game.animalData.crest = 3
                } else {
                    game.animalData.crest = 4
                }
            }
            if (!game.animalData.tailLock) {
                let randomTail = game.helper.randomIntFromInterval(0, 41)
                if (randomTail < 10) {
                    game.animalData.tail = 0
                } else if (randomTail < 20) {
                    game.animalData.tail = 1
                } else if (randomTail < 30) {
                    game.animalData.tail = 2
                } else if (randomTail < 40) {
                    game.animalData.tail = 3
                } else {
                    game.animalData.tail = 4
                }
            }
            if (!game.animalData.wingslock) {
                let randomWings = game.helper.randomIntFromInterval(0, 45)
                if (randomWings < 10) {
                    game.animalData.wings = 0
                } else if (randomWings < 20) {
                    game.animalData.wings = 1
                } else if (randomWings < 30) {
                    game.animalData.wings = 2
                } else if (randomWings < 40) {
                    game.animalData.wings = 3
                } else if (randomWings < 45) {
                    game.animalData.wings = 4
                } else {
                    game.animalData.wings = 5
                }
            }
        }

        function setGriffSkin(skin, skeletonData) {
            skin.addSkin(skeletonData.findSkin(`Pattern/${game.animalData.pattern}`));
            skin.addSkin(skeletonData.findSkin(`Eye/${game.animalData.eye}`));
            if (game.animalData.lashes === 0) {skin.addSkin(skeletonData.findSkin(`Eye/Lashes`));}
            skin.addSkin(skeletonData.findSkin(`Crest/${game.animalData.crest}`));
            skin.addSkin(skeletonData.findSkin(`Tail/${game.animalData.tail}`));
            skin.addSkin(skeletonData.findSkin(`Wings/${game.animalData.wingsOpen}/${game.animalData.wings}`));
        }

        function tintGriffin() {
            let shade = 1

            game.helper.changeTint(game.animal, 'Base', game.animalData.primaryColor.colorHex, shade)
            game.helper.changeTint(game.animal, 'Crest1', game.animalData.primaryColor.colorHex, shade)
            game.helper.changeTint(game.animal, 'WingFront1', game.animalData.primaryColor.colorHex, shade)
            game.helper.changeTint(game.animal, 'WingBack1', game.animalData.primaryColor.colorHex, shade)
            game.helper.changeTint(game.animal, 'Tail1', game.animalData.primaryColor.colorHex, shade)

            game.helper.changeTint(game.animal, 'Crest2', game.animalData.secondaryColor.colorHex, shade)
            game.helper.changeTint(game.animal, 'WingFront2', game.animalData.secondaryColor.colorHex, shade)
            game.helper.changeTint(game.animal, 'WingBack2', game.animalData.secondaryColor.colorHex, shade)
            game.helper.changeTint(game.animal, 'Tail2', game.animalData.secondaryColor.colorHex, shade)
            game.helper.changeTint(game.animal, 'Pattern2', game.animalData.secondaryColor.colorHex, shade)

            game.helper.changeTint(game.animal, 'Crest3', game.animalData.tertiaryColor.colorHex, shade)
            game.helper.changeTint(game.animal, 'Tail3', game.animalData.tertiaryColor.colorHex, shade)
            game.helper.changeTint(game.animal, 'WingFront3', game.animalData.tertiaryColor.colorHex, shade)
            game.helper.changeTint(game.animal, 'WingBack3', game.animalData.tertiaryColor.colorHex, shade)
            game.helper.changeTint(game.animal, 'Pattern3', game.animalData.tertiaryColor.colorHex, shade)
            
            game.helper.changeTint(game.animal, 'EyeColor', game.animalData.eyeColor.colorHex, shade)
            switch (game.animalData.pattern) {
                case '0':
                    game.helper.changeTint(game.animal, 'Eyelashes', game.animalData.tertiaryColor.colorHex, shade)
                    break;
            
                default:
                    game.helper.changeTint(game.animal, 'Eyelashes', game.animalData.primaryColor.colorHex, shade)
                    break;
            }
        }

        // ============ UI ============ //
        game.helper.addViewButtons()
        game.helper.makeColorSelectors()
        const eyeSlider = game.helper.makeSelector(164, 285, 11, 'eye', ['Ordinary', 'Surprised', 'Cute', 'Creepy', 'Spooky', 'Swirly', 'Blank', 'Crossed Out', 'Starry', 'Lovely', 'Suspicious', 'Striking'])
        const eyelashSlider = game.helper.makeSelector(164, 370, 1, 'lashes', ['With Eyelashes', 'No Eyelashes'])
        const crestSlider = game.helper.makeSelector(164, 200, 4, 'crest', ['None', 'Bestial', 'Pinnacle', 'Windswept', 'Harpy'])
        const wingsSlider = game.helper.makeSelector(164, 285, 5, 'wings', ['None', 'Heroic', 'Manticore', 'Osprey', 'Scarab (Rare)', 'Seraph (Epic)'])
        const tailSlider = game.helper.makeSelector(164, 370, 4, 'tail', ['Fanned', 'Quetzal', 'Svelte', 'Tufted', 'Scorpio (Rare)'])
        const sizeSlider = game.helper.makeSelector(164, 200, 6, 'bodySize', ['XXS (Legendary)', 'XS (Epic)', 'Small (Rare)', 'Standard', 'Large (Rare)', 'XL (Epic)', 'XXL (Legendary)'])
        const patternSlider = game.helper.makeSelector(164, 285, 4, 'pattern', ['Drifter', 'Duochrome', 'Shining', 'Stealthy', 'Harfang (Epic)'])

            // ============ Tab Buttons ============ //
            game.tabButtons = {}

            let eyesTab = [game.colorSelectors['eyeColor'], eyeSlider, eyelashSlider]
            let hairTab = [crestSlider, tailSlider, wingsSlider]
            let sizeTab = [sizeSlider]

            let eyesBtn = game.helper.makeTabButton('EyesBtn', eyesTab, 303, 186)
            let hairBtn = game.helper.makeTabButton('HairBtn', hairTab, 303, 250)
            let sizeBtn = game.helper.makeTabButton('SizeBtn', sizeTab, 303, 314)

            let featuresTab = [eyesBtn, hairBtn, sizeBtn]
            featuresTab.forEach(element => {
                eyesTab.push(element)
                hairTab.push(element)
                sizeTab.push(element)
            });
            let colorsTab = [game.colorSelectors['primaryColor'], game.colorSelectors['secondaryColor']]
            let patternsTab = [game.colorSelectors['tertiaryColor'], patternSlider]

            let colorsBtn = game.helper.makeTabButton('ColorsBtn', colorsTab, 97, 117)
            game.featuresBtn = game.helper.makeTabButton('FeaturesBtn', eyesTab, 163, 117)
            let patternsBtn = game.helper.makeTabButton('PatternsBtn', patternsTab, 230, 117)

            // ============ Randomise Button ============ //
            const randomButton = game.add.image(163, 439, 'RandomizeBtn').setScale(.4)

            randomButton.setInteractive({ useHandCursor: true });

            randomButton.on('pointerdown', () => {
                game.helper.randomiseAnimal()

                // Make labels and colours update upon randomizing
                patternSlider.list[0].text = patternSlider.list[0].lables[game.animalData.pattern]
                eyeSlider.list[0].text = eyeSlider.list[0].lables[game.animalData.eye]
                eyelashSlider.list[0].text = eyelashSlider.list[0].lables[game.animalData.lashes]
                crestSlider.list[0].text = crestSlider.list[0].lables[game.animalData.crest]
                tailSlider.list[0].text = tailSlider.list[0].lables[game.animalData.tail]
                wingsSlider.list[0].text = wingsSlider.list[0].lables[game.animalData.wings]
                sizeSlider.list[0].text = sizeSlider.list[0].lables[game.animalData.bodySize]
            })

            // ============ Color Picker ============ //
            game.closeColor = closeColor
            game.helper.makeColorPicker()
            game.helper.makeColorSelectionMenu()
            game.helper.makeCertificate()


        // ============ Certificate ============ //
        function setGriffCertText() {
            let primary = `Primary Color\n${game.helper.checkColor(game.animalData.primaryColor)}\n\n`
            let secondary = `Secondary Color\n${game.helper.checkColor(game.animalData.secondaryColor)}\n\n`
            let tertiary = `Tertiary Color\n${game.helper.checkColor(game.animalData.tertiaryColor)}\n\n`
            let eye = `Eye Color\n${game.helper.checkColor(game.animalData.eyeColor)}\n\n`
            let eyeShape = `Eye Shape\n${eyeSlider.list[0].lables[game.animalData.eye]}${game.animalData.lashes ? '' : ' with Eylashes'}\n\n`
            let pattern = `Pattern\n${patternSlider.list[0].lables[game.animalData.pattern]}\n\n`
            let wings = `Wings\n${wingsSlider.list[0].lables[game.animalData.wings]}\n\n`
            let crest = `Crest\n${crestSlider.list[0].lables[game.animalData.crest]}\n\n`
            let tail = `Tail\n${tailSlider.list[0].lables[game.animalData.tail]}\n\n`
            let size = game.animalData.bodySize === 3 ? '' : `Size\n${sizeSlider.list[0].lables[game.animalData.bodySize]}\n\n`
            return primary + secondary + tertiary + eye + eyeShape + pattern + crest + wings + tail + size
        }

        // ============ Tab Control ============ //
        const mainUI = [ui, colorsBtn, game.featuresBtn, patternsBtn, randomButton]
        showTab(colorsTab)
        game.showTab = showTab


        // ============ Helper Functions ============ //
        /**
         * Hides the current tab and shows the new tab
         * @param {*} tab The tab to show (all others will be hidden)
         */
        function showTab(tab) {
            let tabs = [colorsTab, eyesTab, hairTab, sizeTab, patternsTab]
            tabs.forEach(tab => {
                mainUI.forEach(element => {
                    tab.push(element)
                });
            });
            tabs.push(game.tabs.colorSelector)
            tabs.push(game.tabs.colorPickerTab)
            tabs.push(game.tabs.certMenu)
            Object.keys(game.helper.colors).forEach(key=>{
                tabs.push(game.colorButtons[key])
            })
            tabs = tabs.filter(e => e !== tab)
            for (let index = 0; index < tabs.length; index++) {
                tabs[index].forEach(element => {
                    element.setAlpha(0);
                });
            }
            tab.forEach(element => {
                element.setAlpha(1);
            });
            
            game.tabs.certMenu[0].disableInteractive(false)
        }
        
        function closeColor() {
            switch (game.currentColor) {
                case 'tertiaryColor':
                    showTab(patternsTab)
                    break;
                case 'eyeColor':
                    showTab(eyesTab)
                    break;
            
                default:
                    showTab(colorsTab)
                    break;
            }
        }
    }
}