# Jeux Videops

Plateforme de jeux vidéo rétro avec pipeline CI/CD automatisé via GitHub Actions.

> 🎮 **Jouer en ligne** → [lien à ajouter]

## Status des pipelines

| Jeu | CI |
|-----|----|
| Space Word | ![SpaceWord](https://github.com/hattabelfaqir/jeux-videops-bootstrap/actions/workflows/SpaceWord.yml/badge.svg) |
| Keep White Space | ![KeepWhiteSpace](https://github.com/hattabelfaqir/jeux-videops-bootstrap/actions/workflows/KeepWhiteSpace.yml/badge.svg) |
| Space Invaders | ![SpaceInvaders](https://github.com/hattabelfaqir/jeux-videops-bootstrap/actions/workflows/SpaceInvaders.yml/badge.svg) |
| Two Ships | ![TwoShips](https://github.com/hattabelfaqir/jeux-videops-bootstrap/actions/workflows/TwoShipsPassingInTheNight.yml/badge.svg) |

## Jeux disponibles

| Jeu | Port local |
|-----|-----------|
| Space Word | 8001 |
| Keep White Space | 8002 |
| Space Invaders | 8003 |
| Two Ships Passing In The Night | 8004 |

---

## Lancer les jeux avec Docker

### Prérequis
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Lancer tous les jeux

```bash
docker compose up --build
```

Ensuite ouvre `index.html` dans ton navigateur ou accède directement à :
- Space Word → http://localhost:8001
- Keep White Space → http://localhost:8002
- Space Invaders → http://localhost:8003
- Two Ships Passing In The Night → http://localhost:8004

### Stopper les jeux

```bash
docker compose down
```

---

## Tests unitaires

Lancer les tests unitaires d'un jeu :

```bash
cd SpaceWord
npm install
npm test
```

Remplace `SpaceWord` par `KeepWhiteSpace`, `SpaceInvaders` ou `TwoShipsPassingInTheNight`.

---

## Tests fonctionnels (Playwright)

> Les jeux doivent tourner via Docker avant de lancer les tests fonctionnels.

```bash
docker compose up -d
cd SpaceWord
npx playwright test
```

---

## Pipeline CI/CD

Chaque jeu a son propre workflow GitHub Actions qui s'exécute automatiquement à chaque push :

1. **Secret scan** — détection de secrets avec Gitleaks
2. **Tests unitaires** — Jest
3. **Linter** — ESLint Google Style Guide
4. **Audit** — npm audit
5. **Mirror** — push vers le dépôt Epitech
6. **Notification Discord** — résultat du pipeline

Les workflows peuvent aussi être lancés manuellement depuis l'onglet **Actions** de GitHub.

---

## Secrets GitHub requis

| Secret | Description |
|--------|-------------|
| `MIRROR_TOKEN` | Token d'accès au dépôt mirror Epitech |
| `DISCORD_WEBHOOK_URL` | URL du webhook Discord pour les notifications |
