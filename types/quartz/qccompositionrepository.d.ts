declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/qccompositionrepository
   */
  interface QCCompositionRepository extends NSObject {
    // doc://com.apple.documentation/documentation/quartz/qccompositionrepository/1493225-compositionwithidentifier
    compositionWithIdentifier(identifier: cocoascript.NSString):cocoascript.QCComposition;
    // doc://com.apple.documentation/documentation/quartz/qccompositionrepository/1493216-compositionswithprotocols
    compositionsWithProtocols_andAttributes(protocols: cocoascript.NSArray, attributes: cocoascript.NSDictionary):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/quartz/qccompositionrepository/1493221-allcompositions
    allCompositions():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/quartz/qccompositionrepositorydidupdatenotification
    QCCompositionRepositoryDidUpdateNotification(): cocoascript.const;
    setQCCompositionRepositoryDidUpdateNotification(): void;
    //
    alloc():cocoascript.QCCompositionRepository;
    //
    init():cocoascript.QCCompositionRepository;
  }
}

declare const QCCompositionRepository: cocoascript.QCCompositionRepository;
