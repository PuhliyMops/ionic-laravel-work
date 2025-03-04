
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Test</title>

    <base href="/" />

    <meta name="color-scheme" content="light" />
    <meta
      name="viewport"
      content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />

    <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      @guest
          <script>
              if (window.location.pathname != '/login'){
                window.location.replace("/login");
              }
          </script>
      @endguest
      @auth
          <script>
              if (window.location.pathname == '/login'){
                window.location.replace("/reestrs");
              }
          </script>
      @endauth

    <!-- add to homescreen for ios -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content="Ionic App" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      @foreach(scandir("assets") as $filename)
          @if(str_contains($filename, 'index') and !str_contains($filename, 'legacy') and str_contains($filename, '.js'))
              <script type="module" crossorigin src='assets/{{$filename}}'></script>
          @endif
      @endforeach
    <link rel="stylesheet" crossorigin href="/assets/index-9ypjsNm3.css">
    <script type="module">import.meta.url;import("_").catch(()=>1);(async function*(){})().next();if(location.protocol!="file:"){window.__vite_is_modern_browser=true}</script>
    <script type="module">!function(){if(window.__vite_is_modern_browser)return;console.warn("vite: loading legacy chunks, syntax error above and the same error below should be ignored");var e=document.getElementById("vite-legacy-polyfill"),n=document.createElement("script");n.src=e.src,n.onload=function(){System.import(document.getElementById('vite-legacy-entry').getAttribute('data-src'))},document.body.appendChild(n)}();</script>
  <link rel="manifest" href="/manifest.webmanifest"><script id="vite-plugin-pwa:register-sw" src="/registerSW.js"></script></head>

  <body>
    <div id="app"></div>

    <script nomodule>!function(){const e = document, t = e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",(function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()}),!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();</script>
    <script nomodule crossorigin id="vite-legacy-polyfill" src="/assets/polyfills-legacy-DTpgmi9B.js"></script>
    <script nomodule crossorigin id="vite-legacy-entry" data-src="/assets/index-legacy-B5cBj3JP.js">System.import(document.getElementById('vite-legacy-entry').getAttribute('data-src'))</script>
  </body>

</html>

