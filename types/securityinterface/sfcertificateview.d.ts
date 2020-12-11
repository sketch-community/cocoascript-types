declare namespace cocoascript {
  /**
   * A view that displays the contents of a certificate, with options to display certificate details, display trust settings, and allow users to edit a certificate’s trust settings.
   * doc://com.apple.documentation/documentation/securityinterface/sfcertificateview
   */
  interface SFCertificateView extends NSVisualEffectView {
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588429-setcertificate
    setCertificate(certificate: cocoascript.SecCertificateRef):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588428-setdetailsdisclosed
    setDetailsDisclosed(disclosed: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588420-setdisplaydetails
    setDisplayDetails(display: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588433-setdisplaytrust
    setDisplayTrust(display: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588427-seteditabletrust
    setEditableTrust(editable: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588423-setpolicies
    setPolicies(policies: cocoascript.SFCertificateView):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588434-setpoliciesdisclosed
    setPoliciesDisclosed(disclosed: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588426-certificate
    certificate():cocoascript.SecCertificateRef;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588422-detailsdisplayed
    detailsDisplayed():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588431-detailsdisclosed
    detailsDisclosed():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588425-istrustdisplayed
    isTrustDisplayed():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588421-iseditable
    isEditable():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588432-policies
    policies():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588418-policiesdisclosed
    policiesDisclosed():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588424-savetrustsettings
    saveTrustSettings():void;
    //
    alloc():cocoascript.SFCertificateView;
    //
    init():cocoascript.SFCertificateView;
  }
}

declare const SFCertificateView: cocoascript.SFCertificateView;
