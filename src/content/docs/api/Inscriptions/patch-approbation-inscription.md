---
title: Modifier l'approbation d'une inscription à un classe ⛔
---

Route pour modifier l'approbation d'une inscription à une classe

* **URL**

  /api/shows/{showId}/classes/{classesId}/inscriptions/{inscriptionId}

* **Méthode:**
  
  `PATCH`

* **Paramètres:**

    **Requis:**

        Content-Type:  JSON

        `approved=[boolean]`<br>


* **Réponse de succès:**
  
  * **Code:** 200 <br />
    **Contenu:** 
    ```json
    {
        "id": 1,
        "class_id": 1,
        "horse_id": 1,
        "rider_id": 1,
        "show_id": 1,
        "user_id": 1,
        "no_fei": null,
        "nb_stalls": 45,
        "nb_hay_bale": 30,
        "nb_chippings_bags": 43,
        "has_payed": false,
        "approved": true,
        "createdAt": "2024-02-08T21:13:53.948Z",
        "updatedAt": "2024-02-08T21:13:53.948Z"
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