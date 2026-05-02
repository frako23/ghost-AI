Read `AGENTS.md` before starting.

We're adding the design system and UI primitive components.

Install and configure `shadcn/ui`.

Add these shadcn components:
- Buttons
- Card
- Dialog
- Input
- Tabs
- Textarea
- ScrollArea

Do not modify the generated `components/ui/*` files after instalation.

Also Install `lucide-react`.

Create `lib/utils.ts` with a reusable `cn()` helper form merging Tailwind classes.

Ensure all components match the existing dark theme in `globals.css`.

### Check when done
- All components import without errors
- `cn()` works properly
- No default light styling appears