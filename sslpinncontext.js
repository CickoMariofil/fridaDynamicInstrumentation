Java.perform(() => {
    var PlatformClass = Java.use("com.android.org.conscrypt.Platform");
    PlatformClass.checkServerTrusted.overload('javax.net.ssl.X509TrustManager', '[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'com.android.org.conscrypt.ConscryptEngine').implementation = function() {
        console.log("Check server trusted");
    }
    var BuilderClass = Java.use("okhttp3.OkHttpClient$Builder");
    BuilderClass.certificatePinner.implementation = function() {
        console.log("Certificate pinner called");
        return this;
    }
})