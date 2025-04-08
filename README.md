## Development

- `npm i`
- `npm run dev`

Test on mobile:

- `npm run dev -- --host`
- Then access `{host-ip}:5173?images=1,2,3`

Test in iframe:

```html
<iframe
  src="http://localhost:5173/?images=1,2,3,4&context-interface=baseline"
  style="transform: scale(0.5);"
  width="1000px"
  height="1000px"
/>
```

- Adjust scale accordingly
