### <span style="color:rgba(255, 0, 0, 1)">Tipos</span>

* **Node** <ins> todos los objetos</ins> que contiene un documento (tag, text, attributes)
* **Elements** tipo de nodo (<ins>HTMLElement</ins>, HTMLTableElements...)
* **NodeList** <ins>array de Elements</ins> (obtenidos con funciones selectoras)
* **NamedNodeMap** <ins>array de Elements</ins> de acceso por índice o por nombre
* **Attributes** atributo...

### <span style="color:rgba(255, 0, 0, 1)">Estructura del DOM </span>
![estructura del DOM](https://i.ibb.co/bPwxr3V/Screenshot-from-2023-12-17-17-29-37.png)

### <span style="color:rgba(255, 0, 0, 1)">Tipos de nodos</span>
![tipos de nodos](https://i.ibb.co/SmjDV39/Screenshot-from-2023-12-17-17-33-17.png)

#### <span style="color:rgba(0, 255, 1, 1)">Propiedades de los nodos</span>
* **attributes** array con los atributos
* **className** nombre de la clase (si es etiqueta)
* **id** id (si es etiqueta)
* **innerHTML** html correspondiente a la etiqueta
* **hidden** si la etiqueta está oculta
* **draggable** si la etiqueta es arrastrable
* **innerText** el texto contenido en la etiqueta
* **style** el estilo de la etiqueta

### <span style="color:rgba(255, 0, 0, 1)">Flujo de trabajo</span>
1. **Función de selección**
2. **Procesamiento de resultados**
3. **Operación**

### <span style="color:rgba(255, 0, 0, 1)">Funciones</span>
#### <span style="color:rgba(0, 255, 1, 1)">Selección elementos</span>
* **.getElementById(String id)**
Elemento con un ID concreto
* **.getElementByTagName("tagName")**
Array de elementos de una etiqueta determinada
* **.getElementByClass("someClass")**
Array de elementos hijos de una clase determinada
* **.querySelector("css selector")**
Elemento que cumple con el selector
* **.querySelectorAll("css selector")**
Array de elementos que cumplen con el selector
* **.documentElement**
Elemento de la etiqueta HTML
* **.activeElement**
Elemento con el foco activo (tabulación)
* **.body .head .forms .images .links**
Array de elementos del tipo especificado