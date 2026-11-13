<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep conversion Hero UI in its component and segment data/WhatsApp context in a browser-safe helper; this keeps the home composition stable and business mappings independently testable.
- Portfolio cards link directly to the live external storefront in a new tab; local demo routes and their exclusive media are removed to avoid maintaining duplicate storefronts.
- Keep the storefront simulator in a dedicated dialog component with browser-safe preview/contact helpers; this isolates its interactive state from the home composition and enables contact-context tests.
- Portfolio entries without supplied storefront URLs use contextual WhatsApp inquiries instead of invented links; this keeps every visible action functional.
- Each portfolio entry exposes an optional logoUrl rendered beside its title with a thematic icon fallback; this allows client logos to be replaced without changing card layout.
- Keep the three-step process in a dedicated presentational component and commercial limits in the browser-safe plans helper so delivery and pricing rules stay independently testable.
