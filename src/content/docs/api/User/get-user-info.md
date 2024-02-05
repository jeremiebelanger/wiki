---
title: Recevoir les info d'un user ⛔
description: Route pour recevoir les info d'un user
---

* **URL**

  /api/users/{userId}

* **Méthode:**
  
  `GET`

* **Réponse de succès:**
  
  * **Code:** 200 <br />
    **Contenu:** 
    ```json
    {
      "id": 1,
      "name": "James Cameron",
      "adress": {
        "number": 1 ,
        "street" : "blv laurent",
        "appartement_number" : null,
        "postal_code": "3lp 2p0"
      },
      "email": "james04@gmail.com",
      "phone": "450-869-9045",
      "birthdate": "1992-07-03", 
      "role": "USER"
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
