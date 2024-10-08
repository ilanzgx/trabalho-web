$(document).ready(() => {
  const isDev = location.hostname === 'localhost' || location.hostname === '127.0.0.1';

  if(isDev) {
    $('#prod-css').remove()

    $('head').append('<script src="https://cdn.tailwindcss.com"></script>')
  }
})