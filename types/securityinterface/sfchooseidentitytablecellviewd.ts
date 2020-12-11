declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/securityinterface/sfchooseidentitytablecellview
   */
  interface SFChooseIdentityTableCellView extends NSTableCellView {
    // doc://com.apple.documentation/documentation/securityinterface/sfchooseidentitytablecellview/2880435-issuertextfield
    issuerTextField(): cocoascript.NSTextField;
    setIssuerTextField(): void;
    //
    alloc():cocoascript.SFChooseIdentityTableCellView;
    //
    init():cocoascript.SFChooseIdentityTableCellView;
  }
}

declare const SFChooseIdentityTableCellView: cocoascript.SFChooseIdentityTableCellView;
