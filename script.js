document.addEventListener("DOMContentLoaded", function() {
  const terminalBody = document.getElementById("terminal-body");
  const commandInput = document.getElementById("command-input");

  commandInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      const command = commandInput.value;
      const output = document.createElement("p");
      output.textContent = executeCommand(command);
      terminalBody.appendChild(output);
      commandInput.value = "";
      window.scrollTo(0, document.body.scrollHeight);
    }
  });

  function executeCommand(command) {
    if (command.toLowerCase() === "1") {
      return "Merhaba! Ben Emir. Küçük yaşlarımdan beri süren yazılıma olan merakımı işi haline getiren bir gencim. Yazılıma ek olarak editörlük de yapmaktayım.";
    }
    if (command.toLowerCase() === "2") {
      return "Ana alanım mobil uygulama geliştirme. Bunun için Flutter teknolojisini kullanmaktayım. Fakat bir web sitesi geliştirebilecek kadar bilgim de yok değil.";
    }
    if (command.toLowerCase() === "3") {
          return "GitHub => https://github.com/speeedev\n" +
             "LinkedIn => https://www.linkedin.com/in/speedev/\n" +
             "Instagram => https://www.instagram.com/spee.dev";
    }


    if (command.toLowerCase() === "4") {
      return "İletişim için => hi@spee.dev";
    }
    else {
      return "Geçersiz komut. Lütfen başka bir komut deneyin.";
    }
  }
});
