document.addEventListener('DOMContentLoaded', function() {
    const miAmor = "Mi Linda Esme";
    const miNombre = "Aarón";
    
    document.getElementById('mi-amor').textContent = miAmor;
    document.getElementById('mi-amor-carta').textContent = miAmor;
    document.getElementById('mi-nombre').textContent = miNombre;
    
    // Interacción con el corazón
    const heart = document.getElementById('heart');
    const message = document.getElementById('message');
    
    const mensajes = [
        "Te amo más que a nada en este mundo",
        "Eres lo mejor que me ha pasado",
        "Mi corazón late por ti",
        "Eres mi sueño hecho realidad",
        "No hay nadie como tú en el universo",
        "Eres la dueña de mi corazón"
    ];
    
    heart.addEventListener('click', function() {
        this.classList.toggle('latido');
        const randomMessage = mensajes[Math.floor(Math.random() * mensajes.length)];
        message.textContent = randomMessage;
    });
    
    // Botón sorpresa
    const surpriseBtn = document.getElementById('surprise-btn');
    
    surpriseBtn.addEventListener('click', function() {
        alert(`¡${miAmor}, eres la mujer más increíble del mundo! 💖`);
        
        // Crea corazones flotantes
        for (let i = 0; i < 50; i++) {
            createHeart();
        }
    });
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-20px';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        
        document.body.appendChild(heart);
        
        // Elimina el corazón después de la animación
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    // Agrega estilos para la animación de caída
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Control de música de fondo
    const bgMusic = document.getElementById('bg-music');
    const musicToggle = document.getElementById('music-toggle');
    
    // Intenta reproducir la música (los navegadores modernos bloquean el autoplay)
    document.body.addEventListener('click', function() {
        bgMusic.play().catch(e => console.log("Autoplay bloqueado:", e));
    }, { once: true });
    
    // Control de volumen/mute
    musicToggle.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play();
            this.textContent = '🔊';
        } else {
            bgMusic.pause();
            this.textContent = '🔇';
        }
    });
    
    // Estilo para el botón de música
    const musicStyle = document.createElement('style');
    musicStyle.innerHTML = `
        .music-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            background: rgba(255,255,255,0.7);
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            font-size: 20px;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
    `;
    document.head.appendChild(musicStyle);