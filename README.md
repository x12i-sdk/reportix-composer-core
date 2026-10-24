# @x12i/reportix-composer-core usage example

Reportix Composer rendering engine: HTML, PDF, DOCX, and PPTX export plus template store.

This consuming application demonstrates **render local markdown with a bundled report template** using the published npm package, pinned to `0.7.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Render a Markdown report using a selected template.
- Embed HTML or supported document export in a host application.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/reportix-composer-core)
- [Implementation monorepo](https://github.com/x12i/reportix-composer)
- [Reviewed package source](https://github.com/x12i/reportix-composer/tree/4e39273cff7b1b643da0b528dae7d8209885290c/packages/core)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

This example consumes bundled assets or deterministic local fixtures. It does not contact providers, acquire real records, seed a database, or persist a production graph. Report examples check HTML generation only. Theme examples generate `preview.html`; visual appearance still needs browser review.

## Pinned dependency workaround

Reportix Composer core 0.7.0 requires `@x12i/rendrix@5.0.0`, which is unavailable in the registry. This consuming application explicitly overrides that dependency to the catalogued Rendrix 4.4.0 release. Validation applies only to the HTML fixture shown here with this override; other rendering and token features need their own compatibility checks. The upstream dependency must be corrected and released before this override can be removed.
