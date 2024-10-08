const imageContainer = document.getElementById('imageContainer');
        const paulImage = document.getElementById('paulImage');

        // Fonction pour gérer le mouvement de l'image
    imageContainer.addEventListener('mousemove', (event) => {
        const rect = imageContainer.getBoundingClientRect();
        const imageRect = paulImage.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Calcul de la nouvelle position de l'image en veillant à ce qu'elle ne sorte pas des limites
        const imageX = Math.max(Math.min(x - imageRect.width / 2, rect.width - imageRect.width), 0);
        const imageY = Math.max(Math.min(y - imageRect.height / 2, rect.height - imageRect.height), 0);

        // Applique la nouvelle position
        paulImage.style.position = 'absolute';
        paulImage.style.left = `${imageX}px`;
        paulImage.style.top = `${imageY}px`;
    });

    // Réinitialise la position de l'image si la souris sort du conteneur
    imageContainer.addEventListener('mouseleave', () => {
        paulImage.style.position = 'relative'; // Remet l'image dans le flux normal
        paulImage.style.left = `0px`; // Retour à la position d'origine
        paulImage.style.top = `0px`; // Retour à la position d'origine
    });