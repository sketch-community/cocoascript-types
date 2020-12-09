declare namespace cocoascript {
/**
 * An object that wraps, or contains, Interface Builder nib files. 
 * doc://com.apple.documentation/documentation/uikit/uinib
 */
interface UINib extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uinib/1614137-instantiatewithowner
  instantiateWithOwner_options(ownerOrNil: cocoascript.UINib, optionsOrNil: cocoascript.UINib):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/uikit/uinibproxiedobjectskey
  UINibProxiedObjectsKey(): cocoascript.const;
  setUINibProxiedObjectsKey(): void;
  // 
  alloc():cocoascript.UINib;
  // 
  init():cocoascript.UINib;
}
}
declare const UINib: cocoascript.UINib;

