const http = require("http");

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Forced Wrong Charset Demo</title>
</head>
<body>
    <h1>Forced Charset Test</h1>

    <p>English: Hello Students</p>
    <p>Nepali: नमस्ते, मेरो नाम रमेश हो।</p>
    <p>Hindi: मेरा नाम रमेश है।</p>
    <p>Symbols: © ₹ ✓ → ★</p>
    <p>Emoji: 😊 🚀 ❤️</p>
</body>
</html>
`;

http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html; charset=windows-1252"
    });

    res.end(Buffer.from(html, "utf8"));
}).listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});