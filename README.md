# HackMty2023

GeoSafe es un proyecto dedicado a mejorar la seguridad y la conciencia de todas las personas que transitan por el Distrito Tec a través de soluciones innovadoras, manejando una red de comunicación directa y factible. 

Este repositorio alberga la estructura y funcionamiento interno del proyecto por medio del código fuente completo de la página web de GeoSafe, donde ofrecemos herramientas de mapeo y clasificación de dichas áreas en tiempo real, además de recursos de protección relacionados con la seguridad en esta comunidad.

El primer paso para realizar este proyecto es la recopilación de datos. En este caso, decidimos que la manera más eficiente de hacer esto es a través de tweets. La intención es identificar las palabras clave y hashtags que fueran relevantes para nuestro proyecto, los cuales se filtraron para obtener nuestros datos. 

El segundo paso es la interpretación de los datos. Los datos que nos importan son: fecha, tipo de incidente, calle, y el número de frecuencias. Esta filtración de datos se puede lograr con la tecnología de SDK, y lo que te retorna es un archivo tipo .json. Igual es importante mencionar que acá debemos agregar un apartado donde nos muestran la longitud y latitud de las calles para poder mostrarlas en el mapa. Esto se planea hacer con una herramienta de Google Cloud llamada Geocoding API, la cual convierte datos en string en coordenadas de latitud y longitud que pueden ser utilizadas en nuestra implementación.

Luego, ya toca simular el mapa, esto lo hicimos con una librería llamada leaflet. En el mapa se grafican las zonas de alto, medio y bajo riesgo, representados por colores. Rojo es el mas peligroso, amarillo medio, y verde que es seguro o han habio pocos incidentes. Puede graficar los datos por la lectura del archivo .json previamente generado.

De acá la página web tiene dos funciones principales, la primera es que le permite al usuario dar un aviso si se va a adentrar en una zona de alto riesgo. Este aviso se lo manda a su contacto de emergencia que también pueden registrar en su propia cuenta. El aviso se manda a través de whatsapp. Además, se puede hacer un reporte cuando finalices tu viaje, y puedes regresar algo a la comunidad al aportar tu experiencia.

Es importante mencionar que por el momento, el proyecto se conecta a una base de datos local para guardar la información del login, los contactos de emergencia, y el reporte. El archivo .json lo lee directamente ingresando la ruta del archivo. 
