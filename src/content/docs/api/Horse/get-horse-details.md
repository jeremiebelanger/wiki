---
title: Recevoir les détails d'un cheval ⛔
---

Route pour recevoir les détails d'un cheval


* **URL**

  /api/users/{userId}/horses/{horseId}

* **Méthode:**
  
  `GET`

* **Réponse de succès:**
  
  * **Code:** 200 <br />
    **Contenu:** 
    ```json
    {
      "horse": {
        "id": 1,
        "name": "Gourmand",
        "sex": "Female",
        "no_fei": "10333333",
        "path_vaccine": "/vaccine/thunderbolt.pdf",
        "path_coggins": "/coggins/thunderbolt.pdf",
        "user_id": 5,
        "owner": {
          "name": "Bob",
          "no_fei": "12345678",
          "email": "Bob@gmail.com",
          "phone": "450-555-6060"
        }
      },
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
