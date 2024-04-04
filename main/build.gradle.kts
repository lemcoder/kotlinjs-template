plugins {
    alias(libs.plugins.kotlin.js)
}

kotlin {
    js {
        browser()
        binaries.executable()
    }
}