const config =

{
  // Port: used by Express to listen requests.
  port: 3000,

  // Debug: this option turn off the headless option.
  debug: true,

  // Log: show in console the log from scrapping process
  log: true,

  // UseCustomUserAgent:
  UseCustomUserAgent: true,
  CustomUserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36'

}

module.exports = { config }
