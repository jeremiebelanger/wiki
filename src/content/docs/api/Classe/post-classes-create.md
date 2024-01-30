---
title: Créer une classe
description: Route pour créer une nouvelle classe
---

* **URL**

  /api/classes

* **Méthode:**
  
  `POST`

* **Paramètres:**

  **Requis:**

    Content-Type: application/x-www-form-urlencoded
 
    `number=[int]`<br>
    `name=[string]`<br>
    `date=[date]`<br>
    `arena=[string]`<br>
    `price_entry=[int]`<br>
    `competition_id=[int]`<br>

   
* **Réponse de succès:**
  
  * **Code:** 201 <br />
    **Contenu:** 
    ```json
    {
      "id": 1,
      "number": 1,
      "name" : "<nom de la classe>",
      "date" : "2024-01-29",
      "arena": "<nom de l'arena>",
      "price_entry" : 1499,
      "competition_id": 1
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
