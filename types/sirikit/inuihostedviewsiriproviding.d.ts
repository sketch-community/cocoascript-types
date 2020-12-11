declare namespace cocoascript {
  /**
   * Methods for hiding portions of the default interfaces that Siri provides.
   * doc://com.apple.documentation/documentation/sirikit/inuihostedviewsiriproviding
   */
  interface INUIHostedViewSiriProviding extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inuihostedviewsiriproviding/1649161-displaysmap
    displaysMap(): cocoascript.BOOL;
    setDisplaysMap(): void;
    // doc://com.apple.documentation/documentation/sirikit/inuihostedviewsiriproviding/1649151-displaysmessage
    displaysMessage(): cocoascript.BOOL;
    setDisplaysMessage(): void;
    // doc://com.apple.documentation/documentation/sirikit/inuihostedviewsiriproviding/2279035-displayspaymenttransaction
    displaysPaymentTransaction(): cocoascript.BOOL;
    setDisplaysPaymentTransaction(): void;
  }
}
