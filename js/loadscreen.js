// This scene is just used to load the image for the loading screen                

// Load screen scene
class Load extends Phaser.Scene 
{
    constructor ()
    {
        super({ key: 'Load' });
    }

    preload ()
    {
        // this.load.image('card_back', './images/selector/card_back.png');
    }

    create ()
    { 
        this.scene.start("Dressup");
    }
}