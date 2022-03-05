const express = require('express');
const app = express();

function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
app.use(express.static("./dist/mid-term"));
app.use(requireHTTPS);
app.get("/*", function(req, res) {
    res.sendFile("app.component.html", {
        root: "dist/mid-term/"
    });
});
app.listen(process.env.PORT || 8080);
