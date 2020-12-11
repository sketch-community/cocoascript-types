declare namespace cocoascript {
  /**
   * A set of optional methods implemented by delegates of
   * doc://com.apple.documentation/documentation/appkit/nsspeechrecognizerdelegate
   */
  interface NSSpeechRecognizerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsspeechrecognizerdelegate/1534211-speechrecognizer
    speechRecognizer_didRecognizeCommand(sender: cocoascript.NSSpeechRecognizer, command: cocoascript.NSString):void;
  }
}
