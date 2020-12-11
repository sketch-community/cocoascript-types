declare namespace cocoascript {
  /**
   * The Cocoa interface to speech recognition in macOS.
   * doc://com.apple.documentation/documentation/appkit/nsspeechrecognizer
   */
  interface NSSpeechRecognizer extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsspeechrecognizer/1527990-init
    init():cocoascript.NSSpeechRecognizer;
    // doc://com.apple.documentation/documentation/appkit/nsspeechrecognizer/1528171-delegate
    delegate(): cocoascript.NSSpeechRecognizerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/appkit/nsspeechrecognizer/1529757-commands
    commands(): cocoascript.NSString;
    setCommands(): void;
    // doc://com.apple.documentation/documentation/appkit/nsspeechrecognizer/1530622-displayedcommandstitle
    displayedCommandsTitle(): cocoascript.NSString;
    setDisplayedCommandsTitle(): void;
    // doc://com.apple.documentation/documentation/appkit/nsspeechrecognizer/1533405-listensinforegroundonly
    listensInForegroundOnly(): cocoascript.BOOL;
    setListensInForegroundOnly(): void;
    // doc://com.apple.documentation/documentation/appkit/nsspeechrecognizer/1533022-blocksotherrecognizers
    blocksOtherRecognizers(): cocoascript.BOOL;
    setBlocksOtherRecognizers(): void;
    // doc://com.apple.documentation/documentation/appkit/nsspeechrecognizer/1528154-startlistening
    startListening():void;
    // doc://com.apple.documentation/documentation/appkit/nsspeechrecognizer/1529583-stoplistening
    stopListening():void;
    //
    alloc():cocoascript.NSSpeechRecognizer;
    //
    init():cocoascript.NSSpeechRecognizer;
  }
}

declare const NSSpeechRecognizer: cocoascript.NSSpeechRecognizer;
