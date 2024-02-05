---
title: Modifier un show
description: Route pour modifier un show.
---

* **URL**

  /api/shows/{showId}

* **Méthode:**
  
  `PUT`

* **Paramètres:**

  Content-Type: form-data

  **Requis:**
 
    `id=[string]`<br>
    `name=[string]`<br>
    `emplacement_id=[int]`<br>
    `organizer_id=[int]`<br>
    `is_late_registration=[boolean]`<br>
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
    `admin=[int]`<br>
    `late=[int]`<br>
    `annulation=[int]`<br>
    `terrain=[int]`<br>
    `medizl=[int]`<br>
    `equipement_location=[int]`<br>
    `hay=[int]`<br>
    `chippings=[int]`<br>
    `temp_stall_per_day=[int]`<br>
    `inside_stall_per_day=[int]`<br>
    `drug_tese=[int]`<br>

  **Optionnel**
    `show_logo=[.pdf|.png|.jpeg]`<br>
   
* **Réponse de succès:**
  
  * **Code:** 200 <br />
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

  * **Code:** 404 NOT FOUND <br />
    **Contenu:** 
    ```json
    { "message": "La ressource n’existe pas." }
    ```
