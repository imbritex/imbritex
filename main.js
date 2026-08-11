const inputElement = document.getElementById('term-input');
const outputElement = document.getElementById('term-output');

const commands = {
    help: [
        "Available commands:",
        "  about    - Who is Britex?",
        "  stack    - Display skills and technologies",
        "  projects - View current work",
        "  contact  - Show social and email links",
        "  clear    - Clear the terminal screen"
    ],
    about: [
        "BRITEX <3",
        "Software developer focused on creating interactive applications and tools.",
        "I specialize in building efficient solutions using web technologies, mobile, web, and desktop frameworks."
    ],
    stack: [
        "» Frontend & Mobile: JavaScript, TypeScript, Haxe, React Native",
        "» Environments & Back: Node.js, Neutralinojs",
        "» Data & Formats: SQL, Firebase, JSON, XML",
        "» Tools: Git, GitHub, Visual Studio Code, Gemini"
    ],
    projects: [
        "● Weekbox",
        "  ✦ Lead coder and project owner alongside Malloy.",
        "  ✦ Links: <a href='https://github.com/Crew-Awesome/Weekbox' target='_blank'>github.com/Crew-Awesome/Weekbox</a>"
    ],
    contact: [
        "» YouTube: <a href='https://www.youtube.com/@ImBritex' target='_blank'>youtube.com/@ImBritex</a>",
        "» Discord: <a href='https://discordapp.com/users/1201423206708412420' target='_blank'>@imbritex (ID: 1201423206708412420)</a>",
        "» GitHub:  <a href='https://github.com/imbritex' target='_blank'>github.com/imbritex</a>",
        "» Email:   <a href='mailto:leivetd@gmaill.com'>leivetd@gmaill.com</a>"
    ]
};

const commandHistory = [];
let historyIndex = -1;

inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const cmd = inputElement.value.trim().toLowerCase();
        inputElement.value = '';
        
        if (cmd !== '') {
            commandHistory.push(cmd);
            historyIndex = commandHistory.length;
            processCommand(cmd);
        }
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            inputElement.value = commandHistory[historyIndex];
        }
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            inputElement.value = commandHistory[historyIndex];
        } else if (historyIndex === commandHistory.length - 1) {
            historyIndex++;
            inputElement.value = '';
        }
    }
});

function processCommand(cmd) {
    const cmdHistoryDiv = document.createElement('div');
    cmdHistoryDiv.className = 'britex-term__line';
    cmdHistoryDiv.innerHTML = `<span class="britex-term__prompt">britex@server</span><span class="britex-term__colon">:</span><span class="britex-term__dir">~</span><span class="britex-term__symbol">$</span> ${cmd}`;
    outputElement.appendChild(cmdHistoryDiv);

    if (cmd === 'clear') {
        outputElement.innerHTML = '';
    } 
    else if (commands[cmd]) {
        commands[cmd].forEach(line => {
            const lineDiv = document.createElement('div');
            lineDiv.className = 'britex-term__line';
            lineDiv.innerHTML = line;
            outputElement.appendChild(lineDiv);
        });
        const br = document.createElement('br');
        outputElement.appendChild(br);
    } 
    else {
        const errDiv = document.createElement('div');
        errDiv.className = 'britex-term__line britex-term__line--error';
        errDiv.innerHTML = `bash: ${cmd}: command not found. Type 'help'.`;
        outputElement.appendChild(errDiv);
        const br = document.createElement('br');
        outputElement.appendChild(br);
    }

    window.scrollTo(0, document.body.scrollHeight);
}

document.addEventListener('click', () => {
    inputElement.focus();
});