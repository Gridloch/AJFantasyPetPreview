// Variables to be used throughout scene
const COLOR_PRIMARY = 0x424242;
const COLOR_PRIMARY_HEX = '#424242';
const COLOR_SECONDARY = 0x6b6b6b;
const COLOR_SECONDARY_HEX = '#6b6b6b';


// Actual game start
class Dressup extends Phaser.Scene
{
    constructor ()
    {
        super({
            key: 'Dressup'
        });
    }

    preload (data)
    {  
        const game = this;

        // Display Loading Bar
        // this.load.on('progress', function (value) {
        //     progressBar.clear();
        //     progressBar.fillStyle(0x35a3d5, 1);
        //     progressBar.fillRect(389, 337, 100 * value, 6);
        // });    
        // this.add.image(444, 261, 'card_back');  
        // this.add.graphics().fillStyle(0x000000).fillRect(386, 334, 116, 12);
        // const progressBar = this.add.graphics();
        // const progressText = this.add.text(344, 133, '', { fontFamily: 'Arial', fontSize: 12, color: '#ffffff', align: 'center' });
            
        // Load in images and sounds
        this.load.image('background', '/images/FantasyBG.png');
        this.load.image('colorsRef', '/images/colors.png');
        this.load.image('button', '/images/button.png');
        this.load.image('moveButton', '/images/moveButton.png');
        this.load.image('closeButton', '/images/closeButton.png');
        // this.load.atlas('brush', './images/landStable/brush.png', './images/landStable/brush.json');
        this.load.spineAtlas("uniAtlas", `/2D/Unicorn/skeleton.atlas`);
        this.load.spineJson("uniJson", `/2D/Unicorn/skeleton.json`);
        // this.load.audio('rear_sound', ['./sounds/rear.mp3']);


        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });
        // Loading an older version of the text input plugin to allow the textarea input type
        this.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true);
    }

    create (data)
    {
        // Makes functions easier to write
        const game = this;

        //  If you disable topOnly it will fire events for all objects the pointer is over, regardless of place on the display list
        this.input.topOnly = true;

        game.colors = {
            "Vibrant Neon": [0xff6600, 0xffff00, 0xdeff00, 0xc0ff00, 0x79fe47, 0x20f94e, 0x00faab, 0x65ffd8, 0x00ffc0, 0x00ffff, 0x2a4fff, 0x8467ff, 0x6308f9, 0xc800fa, 0xff00ff, 0xff66cc, 0xff007f, 0xff265d],
            "Pale Pastel": [0xffdfba, 0xffe59f, 0xfcf4dd, 0xfff4ba, 0xfefbd0, 0xdae3c1, 0xbaffc9, 0xddedea, 0xd1ecf8, 0xdaeaf6, 0xbad6ff, 0xd4bdff, 0xe8dff5, 0xffc7d2, 0xfce1e4],
            "Misty Starlight": [0xb3b3b3, 0x999999, 0xcccccc, 0xeeeeee, 0xe6e6e6, 0xd2cec7, 0xabe1f1, 0xabc5d2, 0xabb4d2, 0xe2e8fe, 0xb9c0dc, 0xb3abd2, 0xc6b8cc],
            "Rosy Sunset": [0xff6d6d, 0xda7f72, 0xea9f90, 0xdfbbd5, 0xd2abc5, 0xff7fbf, 0xe3bcce, 0xd898b1, 0xea90b3, 0xff7fa2, 0xfa7598, 0xe67491, 0xff6780, 0xffb3ba],
            "Lush Berry": [0xdd41bc, 0xaf0188, 0xcc4ca5, 0x952d75, 0xe0218a, 0xb93276, 0x952d56, 0x9e4065, 0xcc4c7e, 0xd02956, 0xb92a50, 0xb33355, 0xeb3d69],
            "Florid Vermillion": [0x950606, 0x952d2d, 0xb21f1f, 0xeb1d1d, , 0xee5a5a, 0xae3932, 0xae3932, 0xd4432c, 0x933b2c, 0xbf280d, 0xcc634c, 0xb04004, 0x931a39],
            "Warm Tangerine": [0xff9f7f, 0xeab090, 0xea6a22, 0xf16e23, 0xff7b2f, 0xffa36d, 0xcc7c4c, 0xe89660, 0xff9f51, 0xff7f00, 0xd08436, 0xfab870, 0xcc904c, 0xf8d5a6, 0xfea200],
            "Sunny Amber": [0xfadf99, 0xffcc33, 0xffc000, 0xffca1a, 0xf7e281, 0xf0d23e, 0xffee92, 0xffe00f, 0xfada00, 0xfcf142, 0xf1eea9, 0xfffdc3, 0xffff66, 0xe7ea90],
            "Verdant Lush": [0xb3cc4c, 0xcbdc88, 0xdfff7f, 0xd3eaa6, 0x8ecc4c, 0xbeea90, 0x62952d, 0x8cbd76, 0x6bd63c, 0x378318, 0x96fd72, 0x6fb581, 0x14b23f, 0x33ad77, 0x73ab94],
            "Seafoam Lagoon": [0x9fdfb3, 0x87d5ad, 0x7fffbf, 0x3cca8a, 0x90eac2, 0x43f3a6, 0x32e297, 0xabd2c3, 0x06ad84, 0x31d1ad, 0xabd2cd, 0x8eebe4, 0x82abad, 0xb7dee3, 0x739cab],
            "Cerulean Sky": [0xc4f4ff, 0x1cccff, 0x3fbbe0, 0x3fa9c9, 0x7fdfff, 0x90d3ea, 0xc9efff, 0x00aeff, 0x7ab4e4, 0x6bbafe, 0x7f9ad4, 0x87a5ff, 0x90a3ea, 0xb0bcf9],
            "Dreamy Lilac": [0x8783ff, 0xa290ea, 0x9c81ff, 0xa889dd, 0xba7df6, 0xa06ad5, 0xc690ea, 0x9a4ccc, 0xdb90f8, 0xa54fc6, 0xe271ff, 0xeda1ff, 0xa320c2, 0xbb3dd7, 0xd988c6],
            "Smoky Dust": [0x434343, 0x7b7b7b, 0x666666, 0x4d4d4d, 0x7380ab, 0x4c5679, 0x515460, 0x6d7295, 0x8684c6, 0x7f73ab, 0x564c79, 0x706578, 0x746d74],
            "Shady Dark": [0x333232, 0x151515, 0x4f4744, 0x2f2a28, 0x134558, 0x142446, 0x04185e, 0x00007f, 0x000040, 0x2a277f, 0x21105d, 0x361b93, 0x40007f, 0x674c79, 0x2a0040, 0x3f2e47, 0x440f53],
            "Dusty Taupe": [0xd2abab, 0xd2b3ab, 0xa39388, 0xd2beab, 0xd9b574, 0xd9b573, 0xd3cab9, 0xead090, 0xab9c73, 0xd7cb9d, 0xd2ccab, 0xbbbb97, 0xbcc6a0],
            "Amethyst Wildflower": [0x8b73ab, 0xbcabd2, 0x9f73ab, 0xcaabd2, 0x704c79, 0xa671ac, 0xbc8dbf, 0x794c6d, 0xab7399, 0xa08395, 0x977b87, 0x906073],
            "Russet Mahogany": [0x500909, 0x7f0707, 0x5e0404, 0x681818, 0x6e342b, 0x441e05, 0x5d3b48, 0x77394a, 0x5d1023, 0x6f1a2e, 0x46101c],
            "Earthy Umber": [0xab7373, 0x794c4c, 0x79544c, 0xab7d73, 0xa16044, 0x9b4915, 0x9b4914, 0x593822, 0xab8a73, 0x79634c, 0x814e18, 0x6e6051, 0xb57026, 0x95632d, 0x514715],
            "Flaxen Ochre": [0xe3a000, 0x95772d, 0xc48c00, 0xdbaa2c, 0xc7a100, 0x7d6600, 0xd0ba4a, 0x807123, 0xeade90, 0xaba473, 0xccbd4c, 0x95892d, 0xbdbd79, 0xcacc4c, 0xd3de84, 0xcad2ab],
            "Hazel Olive": [0xa6a064, 0x949051, 0x96955c, 0xc0c000, 0x5e5e00, 0x79794c, 0x9da02d, 0x6f7247, 0x626a25, 0xa1ad47, 0x99ab32, 0x80952d, 0x7c8751, 0x5e6741, 0xb4cb9f],
            "Forested Juniper": [0x3d4217, 0x707a5a, 0x464d39, 0x627f46, 0x23520f, 0x3e6e4a, 0x27462f, 0x2d9565, 0x1d7e53, 0x124f34, 0x246b4c, 0x4c7967, 0x00ffc0, 0x29968d],
            "Oceanic Sapphire": [0x3fa9c9, 0x20708b, 0x4c6d79, 0x2d7895, 0x0865a1, 0x4f86b5, 0x4c8af2, 0x203a70, 0x3f63b3, 0x3e6fe4, 0x0037d9, 0x4c69cc, 0x2d4495, 0x062595, 0x4000ff],
            "Opulent Royalty": [0x6160c0, 0x514ccc, 0x6662ba, 0x432d95, 0x643feb, 0x684ccc, 0x5a3bc8, 0x5f32b2, 0x6c39b2, 0x6b2d95, 0x6d1784, 0x6c0584, 0x793b87, 0x822d95]
        }

        this.add.image(584, 265, 'background').setScale(.5);
        game.animal = game.add.spine(570, 265, 'uniJson', `uniAtlas`).setScale(.65);
            game.animalData = {}
            randomiseAnimal()

        /**
         * Generates a random integer between two values
         * @param {number} min The minimum number that could be returned
         * @param {number} max The maximum number that could be returned
         * @returns 
         */
        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        function randomColor() {
            let rand1 = randomIntFromInterval(0, Object.keys(game.colors).length-1)
            let choice1 = game.colors[Object.keys(game.colors)[rand1]]
            return choice1[randomIntFromInterval(0, choice1.length-1)]
        }
        
        function splitHex(color) {
            let r = ((color & 0xff0000) >> 16)/255
            let g = ((color & 0x00ff00) >> 8)/255
            let b = (color & 0x0000ff)/255
            return { color: color, r:r, g:g, b:b };
        }

        /**
         * Randomises the animal model
         */
        function randomiseAnimal() {
            game.animalData.pattern = randomIntFromInterval(0,3)
            game.animalData.eye = randomIntFromInterval(0,11)
            game.animalData.lashes = randomIntFromInterval(0,1)
            game.animalData.mane = randomIntFromInterval(0,2)
            game.animalData.tail = randomIntFromInterval(0,2)
            let randomHorn = randomIntFromInterval(0, 45)
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
            let randomSize = randomIntFromInterval(0,33)
            if (randomSize < 1) {
                game.animalData.bodySize = 0
            } else if (randomSize < 2) {
                game.animalData.bodySize = 1
            } else if (randomSize < 4) {
                game.animalData.bodySize = 2
            } else if (randomSize < 29) {
                game.animalData.bodySize = 3
            } else if (randomSize < 31) {
                game.animalData.bodySize = 4
            } else if (randomSize < 33) {
                game.animalData.bodySize = 5
            } else {
                game.animalData.bodySize = 6
            }
            game.animalData.hornLength = randomIntFromInterval(0,10) > 9 ? 1 : 0

            game.animalData.primaryColor = randomColor()
            game.animalData.secondaryColor = randomColor()
            game.animalData.tertiaryColor = randomColor()
            game.animalData.eyeColor = randomColor()

            resetAnimalSprite()
        }

        /**
         * Sets the skin for the sprite to display the current features
         */
        function setSkin(){
            const skeletonData = game.animal.skeleton.data;
            const skin = new spine.Skin("custom");
                skin.addSkin(skeletonData.findSkin(`Pattern/${game.animalData.pattern}`));
                skin.addSkin(skeletonData.findSkin(`Eye/${game.animalData.eye}`));
                if (game.animalData.lashes === 0) {skin.addSkin(skeletonData.findSkin(`Eye/Lashes`));}
                skin.addSkin(skeletonData.findSkin(`Mane/${game.animalData.mane}`));
                skin.addSkin(skeletonData.findSkin(`Tail/${game.animalData.tail}`));
                skin.addSkin(skeletonData.findSkin(`Horn/${game.animalData.hornLength === 0 ? "Normal" : "Long"}/${game.animalData.horn}`));
            game.animal.skeleton.setSkin(skin);
            game.animal.skeleton.setToSetupPose();
        }
        
        /**
         * Resets the animal sprite to show the correct features and colours
         */
        function resetAnimalSprite() {
            for (let index = 0; index < game.animal.skeleton.slots.length; index++) {
                game.animal.skeleton.slots[index].darkColor = null;
            }
            setSkin(game.animal)
            tintAnimal()
            sizeAnimal()
        }

        function sizeAnimal() {
            game.animal.animationState.setAnimation(0, game.animalData.bodySize.toString(), false)
        }


        function tintAnimal() {
            let shade = 1

            changeTint(game.animal, 'Base', game.animalData.primaryColor, shade)
            changeTint(game.animal, 'Mane1', game.animalData.primaryColor, shade)
            changeTint(game.animal, 'Mane1Back', game.animalData.primaryColor, shade)
            changeTint(game.animal, 'Tail1', game.animalData.primaryColor, shade)

            changeTint(game.animal, 'Mane2', game.animalData.secondaryColor, shade)
            changeTint(game.animal, 'Mane2Back', game.animalData.secondaryColor, shade)
            changeTint(game.animal, 'Tail2', game.animalData.secondaryColor, shade)
            changeTint(game.animal, 'Pattern2', game.animalData.secondaryColor, shade)

            changeTint(game.animal, 'HornColor', game.animalData.tertiaryColor, shade)
            changeTint(game.animal, 'Pattern3', game.animalData.tertiaryColor, shade)
            
            changeTint(game.animal, 'EyeColor', game.animalData.eyeColor, shade)
        }

        function changeTint(skeleton, part, color, shade) {
            color = splitHex(color)
            skeleton.skeleton.findSlot(`${part}`).color.r = color.r+.1
            skeleton.skeleton.findSlot(`${part}`).color.g = color.g+.1
            skeleton.skeleton.findSlot(`${part}`).color.b = color.b+.1
            
            if (shade !== 0) {
                skeleton.skeleton.findSlot(`${part}`).darkColor = {r: color.r-shade, g: color.g-shade, b: color.b-shade, a: 1}
            } else {
                skeleton.skeleton.findSlot(`${part}`).darkColor = null
            }
        }
        
        let primaryColorText
        const primaryColorPicker = this.rexUI.add.colorPicker({
            x: 155, y: 135,
            background: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_SECONDARY),
            svPalette: {
                width: 128,
                height: 128
            },
            hPalette: {
                size: 16
            },
            space: {
                left: 10, right: 10, top: 10, bottom: 10,
                item: 10,
            },

            setAlpha(visible) {
                if (visible) {
                    x = 125
                    y = 125
                } else {
                    x = -100
                    y = -100
                }
            },

            valuechangeCallback(value) {
                game.animalData.primaryColor = value
                if (typeof primaryColorText !== 'undefined') {primaryColorText.text = primaryColorPicker.value.toString(16)}
                tintAnimal()
            },
            value: game.animalData.primaryColor
        }).layout()

        primaryColorText = this.add.rexInputText(140, 235, 120, 20, {
            fontFamily: 'Arial',
            fontSize: '12px',
            color: '#000000',
            backgroundColor: '#ffffff80',
            padding: 6
        })
        primaryColorText.on('textchange', function(inputText, e){ 
            let regex = new RegExp("#", 'g');
            game.animalData.primaryColor = primaryColorText.text.replace(regex, '');
            primaryColorPicker.value = parseInt(game.animalData.primaryColor, 16);
        });        
        primaryColorText.text = primaryColorPicker.value.toString(16)

        const pcButton = game.add.sprite(215, 235, 'button').setScale(.20)
            pcButton.setInteractive({ useHandCursor: true });
            pcButton.on('pointerdown', () => {
                showTab(colorSelector)
                game.currentColor = 'primary'
            })
        

        let secondaryColorText
        const secondaryColorPicker = this.rexUI.add.colorPicker({
            x: 155, y: 355,
            background: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_SECONDARY),
            svPalette: {
                width: 128,
                height: 128
            },
            hPalette: {
                size: 16
            },
            space: {
                left: 10, right: 10, top: 10, bottom: 10,
                item: 10,
            },

            setAlpha(visible) {
                if (visible) {
                    x = 125
                    y = 335
                } else {
                    x = -100
                    y = -100
                }
            },

            valuechangeCallback(value) {
                game.animalData.secondaryColor = value
                if (typeof secondaryColorText !== 'undefined') {secondaryColorText.text = secondaryColorPicker.value.toString(16)}
                tintAnimal()
            },
            value: game.animalData.secondaryColor
        }).layout()

        secondaryColorText = this.add.rexInputText(140, 455, 120, 20, {
            fontFamily: 'Arial',
            fontSize: '12px',
            color: '#000000',
            backgroundColor: '#ffffff80',
            padding: 6
        })
        secondaryColorText.on('textchange', function(inputText, e){ 
            let regex = new RegExp("#", 'g');
            game.animalData.secondaryColor = secondaryColorText.text.replace(regex, '');
            secondaryColorPicker.value = parseInt(game.animalData.secondaryColor, 16);
        });        
        secondaryColorText.text = secondaryColorPicker.value.toString(16)

        const scButton = game.add.sprite(215, 455, 'button').setScale(.20)
            scButton.setInteractive({ useHandCursor: true });
            scButton.on('pointerdown', () => {
                showTab(colorSelector)
                game.currentColor = 'secondary'
            })

        let tertiaryColorText
        const tertiaryColorPicker = this.rexUI.add.colorPicker({
            x: 155, y: 135,
            background: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_SECONDARY),
            svPalette: {
                width: 128,
                height: 128
            },
            hPalette: {
                size: 16
            },
            space: {
                left: 10, right: 10, top: 10, bottom: 10,
                item: 10,
            },

            setAlpha(visible) {
                if (visible) {
                    x = 300
                    y = 125
                } else {
                    x = -100
                    y = -100
                }
            },

            valuechangeCallback(value) {
                game.animalData.tertiaryColor = value
                if (typeof tertiaryColorText !== 'undefined') {tertiaryColorText.text = tertiaryColorPicker.value.toString(16)}
                tintAnimal()
            },
            value: game.animalData.tertiaryColor
        }).layout()

        tertiaryColorText = this.add.rexInputText(140, 235, 120, 20, {
            fontFamily: 'Arial',
            fontSize: '12px',
            color: '#000000',
            backgroundColor: '#ffffff80',
            padding: 6
        })
        tertiaryColorText.on('textchange', function(inputText, e){ 
            let regex = new RegExp("#", 'g');
            game.animalData.tertiaryColor = tertiaryColorText.text.replace(regex, '');
            tertiaryColorPicker.value = parseInt(game.animalData.tertiaryColor, 16);
        });        
        tertiaryColorText.text = tertiaryColorPicker.value.toString(16)

        const tcButton = game.add.sprite(215, 235, 'button').setScale(.20)
            tcButton.setInteractive({ useHandCursor: true });
            tcButton.on('pointerdown', () => {
                showTab(colorSelector)
                game.currentColor = 'tertiary'
            })

        let eyeColorText
        const eyeColorPicker = this.rexUI.add.colorPicker({
            x: 155, y: 135,
            background: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_SECONDARY),
            svPalette: {
                width: 128,
                height: 128
            },
            hPalette: {
                size: 16
            },
            space: {
                left: 10, right: 10, top: 10, bottom: 10,
                item: 10,
            },

            setAlpha(visible) {
                if (visible) {
                    x = 300
                    y = 125
                } else {
                    x = -100
                    y = -100
                }
            },

            valuechangeCallback(value) {
                game.animalData.eyeColor = value
                if (typeof eyeColorText !== 'undefined') {eyeColorText.text = eyeColorPicker.value.toString(16)}
                tintAnimal()
            },
            value: game.animalData.eyeColor
        }).layout()

        eyeColorText = this.add.rexInputText(140, 235, 120, 20, {
            fontFamily: 'Arial',
            fontSize: '12px',
            color: '#000000',
            backgroundColor: '#ffffff80',
            padding: 6
        })
        eyeColorText.on('textchange', function(inputText, e){ 
            let regex = new RegExp("#", 'g');
            game.animalData.eyeColor = eyeColorText.text.replace(regex, '');
            eyeColorPicker.value = parseInt(game.animalData.eyeColor, 16);
        });        
        eyeColorText.text = eyeColorPicker.value.toString(16)

        const ecButton = game.add.sprite(215, 235, 'button').setScale(.20)
            ecButton.setInteractive({ useHandCursor: true });
            ecButton.on('pointerdown', () => {
                showTab(colorSelector)
                game.currentColor = 'eye'
            })


        const patternSlider = makeSelector(155, 275, 3, 'pattern', ['Dappled', 'Fluffy', 'Silky', 'Tuxedo'])
        const eyeSlider = makeSelector(155, 275, 11, 'eye', ['Ordinary', 'Surprised', 'Cute', 'Creepy', 'Spooky', 'Swirly', 'Blank', 'Crossed Out', 'Starry', 'Lovely', 'Suspicious', 'Striking'])
        const eyelashSlider = makeSelector(155, 315, 1, 'lashes', ['With Eyelashes', 'No Eyelashes'])
        const maneSlider = makeSelector(155, 60, 2, 'mane', ['Cropped', 'Curled', 'Flowing'])
        const tailSlider = makeSelector(155, 100, 2, 'tail', ['Long', 'Poised', 'Sleek'])
        const hornSlider = makeSelector(155, 140, 5, 'horn', ['Shining', 'Cracked', 'Crystal', 'Sharp', 'Radiant', 'Jeweled'])
        const hornLengthSlider = makeSelector(155, 180, 1, 'hornLength', ['Short', 'Long'])
        const sizeSlider = makeSelector(155, 220, 6, 'bodySize', ['XXS', 'XS', 'Small', 'Standard', 'Large', 'XL', 'XXL'])

        function makeSelector(x, y, options, key, lable) {
            const slider = game.add.container(100, 24);

            const text = game.add.text(0, 0, lable[game.animalData[key]], {
                fontFamily: 'Arial',
                fontSize: '12px',
                color: '#ffffff',
                align: 'center',
                fixedWidth: 125,
                backgroundColor: '#00000080'
            }).setPadding(6).setOrigin(0.5);

            const pButton = game.add.sprite(-60, 0, 'moveButton').setScale(.3)
                pButton.setInteractive({ useHandCursor: true });
                pButton.on('pointerdown', () => {
                    if (0 < game.animalData[key]) {
                        game.animalData[key] = game.animalData[key] - 1
                    } else {
                        game.animalData[key] = options
                    }
                    text.text = lable[game.animalData[key]]
                    resetAnimalSprite()
                })

            const nButton = game.add.sprite(60, 0, 'moveButton').setScale(-.3, .3)
                nButton.setInteractive({ useHandCursor: true });
                nButton.on('pointerdown', () => {
                    if (game.animalData[key] < options) {
                        game.animalData[key] = game.animalData[key] + 1
                    } else {
                        game.animalData[key] = 0
                    }
                    text.text = lable[game.animalData[key]]
                    resetAnimalSprite()
                })

            slider.add([ text, pButton, nButton ]);
            slider.setSize(100, 24).setPosition(x, y);
            return slider
        }

        game.colorButtons = {}
        let colorCoordinates = [[177, 193], [208, 206], [221, 237], [208, 268], [177, 281], [146, 268],
            [133, 237], [146, 206], [177, 159], [217, 169], [245, 197], [255, 237], [245, 277], [217, 305],
            [177, 315], [137, 305], [109, 277], [99, 237], [109, 197], [137, 169]]
        Object.keys(game.colors).forEach(key=>{
            makeColorButtons(key)
        })

        function makeColorButtons(colorSet) {
            game.colorButtons[colorSet] = []
            for (let index = 0; index < game.colors[colorSet].length; index++) {
                game.colorButtons[colorSet].push(makeColorButton(game.colors[colorSet][index], colorCoordinates[index][0], colorCoordinates[index][1]))
            }
            game.colorButtons[colorSet].push(makeCloseButton())
        }

        function makeColorButton(color, x, y) {
            const button = game.add.sprite(x, y, 'button').setScale(.3).setTint(color)
    
            button.setInteractive({ useHandCursor: true });

            button.on('pointerdown', () => {
                switch (game.currentColor) {
                    case 'primary':
                        game.animalData.primaryColor = color
                        primaryColorPicker.value = color
                        break;
                    case 'secondary':
                        game.animalData.secondaryColor = color
                        secondaryColorPicker.value = color
                        break;
                    case 'tertiary':
                        game.animalData.tertiaryColor = color
                        tertiaryColorPicker.value = color
                        break;
                    case 'eye':
                        game.animalData.eyeColor = color
                        eyeColorPicker.value = color
                        break;
                
                    default:
                        game.animalData.primaryColor = color
                        primaryColorPicker.value = color
                        break;
                }
                resetAnimalSprite()
            })

            return button
        }

        function makeCloseButton() {
            const button = game.add.sprite(177, 237, 'closeButton').setScale(.3)
    
            button.setInteractive({ useHandCursor: true });

            button.on('pointerdown', () => {
                showTab(colorSelector)
            })

            return button
        }

        const mainTab = [primaryColorPicker, primaryColorText, pcButton, secondaryColorPicker, secondaryColorText, scButton]
        const patternTab = [patternSlider, tertiaryColorPicker, tertiaryColorText, tcButton]
        const eyeTab = [eyeSlider, eyelashSlider, eyeColorPicker, eyeColorText, ecButton]
        const otherTab = [maneSlider, tailSlider, hornSlider, hornLengthSlider, sizeSlider]

        game.choiceButtons = {}
        makeChoiceButton('Main', mainTab, 220, 20, 100)
        makeChoiceButton('Pattern', patternTab, 335, 20, 100)
        makeChoiceButton('Eyes', eyeTab, 450, 20, 100)
        makeChoiceButton('Other', otherTab, 565, 20, 100)

        const colorSelector = []
        let index = 0
        let x = 105
        Object.keys(game.colors).forEach(key=>{
            colorSelector.push(makeChoiceButton(key, game.colorButtons[key], x, 60+(index*30), 150))
            index++
            if (index === 12) {
                index = 0
                x = x + 155
            }
        })

        function makeChoiceButton(text, tab, x, y, width) {
            const button = game.add.text(x, y, text, {
                fontFamily: 'Arial',
                fontSize: '12px',
                color: '#ffffff',
                align: 'center',
                fixedWidth: width,
                backgroundColor: COLOR_PRIMARY_HEX
            }).setPadding(6).setOrigin(0.5);
            game.choiceButtons[text] = button
    
            button.setInteractive({ useHandCursor: true });
    
            button.on('pointerover', () => {
                button.setBackgroundColor(COLOR_SECONDARY_HEX);
            });
    
            button.on('pointerout', () => {
                button.setBackgroundColor(COLOR_PRIMARY_HEX);
            });

            button.on('pointerdown', () => {
                showTab(tab)
            })

            return button
        }


        showTab(mainTab)
        /**
         * Hides the current tab and shows the new tab
         * @param {*} tab The tab to show (all others will be hidden)
         */
        function showTab(tab) {
            let tabs = [mainTab, patternTab, eyeTab, otherTab, colorSelector]
            Object.keys(game.colors).forEach(key=>{
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
        }

        const randomButton = game.add.text(680, 20, 'Randomise', {
            fontFamily: 'Arial',
            fontSize: '12px',
            color: '#ffffff',
            align: 'center',
            fixedWidth: 100,
            backgroundColor: COLOR_PRIMARY_HEX
        }).setPadding(6).setOrigin(0.5);

        randomButton.setInteractive({ useHandCursor: true });

        randomButton.on('pointerdown', () => {
            randomiseAnimal()
        })

    }

    update ()
    {
    }
}