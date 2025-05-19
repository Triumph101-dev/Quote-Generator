 const quotes = [
      { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
      { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
      { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
      { text: "Good code is its own best documentation.", author: "Steve McConnell" },
      { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" }
    ];

    const quoteElem = document.getElementById("quote");
    const authorElem = document.getElementById("author");

    function typeWriter(text, element, callback) {
      let i = 0;
      element.textContent = '';
      function type() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(type, 30);
        } else if (callback) {
          callback();
        }
      }
      type();
    }

    function generateQuote() {
      const random = Math.floor(Math.random() * quotes.length);
      const quote = quotes[random];
      typeWriter(quote.text, quoteElem, () => {
        authorElem.textContent = `— ${quote.author}`;
      });
    }

    function copyQuote() {
      const text = `${quoteElem.textContent} ${authorElem.textContent}`;
      navigator.clipboard.writeText(text).then(() => {
        alert("Quote copied to clipboard!");
      });
    }

    function toggleDarkMode() {
      document.body.classList.toggle("dark");
    }