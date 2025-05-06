Java.perform(() => {
    let fragClass = Java.use("io.hextree.fridatarget.ui.InterceptionFragment")
    fragClass.function_to_intercept.implementation = function (argument) {
        this.function_to_intercept(argument);
        return "SOMETHING DIFFERENT";
    }

    let licenseManager = Java.use("io.hextree.fridatarget.LicenseManager");
    licenseManager.isLicenseValid.implementation = function () {
        return true;
    }

    licenseManager.isLicenseStillValid.implementation = function (a1, a2) {
        console.log("function called with ", a1, a2);
        return this.isLicenseStillValid(a1, 1);
    }
});