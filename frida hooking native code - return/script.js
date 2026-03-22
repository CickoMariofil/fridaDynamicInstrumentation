//enumerating exports - will list all the exported functions and addresses
var libc = Process.getModuleByName("libFridaEight.so")
libc.enumerateExports();

/*
{
        "address": "0x72fd2b382c",
        "name": "Java_com_mobilehackinglab_FridaEight_MainActivity_strCmp",
        "type": "function"
    },
    Note: ASLR is available on Android so the address is randomized on app startup
*/

//get export by name
//previously we've found out that Java_com_mobilehackinglab_FridaEight_MainActivity_strCmp function
//is exported in libFridaEight.so using Ghidra
var libc = Process.getModuleByName("libFridaEight.so")
libc.findExportByName("Java_com_mobilehackinglab_FridaEight_MainActivity_strCmp")

//similar function is available - getExportByName("X") - raises an exception if none is found

//base address
libc.base
//"0x72fd2b3000"  plus offset in Ghidra (82c) in this case
libc.base.add("0x82c")

//enumerate imports
libc.enumerateImports();
/*
{
        "address": "0x7411146ac0",
        "module": "/apex/com.android.runtime/lib64/bionic/libc.so",
        "name": "strcmp",
        "slot": "0x72fd2b4c88",
        "type": "function"
    }
*/

//var strcmp_address = Process.findModuleByName("libc.so", "strcmp")
var libc = Process.getModuleByName("libFridaNine.so")
var flagAddr = libc.findExportByName("Java_com_mobilehackinglab_FridaNine_MainActivity_flag")
Interceptor.attach(flagAddr, {
    onEnter: function (args) {

    },
    onLeave: function (retval) {
        // Modify or log return value if needed
        retval.replace(623);
    }
});


var libc = Process.getModuleByName("libc.so")
var strcmp_adr = libc.findExportByName("strcmp")
Interceptor.attach(strcmp_adr, {
    onEnter: function (args) {
        var arg0 = args[0]; // first argument
        var arg0String = arg0.readUtf8String();
        var flagAddress = args[1]; // second argument
        var flagString = flagAddress.readUtf8String();
        if (arg0String.includes("Hello")) {
            console.log("Hooking the strcmp function");
            console.log("Input: " + arg0String);
            console.log("The flag is: " + flagString);
        }
    },
    onLeave: function (retval) {
        // Modify or log return value if needed
    }
});