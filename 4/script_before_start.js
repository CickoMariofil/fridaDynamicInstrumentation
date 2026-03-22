//frida -U -f com.mobilehackinglab.fridaone -l ./script_before_start.js

Java.perform(function() {
  Java.choose("com.mobilehackinglab.FridaFive.MainActivity", {
    onMatch: function(instance) {
      console.log("isntance found")
      instance.flag(1337);
    },
    onComplete: function(instance) {}
  })
});