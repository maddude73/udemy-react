const express = require('express');
require('./services/passport');
const app = express();
require('./routes/authRoutes')(app);
const cookieParser = require('cookie-parser'); // CSRF Cookie parsing
const bodyParser = require('body-parser'); // CSRF Body parsing
const csrf = require('csurf');



// Config express ==============================================
app.disable('x-powered-by');
app.enable({xsrfProtection: "secret" });
app.use(csrf());
const PORT = process.env.PORT || 2220
app.listen(PORT);