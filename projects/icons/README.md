# Icons

## Use
Import the `IconsModule` in the `app.module.ts`.
```typescript
@NgModule({
    imports: [
        IconsModule,
        ...
    ]
...
})
```

The `icons`-Tag has a property `name`. 
```html
<div class="w-12 h-12 mb-5 border border-gray-800 rounded">
    <icons class="stroke-1 stroke-current" name="2fa"></icons>
</div>
```