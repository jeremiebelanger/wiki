---
title: Créer une competition
description: Route pour céer une competition
---

* **URL**

  /api/shows

* **Méthode:**
  
  `POST`

* **Paramètres:**

  Content-Type: form-data

  **Requis:**
 
    `name=[string]`<br>
    `address_id=[int]`<br>
    `organizer_id=[int]`<br>
    `can_have_late_registration=[boolean]`<br>
    `nb_total_place=[int]`<br>
    `show_fee_id=[int]`<br>
    `administration_fee_id=[int]`<br>
    `recognized_show=[boolean]`<br>
    `rules=[string]`<br>
    `start_date=[string]`<br>
    `end_date=[string]`<br>
    `inscription_start_date=[string]`<br>
    `inscription_end_date=[string]`<br>
    `inscription_end_late_date=[string]`<br>
    `end_late_inscription_date=[string]`<br>

  **Optionnel**
    `show_logo=[.pdf|.png|.jpeg]`<br>
   
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
