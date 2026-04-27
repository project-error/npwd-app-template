// Client-side script — runs in FiveM's browser-like v8 runtime.
// Use this for NUI callbacks, native calls, and client events.
//
// Example NUI callback:
// RegisterNuiCallback('myApp:getData', (_data: unknown, cb: (data: any) => void) => {
//   cb({ ok: true, data: { hello: 'world' } });
// });
