declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/appkit/nsinputserviceprovider
   */
  interface NSInputServiceProvider {
    // doc://com.apple.documentation/documentation/appkit/nsinputserviceprovider/1538522-activeconversationchanged
    activeConversationChanged_toNewConversation(sender: cocoascript.NSInputServiceProvider, newConversation: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsinputserviceprovider/1538558-activeconversationwillchange
    activeConversationWillChange_fromOldConversation(sender: cocoascript.NSInputServiceProvider, oldConversation: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsinputserviceprovider/1538534-canbedisabled
    canBeDisabled():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsinputserviceprovider/1538533-docommandbyselector
    doCommandBySelector_client(selector: cocoascript.SEL, sender: cocoascript.NSInputServiceProvider):void;
    // doc://com.apple.documentation/documentation/appkit/nsinputserviceprovider/1538525-inputclientbecomeactive
    inputClientBecomeActive(sender: cocoascript.NSInputServiceProvider):void;
    // doc://com.apple.documentation/documentation/appkit/nsinputserviceprovider/1538526-inputclientdisabled
    inputClientDisabled(sender: cocoascript.NSInputServiceProvider):void;
    // doc://com.apple.documentation/documentation/appkit/nsinputserviceprovider/1538523-inputclientenabled
    inputClientEnabled(sender: cocoascript.NSInputServiceProvider):void;
    // doc://com.apple.documentation/documentation/appkit/nsinputserviceprovider/1538550-inputclientresignactive
    inputClientResignActive(sender: cocoascript.NSInputServiceProvider):void;
    // doc://com.apple.documentation/documentation/appkit/nsinputserviceprovider/1538536-inserttext
    insertText_client(string: cocoascript.NSInputServiceProvider, sender: cocoascript.NSInputServiceProvider):void;
    // doc://com.apple.documentation/documentation/appkit/nsinputserviceprovider/1538531-markedtextabandoned
    markedTextAbandoned(sender: cocoascript.NSInputServiceProvider):void;
    // doc://com.apple.documentation/documentation/appkit/nsinputserviceprovider/1538548-markedtextselectionchanged
    markedTextSelectionChanged_client(newSel: cocoascript.NSRange, sender: cocoascript.NSInputServiceProvider):void;
    // doc://com.apple.documentation/documentation/appkit/nsinputserviceprovider/1538551-terminate
    terminate(sender: cocoascript.NSInputServiceProvider):void;
    // doc://com.apple.documentation/documentation/appkit/nsinputserviceprovider/1538560-wantstodelaytextchangenotificati
    wantsToDelayTextChangeNotifications():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsinputserviceprovider/1538538-wantstohandlemouseevents
    wantsToHandleMouseEvents():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsinputserviceprovider/1538546-wantstointerpretallkeystrokes
    wantsToInterpretAllKeystrokes():cocoascript.BOOL;
  }
}
