declare namespace cocoascript {
  /**
   * An instance of
   * doc://com.apple.documentation/documentation/foundation/nspointerfunctions
   */
  interface NSPointerFunctions extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nspointerfunctions/1417715-initwithoptions
    initWithOptions(options: cocoascript.NSPointerFunctionsOptions):cocoascript.NSPointerFunctions;
    // doc://com.apple.documentation/documentation/foundation/nspointerfunctions/1415939-hashfunction
    hashFunction(): void;
    setHashFunction(): void;
    // doc://com.apple.documentation/documentation/foundation/nspointerfunctions/1413473-isequalfunction
    isEqualFunction(): void;
    setIsEqualFunction(): void;
    // doc://com.apple.documentation/documentation/foundation/nspointerfunctions/1408045-sizefunction
    sizeFunction(): void;
    setSizeFunction(): void;
    // doc://com.apple.documentation/documentation/foundation/nspointerfunctions/1415200-descriptionfunction
    descriptionFunction(): void;
    setDescriptionFunction(): void;
    // doc://com.apple.documentation/documentation/foundation/nspointerfunctions/1410537-acquirefunction
    acquireFunction(): cocoascript.BOOL;
    setAcquireFunction(): void;
    // doc://com.apple.documentation/documentation/foundation/nspointerfunctions/1408565-relinquishfunction
    relinquishFunction(): void;
    setRelinquishFunction(): void;
    // doc://com.apple.documentation/documentation/foundation/nspointerfunctions/1410762-usesstrongwritebarrier
    usesStrongWriteBarrier(): cocoascript.BOOL;
    setUsesStrongWriteBarrier(): void;
    // doc://com.apple.documentation/documentation/foundation/nspointerfunctions/1411097-usesweakreadandwritebarriers
    usesWeakReadAndWriteBarriers(): cocoascript.BOOL;
    setUsesWeakReadAndWriteBarriers(): void;
    //
    alloc():cocoascript.NSPointerFunctions;
    //
    init():cocoascript.NSPointerFunctions;
  }
}

declare const NSPointerFunctions: cocoascript.NSPointerFunctions;
