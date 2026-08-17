/*
 * guard.js – Zugriffsschutz für Office-Dokumentseiten
 *
 * Für Seiten, die kein office.js-Gate vertragen (eigenes Layout, Foliendecks,
 * iframe-Prototypen). Statt Inhalt zu verstecken wird auf den Login umgeleitet.
 *
 * Einbinden als ERSTES Element im <head>, damit nichts vom Inhalt rendert:
 *   <script src="/office/guard.js"></script>
 *
 * Nach erfolgreichem Login springt office.js über ?next= wieder hierher zurück.
 */
(function () {
    if (sessionStorage.getItem('office-auth') === 'true') return;
    var target = location.pathname + location.search + location.hash;
    location.replace('/office/index.html?next=' + encodeURIComponent(target));
})();
