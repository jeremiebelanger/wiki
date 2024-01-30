---
title: Créer une competition
description: Route pour céer une competition
---

* **URL**

  /api/competition

* **Méthode:**
  
  `POST`

* **Paramètres:**

  **Requis:**

    Content-Type: application/x-www-form-urlencoded
 
    `name=[string]`<br>
    `emplacement_id=[int]`<br>
    `organizer_id=[int]`<br>
    `is_late_registration=[boolean]`<br>
    `pathLogo=[string]`<br>
    `nb_total_place=[int]`<br>
    `nb_free_place=[int]`<br>
    `competitions_fee_id=[int]`<br>
    `admin_fee_id=[int]`<br>
    `is_quebec_recognized=[boolean]`<br>
    `rules=[string]`<br>
    `start_date=[string]`<br>
    `end_date=[string]`<br>
    `start_inscription_date=[string]`<br>
    `end_inscription_date=[string]`<br>
    `start_late_inscription_date=[string]`<br>
    `end_late_inscription_date=[string]`<br>
   
* **Réponse de succès:**
  
  * **Code:** 201 <br />
    **Contenu:** 
    ```json
    {
      "id": 1,
      "name": "<nom du concours>"
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
