/* Java.performNow(function () {
    Java.choose('com.mobilehackinglab.FridaSeven.MainActivity', {
        onMatch: function (instance) {
            Java.scheduleOnMainThread(function () {
                console.log("hello from on match")
                var checker = Java.use("com.mobilehackinglab.FridaSeven.Checker");
                var checker_obj = checker.$new(123, 321);
                instance.getFlag(checker_obj);
                console.log("hello after getting flag")
            });
        },
        onComplete: function () {
        }
    });
}); */

Java.perform(function () {
    var a = Java.use("com.mobilehackinglab.FridaSeven.Checker");
    a.$init.implementation = function (param) {
        console.log("will set init as 123 and 321");
        this.$init(123, 321);
        console.log("after setting values");
    }
});