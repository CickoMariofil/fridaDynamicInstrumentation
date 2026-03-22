//frida -U -f com.mobilehackinglab.fridaone -l ./script_before_start.js

Java.perform(function() {
  Java.choose("com.mobilehackinglab.FridaSix.MainActivity", {
    onMatch: function(instance) {
      console.log("isntance found");
      var classRefChecker = Java.use("com.mobilehackinglab.FridaSix.Checker");
      var checkerInstance = classRefChecker.$new();
      checkerInstance.x.value = 1337;
      checkerInstance.y.value = 1200;
      instance.getFlag(checkerInstance);
    },
    onComplete: function(instance) {}
  })
});