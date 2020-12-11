declare namespace cocoascript {
  /**
   * The interface a file coordinator uses to inform an object presenting a file about changes to that file made elsewhere in the system.
   * doc://com.apple.documentation/documentation/foundation/nsfilepresenter
   */
  interface NSFilePresenter extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1414861-presenteditemurl
    presentedItemURL(): cocoascript.NSURL;
    setPresentedItemURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1415250-presenteditemoperationqueue
    presentedItemOperationQueue(): cocoascript.NSOperationQueue;
    setPresentedItemOperationQueue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1415415-primarypresenteditemurl
    primaryPresentedItemURL(): cocoascript.NSURL;
    setPrimaryPresentedItemURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1410743-relinquishpresenteditemtoreader
    relinquishPresentedItemToReader(reader: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1413688-relinquishpresenteditemtowriter
    relinquishPresentedItemToWriter(writer: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1414407-savepresenteditemchangeswithcomp
    savePresentedItemChangesWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1414732-accommodatepresenteditemdeletion
    accommodatePresentedItemDeletionWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1417861-presenteditemdidmovetourl
    presentedItemDidMoveToURL(newURL: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1416103-presenteditemdidchange
    presentedItemDidChange():void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1415018-presenteditemdidgainversion
    presentedItemDidGainVersion(version: cocoascript.NSFileVersion):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1417258-presenteditemdidloseversion
    presentedItemDidLoseVersion(version: cocoascript.NSFileVersion):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1418445-presenteditemdidresolveconflictv
    presentedItemDidResolveConflictVersion(version: cocoascript.NSFileVersion):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1415472-presentedsubitematurl
    presentedSubitemAtURL_didGainVersion(url: cocoascript.NSURL, version: cocoascript.NSFileVersion):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1413957-presentedsubitematurl
    presentedSubitemAtURL_didLoseVersion(url: cocoascript.NSURL, version: cocoascript.NSFileVersion):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1416913-presentedsubitematurl
    presentedSubitemAtURL_didResolveConflictVersion(url: cocoascript.NSURL, version: cocoascript.NSFileVersion):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1415657-accommodatepresentedsubitemdelet
    accommodatePresentedSubitemDeletionAtURL_completionHandler(url: cocoascript.NSURL, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1408642-presentedsubitemdidappearaturl
    presentedSubitemDidAppearAtURL(url: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1409465-presentedsubitematurl
    presentedSubitemAtURL_didMoveToURL(oldURL: cocoascript.NSURL, newURL: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1411135-presentedsubitemdidchangeaturl
    presentedSubitemDidChangeAtURL(url: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/2909022-observedpresenteditemubiquityatt
    observedPresentedItemUbiquityAttributes(): cocoascript.NSURLResourceKey;
    setObservedPresentedItemUbiquityAttributes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/2909021-presenteditemdidchangeubiquityat
    presentedItemDidChangeUbiquityAttributes(attributes: cocoascript.NSURLResourceKey):void;
  }
}
