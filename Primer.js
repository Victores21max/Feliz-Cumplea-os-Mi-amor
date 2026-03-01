// ===== JAVASCRIPT COMPLETO - FUNCIONALIDADES PARA LA PÁGINA DE CUMPLEAÑOS =====

// Función para generar confeti animado en el header
function crearConfeti() {
    const confeti = document.getElementById('confeti');
    
    // Limpiar confeti existente
    if (confeti.children.length > 0) {
        confeti.innerHTML = '';
    }
    
    // Crear 50 piezas de confeti
    for (let i = 0; i < 50; i++) {
        const span = document.createElement('span');
        
        // Posición aleatoria en el ancho
        span.style.left = Math.random() * 100 + '%';
        
        // Retraso aleatorio para la animación
        span.style.animationDelay = Math.random() * 2 + 's';
        
        // Duración aleatoria de la animación
        span.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        // Colores en tonos celestes/azules y algunos dorados
        if (i % 5 === 0) {
            span.style.background = '#FFD700'; // Dorado para variar
        } else {
            span.style.background = `hsl(${Math.random() * 60 + 180}, 80%, 60%)`; // Tonos celestes/azules
        }
        
        confeti.appendChild(span);
    }
}

// Función para calcular la edad exacta
function calcularEdad() {
    // Fecha de nacimiento: 1 de marzo de 2003
    const fechaNacimiento = new Date('2003-03-01');
    
    // Fecha actual: 1 de marzo de 2026
    const hoy = new Date('2026-03-01');
    
    // Calcular edad en años
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    
    // Verificar si ya pasó el cumpleaños este año
    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();
    const mesNacimiento = fechaNacimiento.getMonth();
    const diaNacimiento = fechaNacimiento.getDate();
    
    // Ajustar si el cumpleaños aún no ha ocurrido este año
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }
    
    // Calcular meses totales (edad * 12)
    let meses = edad * 12;
    
    // Calcular días totales exactos
    let dias = Math.floor((hoy - fechaNacimiento) / (1000 * 60 * 60 * 24));
    
    // Actualizar los elementos HTML
    document.getElementById('edad').textContent = edad;
    document.getElementById('meses').textContent = meses;
    document.getElementById('dias').textContent = dias;
    
    return { edad, meses, dias };
}

// Función para crear confeti al hacer clic
function crearConfetiClick(e) {
    // Número de partículas por clic
    const numParticulas = 15;
    
    for (let i = 0; i < numParticulas; i++) {
        const confeti = document.createElement('div');
        
        // Posición inicial (lugar del clic)
        confeti.style.position = 'fixed';
        confeti.style.left = (e.clientX + (Math.random() - 0.5) * 50) + 'px';
        confeti.style.top = (e.clientY + (Math.random() - 0.5) * 50) + 'px';
        
        // Estilo del confeti
        confeti.style.width = Math.random() * 15 + 5 + 'px';
        confeti.style.height = Math.random() * 15 + 5 + 'px';
        confeti.style.background = `hsl(${Math.random() * 60 + 180}, 80%, 60%)`;
        confeti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confeti.style.pointerEvents = 'none';
        confeti.style.zIndex = '9999';
        
        // Animación personalizada
        confeti.style.animation = `caerClick ${Math.random() * 1 + 0.8}s linear forwards`;
        
        document.body.appendChild(confeti);
        
        // Eliminar después de la animación
        setTimeout(() => {
            confeti.remove();
        }, 1800);
    }
}

// Función para agregar efecto de hover a las tarjetas
function agregarEfectosHover() {
    const tarjetas = document.querySelectorAll('.tarjeta');
    
    tarjetas.forEach((tarjeta, index) => {
        tarjeta.style.animationDelay = (index * 0.1) + 's';
    });
}

// Función para mostrar la fecha actual
function mostrarFechaActual() {
    const footer = document.querySelector('footer p:last-child');
    if (footer) {
        const hoy = new Date();
        const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
        footer.textContent = hoy.toLocaleDateString('es-ES', opciones);
    }
}

// Función para verificar si es el cumpleaños
function verificarCumpleaños() {
    const hoy = new Date();
    const mes = hoy.getMonth();
    const dia = hoy.getDate();
    
    // 1 de marzo
    if (mes === 2 && dia === 1) {
        document.title = '🎂 ¡Hoy es tu cumpleaños! 🎂';
        
        // Agregar mensaje especial
        const header = document.querySelector('.header p');
        if (header) {
            header.innerHTML = '🎉 ¡HOY ES EL GRAN DÍA! 🎉';
        }
    }
}

// Función para pre-cargar imágenes (útil cuando se usan imágenes reales)
function precargarImagenes(urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Evento que se ejecuta cuando la página se carga completamente
window.addEventListener('load', function() {
    // Inicializar todas las funciones
    crearConfeti();
    calcularEdad();
    agregarEfectosHover();
    mostrarFechaActual();
    verificarCumpleaños();
    
    // Agregar evento de clic para confeti
    document.body.addEventListener('click', crearConfetiClick);
    
    // Agregar efecto de parallax suave al scroll
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const header = document.querySelector('.header');
        
        if (header) {
            header.style.backgroundPositionY = scrollY * 0.5 + 'px';
        }
    });
    
    console.log('🎉 Página de cumpleaños cargada correctamente 🎉');
});

// Función para cambiar el nombre (útil si quieres personalizar)
function cambiarNombre(nombre) {
    const firma = document.querySelector('.firma');
    if (firma) {
        firma.textContent = `Feliz Cumpleaños, ${nombre} ❤️`;
    }
}

// Función para actualizar el contador en tiempo real
function actualizarContadorTiempoReal() {
    setInterval(() => {
        calcularEdad();
    }, 1000 * 60 * 60); // Actualizar cada hora
}

// Función para crear un efecto de escritura en el mensaje
function efectoEscritura(elemento, texto, velocidad = 50) {
    let i = 0;
    elemento.innerHTML = '';
    
    function escribir() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escribir, velocidad);
        }
    }
    
    escribir();
}

// Función para el modo oscuro/claro (opcional)
function toggleModo() {
    document.body.classList.toggle('modo-claro');
}

// Agregar estilos adicionales para animaciones
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes caerClick {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100px) rotate(360deg);
            opacity: 0;
        }
    }
    
    .modo-claro {
        background: linear-gradient(135deg, #E0F2FE 0%, #B0E0E6 100%);
        color: #333;
    }
    
    .modo-claro .tarjeta {
        background: rgba(255, 255, 255, 0.5);
        color: #333;
    }
`;
document.head.appendChild(styleSheet);

// Exportar funciones si es necesario (para módulos)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        crearConfeti,
        calcularEdad,
        crearConfetiClick,
        cambiarNombre
    };
}