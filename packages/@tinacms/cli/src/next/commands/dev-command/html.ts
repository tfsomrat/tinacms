export const devHTML = (port: string) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TinaCMS</title>
  </head>

  <!-- if development -->
  <script type="module">
    import RefreshRuntime from 'http://localhost:${port}/@react-refresh'
    RefreshRuntime.injectIntoGlobalHook(window)
    window.$RefreshReg$ = () => {}
    window.$RefreshSig$ = () => (type) => type
    window.__vite_plugin_react_preamble_installed__ = true
  </script>
  <script type="module" src="http://localhost:${port}/@vite/client"></script>
  <script
    type="module"
    src="http://localhost:${port}/src/main.tsx"
  ></script>
  <body class="tina-tailwind">
    <div id="root"></div>
  </body>
</html>`
