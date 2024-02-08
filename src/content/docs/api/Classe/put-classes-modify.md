---
title: Modifier une classe ✅
description: Route pour modifier uneclasse
---

* **URL**

  /api/shows/{showId}/classes/{classId}

* **Méthode:**
  
  `PUT`

* **Paramètres:**

  **Requis:**

    Content-Type: application/x-www-form-urlencoded
 
    `number=[string]`<br>
    `name=[string]`<br>
    `date=[date]`<br>
    `ring_name=[string]`<br>
    `ring_number=[string]`<br> 
    `price_entry=[int]`<br>
    `level_type=[string]`<br>
    `is_test_of_choice=[bool]`<br>
   
* **Réponse de succès:**
  
  * **Code:** 201 <br />
    **Contenu:** 
    ```json
    {
      "id": 1,
      "number": "a",
      "name" : "<nom de la classe>",
      "date" : "2024-01-29",
      "ring_name": "<nom du ring>",
      "ring_number": "<numero du ring>",
      "price_entry" : 1499,
      "show_id": 1
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
