scene.setBackgroundColor(1)
music.play(music.stringPlayable("G C5 A B F E B D ", 256), music.PlaybackMode.UntilDone)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 3 3 3 . . . . 
    . 3 3 3 3 3 3 3 . 3 3 . 3 . . . 
    3 3 3 3 3 . 3 . 3 3 3 . 3 . . . 
    3 3 3 . 3 . 3 3 3 . 3 . 3 . . . 
    . 3 3 . . 3 3 3 . 3 3 . 3 . . . 
    . 3 3 . 3 . . . 3 3 . . 3 . . . 
    . 3 . 3 3 3 3 3 3 . . . 3 . . . 
    . 3 . 3 . . . . 3 3 . . 3 . . . 
    . 3 3 3 3 3 3 3 3 3 . 3 . . . . 
    . . 3 3 3 3 3 3 3 3 3 . . . . . 
    . . . . . . . . . 3 . . . . . . 
    . . . . . . . . 3 . . . . . . . 
    . . . . . . . . 3 . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
