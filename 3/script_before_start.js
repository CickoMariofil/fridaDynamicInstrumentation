//frida -U -f com.mobilehackinglab.fridaone 

Java.perform(function() {
  var mainActivity = Java.use("com.mobilehackinglab.FridaThree.Checker");
  mainActivity.code.value = 256;
});