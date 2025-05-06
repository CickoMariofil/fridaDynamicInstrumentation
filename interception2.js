Java.perform(() => {
    let fragClass = Java.use("io.hextree.fridatarget.ui.DiceGameFragment")
    fragClass.randomDice.implementation = function () {
        return 5;
    }

   
});