export const shim: Record<string, string> = {
  void: 'void',
  bool: 'boolean',
  IBAction: 'any',
  IBOutlet: 'any',
  pid_t: 'any',
  long: 'number',
  uint32_t: 'number',
  uint16_t: 'number',
  uint8_t: 'number',
  int64_t: 'number',
  int32_t: 'number',
  int: 'number',
  float: 'number',
  double: 'number',
  gid_t: 'any',
  au_asid_t: 'any',
  uid_t: 'any',
  cpu_type_t: 'number',
  char: 'string',
  GLsizei: 'any',
  GLint: 'any',
  CGLPBufferObj: 'any',
  ObjectType: 'any',
  CGLPixelFormatObj: 'any',
  CGLContextObj: 'any',
  GLbitfield: 'any',
  GLenum: 'any',
}
