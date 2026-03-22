//frida -U -f com.mobilehackinglab.fridaone ./script_before_start.js

Java.perform(function() {
  var mainActivity = Java.use("com.mobilehackinglab.fridatwo.MainActivity");
    mainActivity.showFlag();   
});