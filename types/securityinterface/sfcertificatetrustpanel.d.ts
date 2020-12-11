declare namespace cocoascript {
  /**
   * A panel or sheet that lets the user edit the trust settings in any of the certificates in a certificate chain.
   * doc://com.apple.documentation/documentation/securityinterface/sfcertificatetrustpanel
   */
  interface SFCertificateTrustPanel extends SFCertificatePanel {
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatetrustpanel/1518350-beginsheetforwindow
    beginSheetForWindow_modalDelegate_didEndSelector_contextInfo_trust_message(docWindow: cocoascript.NSWindow, delegate: cocoascript.SFCertificateTrustPanel, didEndSelector: cocoascript.SEL, contextInfo: void, trust: cocoascript.SecTrustRef, message: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatetrustpanel/1518354-runmodalfortrust
    runModalForTrust_message(trust: cocoascript.SecTrustRef, message: cocoascript.NSString):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatetrustpanel/1518347-informativetext
    informativeText():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatetrustpanel/1518351-setinformativetext
    setInformativeText(informativeText: cocoascript.NSString):void;
    //
    alloc():cocoascript.SFCertificateTrustPanel;
    //
    init():cocoascript.SFCertificateTrustPanel;
  }
}

declare const SFCertificateTrustPanel: cocoascript.SFCertificateTrustPanel;
