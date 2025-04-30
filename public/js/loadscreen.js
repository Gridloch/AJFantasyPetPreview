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
        this.load.image('background', './images/FantasyBG.png');
    }

    create ()
    { 
        this.scene.start("Dressup");
    }
}