// Variables to be used throughout scene
const COLOR_PRIMARY = 0x424242;
const COLOR_PRIMARY_HEX = '#424242';
const COLOR_SECONDARY = 0x6b6b6b;
const COLOR_SECONDARY_HEX = '#6b6b6b';

// TODO: Add pet certificate to see details
// TODO: Add rarity indicator to show if rare traits are present
// TODO: Add waterwark to bg to make it obvious it's from the dressup?

// Actual game start
class Dressup extends Phaser.Scene
{
    constructor ()
    {
        super({
            key: 'Dressup'
        });
    }

    colors = {
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

        this.load.spineAtlas("uniAtlas", `./2D/Unicorn/uniSkeleton.atlas`);
        this.load.spineJson("uniJson", `./2D/Unicorn/uniSkeleton.json`);


        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });
        this.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true);
    }

    create (data)
    {
        // Makes functions easier to write
        const game = this;

        //  If you disable topOnly it will fire events for all objects the pointer is over, regardless of place on the display list
        this.input.topOnly = true;

        const ui = this.add.image(163, 269, 'UIBG').setScale(.4)


        // ============ Animal ============ //
        game.animal = game.add.spine(570, 265, 'uniJson', `uniAtlas`).setScale(.65);
            game.animalData = {
                view: 0,
                views: 1
            }
            game.currentColor = 'primaryColor'

        /**
         * Generates a random integer between two values
         * @param {number} min The minimum number that could be returned
         * @param {number} max The maximum number that could be returned
         * @returns 
         */
        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        function randomColor(option) {
            if (game.animalData[option] === undefined) {
                game.animalData[option] = {}
            }
            if (game.animalData[`${option}Lock`] !== 2) {
                if (game.animalData[`${option}Lock`] !== 1) {
                    game.animalData[option].colorFamily = randomIntFromInterval(0, Object.keys(game.colors).length-1)
                }
                game.animalData[option].colorChoice = randomIntFromInterval(0, game.colors[Object.keys(game.colors)[game.animalData[option].colorFamily]].length-1)
                game.animalData[option].colorHex = game.colors[Object.keys(game.colors)[game.animalData[option].colorFamily]][game.animalData[option].colorChoice]
                game.colorSelectors[option].setTint(game.animalData[option].colorHex)
            }
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
            if (!game.animalData.patternLock) {game.animalData.pattern = randomIntFromInterval(0,3)}
            if (!game.animalData.eyeLock) {game.animalData.eye = randomIntFromInterval(0,11)}
            if (!game.animalData.lashesLock) {game.animalData.lashes = randomIntFromInterval(0,1)}
            if (!game.animalData.maneLock) {game.animalData.mane = randomIntFromInterval(0,2)}
            if (!game.animalData.tailLock) {game.animalData.tail = randomIntFromInterval(0,2)}
            if (!game.animalData.hornLock) {
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
            }
            if (!game.animalData.bodySizeLock) {
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
            }
            if (!game.animalData.hornLengthLock) {game.animalData.hornLength = randomIntFromInterval(0,10) > 9 ? 1 : 0}

            randomColor('primaryColor')
            randomColor('secondaryColor')
            randomColor('tertiaryColor')
            randomColor('eyeColor')

            resetAnimalSprite()
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
            game.animal.animationState.setAnimation(0, `${game.animalData.view.toString()}/${game.animalData.bodySize.toString()}`, false)
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
                skin.addSkin(skeletonData.findSkin(`Mane/${game.animalData.view.toString()}/${game.animalData.mane}`));
                skin.addSkin(skeletonData.findSkin(`Tail/${game.animalData.view.toString()}/${game.animalData.tail}`));
                skin.addSkin(skeletonData.findSkin(`Horn/${game.animalData.hornLength === 0 ? "Normal" : "Long"}/${game.animalData.horn}`));
            game.animal.skeleton.setSkin(skin);
            game.animal.skeleton.setToSetupPose();
        }

        function tintAnimal() {
            let shade = 1

            changeTint(game.animal, 'Base', game.animalData.primaryColor.colorHex, shade)
            changeTint(game.animal, 'Mane1', game.animalData.primaryColor.colorHex, shade)
            changeTint(game.animal, 'Mane1Back', game.animalData.primaryColor.colorHex, shade)
            changeTint(game.animal, 'Tail1', game.animalData.primaryColor.colorHex, shade)

            changeTint(game.animal, 'Mane2', game.animalData.secondaryColor.colorHex, shade)
            changeTint(game.animal, 'Mane2Back', game.animalData.secondaryColor.colorHex, shade)
            changeTint(game.animal, 'Tail2', game.animalData.secondaryColor.colorHex, shade)
            changeTint(game.animal, 'Pattern2', game.animalData.secondaryColor.colorHex, shade)

            changeTint(game.animal, 'HornColor', game.animalData.tertiaryColor.colorHex, shade)
            changeTint(game.animal, 'Pattern3', game.animalData.tertiaryColor.colorHex, shade)
            
            changeTint(game.animal, 'EyeColor', game.animalData.eyeColor.colorHex, shade)
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

        // View //
        const leftButton = game.add.sprite(390, 470, 'ArrowBtn').setScale(.4).setAngle(35)
            leftButton.setInteractive({ useHandCursor: true });
            leftButton.on('pointerdown', () => {
                if (0 < game.animalData.view) {
                    game.animalData.view = game.animalData.view - 1
                } else {
                    game.animalData.view  = game.animalData.views
                }
                resetAnimalSprite()
            })

        const rightButton = game.add.sprite(770, 470, 'ArrowBtn').setScale(-.4, .4).setAngle(-35)
            rightButton.setInteractive({ useHandCursor: true });
            rightButton.on('pointerdown', () => {
                if (game.animalData.view < game.animalData.views) {
                    game.animalData.view = game.animalData.view + 1
                } else {
                    game.animalData.view = 0
                }
                resetAnimalSprite()
            })


        // ============ Selectors ============ //
        game.colorSelectors = {}

        const primaryColorSlider = makeColorSelector(164, 200, 'primaryColor')
        const secondaryColorSlider = makeColorSelector(164, 285, 'secondaryColor')
        const tertiaryColorSlider = makeColorSelector(164, 200, 'tertiaryColor')
        const eyeColorSlider = makeColorSelector(164, 200, 'eyeColor')
        
        randomiseAnimal()

        const eyeSlider = makeSelector(164, 285, 11, 'eye', ['Ordinary', 'Surprised', 'Cute', 'Creepy', 'Spooky', 'Swirly', 'Blank', 'Crossed Out', 'Starry', 'Lovely', 'Suspicious', 'Striking'])
        const eyelashSlider = makeSelector(164, 370, 1, 'lashes', ['With Eyelashes', 'No Eyelashes'])
        const maneSlider = makeSelector(164, 200, 2, 'mane', ['Cropped', 'Curled', 'Flowing'])
        const tailSlider = makeSelector(164, 285, 2, 'tail', ['Long', 'Poised', 'Sleek'])
        const hornSlider = makeSelector(164, 200, 5, 'horn', ['Shining', 'Cracked', 'Crystal', 'Sharp', 'Radiant', 'Jeweled'])
        const hornLengthSlider = makeSelector(164, 285, 1, 'hornLength', ['Short', 'Long'])
        const sizeSlider = makeSelector(164, 200, 6, 'bodySize', ['XXS', 'XS', 'Small', 'Standard', 'Large', 'XL', 'XXL'])
        const patternSlider = makeSelector(164, 285, 3, 'pattern', ['Dappled', 'Fluffy', 'Silky', 'Tuxedo'])

        function makeSelector(x, y, options, key, lable) {
            const slider = game.add.container(100, 24);

            const text = game.add.text(0, 0, lable[game.animalData[key]], {
                fontFamily: 'Dimbo',
                fontSize: '20px',
                color: '#ffffff',
                align: 'center',
                fixedWidth: 125,
                backgroundColor: '#00000080'
            }).setPadding(6).setOrigin(0.5);
            text.lables = lable

            const lockButton = game.add.sprite(-127, -5, 'LockBtn', 'Unlocked').setScale(.4)
                game.animalData[`${key}Lock`] = 0
                lockButton.setInteractive({ useHandCursor: true });
                lockButton.on('pointerdown', () => {
                    switch (game.animalData[`${key}Lock`]) {
                        case 0:
                            game.animalData[`${key}Lock`] = 1
                            lockButton.setFrame('Locked')
                            break;
                    
                        default:
                            game.animalData[`${key}Lock`] = 0
                            lockButton.setFrame('Unlocked')
                            break;
                    }
                })

            const pButton = game.add.sprite(-88, 0, 'ArrowBtn').setScale(.4)
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

            const nButton = game.add.sprite(88, 0, 'ArrowBtn').setScale(-.4, .4)
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

            slider.add([ text, pButton, nButton, lockButton ]);
            slider.setSize(100, 24).setPosition(x, y);
            return slider
        }

        function makeColorSelector(x, y, key) {
            const slider = game.add.container(100, 24);

            const color = game.add.sprite(0, 0, 'button').setScale(.4)
                color.setInteractive({ useHandCursor: true });
                color.on('pointerdown', () => {
                    showTab(colorSelector)
                    game.currentColor = key
                })
            
            game.colorSelectors[key] = color

            const lockButton = game.add.sprite(-127, -5, 'LockBtn', 'Unlocked').setScale(.4)
                game.animalData[`${key}Lock`] = 0
                lockButton.setInteractive({ useHandCursor: true });
                lockButton.on('pointerdown', () => {
                    switch (game.animalData[`${key}Lock`]) {
                        case 0:
                            game.animalData[`${key}Lock`] = 1
                            lockButton.setFrame('LockedColorSet')
                            break;

                        case 1:
                            game.animalData[`${key}Lock`] = 2
                            lockButton.setFrame('LockedColor')
                            break;
                    
                        default:
                            game.animalData[`${key}Lock`] = 0
                            lockButton.setFrame('Unlocked')
                            break;
                    }
                })

            const pButton = game.add.sprite(-88, 0, 'ArrowBtn').setScale(.4)
                pButton.setInteractive({ useHandCursor: true });
                pButton.on('pointerdown', () => {
                    if (0 < game.animalData[key].colorChoice) {
                        game.animalData[key].colorChoice = game.animalData[key].colorChoice - 1
                    } else {
                        if (0 < game.animalData[key].colorFamily) {
                            game.animalData[key].colorFamily = game.animalData[key].colorFamily - 1
                        } else {
                            game.animalData[key].colorFamily = Object.keys(game.colors).length - 1
                        }
                        game.animalData[key].colorChoice = game.colors[Object.keys(game.colors)[game.animalData[key].colorFamily]].length - 1
                    }
                    game.animalData[key].colorHex = game.colors[Object.keys(game.colors)[game.animalData[key].colorFamily]][game.animalData[key].colorChoice]
                    color.setTint(game.animalData[key].colorHex)
                    resetAnimalSprite()
                })

            const nButton = game.add.sprite(88, 0, 'ArrowBtn').setScale(-.4, .4)
                nButton.setInteractive({ useHandCursor: true });
                nButton.on('pointerdown', () => {
                    
                    if (game.animalData[key].colorChoice < game.colors[Object.keys(game.colors)[game.animalData[key].colorFamily]].length - 1) {
                        game.animalData[key].colorChoice = game.animalData[key].colorChoice + 1
                    } else {
                        if (game.animalData[key].colorFamily < Object.keys(game.colors).length - 1) {
                            game.animalData[key].colorFamily = game.animalData[key].colorFamily + 1
                        } else {
                            game.animalData[key].colorFamily = 0
                        }
                        game.animalData[key].colorChoice = 0
                    }
                    // console.log(`Family: ${game.animalData[key].colorFamily}, Choice: ${game.animalData[key].colorChoice}`)
                    game.animalData[key].colorHex = game.colors[Object.keys(game.colors)[game.animalData[key].colorFamily]][game.animalData[key].colorChoice]
                    color.setTint(game.animalData[key].colorHex)
                    resetAnimalSprite()
                })

            slider.add([ color, pButton, nButton, lockButton ]);
            slider.setSize(100, 24).setPosition(x, y);
            return slider
        }


        // ============ Tab Buttons ============ //
        game.tabButtons = {}

        let eyesTab = [eyeColorSlider, eyeSlider, eyelashSlider]
        let hornsTab = [hornSlider, hornLengthSlider]
        let hairTab = [maneSlider, tailSlider]
        let sizeTab = [sizeSlider]

        let eyesBtn = makeTabButton('EyesBtn', eyesTab, 303, 186)
        let hornsBtn = makeTabButton('HornsBtn', hornsTab, 303, 250)
        let hairBtn = makeTabButton('HairBtn', hairTab, 303, 314)
        let sizeBtn = makeTabButton('SizeBtn', sizeTab, 303, 378)

        let featuresTab = [eyesBtn, hornsBtn, hairBtn, sizeBtn]
        featuresTab.forEach(element => {
            eyesTab.push(element)
            hornsTab.push(element)
            hairTab.push(element)
            sizeTab.push(element)
        });
        let colorsTab = [primaryColorSlider, secondaryColorSlider]
        let patternsTab = [tertiaryColorSlider, patternSlider]

        let colorsBtn = makeTabButton('ColorsBtn', colorsTab, 97, 117)
        let featuresBtn = makeTabButton('FeaturesBtn', eyesTab, 163, 117)
        let patternsBtn = makeTabButton('PatternsBtn', patternsTab, 230, 117)

        function makeTabButton(name, tab, x, y) {
            let button
            if (name === 'ColorsBtn' || name === 'FeaturesBtn' || name === 'PatternsBtn') {
                button = game.add.sprite(x, y, name, 'inactive').setScale(.4)
            } else {
                button = game.add.sprite(x, y, name).setScale(.4)
            }
            
            game.tabButtons[name] = button
    
            button.setInteractive({ useHandCursor: true });

            button.on('pointerdown', () => {
                showTab(tab)
                Object.keys(game.tabButtons).forEach(key=>{
                    if (key === 'ColorsBtn' || key === 'FeaturesBtn' || key === 'PatternsBtn') {
                        game.tabButtons[key].setFrame('inactive')
                    }
                })
                if (name === 'ColorsBtn' || name === 'FeaturesBtn' || name === 'PatternsBtn') {
                    button.setFrame('active')
                } else {
                    featuresBtn.setFrame('active')
                }
            })

            return button
        }

        // ============ Randomise Button ============ //
        const randomButton = game.add.image(163, 439, 'RandomizeBtn').setScale(.4)

        randomButton.setInteractive({ useHandCursor: true });

        randomButton.on('pointerdown', () => {
            randomiseAnimal()

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

        let colorText
        const colorPicker = this.rexUI.add.colorPicker({
            x: 155, y: 255,
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
                game.animalData[game.currentColor].colorHex = value
                if (typeof colorText !== 'undefined') {colorText.text = colorPicker.value.toString(16)}
                tintAnimal()
                game.colorSelectors[game.currentColor].setTint(value)
            },
            value: game.animalData[game.currentColor].colorHex
        }).layout()

        colorText = this.add.rexInputText(140, 355, 120, 20, {
            fontFamily: 'Arial',
            fontSize: '12px',
            color: '#000000',
            backgroundColor: '#ffffff80',
            padding: 6
        })
        colorText.on('textchange', function(inputText, e){ 
            let regex = new RegExp("#", 'g');
            game.animalData[game.currentColor].colorHex = colorText.text.replace(regex, '');
            colorPicker.value = parseInt(game.animalData[game.currentColor].colorHex, 16);
        });        
        colorText.text = colorPicker.value.toString(16)

        const colorCloseButton = game.add.sprite(217, 357, 'closeButton').setScale(.25)
            colorCloseButton.setInteractive({ useHandCursor: true });
            colorCloseButton.on('pointerdown', closeColor)
            
        const colorPickerTab = [colorPicker, colorText, colorCloseButton]

        // ============ Color Buttons ============ //
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
                game.colorButtons[colorSet].push(makeColorButton(colorSet, index , colorCoordinates[index][0], colorCoordinates[index][1]))
            }
            game.colorButtons[colorSet].push(makeCloseButton())
        }

        function makeColorButton(colorSet, index, x, y) {
            const color = game.colors[colorSet][index]
            const button = game.add.sprite(x, y, 'button').setScale(.3).setTint(color)
    
            button.setInteractive({ useHandCursor: true });

            button.on('pointerdown', () => {
                game.animalData[game.currentColor].colorHex = color
                game.animalData[game.currentColor].colorFamily = Object.keys(game.colors).findIndex((element) => element === colorSet)
                game.animalData[game.currentColor].colorChoice = index
                game.colorSelectors[game.currentColor].setTint(color)
                resetAnimalSprite()
            })

            return button
        }

        function makeCloseButton() {
            const button = game.add.sprite(177, 237, 'closeButton').setScale(.3)
    
            button.setInteractive({ useHandCursor: true });

            button.on('pointerdown', closeColor)
            return button
        }

        game.choiceButtons = {}

        const colorSelector = []
        let index = 0
        let x = 105
        Object.keys(game.colors).forEach(key=>{
            colorSelector.push(makeChoiceButton(key, game.colorButtons[key], x, 100+(index*30), 150))
            index++
            if (index === 12) {
                index = 0
                x = x + 155
            }
        })
        colorSelector.push(makeChoiceButton('Custom', colorPickerTab, 260, 430, 150))

        const colorSelectorCloseButton = game.add.sprite(180, 470, 'closeButton').setScale(.3)
            colorSelectorCloseButton.setInteractive({ useHandCursor: true });
            colorSelectorCloseButton.on('pointerdown', closeColor)
            colorSelector.push(colorSelectorCloseButton)

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
                colorPicker.value = game.animalData[game.currentColor].colorHex
                showTab(tab)
            })

            return button
        }


        // ============ Tab Control ============ //
        const mainUI = [ui, colorsBtn, featuresBtn, patternsBtn, randomButton]
        showTab(colorsTab)
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
            tabs.push(colorSelector)
            tabs.push(colorPickerTab)
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

    }
}