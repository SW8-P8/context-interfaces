## Development

- `npm i`
- `npm run dev`

Test on mobile:

- `npm run dev -- --host`
- Then access `{host-ip}:5173?images=1,2,3`

Test in iframe:

```html
<style>
  .context-iframe-container {
    display: flex;
    justify-content: center;
    height: 750px;
  }

  .context-iframe {
    transform: scale(0.75);
    transform-origin: top center;
    margin: 0px -50px;
    width: 500px;
    height: 1000px;
  }
</style>

<div class="context-iframe-container">
  <iframe src="http://localhost:5173?images=1,2,3,4,5,6,7&context-interface=baseline" class="context-iframe"></iframe>
</div>
```

- Adjust scale accordingly

Capture new screenshots of example context interfaces:

- `npm run screenshots`
- The will be available at `/screenshots/{baseline | text | ...}.png`
