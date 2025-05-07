// TODO: Add waterwark to bg to make it obvious it's from the dressup?
// TODO: Make cert show ??? for custom colours

// Actual game start
class UniDressup extends Phaser.Scene
{
    constructor ()
    {
        super({
            key: 'UniDressup'
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
        this.load.image('HairBtn', './images/HairBtn.png');
        this.load.image('HornsBtn', './images/HornsBtn.png');
        this.load.image('SizeBtn', './images/SizeBtn.png');
        this.load.image('RandomizeBtn', './images/RandomizeBtn.png');

        this.load.image('button', './images/button.png');
        this.load.image('closeButton', './images/closeButton.png');
        this.load.image('certButton', './images/certBtn.png');
        this.load.image('certificate', './images/certificate.png');
        this.load.image('GriffinBtn', './images/GriffinBtn.png');

        this.load.spineAtlas("uniAtlas", `./2D/Unicorn/uniSkeleton.atlas`);
        this.load.spineJson("uniJson", `./2D/Unicorn/uniSkeleton.json`);


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
        game.animal = game.add.spine(570, 265, 'uniJson', `uniAtlas`).setScale(.65);
            game.animalData = {
                view: 0,
                views: 1,
                randomiseAnimalFeatures: randomiseUniFeatures,
                setAnimalSkin: setUniSkin,
                tintAnimal: tintUnicorn,
                setCertText: setUniCertText
            }
            game.currentColor = 'primaryColor'

        function randomiseUniFeatures() {
            if (!game.animalData.patternLock) {game.animalData.pattern = game.helper.randomIntFromInterval(0,3)}
            if (!game.animalData.maneLock) {game.animalData.mane = game.helper.randomIntFromInterval(0,2)}
            if (!game.animalData.tailLock) {game.animalData.tail = game.helper.randomIntFromInterval(0,2)}
            if (!game.animalData.hornLock) {
                let randomHorn = game.helper.randomIntFromInterval(0, 45)
                if (randomHorn < 10) {
                    game.animalData.horn = 0
                } else if (randomHorn < 20) {
                    game.animalData.horn = 1
                } else if (randomHorn < 30) {
                    game.animalData.horn = 2
                } else if (randomHorn < 40) {
                    game.animalData.horn = 3
                } else if (randomHorn < 45) {
                    game.animalData.horn = 4
                } else {
                    game.animalData.horn = 5
                }
            }
            if (!game.animalData.hornLengthLock) {game.animalData.hornLength = game.helper.randomIntFromInterval(0,10) > 9 ? 1 : 0}
        }

        function setUniSkin(skin, skeletonData) {
            skin.addSkin(skeletonData.findSkin(`Pattern/${game.animalData.pattern}`));
            skin.addSkin(skeletonData.findSkin(`Eye/${game.animalData.eye}`));
            if (game.animalData.lashes === 0) {skin.addSkin(skeletonData.findSkin(`Eye/Lashes`));}
            skin.addSkin(skeletonData.findSkin(`Mane/${game.animalData.view.toString()}/${game.animalData.mane}`));
            skin.addSkin(skeletonData.findSkin(`Tail/${game.animalData.view.toString()}/${game.animalData.tail}`));
            skin.addSkin(skeletonData.findSkin(`Horn/${game.animalData.hornLength === 0 ? "Normal" : "Long"}/${game.animalData.horn}`));
        }

        function tintUnicorn() {
            let shade = 1

            game.helper.changeTint(game.animal, 'Base', game.animalData.primaryColor.colorHex, shade)
            game.helper.changeTint(game.animal, 'Mane1', game.animalData.primaryColor.colorHex, shade)
            game.helper.changeTint(game.animal, 'Mane1Back', game.animalData.primaryColor.colorHex, shade)
            game.helper.changeTint(game.animal, 'Tail1', game.animalData.primaryColor.colorHex, shade)

            game.helper.changeTint(game.animal, 'Mane2', game.animalData.secondaryColor.colorHex, shade)
            game.helper.changeTint(game.animal, 'Mane2Back', game.animalData.secondaryColor.colorHex, shade)
            game.helper.changeTint(game.animal, 'Tail2', game.animalData.secondaryColor.colorHex, shade)
            game.helper.changeTint(game.animal, 'Pattern2', game.animalData.secondaryColor.colorHex, shade)

            game.helper.changeTint(game.animal, 'HornColor', game.animalData.tertiaryColor.colorHex, shade)
            game.helper.changeTint(game.animal, 'Pattern3', game.animalData.tertiaryColor.colorHex, shade)
            
            game.helper.changeTint(game.animal, 'EyeColor', game.animalData.eyeColor.colorHex, shade)
        }

        // ============ UI ============ //
        game.helper.addViewButtons()
        game.helper.makeColorSelectors()
        const eyeSlider = game.helper.makeSelector(164, 285, 11, 'eye', ['Ordinary', 'Surprised', 'Cute', 'Creepy', 'Spooky', 'Swirly', 'Blank', 'Crossed Out', 'Starry', 'Lovely', 'Suspicious', 'Striking'])
        const eyelashSlider = game.helper.makeSelector(164, 370, 1, 'lashes', ['With Eyelashes', 'No Eyelashes'])
        const maneSlider = game.helper.makeSelector(164, 200, 2, 'mane', ['Cropped', 'Curled', 'Flowing'])
        const tailSlider = game.helper.makeSelector(164, 285, 2, 'tail', ['Long', 'Poised', 'Sleek'])
        const hornSlider = game.helper.makeSelector(164, 200, 5, 'horn', ['Shining', 'Cracked', 'Crystal', 'Sharp', 'Radiant (Rare)', 'Jeweled (Epic)'])
        const hornLengthSlider = game.helper.makeSelector(164, 285, 1, 'hornLength', ['Short', 'Long (Rare)'])
        const sizeSlider = game.helper.makeSelector(164, 200, 6, 'bodySize', ['XXS (Legendary)', 'XS (Epic)', 'Small (Rare)', 'Standard', 'Large (Rare)', 'XL (Epic)', 'XXL (Legendary)'])
        const patternSlider = game.helper.makeSelector(164, 285, 3, 'pattern', ['Dappled', 'Fluffy', 'Silky', 'Tuxedo'])

            // ============ Tab Buttons ============ //
            game.tabButtons = {}

            let eyesTab = [game.colorSelectors['eyeColor'], eyeSlider, eyelashSlider]
            let hornsTab = [hornSlider, hornLengthSlider]
            let hairTab = [maneSlider, tailSlider]
            let sizeTab = [sizeSlider]

            let eyesBtn = game.helper.makeTabButton('EyesBtn', eyesTab, 303, 186)
            let hornsBtn = game.helper.makeTabButton('HornsBtn', hornsTab, 303, 250)
            let hairBtn = game.helper.makeTabButton('HairBtn', hairTab, 303, 314)
            let sizeBtn = game.helper.makeTabButton('SizeBtn', sizeTab, 303, 378)

            let featuresTab = [eyesBtn, hornsBtn, hairBtn, sizeBtn]
            featuresTab.forEach(element => {
                eyesTab.push(element)
                hornsTab.push(element)
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
                maneSlider.list[0].text = maneSlider.list[0].lables[game.animalData.mane]
                tailSlider.list[0].text = tailSlider.list[0].lables[game.animalData.tail]
                hornSlider.list[0].text = hornSlider.list[0].lables[game.animalData.horn]
                hornLengthSlider.list[0].text = hornLengthSlider.list[0].lables[game.animalData.hornLength]
                sizeSlider.list[0].text = sizeSlider.list[0].lables[game.animalData.bodySize]
            })

            // ============ Color Picker ============ //
            game.closeColor = closeColor
            game.helper.makeColorPicker()
            game.helper.makeColorSelectionMenu()
            game.helper.makeCertificate()
            game.helper.makeAnimalBtn('GriffinBtn', 'GriffDressup')


        // ============ Certificate ============ //
        function setUniCertText() {
            let primary = `Primary Color\n${game.helper.checkColor(game.animalData.primaryColor)}\n\n`
            let secondary = `Secondary Color\n${game.helper.checkColor(game.animalData.secondaryColor)}\n\n`
            let tertiary = `Tertiary Color\n${game.helper.checkColor(game.animalData.tertiaryColor)}\n\n`
            let eye = `Eye Color\n${game.helper.checkColor(game.animalData.eyeColor)}\n\n`
            let eyeShape = `Eye Shape\n${eyeSlider.list[0].lables[game.animalData.eye]}${game.animalData.lashes ? '' : ' with Eylashes'}\n\n`
            let pattern = `Pattern\n${patternSlider.list[0].lables[game.animalData.pattern]}\n\n`
            let horn = `Horn\n${hornSlider.list[0].lables[game.animalData.horn]}\n\n`
            let hornLength = game.animalData.hornLength ? `Horn Length\n${hornLengthSlider.list[0].lables[game.animalData.hornLength]}\n\n` : ''
            let mane = `Mane\n${maneSlider.list[0].lables[game.animalData.mane]}\n\n`
            let tail = `Tail\n${tailSlider.list[0].lables[game.animalData.tail]}\n\n`
            let size = game.animalData.bodySize === 3 ? '' : `Size\n${sizeSlider.list[0].lables[game.animalData.bodySize]}\n\n`
            return primary + secondary + tertiary + eye + eyeShape + pattern + horn + hornLength + mane + tail + size
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
            let tabs = [colorsTab, eyesTab, hornsTab, hairTab, sizeTab, patternsTab]
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