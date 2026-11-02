# Development contract

English is the default for all new interface and resource content. Every interface string must have an explicit Chinese counterpart in library.js; resource titles, descriptions and tags use paired en/zh fields in library.json. Never rely on browser translation. The language toggle shows the destination language, remains available in dialogs, and preserves search state. Only an explicit visitor preference overrides English on subsequent visits.

Search indexes both languages, category names and document contents regardless of interface language. Add real resources only; keep honest empty states until content is supplied. Do not invent works or donation links.

Keep downloadable originals byte-identical. Provide readable web previews and paired translations without changing commands or paths. Validate document row counts and original text against the supplied document before publishing.

Before publishing: check JavaScript syntax, both toggle directions, Chinese and English search, reader and download, mobile overflow and keyboard focus. Retain reduced-motion support and static image fallback. Publish through GitHub Pages and wait for the deployment to complete, then verify the public URL and original download.

## Exam directory

`cybersecurity/exams.json` lists independent exams. Add a new entry with a unique id, paired en/zh title and description, actual question/unit counts and its own practiceUrl. Do not replace the Ch6-Ch9 course bank when adding another exam. The original CYB Study Studio supplies authentication, cloud progress and admin features; this GitHub Pages directory only links to it. Do not copy personal progress, credentials, or databases. Do not claim the original study site was migrated to GitHub Pages.
