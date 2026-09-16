declare module 'virtual:solar24-registry' {
  const registry: Array<{
    manifest: import('@solar24/protocol').ModuleManifest;
    load: () => Promise<{ default: import('@solar24/protocol').ModuleDefinition }>;
  }>;
  export default registry;
}
