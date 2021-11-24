const config =

{
  // Port: used by Express to listen requests.
  port: 3000,

  // Debug: this option turn off the headless option.
  debug: false,

  // Log: show in console the log from scrapping process
  log: true,

  // UseCustomUserAgent:
  UseCustomUserAgent: true,
  CustomUserAgent: 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0'

}

module.exports = { config }
