# okhttp-sslpinning-bypass
Okhttp SSL Pinning Bypass

Usage:

    Extract smali files with apktool:
    apktool d app.apk
    Find the class:
    grep -ri "java/lang/String;[Ljava/lang/String;)L"
    Replace classname in okhttp-bypass.js
    Run frida script:
    frida -U -f com.appname -l okhttp-sslpinning-bypass.js

