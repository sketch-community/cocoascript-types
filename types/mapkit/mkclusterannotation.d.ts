declare namespace cocoascript {
  /**
   * An annotation that groups two or more distinct annotations into a single entity.
   * doc://com.apple.documentation/documentation/mapkit/mkclusterannotation
   */
  interface MKClusterAnnotation extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkclusterannotation/2866567-initwithmemberannotations
    initWithMemberAnnotations(memberAnnotations: cocoascript.MKAnnotation):cocoascript.MKClusterAnnotation;
    // doc://com.apple.documentation/documentation/mapkit/mkclusterannotation/2866569-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkclusterannotation/2866570-subtitle
    subtitle(): cocoascript.NSString;
    setSubtitle(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkclusterannotation/2866568-memberannotations
    memberAnnotations(): cocoascript.MKAnnotation;
    setMemberAnnotations(): void;
    //
    alloc():cocoascript.MKClusterAnnotation;
    //
    init():cocoascript.MKClusterAnnotation;
  }
}

declare const MKClusterAnnotation: cocoascript.MKClusterAnnotation;
