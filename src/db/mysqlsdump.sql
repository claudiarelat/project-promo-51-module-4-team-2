CREATE DATABASE girlflix; 

USE girlflix; 

-- Crear tabla OBRAS
CREATE TABLE OBRAS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo_obra VARCHAR(255) NOT NULL,
    link_reseñas VARCHAR(500),
    link_plataforma VARCHAR(500),
    genero VARCHAR(100),
    sinopsis TEXT,
    imagen_obra VARCHAR(500)
);

-- Crear tabla PERSONAJES
CREATE TABLE PERSONAJES (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_personaje VARCHAR(255) NOT NULL,
    rol_personaje VARCHAR(100),
    frase_estrella VARCHAR(500),
    imagen_personaje VARCHAR(500),
    obra_id INT,
    FOREIGN KEY (obra_id) REFERENCES OBRAS(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);