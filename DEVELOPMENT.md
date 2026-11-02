# Development contract

English is the default for all new interface and resource content. Every interface string must have an explicit Chinese counterpart in library.js; resource titles, descriptions and tags use paired en/zh fields in library.json. Never rely on browser translation. The language toggle shows the destination language, remains available in dialogs, and preserves search state. Only an explicit visitor preference overrides English on subsequent visits.

Search indexes both languages, category names and document contents regardless of interface language. Add real resources only; keep honest empty states until content is supplied. Do not invent works or donation links.

Keep downloadable originals byte-identical. Provide readable web previews and paired translations without changing commands or paths. Validate document row counts and original text against the supplied document before publishing.

Before publishing: check JavaScript syntax, both toggle directions, Chinese and English search, reader and download, mobile overflow and keyboard focus. Retain reduced-motion support and static image fallback. Publish through GitHub Pages and wait for the deployment to complete, then verify the public URL and original download.
