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
