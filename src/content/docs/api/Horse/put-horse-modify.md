---
title: Modifier un cheval
description: Route pour modifier un cheval à un user
---

* **URL**

  /api/user/{userId}/horse

* **Méthode:**
  
  `PUT`

* **Paramètres:**

  **Requis:**

    Content-Type: application/x-www-form-urlencoded
 
    `name=[string]`<br>
    `sex=[string]`<br>

* **Réponse de succès:**
  
  * **Code:** 200 <br />
    **Contenu:** 
    ```json
    {
      "id": 1,
      "name": "Thunderbolt",
      "sex": "Male",
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
