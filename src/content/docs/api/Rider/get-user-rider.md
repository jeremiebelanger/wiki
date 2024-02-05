---
title: Recevoir la liste des riders d'un user
description: Route pour recevoir la liste des riders d'un user
---

* **URL**

  /api/users/{userId}/riders

* **Méthode:**
  
  `GET`

* **Réponse de succès:**
  
  * **Code:** 200 <br />
    **Contenu:** 
    ```json
    {
      "riders": [
        {
          "id": 1,
          "name": "Alexandra Rider",
          "phone": "450-123-4567",
          "email": "alexandra.rider@example.com",
          "no_fei": "12345678",
          "emergency_name": "John Smith",
          "emergency_phone": "450-987-6543",
          "stable_name": "Majestic Stables",
          "trainer_name": "Emily Trainer"
        },
        {
          "id": 2,
          "name": "Benjamin Jumper",
          "phone": "514-555-7890",
          "email": "benjamin.jumper@example.com",
          "no_fei": "12345678",
          "emergency_name": "Mary Johnson",
          "emergency_phone": "514-987-6543",
          "stable_name": "Highland Equestrian",
          "trainer_name": "David Trainer"
        },
        {
          "id": 3,
          "name": "Claire Canter",
          "phone": "438-765-4321",
          "email": "claire.canter@example.com",
          "no_fei": "12345678",
          "emergency_name": "Michael Brown",
          "emergency_phone": "438-123-4567",
          "stable_name": "Sunset Stables",
          "trainer_name": "Jessica Trainer"
        },
        ...
      ]
    }
    ```

* **Réponse d'erreur:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Contenu:** 
    ```json
    { "message": "Non authentifié." }
    ```

  * **Code:** 403 FORBIDDEN <br />
    **Contenu:** 
    ```json
    { "message": "Cette action n’est pas autorisée." }
    ```

  * **Code:** 404 NOT FOUND <br />
    **Contenu:** 
    ```json
    { "message": "La ressource n’existe pas." }
    ```
