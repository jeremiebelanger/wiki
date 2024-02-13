---
title: Recevoir touts les shows ✅
description: Route pour recevoir touts les shows avec un ou plusieurs filtres ou sans filtre.
---

- **URL**

  /api/shows (si aucun parametre, renvoie tous les shows)<br>
  /api/shows?<variable=value><br>
  /api/shows?<variable=value>&<variable=value>

- **Méthode:**

  `GET`

- **Paramètres:**

  filtre :

  - Variable: `name` (Recherche par nom)
  - Variable: `query` (Recherche par mot cle) - User/mobile first
  - Variable: `show_state` (pre-show/show/post-show)
  - Variable: `emplacement`
  - Variable: `nb_participant`
  - Variable: `available_spot`

- **Réponse de succès:**

  - **Code:** 200 <br />
    **Contenu:**
    ```json
    {
      "data": [
      {
      "id": 17,
      "name": "Show 17",
      "organizer": {
        "name": "Mark Admio"
      },
      "path_logo": null,
      "nb_free_place": 68,
      "nb_total_place": 76,
      "start_date": "2023-01-05T03:44:34.154Z",
      "end_date": "2026-02-04T22:57:21.508Z",
      "address": {
        "street_address": "123 Main Street",
        "city": "Montreal",
        "province": "Quebec",
        "country": "Canada",
        "zip_code": "12345"
      }
    },
    {
      "id": 49,
      "name": "Show 49",
      "organizer": {
        "name": "Mark Admio"
      },
      "path_logo": null,
      "nb_free_place": 40,
      "nb_total_place": 170,
      "start_date": "2023-02-01T20:43:45.192Z",
      "end_date": "2024-12-17T21:56:03.641Z",
      "address": {
        "street_address": "123 Main Street",
        "city": "Montreal",
        "province": "Quebec",
        "country": "Canada",
        "zip_code": "12345"
      }
    },
      ...
      ],
    }
    ```

- **Réponse d'erreur:**

  - **Code:** 404 NOT FOUND <br />
    **Contenu:**
    ```json
    { "message": "La ressource n’existe pas." }
    ```
