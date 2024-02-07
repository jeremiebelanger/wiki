---
title: Recevoir la liste des chevaux d'un user ⛔
---

Route pour recevoir la liste des chevaux d'un user

* **URL**

  /api/users/{userId}/horses

* **Méthode:**
  
  `GET`

* **Réponse de succès:**
  
  * **Code:** 200 <br />
    **Contenu:** 
    ```json
    {
      "horses": [
        {
          "id": 1,
          "name": "Thunderbolt",
          "sex": "Male",
          "no_fei": "12345678",
          "no_micro_chip": "MIC456",
          "path_vaccine": "/vaccine/thunderbolt.pdf",
          "path_coggins": "/coggins/thunderbolt.pdf"
        },
        {
          "id": 2,
          "name": "Silverado",
          "sex": "Male",
          "no_fei": "12345678",
          "no_micro_chip": "MIC567",
          "path_vaccine": "/vaccine/silverado.pdf",
          "path_coggins": "/coggins/silverado.pdf"
        },
        {
          "id": 3,
          "name": "Lady Belle",
          "sex": "Female",
          "no_fei": "12345678",
          "no_micro_chip": "MIC678",
          "path_vaccine": "/vaccine/lady_belle.pdf",
          "path_coggins": "/coggins/lady_belle.pdf"
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
