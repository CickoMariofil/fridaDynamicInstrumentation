Java.perform(() => {
    let ActivityClass = Java.use("android.app.Activity");
    ActivityClass.onResume.implementation = function() {
        console.log("Activity resumed:", this.getClass().getName());
        // Call original onResume method
        this.onResume();
    }

    let fragmentClass = Java.use("androidx.fragment.app.Fragment");
    fragmentClass.onResume.implementation = function() {
        console.log("fragment resumed: ", this.getClass().getName());
        this.onResume();
    }
})