declare namespace cocoascript {
  /**
   * A structure that defines the context or operating environment for an allocator (CFAllocator) object. Every Core Foundation allocator object must have a context defined for it.
   * doc://com.apple.documentation/documentation/corefoundation/cfallocatorcontext
   */
  interface CFAllocatorContext {
    // doc://com.apple.documentation/documentation/corefoundation/cfallocatorcontext/1521286-allocate
    allocate(): cocoascript.CFAllocatorAllocateCallBack;
    setAllocate(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfallocatorcontext/1521301-copydescription
    copyDescription(): cocoascript.CFAllocatorCopyDescriptionCallBack;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfallocatorcontext/1521339-deallocate
    deallocate(): cocoascript.CFAllocatorDeallocateCallBack;
    setDeallocate(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfallocatorcontext/1521307-preferredsize
    preferredSize(): cocoascript.CFAllocatorPreferredSizeCallBack;
    setPreferredSize(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfallocatorcontext/1521222-reallocate
    reallocate(): cocoascript.CFAllocatorReallocateCallBack;
    setReallocate(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfallocatorcontext/1521148-release
    release(): cocoascript.CFAllocatorReleaseCallBack;
    setRelease(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfallocatorcontext/1521359-retain
    retain(): cocoascript.CFAllocatorRetainCallBack;
    setRetain(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfallocatorcontext/1521161-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
