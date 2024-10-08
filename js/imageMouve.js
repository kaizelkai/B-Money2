
        // Variables pour l'image et le conteneur
        const image = document.getElementById('paulImage');
        const container = document.querySelector('.image-container');
        const offset = 50; // Périmètre de mouvement
        let isMouseOverImage = false; // État de la souris sur l'image

        // Événement pour le mouvement de la souris
        container.addEventListener('mousemove', (event) => {
            if (isMouseOverImage) {
                // Calcul des positions de l'image
                const mouseX = event.clientX;
                const mouseY = event.clientY;

                // Déterminer la position de l'image
                const containerRect = container.getBoundingClientRect();
                const imageWidth = image.clientWidth;
                const imageHeight = image.clientHeight;

                // Calcul des nouvelles positions
                let newX = mouseX - containerRect.left - imageWidth / 2;
                let newY = mouseY - containerRect.top - imageHeight / 2;

                // Limiter les mouvements dans le périmètre défini
                newX = Math.max(-offset, Math.min(newX, containerRect.width - imageWidth + offset));
                newY = Math.max(-offset, Math.min(newY, containerRect.height - imageHeight + offset));

                // Appliquer les nouvelles positions
                image.style.transform = `translate(${newX}px, ${newY}px)`;
            }
        });

        // Événements pour gérer l'état de la souris sur l'image
        image.addEventListener('mouseenter', () => {
            isMouseOverImage = true; // La souris est sur l'image
        });

        image.addEventListener('mouseleave', () => {
            isMouseOverImage = false; // La souris n'est plus sur l'image
            image.style.transform = 'translate(0, 0)'; // Réinitialiser la position de l'image
        });
 
