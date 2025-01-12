---
title: Modifier les infos d'un user par un admin ✅
description: Modifier les infos d'un user par un admin
---

* **URL**

  /api/users/{userId}/profile

* **Méthode:**
  
  `PUT`

* **Paramètres:**

  Content-Type: application/json

  **Requis:**
 
    `name=[string]`<br>
    `birthdate=[string]`<br>
    `phone=[string]`<br>
    `email=[string]`<br>
    `phone=[string]`<br>
    `role=[string (USER, ADMIN, SECRETARY, ORGANIZER)]`<br>
    `is_verified=[boolean]`<br>


* **Réponse de succès:**
  
  * **Code:** 200 <br />
    **Contenu:** 
    ```json
    {
      "id": 1,
      "name": "Bob",
      "phone": "450-869-9045",
      "birthdate": "1992-07-03",
      "email": "Bob@email.com",
      "role": "USER",
      "is_verified": true,
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
