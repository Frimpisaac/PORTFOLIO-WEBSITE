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
# Isaac Kweku Frimpong

Front-end developer and cybersecurity enthusiast.

## Skills
- Web development: HTML, CSS, JavaScript
- Mobile app development (Flutter)
- C++ programming
- Cybersecurity fundamentals
- Communication & problem solving

## This portfolio contains
- About: short bio and background
- Skills: key technologies and strengths
- Projects: screenshots, descriptions and links for each project
- Contact: a contact form and an email link

## Preview locally
```powershell
cd C:\Users\HP\OneDrive\Desktop\potforlio
python -m http.server 8000
# then open http://localhost:8000/ in your browser
```

## Contact
- Email: unrulysypha1@gmail.com


Quick start (optional backend)
- This repo includes a small local Express server (`server.js`) that can accept contact submissions and save them to `submissions.json`.
- To run the backend locally:
```powershell
cd C:\Users\HP\OneDrive\Desktop\potforlio
npm.cmd install
node server.js
```

Notes about the contact form
- On the public site the frontend uses a mailto fallback (opens the visitor's email client) unless a live API endpoint is configured.
- For automated collection you can either wire the form to a hosted form service (Formspree/Getform) or deploy the Express backend (Render, Railway, etc.).

Contact & Links
- Email: unrulysypha1@gmail.com
- GitHub: https://github.com/Frimpisaac

To do / suggestions
- Replace placeholder project links and screenshots with live demos and real repo links.
- Optional: deploy the backend and update `index.html` `apiBase` to the deployed URL so submissions are saved automatically.
- Optional: add a small admin view or protected listing for submissions after deploying the backend.

If you want, I can update this README with a short bio, social links, or badges — tell me what to include and I'll apply it.


