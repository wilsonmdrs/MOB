import { SpeechConfig, AudioConfig, SpeechSynthesizer } from 'microsoft-cognitiveservices-speech-sdk'


const ssml = {
    xmlns: "http://www.w3.org/2001/10/synthesis",
    mstts: "http://www.w3.org/2001/mstts",
    emo: "http://www.w3.org/2009/10/emotionml",
    version: "1.0",
    lang: "en-US",
    voice: "en-US-BrandonNeural",
    rate: "0%",
    pitch: "0%"
}


export const useSpeech = () => {
    // Validating Azure
    const speechConfig = SpeechConfig.fromSubscription("36b669875fbb40bda8d523e3be731608", "northeurope");
    speechConfig.speechRecognitionLanguage = "en-US";
    //Setting Audio Speaker
    const audioConfig = AudioConfig.fromDefaultSpeakerOutput()
    // Creating Synthesizer
    const synthesizer = new SpeechSynthesizer(speechConfig, audioConfig);

    const onSetText = (text:string) => {
        const xmlStr = `<speak xmlns="${ssml.xmlns}" xmlns:mstts="${ssml.mstts}" 
            xmlns:emo="${ssml.emo}" version="${ssml.version}" xml:lang="${ssml.lang}">
            <voice name="${ssml.voice}"> <prosody rate="${ssml.rate}" pitch="${ssml.pitch}">${text}
            </prosody> </voice> </speak>`
        const parser = new DOMParser()
        const dom = parser.parseFromString(xmlStr, "application/xml")
        const serializer = new XMLSerializer()
        const newxmlStr = serializer.serializeToString(dom)
        return newxmlStr
    }

    const onSpeech = (userMessage:string) => {
        const text = onSetText(userMessage)
        synthesizer.speakSsmlAsync(
            text,
            (result) => {
            },
            error => {
                console.log(error);
                synthesizer.close();
            });
    }

    return { onSpeech }
}