---
title: Modifier un cheval
description: Route pour modifier un cheval à un user
---

* **URL**

  /api/users/{userId}/horses

* **Méthode:**
  
  `PUT`

* **Paramètres:**

  Content-Type: form-data

  **Requis:**
 
    `name=[string]`<br>
    `sex=[string]`<br>

  **Optionel**

    `no_FEI=[string]`<br>
    `no_micro_chip=[string]`<br>
    `vaccine=[.pdf|.png|.jpeg]`<br>
    `coggins=[.pdf|.png|.jpeg]`<br>

* **Réponse de succès:**
  
  * **Code:** 200 <br />
    **Contenu:** 
    ```json
    {
      "id": 1,
      "name": "Thunderbolt",
      "sex": "Male",
      "no_FEI": "FEI123",
      "no_micro_chip": "MIC456",
      "path_vaccine": "/vaccine/thunderbolt.pdf",
      "path_coggins": "/coggins/thunderbolt.pdf"
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
