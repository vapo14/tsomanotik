# tsomanotik

## Tecnologías implementadas:
- HTML, CSS, JavaScript
- Harp.js (servidor web para compilar y separar el código)
- Bootstrap v5
- PHP para envío de correo electrónico

## Instrucciones
El código está dividido en **dos carpetas** principales:
- build
- public

En la carpeta **public** se encuentra el código precompilado, el cual se organiza por páginas en archivos *.ejs*. Por otro lado, en la carpeta **build** se encuentra el código compilado, este se genera utilizando el comando de Harp.js
`harp public\ build\`

Dado el uso de la herramienta Harp.js para compilar, es necesario que en su equipo esté instalado **Node.js** y **npm**. Si no planea usar la herramienta entonces lo único que necesita es la carpeta **build**. 
