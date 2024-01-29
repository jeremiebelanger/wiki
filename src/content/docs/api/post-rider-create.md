---
title: Ajouter un rider
description: Route pour ajouter un rider à un user
---

* **URL**

  /api/user/{userId}/rider

* **Méthode:**
  
  `POST`

* **Paramètres:**

  **Requis:**

    Content-Type: application/x-www-form-urlencoded
 
    `name=[string]`<br>
    `phone=[string]`<br>
    `email=[string]`<br>
    `no_FEI=[string]`<br>
    `emergency_name=[string]`<br>
    `stable_name=[string]`<br>
    `trainer_name=[string]`<br>
    `emergency_phone=[string]`<br>

* **Réponse de succès:**
  
  * **Code:** 201 <br />
    **Contenu:** 
    ```json
    {
      "id": 1,
      "name": "Alexandra Rider",
      "phone": "450-123-4567",
      "email": "alexandra.rider@example.com",
      "no_FEI": "FEI001",
      "emergency_name": "John Smith",
      "stable_name": "Majestic Stables",
      "trainer_name": "Emily Trainer",
      "emergency_phone": "450-987-6543"
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
