declare namespace cocoascript {
  /**
   * An object that conveys ongoing progress for a given task to the user.
   * doc://com.apple.documentation/documentation/foundation/nsprogress
   */
  interface NSProgress extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1409133-initwithparent
    initWithParent_userInfo(parentProgressOrNil: cocoascript.NSProgress, userInfoOrNil: cocoascript.NSProgress):cocoascript.NSProgress;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1410103-becomecurrentwithpendingunitcoun
    becomeCurrentWithPendingUnitCount(unitCount: number):void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1417260-addchild
    addChild_withPendingUnitCount(child: cocoascript.NSProgress, inUnitCount: number):void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1407180-resigncurrent
    resignCurrent():void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1410940-totalunitcount
    totalUnitCount(): number;
    setTotalUnitCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1407934-completedunitcount
    completedUnitCount(): number;
    setCompletedUnitCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1417251-localizeddescription
    localizedDescription(): cocoascript.NSString;
    setLocalizedDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1412455-localizedadditionaldescription
    localizedAdditionalDescription(): cocoascript.NSString;
    setLocalizedAdditionalDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1408579-fractioncompleted
    fractionCompleted(): number;
    setFractionCompleted(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1409348-cancellable
    cancellable(): cocoascript.BOOL;
    setCancellable(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1414454-cancelled
    cancelled(): cocoascript.BOOL;
    setCancelled(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1413832-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1408913-cancellationhandler
    cancellationHandler(): void;
    setCancellationHandler(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1417421-pausable
    pausable(): cocoascript.BOOL;
    setPausable(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1415495-paused
    paused(): cocoascript.BOOL;
    setPaused(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1412377-pause
    pause():void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1412873-pausinghandler
    pausingHandler(): void;
    setPausingHandler(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1413616-resume
    resume():void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1410158-resuminghandler
    resumingHandler(): void;
    setResumingHandler(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1412871-indeterminate
    indeterminate(): cocoascript.BOOL;
    setIndeterminate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1416139-kind
    kind(): cocoascript.NSProgressKind;
    setKind(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1407537-setuserinfoobject
    setUserInfoObject_forKey(objectOrNil: cocoascript.NSProgress, key: cocoascript.NSProgressUserInfoKey):void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1413314-userinfo
    userInfo(): cocoascript.id;
    setUserInfo(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/2865625-fileoperationkind
    fileOperationKind(): cocoascript.NSProgressFileOperationKind;
    setFileOperationKind(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/2865663-fileurl
    fileURL(): cocoascript.NSURL;
    setFileURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/2865603-finished
    finished(): cocoascript.BOOL;
    setFinished(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1407931-old
    old(): cocoascript.BOOL;
    setOld(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/2868041-estimatedtimeremaining
    estimatedTimeRemaining(): cocoascript.NSNumber;
    setEstimatedTimeRemaining(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/2868050-filecompletedcount
    fileCompletedCount(): cocoascript.NSNumber;
    setFileCompletedCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/2868045-filetotalcount
    fileTotalCount(): cocoascript.NSNumber;
    setFileTotalCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/2868052-throughput
    throughput(): cocoascript.NSNumber;
    setThroughput(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1416782-publish
    publish():void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1413268-unpublish
    unpublish():void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/2865587-performascurrentwithpendingunitc
    performAsCurrentWithPendingUnitCount_usingBlock(unitCount: number, work: void):void;
    //
    alloc():cocoascript.NSProgress;
    //
    init():cocoascript.NSProgress;
  }
}

declare const NSProgress: cocoascript.NSProgress;
