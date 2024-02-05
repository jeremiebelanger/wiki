---
title: Ajouter un cheval
description: Route pour ajouter un cheval à un user
---

* **URL**

  /api/users/{userId}/horses

* **Méthode:**
  
  `POST`

* **Paramètres:**

    Content-Type: form-data

  **Requis:**
 
    `name=[string]`<br>
    `sex=[string]`<br>
  
  **Optionnel**
    `no_fei=[string]`<br>
    `no_micro_chip=[string]`<br>
    `vaccine=[.pdf|.png|.jpeg]`<br>
    `coggins=[.pdf|.png|.jpeg]`<br>

* **Réponse de succès:**
  
  * **Code:** 201 <br />
    **Contenu:** 
    ```json
    {
      "id": 1,
      "name": "Thunderbolt",
      "sex": "Male",
      "no_fei": "FEI123",
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
