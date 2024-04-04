plugins {
    alias(libs.plugins.kotlin.js)
}

kotlin {
    js {
        browser()
        binaries.executable()
    }

    dependencies {
        implementation(npm("office-addin-dev-certs", "1.12.2"))
    }
}