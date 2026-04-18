cconst btn = document.getElementById('gradeBtn');
const input = document.getElementById('cardInput');
const output = document.getElementById('output');

btn.addEventListener('click', async () => {
    const cardName = input.value;

    const res = await fetch("https://laughing-capybara-ggggv9gpj47hv6pw-3001.app.github.dev/grade", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cardName })
    });

    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
});
