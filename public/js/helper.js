class Helper {

    constructor (phaserScene) {
        this.phaserScene = phaserScene
    }


    // ============ Variables ============ //
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
    colorCoordinates = [[177, 193], [208, 206], [221, 237], [208, 268], [177, 281], [146, 268],
            [133, 237], [146, 206], [177, 159], [217, 169], [245, 197], [255, 237], [245, 277], [217, 305],
            [177, 315], [137, 305], [109, 277], [99, 237], [109, 197], [137, 169]]


    // ============ Animal ============ //
    /**
     * Generates a random integer between two values
     * @param {number} min The minimum number that could be returned
     * @param {number} max The maximum number that could be returned
     * @returns 
     */
    randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    randomColor(option) {
        if (this.phaserScene.animalData[option] === undefined) {
            this.phaserScene.animalData[option] = {}
        }
        if (this.phaserScene.animalData[`${option}Lock`] !== 2) {
            if (this.phaserScene.animalData[`${option}Lock`] !== 1) {
                this.phaserScene.animalData[option].colorFamily = this.randomIntFromInterval(0, Object.keys(this.colors).length-1)
            }
            this.phaserScene.animalData[option].colorChoice = this.randomIntFromInterval(0, this.colors[Object.keys(this.colors)[this.phaserScene.animalData[option].colorFamily]].length-1)
            this.phaserScene.animalData[option].colorHex = this.colors[Object.keys(this.colors)[this.phaserScene.animalData[option].colorFamily]][this.phaserScene.animalData[option].colorChoice]
            this.phaserScene.colorSelectors[option].color.setTint(this.phaserScene.animalData[option].colorHex)
        }
    }

    changeTint(skeleton, part, color, shade) {
        color = this.splitHex(color)
        skeleton.skeleton.findSlot(`${part}`).color.r = color.r+.1
        skeleton.skeleton.findSlot(`${part}`).color.g = color.g+.1
        skeleton.skeleton.findSlot(`${part}`).color.b = color.b+.1
        
        if (shade !== 0) {
            skeleton.skeleton.findSlot(`${part}`).darkColor = {r: color.r-shade, g: color.g-shade, b: color.b-shade, a: 1}
        } else {
            skeleton.skeleton.findSlot(`${part}`).darkColor = null
        }
    }
        
    splitHex(color) {
        let r = ((color & 0xff0000) >> 16)/255
        let g = ((color & 0x00ff00) >> 8)/255
        let b = (color & 0x0000ff)/255
        return { color: color, r:r, g:g, b:b };
    }

    /**
     * Randomises the animal model
     */
    randomiseAnimal() {
        this.phaserScene.animalData.randomiseAnimalFeatures()
        this.randomiseBaseFeatures()
        this.resetAnimalSprite()
    }

    randomiseBaseFeatures() {
        if (!this.phaserScene.animalData.eyeLock) {this.phaserScene.animalData.eye = this.randomIntFromInterval(0,11)}
            if (!this.phaserScene.animalData.lashesLock) {this.phaserScene.animalData.lashes = this.randomIntFromInterval(0,1)}
            if (!this.phaserScene.animalData.bodySizeLock) {
                let randomSize = this.randomIntFromInterval(0,33)
                if (randomSize < 1) {
                    this.phaserScene.animalData.bodySize = 0
                } else if (randomSize < 2) {
                    this.phaserScene.animalData.bodySize = 1
                } else if (randomSize < 4) {
                    this.phaserScene.animalData.bodySize = 2
                } else if (randomSize < 29) {
                    this.phaserScene.animalData.bodySize = 3
                } else if (randomSize < 31) {
                    this.phaserScene.animalData.bodySize = 4
                } else if (randomSize < 33) {
                    this.phaserScene.animalData.bodySize = 5
                } else {
                    this.phaserScene.animalData.bodySize = 6
                }
            }
            this.randomColor('primaryColor')
            this.randomColor('secondaryColor')
            this.randomColor('tertiaryColor')
            this.randomColor('eyeColor')
    }
        
    /**
     * Resets the animal sprite to show the correct features and colours
     */
    resetAnimalSprite() {
        for (let index = 0; index < this.phaserScene.animal.skeleton.slots.length; index++) {
            this.phaserScene.animal.skeleton.slots[index].darkColor = null;
        }
        this.setSkin()
        this.phaserScene.animalData.tintAnimal()
        this.phaserScene.animal.animationState.setAnimation(0, `${this.phaserScene.animalData.view.toString()}/${this.phaserScene.animalData.bodySize.toString()}`, false)
    }

    /**
     * Sets the skin for the sprite to display the current features
     */
    setSkin(){
        const skeletonData = this.phaserScene.animal.skeleton.data;
        const skin = new spine.Skin("custom");
            this.phaserScene.animalData.setAnimalSkin(skin, skeletonData)
        this.phaserScene.animal.skeleton.setSkin(skin);
        this.phaserScene.animal.skeleton.setToSetupPose();
    }

    // ============ Main Menus ============ //
    makeColorSelectors() {
        this.phaserScene.colorSelectors = {}
        this.makeColorSelector(164, 200, 'primaryColor')
        this.makeColorSelector(164, 285, 'secondaryColor')
        this.makeColorSelector(164, 200, 'tertiaryColor')
        this.makeColorSelector(164, 200, 'eyeColor')
        this.randomiseAnimal()
    }

    makeColorSelector(x, y, key) {
        const slider = this.phaserScene.add.container(100, 24);

        const color = this.phaserScene.add.sprite(0, 0, 'button').setScale(.4)
            color.setInteractive({ useHandCursor: true });
            color.on('pointerdown', () => {
                this.phaserScene.showTab(this.phaserScene.tabs.colorSelector)
                this.phaserScene.currentColor = key
            })

        const lockButton = this.phaserScene.add.sprite(-127, -5, 'LockBtn', 'Unlocked').setScale(.4)
            this.phaserScene.animalData[`${key}Lock`] = 0
            lockButton.setInteractive({ useHandCursor: true });
            lockButton.on('pointerdown', () => {
                switch (this.phaserScene.animalData[`${key}Lock`]) {
                    case 0:
                        this.phaserScene.animalData[`${key}Lock`] = 1
                        lockButton.setFrame('LockedColorSet')
                        break;

                    case 1:
                        this.phaserScene.animalData[`${key}Lock`] = 2
                        lockButton.setFrame('LockedColor')
                        break;
                
                    default:
                        this.phaserScene.animalData[`${key}Lock`] = 0
                        lockButton.setFrame('Unlocked')
                        break;
                }
            })

        const pButton = this.phaserScene.add.sprite(-88, 0, 'ArrowBtn').setScale(.4)
            pButton.setInteractive({ useHandCursor: true });
            pButton.on('pointerdown', () => {
                if (0 < this.phaserScene.animalData[key].colorChoice) {
                    this.phaserScene.animalData[key].colorChoice = this.phaserScene.animalData[key].colorChoice - 1
                } else {
                    if (0 < this.phaserScene.animalData[key].colorFamily) {
                        this.phaserScene.animalData[key].colorFamily = this.phaserScene.animalData[key].colorFamily - 1
                    } else {
                        this.phaserScene.animalData[key].colorFamily = Object.keys(this.colors).length - 1
                    }
                    this.phaserScene.animalData[key].colorChoice = this.colors[Object.keys(this.colors)[this.phaserScene.animalData[key].colorFamily]].length - 1
                }
                this.phaserScene.animalData[key].colorHex = this.colors[Object.keys(this.colors)[this.phaserScene.animalData[key].colorFamily]][this.phaserScene.animalData[key].colorChoice]
                color.setTint(this.phaserScene.animalData[key].colorHex)
                this.resetAnimalSprite()
            })

        const nButton = this.phaserScene.add.sprite(88, 0, 'ArrowBtn').setScale(-.4, .4)
            nButton.setInteractive({ useHandCursor: true });
            nButton.on('pointerdown', () => {
                
                if (this.phaserScene.animalData[key].colorChoice < this.colors[Object.keys(this.colors)[this.phaserScene.animalData[key].colorFamily]].length - 1) {
                    this.phaserScene.animalData[key].colorChoice = this.phaserScene.animalData[key].colorChoice + 1
                } else {
                    if (this.phaserScene.animalData[key].colorFamily < Object.keys(this.colors).length - 1) {
                        this.phaserScene.animalData[key].colorFamily = this.phaserScene.animalData[key].colorFamily + 1
                    } else {
                        this.phaserScene.animalData[key].colorFamily = 0
                    }
                    this.phaserScene.animalData[key].colorChoice = 0
                }
                // console.log(`Family: ${this.phaserScene.animalData[key].colorFamily}, Choice: ${this.phaserScene.animalData[key].colorChoice}`)
                this.phaserScene.animalData[key].colorHex = this.colors[Object.keys(this.colors)[this.phaserScene.animalData[key].colorFamily]][this.phaserScene.animalData[key].colorChoice]
                color.setTint(this.phaserScene.animalData[key].colorHex)
                this.resetAnimalSprite()
            })

        slider.add([ color, pButton, nButton, lockButton ]);
        slider.color = color
        slider.setSize(100, 24).setPosition(x, y);
        
        this.phaserScene.colorSelectors[key] = slider
    }
    
    makeSelector(x, y, options, key, lable) {
        const slider = this.phaserScene.add.container(100, 24);

        const text = this.phaserScene.add.text(0, 0, lable[this.phaserScene.animalData[key]], {
            fontFamily: 'Dimbo',
            fontSize: '20px',
            color: '#ffffff',
            align: 'center',
            fixedWidth: 125,
            backgroundColor: '#00000080'
        }).setPadding(6).setOrigin(0.5);
        text.lables = lable

        const lockButton = this.phaserScene.add.sprite(-127, -5, 'LockBtn', 'Unlocked').setScale(.4)
            this.phaserScene.animalData[`${key}Lock`] = 0
            lockButton.setInteractive({ useHandCursor: true });
            lockButton.on('pointerdown', () => {
                switch (this.phaserScene.animalData[`${key}Lock`]) {
                    case 0:
                        this.phaserScene.animalData[`${key}Lock`] = 1
                        lockButton.setFrame('Locked')
                        break;
                
                    default:
                        this.phaserScene.animalData[`${key}Lock`] = 0
                        lockButton.setFrame('Unlocked')
                        break;
                }
            })

        const pButton = this.phaserScene.add.sprite(-88, 0, 'ArrowBtn').setScale(.4)
            pButton.setInteractive({ useHandCursor: true });
            pButton.on('pointerdown', () => {
                if (0 < this.phaserScene.animalData[key]) {
                    this.phaserScene.animalData[key] = this.phaserScene.animalData[key] - 1
                } else {
                    this.phaserScene.animalData[key] = options
                }
                text.text = lable[this.phaserScene.animalData[key]]
                this.resetAnimalSprite()
            })

        const nButton = this.phaserScene.add.sprite(88, 0, 'ArrowBtn').setScale(-.4, .4)
            nButton.setInteractive({ useHandCursor: true });
            nButton.on('pointerdown', () => {
                if (this.phaserScene.animalData[key] < options) {
                    this.phaserScene.animalData[key] = this.phaserScene.animalData[key] + 1
                } else {
                    this.phaserScene.animalData[key] = 0
                }
                text.text = lable[this.phaserScene.animalData[key]]
                this.resetAnimalSprite()
            })

        slider.add([ text, pButton, nButton, lockButton ]);
        slider.setSize(100, 24).setPosition(x, y);
        return slider
    }

    makeTabButton(name, tab, x, y) {
        let button
        if (name === 'ColorsBtn') {
            button = this.phaserScene.add.sprite(x, y, name, 'active').setScale(.4)
        } else if (name === 'FeaturesBtn' || name === 'PatternsBtn') {
            button = this.phaserScene.add.sprite(x, y, name, 'inactive').setScale(.4)
        } else {
            button = this.phaserScene.add.sprite(x, y, name).setScale(.4)
        }
        
        this.phaserScene.tabButtons[name] = button

        button.setInteractive({ useHandCursor: true });

        let game = this.phaserScene
        button.on('pointerdown', () => {
            game.showTab(tab)
            Object.keys(game.tabButtons).forEach(key=>{
                if (key === 'ColorsBtn' || key === 'FeaturesBtn' || key === 'PatternsBtn') {
                    game.tabButtons[key].setFrame('inactive')
                }
            })
            if (name === 'ColorsBtn' || name === 'FeaturesBtn' || name === 'PatternsBtn') {
                button.setFrame('active')
                switch (name) {
                    case 'FeaturesBtn':
                        game.currentColor = 'eyeColor'
                        
                        break;
                    case 'PatternsBtn':
                        game.currentColor = 'tertiaryColor'
                        
                        break;
                
                    default:
                        game.currentColor = 'primaryColor'
                        break;
                }
            } else {
                game.featuresBtn.setFrame('active')
            }
        })

        return button
    }

    // ============ Color Buttons ============ //
    makeColorSelectionMenu() {
        this.phaserScene.colorButtons = {}
        Object.keys(this.colors).forEach(key=>{
            this.phaserScene.helper.makeColorButtons(key)
        })

        this.phaserScene.choiceButtons = {}

        this.phaserScene.tabs.colorSelector = []
        let index = 0
        let x = 105
        Object.keys(this.colors).forEach(key=>{
            this.phaserScene.tabs.colorSelector.push(this.phaserScene.helper.makeChoiceButton(key, this.phaserScene.colorButtons[key], x, 100+(index*30), 150))
            index++
            if (index === 12) {
                index = 0
                x = x + 155
            }
        })
        this.phaserScene.tabs.colorSelector.push(this.phaserScene.helper.makeChoiceButton('Custom', this.phaserScene.tabs.colorPickerTab, 260, 430, 150))

        const colorSelectorCloseButton = this.phaserScene.add.sprite(180, 470, 'closeButton').setScale(.3)
            colorSelectorCloseButton.setInteractive({ useHandCursor: true });
            colorSelectorCloseButton.on('pointerdown', this.phaserScene.closeColor)
            this.phaserScene.tabs.colorSelector.push(colorSelectorCloseButton)
    }

    makeColorButtons(colorSet) {
        this.phaserScene.colorButtons[colorSet] = []
        for (let index = 0; index < this.colors[colorSet].length; index++) {
            this.phaserScene.colorButtons[colorSet].push(this.makeColorButton(colorSet, index , this.colorCoordinates[index][0], this.colorCoordinates[index][1]))
        }
        this.phaserScene.colorButtons[colorSet].push(this.makeCloseButton())
    }

    makeColorButton(colorSet, index, x, y) {
        const color = this.colors[colorSet][index]
        const button = this.phaserScene.add.sprite(x, y, 'button').setScale(.3).setTint(color)

        button.setInteractive({ useHandCursor: true });

        button.on('pointerdown', () => {
            this.phaserScene.animalData[this.phaserScene.currentColor].colorHex = color
            this.phaserScene.animalData[this.phaserScene.currentColor].colorFamily = Object.keys(this.colors).findIndex((element) => element === colorSet)
            this.phaserScene.animalData[this.phaserScene.currentColor].colorChoice = index
            this.phaserScene.colorSelectors[this.phaserScene.currentColor].color.setTint(color)
            this.resetAnimalSprite()
        })

        return button
    }

    makeCloseButton() {
        const button = this.phaserScene.add.sprite(177, 237, 'closeButton').setScale(.3)

        button.setInteractive({ useHandCursor: true });

        button.on('pointerdown', this.phaserScene.closeColor)
        return button
    }

    makeChoiceButton(text, tab, x, y, width) {
        const button = this.phaserScene.add.text(x, y, text, {
            fontFamily: 'Arial',
            fontSize: '12px',
            color: '#ffffff',
            align: 'center',
            fixedWidth: width,
            backgroundColor: COLOR_PRIMARY_HEX
        }).setPadding(6).setOrigin(0.5);
        this.phaserScene.choiceButtons[text] = button

        button.setInteractive({ useHandCursor: true });

        button.on('pointerover', () => {
            button.setBackgroundColor(COLOR_SECONDARY_HEX);
        });

        button.on('pointerout', () => {
            button.setBackgroundColor(COLOR_PRIMARY_HEX);
        });

        button.on('pointerdown', () => {
            this.phaserScene.colorPicker.value = this.phaserScene.animalData[this.phaserScene.currentColor].colorHex
            this.phaserScene.showTab(tab)
        })

        return button
    }

    // ============ Color Picker ============ //
    makeColorPicker() {
        const game = this.phaserScene
        let colorText
        game.colorPicker = game.rexUI.add.colorPicker({
            x: 155, y: 255,
            background: game.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_SECONDARY),
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
                if (typeof colorText !== 'undefined') {colorText.text = game.colorPicker.value.toString(16)}
                game.animalData.tintAnimal()
                game.colorSelectors[game.currentColor].color.setTint(value)
            },
            value: game.animalData[game.currentColor].colorHex
        }).layout()

        colorText = game.add.rexInputText(140, 355, 120, 20, {
            fontFamily: 'Arial',
            fontSize: '12px',
            color: '#000000',
            backgroundColor: '#ffffff80',
            padding: 6
        })
        colorText.on('textchange', function(inputText, e){ 
            let regex = new RegExp("#", 'g');
            game.animalData[game.currentColor].colorHex = colorText.text.replace(regex, '');
            game.colorPicker.value = parseInt(game.animalData[game.currentColor].colorHex, 16);
        });        
        colorText.text = game.colorPicker.value.toString(16)

        const colorCloseButton = game.add.sprite(217, 357, 'closeButton').setScale(.25)
            colorCloseButton.setInteractive({ useHandCursor: true });
            colorCloseButton.on('pointerdown', game.closeColor)
            
        game.tabs.colorPickerTab = [game.colorPicker, colorText, colorCloseButton]
    }

    // ============ View ============ //
    addViewButtons () {
        const leftButton = this.phaserScene.add.sprite(390, 470, 'ArrowBtn').setScale(.4).setAngle(35)
            leftButton.setInteractive({ useHandCursor: true });
            leftButton.on('pointerdown', () => {
                if (0 < this.phaserScene.animalData.view) {
                    this.phaserScene.animalData.view = this.phaserScene.animalData.view - 1
                } else {
                    this.phaserScene.animalData.view  = this.phaserScene.animalData.views
                }
                this.resetAnimalSprite()
            })

        const rightButton = this.phaserScene.add.sprite(770, 470, 'ArrowBtn').setScale(-.4, .4).setAngle(-35)
            rightButton.setInteractive({ useHandCursor: true });
            rightButton.on('pointerdown', () => {
                if (this.phaserScene.animalData.view < this.phaserScene.animalData.views) {
                    this.phaserScene.animalData.view = this.phaserScene.animalData.view + 1
                } else {
                    this.phaserScene.animalData.view = 0
                }
                this.resetAnimalSprite()
            })
    }

    // ============ Certificate ============ //
    checkColor(colorData) {
        let colorText = Object.keys(this.colors)[colorData.colorFamily]
        if (colorData.colorHex !== this.colors[Object.keys(this.colors)[colorData.colorFamily]][colorData.colorChoice]) {
            colorText = '???'
        }
        return colorText
    }

    makeCertificate() {
        const cert = this.phaserScene.add.image(200, 260, 'certificate').setScale(.5, .6)
        let textX = 110
        let textY = 140
        let textHeight = 275

        let text = this.phaserScene.add.text(textX, textY, this.phaserScene.animalData.setCertText(), { 
            fontFamily: 'Arial', 
            color: '#8c37a0', 
            wordWrap: { width: 310 } 
        }).setOrigin(0);

        text.setMask(new Phaser.Display.Masks.GeometryMask(this.phaserScene, this.phaserScene.make.graphics().fillRect(textX-8, textY-8, 320, textHeight)));
        let dragZone = this.phaserScene.add.zone(textX-8, textY-8, 320, textHeight + 6).setOrigin(0).setInteractive();

        dragZone.on('pointermove', function (pointer) {
            if (pointer.isDown){
                let moveText = 0
                if (pointer.y < textY + 5) {
                    moveText = 0
                } else if (pointer.y > textY + textHeight - 5) {
                    moveText = text.height - textHeight
                } else {
                    moveText = (pointer.y - textY) / textHeight * (text.height - textHeight)
                }

                text.y = textY - moveText
            }
        });
        
        const certOpenButton = this.phaserScene.add.sprite(830, 48, 'certButton').setScale(.5)
        certOpenButton.setInteractive({ useHandCursor: true });

        const certCloseButton = this.phaserScene.add.sprite(310, 75, 'closeButton').setScale(.5)
        certCloseButton.setInteractive({ useHandCursor: true });
        certCloseButton.on('pointerdown', () => {
            this.phaserScene.closeColor()
        })

        this.phaserScene.tabs.certMenu = [dragZone, cert, text, certCloseButton]
        let game =  this.phaserScene
        certOpenButton.on('pointerdown', () => {
            text.text = game.animalData.setCertText()
            text.y = textY
            game.showTab(game.tabs.certMenu)
            dragZone.setInteractive(true)
        })
    }

    makeAnimalBtn(image, scene) {
        let game =  this.phaserScene
        const switchButton = this.phaserScene.add.sprite(750, 48, image).setScale(.5)
        switchButton.setInteractive({ useHandCursor: true });
        switchButton.on('pointerdown', () => {
            game.scene.start(scene);
        })
    }

    makeWingsBtn(image, scene) {
        let game =  this.phaserScene
        const switchButton = this.phaserScene.add.sprite(830, 480, 'WingsBtn').setScale(.5)
        switchButton.setInteractive({ useHandCursor: true });
        switchButton.on('pointerdown', () => {
            game.animalData.wingsOpen = game.animalData.wingsOpen ? 0 : 1
            this.resetAnimalSprite()
        })
    }
}