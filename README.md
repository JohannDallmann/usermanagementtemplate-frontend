# General Setup
1. 'npm install' ausführen
2. vite-Projekt mit 'npm run dev' starten
3. App-Titel und Logo in index.html anpassen

# Keycloak
1. Anpassen der Umgebungsvariablen in .env.development und vite-env.d.ts (Typisierung):
    VITE_BASE_URL - URL mit Backendport für requests
    VITE_IDM_URL - URL mit Keycloakport
    VITE_IDM_REALM - Realm-Name aus Keycloak
    VITE_IDM_CLIENTID - ClientId aus Keycloak
    VITE_IDM_TOKENUPDATE - Zeitintervall (in Sekunden) vor Ablauf des Tokens, indem auf Aktivität geprüft wird, ob neuer Token generiert werden soll
2. In AppRouter und useAuth() die Rollen dem Projekt anpassen

# Theme extern mit Keycloakify anlegen
(- Keycloakify kann theoretisch auch in Projekt integriert werden)
1. git clone https://github.com/keycloakify/keycloakify-starter
2. 'yarn lock'-file aus projekt entfernen bei npm
3. 'npm install' ausführen
4. 'npm run build-keycloak-theme' ausführen
5. .jar-file aus 'dist-keycloak' in 'keycloak/providers'-Ordner ziehen
6. in Konsole in '/keycloak/bin' den Befehl './kc.sh build' ausühren und danach keycloak starten
7. unter localhost:8090 in realmsettings das neue theme für Realm auswählen
8. das theme kann lokal bearbeitet werden:
    - getKcContextMock() in src/main.tsx: Kommentar entfernen
    - 'npm run dev' um lokalen Stand der Seite anzeigen zu lassen
    - über pageid kann gewünschte Seite ausgewählt werden (z.B. Login)
    - mit 'npx keycloakify eject-page' kann zu bearbeitende Komponente entpackt werden (z.B. Login.tsx)
    - Komponente zu switchcase in KcPage.tsx hinzufügen (siehe Konsole) 
    - Tipps zur Bearbeitung: https://docs.keycloakify.dev/v10/customization-strategies/component-level-customization
    - bei Fertigstellung getKcContextMock() wieder auskommentieren
    - 4.-7. erneut durchführen 