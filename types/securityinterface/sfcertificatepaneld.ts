declare namespace cocoascript {
  /**
   * A panel or sheet that displays one or more certificates.
   * doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel
   */
  interface SFCertificatePanel extends NSPanel {
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543234-sethelpanchor
    setHelpAnchor(anchor: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543223-setshowshelp
    setShowsHelp(showsHelp: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543225-helpanchor
    helpAnchor():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543231-showshelp
    showsHelp():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543227-setalternatebuttontitle
    setAlternateButtonTitle(title: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543242-setdefaultbuttontitle
    setDefaultButtonTitle(title: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543239-setpolicies
    setPolicies(policies: cocoascript.SFCertificatePanel):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543232-policies
    policies():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543229-beginsheetforwindow
    beginSheetForWindow_modalDelegate_didEndSelector_contextInfo_certificates_showGroup(docWindow: cocoascript.NSWindow, delegate: cocoascript.SFCertificatePanel, didEndSelector: cocoascript.SEL, contextInfo: void, certificates: cocoascript.NSArray, showGroup: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543228-beginsheetforwindow
    beginSheetForWindow_modalDelegate_didEndSelector_contextInfo_trust_showGroup(docWindow: cocoascript.NSWindow, delegate: cocoascript.SFCertificatePanel, didEndSelector: cocoascript.SEL, contextInfo: void, trust: cocoascript.SecTrustRef, showGroup: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543244-certificateview
    certificateView():cocoascript.SFCertificateView;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543240-runmodalforcertificates
    runModalForCertificates_showGroup(certificates: cocoascript.NSArray, showGroup: cocoascript.BOOL):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543238-runmodalfortrust
    runModalForTrust_showGroup(trust: cocoascript.SecTrustRef, showGroup: cocoascript.BOOL):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/objectivec/nsobject/1514145-certificatepanelshowhelp
    certificatePanelShowHelp(sender: cocoascript.SFCertificatePanel):cocoascript.BOOL;
    //
    alloc():cocoascript.SFCertificatePanel;
    //
    init():cocoascript.SFCertificatePanel;
  }
}

declare const SFCertificatePanel: cocoascript.SFCertificatePanel;
