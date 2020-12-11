declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/sirikit/insendmessageattachment
   */
  interface INSendMessageAttachment extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insendmessageattachment/3621861-audiomessagefile
    audioMessageFile(): cocoascript.INFile;
    setAudioMessageFile(): void;
    //
    alloc():cocoascript.INSendMessageAttachment;
    //
    init():cocoascript.INSendMessageAttachment;
  }
}

declare const INSendMessageAttachment: cocoascript.INSendMessageAttachment;
