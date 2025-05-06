Java.perform(() => {
    let ExampleClass = Java.use("io.hextree.fridatarget.ExampleClass");

    let ExampleInstance = ExampleClass.$new();
    console.log(ExampleInstance.returnDecryptedString());
    console.log(ExampleInstance.returnDecryptedStringIfPasswordCorrect("VerySecret"));

    let FlagClass = Java.use("io.hextree.fridatarget.FlagClass");
    let FlagInstance = FlagClass.$new();
    console.log(FlagClass.flagFromStaticMethod());
    //instance method, we need a new instance
    console.log(FlagInstance.flagFromInstanceMethod());
    console.log(FlagInstance.flagIfYouCallMeWithSesame("sesame"));

});