---
title: Recevoir un riders d'un user
description: Route pour recevoir un rider à partir d'un user
---

* **URL**

  /api/user/{userId}/rider/{riderId}

* **Méthode:**
  
  `GET`

* **Réponse de succès:**
  
  * **Code:** 200 <br />
    **Contenu:** 
    ```json
    {
      "id": 1,
      "name": "Alexandra Rider",
      "phone": "450-123-4567",
      "email": "alexandra.rider@example.com",
      "no_FEI": "FEI001",
      "emergency_name": "John Smith",
      "emergency_phone": "450-987-6543",
      "stable_name": "Majestic Stables",
      "trainer_name": "Emily Trainer"
    },
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
