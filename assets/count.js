/* Visit counter for tradesprotools.com.
   Sends the page path and the referring site's domain name. No cookie, no ID,
   no storage in the browser. Reloads and back/forward moves are not counted. */
(function () {
  try {
    var host = location.hostname;
    if (host !== 'tradesprotools.com' && host !== 'www.tradesprotools.com') return;
    var nav = (performance.getEntriesByType && performance.getEntriesByType('navigation')[0]) || {};
    if (nav.type === 'reload' || nav.type === 'back_forward') return;
    var ref = '';
    try { ref = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, '') : ''; } catch (e) {}
    var own = ref === 'tradesprotools.com';
    var body = JSON.stringify({ p: location.pathname.slice(0, 150), r: own ? '' : ref.slice(0, 100), v: own ? 0 : 1 });
    fetch('https://web-production-eb2a6.up.railway.app/api/site/hit', {
      method: 'POST', body: body, mode: 'no-cors', credentials: 'omit', keepalive: true,
      headers: { 'Content-Type': 'text/plain' }
    }).catch(function () {});
  } catch (e) {}
})();
