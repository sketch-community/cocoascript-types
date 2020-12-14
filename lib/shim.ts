export const shim: Record<string, string> = {
  void: 'void',
  bool: 'boolean',
  Boolean: 'boolean',
  IBAction: 'any',
  IBOutlet: 'any',
  pid_t: 'any',
  long: 'number',
  short: 'number',
  uint32_t: 'number',
  uint16_t: 'number',
  uint64_t: 'number',
  uint8_t: 'number',
  int64_t: 'number',
  int32_t: 'number',
  u_int32_t: 'number',
  int: 'number',
  uint8: 'number',
  uint16: 'number',
  uint32: 'number',
  float: 'number',
  double: 'number',
  UInt32: 'number',
  gid_t: 'any',
  au_asid_t: 'any',
  uid_t: 'any',
  cpu_type_t: 'any',
  size_t: 'any',
  ext_vector_type: 'any',
  mach_port_t: 'any',
  char: 'string',
  GLsizei: 'any',
  GLint: 'any',
  GLuint: 'any',
  CGLPBufferObj: 'any',
  ObjectType: 'any',
  CGLPixelFormatObj: 'any',
  CGLContextObj: 'any',
  GLbitfield: 'any',
  GLenum: 'any',
  GLfloat: 'any',
  ItemIdentifierType: 'any',
  SectionIdentifierType: 'any',
  CandidateType: 'any',
  ResultType: 'any',
  SRefCon: 'any',
  SCNScene: 'any',
  SCNNode: 'any',
  SCNHitTestResult: 'any',
  MTLRenderPassDescriptor: 'any',
  MTLRenderCommandEncoder: 'any',
  MTLCommandBuffer: 'any',
  MTLCommandQueue: 'any',
  MTLPixelFormat: 'any',
  MTLDrawable: 'any',
  MTLTexture: 'any',
  MTLDevice: 'any',
  OSStatus: 'any',
  AuthorizationOpaqueRef: 'any',
  DERItem: 'any',
  FourCharCode: 'any',
  OSType: 'any',
  OpaqueSecTransformImplementation: 'any',
  IOReturn: 'any',
  __SecCode: 'any',
  __SecRandom: 'any',
  ICScannerBandData: 'any',
  ICScannerDevice: 'any',
  ICCameraDevice: 'any',
  ICCameraFile: 'any',
  ICDevice: 'any',
  IMP: 'any',
  NSString: 'string | cocoascript.NSString',
}
