# Portfolio — Isaac Kweku Frimpong

This is a simple static portfolio page (HTML/CSS/JS) with a dark neon theme.

What I changed

- Consolidated styles into `style.css`.
- Replaced inline styles with semantic HTML and external CSS.
- Added a responsive navigation (hamburger) with a small JS toggle.
- Merged and cleaned duplicate project sections.
- Added a contact form with client-side validation (demo only).

Quick preview (Windows PowerShell)

Run a local static server from the project folder and open http://localhost:8000/ in your browser:

```powershell
# from the project root (where index.html lives)
python -m http.server 8000
# or, if you have Python 3 installed as 'python3'
python3 -m http.server 8000
```

Running the backend (optional — receives contact form submissions locally)

1. Install Node dependencies (from the project root):

```powershell
npm install
```

2. Start the backend server (this listens on port 3000 by default):

```powershell
npm start
```

3. Keep the static server (python -m http.server 8000) running in a separate terminal or open `index.html` via a dev server. The contact form will POST to `http://localhost:3000/api/contact` when you press Send. Submissions are saved to `submissions.json`.

Notes:
- For production email delivery, replace the backend with a hosted function that sends messages via an SMTP provider or wire the form to Formspree/Netlify Forms.
- If you want me to set up a hosted backend or wire Formspree, paste your Formspree endpoint or tell me which host to use.

Notes / next steps

- The contact form currently shows a demo alert and does not send messages. Replace the form `action` with a Formspree endpoint, Netlify Forms, or a serverless function to accept real submissions.
- Replace placeholder project links and images with real content.
- Consider adding keyboard focus styles and more ARIA attributes for high accessibility.

If you'd like, I can:
- Wire the form to Formspree or Netlify Forms.
- Add animations or a projects lightbox.
- Create a deploy workflow (GitHub Pages / Netlify).

