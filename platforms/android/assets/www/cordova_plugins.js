cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.speech.speechsynthesis/www/SpeechSynthesis.js",
        "id": "org.apache.cordova.speech.speechsynthesis.SpeechSynthesis",
        "clobbers": [
            "window.speechSynthesis"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.speech.speechsynthesis/www/SpeechSynthesisUtterance.js",
        "id": "org.apache.cordova.speech.speechsynthesis.SpeechSynthesisUtterance",
        "clobbers": [
            "SpeechSynthesisUtterance"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.speech.speechsynthesis/www/SpeechSynthesisEvent.js",
        "id": "org.apache.cordova.speech.speechsynthesis.SpeechSynthesisEvent",
        "clobbers": [
            "SpeechSynthesisEvent"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.speech.speechsynthesis/www/SpeechSynthesisVoice.js",
        "id": "org.apache.cordova.speech.speechsynthesis.SpeechSynthesisVoice",
        "clobbers": [
            "SpeechSynthesisVoice"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.speech.speechsynthesis/www/SpeechSynthesisVoiceList.js",
        "id": "org.apache.cordova.speech.speechsynthesis.SpeechSynthesisVoiceList",
        "clobbers": [
            "SpeechSynthesisVoiceList"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.speech/SpeechRecognizer.js",
        "id": "com.phonegap.plugins.speech.SpeechRecognizer",
        "clobbers": [
            "plugins.speechrecognizer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.speech.speechsynthesis": "0.1.0",
    "com.phonegap.plugins.speech": "1.0.0",
    "org.apache.cordova.console": "0.2.12-dev"
}
// BOTTOM OF METADATA
});