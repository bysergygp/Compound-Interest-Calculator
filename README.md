# Compound Interest Calculator

Una aplicación web interactiva para calcular y visualizar el crecimiento de inversiones mediante interés compuesto. Permite simular diferentes escenarios de inversión con contribuciones periódicas y visualizar los resultados a través de gráficos intuitivos.

## Características

- **Cálculo preciso de interés compuesto**: Calcula el crecimiento de inversiones considerando capitalización mensual
- **Visualización gráfica**: Gráfico de barras apiladas que muestra claramente:
  - Balance inicial
  - Contribuciones acumuladas
  - Interés generado a lo largo del tiempo
- **Parámetros configurables**:
  - Balance inicial
  - Depósito periódico (mensual)
  - Ratio de interés anual (%)
  - Duración de la inversión (años)
- **Diseño responsive**: Interfaz adaptable a diferentes dispositivos (móvil, tablet, escritorio)
- **Interfaz intuitiva**: Diseño limpio con iconos visuales para cada parámetro

## Tecnologías Utilizadas

- **HTML5**: Estructura de la aplicación
- **CSS3**: Estilos y diseño responsive
- **JavaScript (Vanilla)**: Lógica de cálculo y manipulación del DOM
- **Chart.js**: Biblioteca para generación de gráficos interactivos

## Cómo Usar

1. **Balance Inicial**: Ingresa el monto inicial de tu inversión
2. **Depósito Periódico**: Define cuánto aportarás mensualmente
3. **Ratio Interés Anual**: Establece el porcentaje de rendimiento anual esperado
4. **Duración**: Especifica por cuántos años mantendrás la inversión
5. Haz clic en **"Calcula tu interes compuesto"**
6. Visualiza los resultados en el gráfico generado

## Instalación y Ejecución Local

### Prerrequisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, pero recomendado)

### Opción 1: Abrir directamente
```bash
# Clona el repositorio
git clone https://github.com/bysergygp/Compound-Interest-Calculator.git

# Navega al directorio
cd Compound-Interest-Calculator

# Abre el archivo index.html en tu navegador
```

### Opción 2: Con servidor local
```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (npx)
npx http-server

# Accede a http://localhost:8000/src/index.html
```

## Estructura del Proyecto

```
Compound-Interest-Calculator/
├── src/
│   ├── index.html          # Archivo principal HTML
│   ├── index.js            # Lógica de cálculo y gráficos
│   ├── index.css           # Estilos de la aplicación
│   └── svg/                # Iconos e imágenes vectoriales
│       ├── initial-balance-icon.svg
│       ├── mensual-contribution-icon.svg
│       ├── performance-icon.svg
│       ├── period-icon.svg
│       ├── graph-icon.svg
│       └── params-icon.svg
└── README.md
```

## Fórmula de Cálculo

La aplicación utiliza la fórmula de interés compuesto con contribuciones periódicas:

- **Capitalización mensual** del balance existente
- **Cálculo del interés** sobre cada contribución mensual desde el momento del depósito
- **Acumulación anual** de todos los intereses generados

## Ejemplo de Uso

**Escenario:**
- Balance inicial: $1,000
- Depósito mensual: $200
- Rendimiento anual: 7%
- Duración: 10 años

El gráfico mostrará año por año cómo crece tu inversión, diferenciando entre tu capital aportado y el interés generado.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto:

1. Haz un fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva característica'`)
4. Sube tu rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## Licencia

Este proyecto está disponible como código abierto.

## Autor

Creado por [bysergygp](https://github.com/bysergygp)

---

**Nota**: Los cálculos proporcionados son estimaciones y no constituyen asesoría financiera. Consulta con un profesional antes de tomar decisiones de inversión.
