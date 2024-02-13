---
title: Enlever le role de secrétaire ✅
description: Route pour enlever le role de secrétaire à un utilisateur.
Après avoir enlever le role, le server envoie un couriel à l'utilisateur pour le notifier.
---

* **URL**

  /api/shows/{showId}/secretaries

* **Méthode:**
  
  `DELETE`

* **Permission Accès:**
  Organisateur du show / Admin

* **Réponse de succès:**
  
  * **Code:** 200 <br />
    **Contenu:** 
     `string => Secretary changed successfully`

* **Réponse d'erreur:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Contenu:** <br>
    `string => Unauthorized`

  * **Code:** 403 FORBIDDEN <br />
    **Contenu:** 
      `string => Forbidden`

  * **Code:** 404 Not Found <br />
    **Contenu:** 
    ```json
    { "error": "Show id not found" }
    ```

  * **Code:** 404 Not Found <br />
    **Contenu:** 
    ```json
    { "error": "The user does not own the show." }
    ```

  * **Code:** 404 Not Found <br />
    **Contenu:** 
    ```json
    { "error": "Secretary id does not have the role secretary" }
    ```
