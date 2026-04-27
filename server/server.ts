// ⚠️ Change 'example' to your app ID — must match the IIFE name in vite.config.ts

on('onResourceStart', (resourceName: string) => {
  if (resourceName !== GetCurrentResourceName()) return;

  try {
    (global as any).exports.npwd.RegisterExternalApp({
      id: 'example',
      resourceName: GetCurrentResourceName(),
      name: 'Example',
    });
    console.log(`[${resourceName}] Registered with NPWD`);
  } catch (err) {
    console.error(`[${resourceName}] Failed to register with NPWD:`, err);
  }
});
