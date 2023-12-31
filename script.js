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
    // Buraya komutları işleyen kodları ekleyebilirsiniz.
    // Örnek:
    if (command.toLowerCase() === "hello") {
      return "Merhaba! Nasılsınız?";
    } else {
      return "Geçersiz komut. Lütfen başka bir komut deneyin.";
    }
  }
});
