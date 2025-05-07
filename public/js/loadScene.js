// This scene is just used to load the image for the loading screen
const COLOR_PRIMARY = 0x424242;
const COLOR_PRIMARY_HEX = '#424242';
const COLOR_SECONDARY = 0x6b6b6b;
const COLOR_SECONDARY_HEX = '#6b6b6b';              

// Load screen scene
class Load extends Phaser.Scene 
{
    constructor ()
    {
        super({ key: 'Load' });
    }

    preload ()
    {
        this.load.image('background', './images/FantasyBG.png');
    }

    create ()
    { 
        console.log(animalType)
        if (animalType !== 'griffin' && animalType !== 'unicorn') {
            const helper = new Helper(this)
            animalType = helper.randomIntFromInterval(0,1)
        }
        switch (animalType) {
            case 'griffin':
            case 0:
                this.scene.start("GriffDressup");
                break;
            case 'unicorn':
            case 1:
                this.scene.start("UniDressup");
                break;
        
            default:
                this.scene.start("GriffDressup");
                break;
        }
    }
}