(function () {
    const script = document.createElement('script');
    script.src = 'https://your-chatbot.vercel.app/assets/index.js'; // Adjust path after Vite build
    script.type = 'module';
    document.body.appendChild(script);
  })();
  