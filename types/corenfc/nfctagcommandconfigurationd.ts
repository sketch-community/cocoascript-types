declare namespace cocoascript {
  /**
   * A set of parameters you use to define the configuration of an NFC tag command.
   * doc://com.apple.documentation/documentation/corenfc/nfctagcommandconfiguration
   */
  interface NFCTagCommandConfiguration extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfctagcommandconfiguration/2873693-maximumretries
    maximumRetries(): cocoascript.NSUInteger;
    setMaximumRetries(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfctagcommandconfiguration/2873688-retryinterval
    retryInterval(): cocoascript.NSTimeInterval;
    setRetryInterval(): void;
    //
    alloc():cocoascript.NFCTagCommandConfiguration;
    //
    init():cocoascript.NFCTagCommandConfiguration;
  }
}

declare const NFCTagCommandConfiguration: cocoascript.NFCTagCommandConfiguration;
