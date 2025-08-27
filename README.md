# Portfolio

## Scripts

- `npm start`: Start development server
- `npm run build`: Production build

## EmailJS configuration

Create a `.env` file in the project root and add the following keys (do not quote values):

```
REACT_APP_EMAIL_JS_SERVICE_ID=your_service_id
REACT_APP_EMAIL_JS_TEMPLATE_ID=your_template_id
REACT_APP_EMAIL_JS_PUBLIC_KEY=your_public_key
```

In EmailJS, ensure your template expects fields: `from_name`, `to_name`, `reply_to`, `to_email`, and `message`.

During development, if these variables are missing, the Contact form will fall back to `mailto:` and open your email client.

## Formspree (simpler contact backend)

Alternatively, use Formspree (no backend needed):

1) Create a form at formspree.io and copy the form ID (looks like `xyzabcd`)
2) Add to your `.env`:

```
REACT_APP_FORMSPREE_FORM_ID=your_form_id
```

If both EmailJS and Formspree are configured, Formspree will be used first.

