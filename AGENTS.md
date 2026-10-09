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

- Preserve the imported SAY EXIM pages and design; extend existing components rather than replacing the website.
- Keep the platform TanStack routing and SSR shell while the demo uses browser-local storage; this preserves supported refresh/navigation behavior without a backend.
- Initialize render state with deterministic sample data and restore browser saves after hydration; product URLs come from router state, not window during render.
