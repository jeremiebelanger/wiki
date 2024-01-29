---
title: Supprimer une classe
description: Route pour supprimer une route.
---
  
* **URL**

  /api/classe/{classeId}

* **Méthode:**
  
  `DELETE`
   
* **Réponse de succès:**
  
  * **Code:** 200 <br/>
    **Contenu:** 
    ```json
    {
      "id": 1,
      "name": "<nom de la classe supprimé>"
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
