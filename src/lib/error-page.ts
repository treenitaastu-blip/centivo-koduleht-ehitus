export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="et">
  <head>
    <meta charset="utf-8" />
    <title>Lehe laadimine ebaõnnestus</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #F7F8FA; color: #111827; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #5F6B76; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #F5B400; color: #082B52; }
      .secondary { background: transparent; color: #0B3D73; border-color: #0B3D73; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Lehe laadimine ebaõnnestus</h1>
      <p>Midagi läks valesti. Proovi lehte värskendada või mine tagasi avalehele.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Proovi uuesti</button>
        <a class="secondary" href="/">Tagasi avalehele</a>
      </div>
    </div>
  </body>
</html>`;
}
