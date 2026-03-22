//frida -U -f com.mobilehackinglab.fridaone -l ./script_before_start.js

Java.perform(function() {
  var classRef = Java.use("com.mobilehackinglab.fridaone.MainActivity");
  classRef.generateRandomNumber.implementation = function(args) {
    // Custom logic to execute when the method is called
    console.log("This method is hooked");
    var retVal = this.generateRandomNumber();
    console.log("The return value is " + retVal);
    return 5;
  }
});