declare namespace cocoascript {
  /**
   * A concrete view subclass for displaying images in a scrubber items.
   * doc://com.apple.documentation/documentation/appkit/nsscrubberimageitemview
   */
  interface NSScrubberImageItemView extends NSScrubberItemView {
    // doc://com.apple.documentation/documentation/appkit/nsscrubberimageitemview/2544761-image
    image(): cocoascript.NSImage;
    setImage(): void;
    // doc://com.apple.documentation/documentation/appkit/nsscrubberimageitemview/2544876-imageview
    imageView(): cocoascript.NSImageView;
    setImageView(): void;
    // doc://com.apple.documentation/documentation/appkit/nsscrubberimageitemview/2544674-imagealignment
    imageAlignment(): cocoascript.NSImageAlignment;
    setImageAlignment(): void;
    //
    alloc():cocoascript.NSScrubberImageItemView;
    //
    init():cocoascript.NSScrubberImageItemView;
  }
}

declare const NSScrubberImageItemView: cocoascript.NSScrubberImageItemView;
