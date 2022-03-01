let isFocused = false;
RegisterCommand(
  'focus',
  () => {
    if (isFocused) {
      SetNuiFocus(false, false);
      SetNuiFocusKeepInput(false);
      isFocused = false;
      return;
    }

    SendNUIMessage({ type: 'RANDOM', payload: 'Hello from client' });

    SetNuiFocusKeepInput(true);
    SetNuiFocus(true, true);
    isFocused = true;
  },
  false
);

RegisterCommand(
  'unfocus',
  () => {
    SetNuiFocus(false, false);
  },
  false
);

RegisterKeyMapping('focus', 'Toggle Phone', 'keyboard', 'n');
