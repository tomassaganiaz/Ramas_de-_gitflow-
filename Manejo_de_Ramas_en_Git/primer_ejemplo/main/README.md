# 🛠️ Flujo de Trabajo - GitFlow

Este proyecto sigue la metodología **GitFlow** para organizar el desarrollo de forma ordenada y colaborativa.

---

## 🌳 Estructura de Ramas y Grupos

### 1️⃣ **main** (rama principal)
- Es el **código en producción**.
- Siempre estable y funcional.
- Solo recibe merges desde `release/` y `hotfix/`.


GitFlow-Proyecto/
│
├── main/                      # Código estable en producción
│   └── README.md              # Documentación general del proyecto
│
├── develop/                   # Rama de integración
│   └── integracion.txt        # Registro de merges y pruebas
│
├── feature/                   # Nuevas funcionalidades
│   ├── login/                 # Ejemplo: sistema de login
│   │   └── login.js
│   └── menu/                  # Ejemplo: menú de navegación
│       └── menu.js
│
├── bugfix/                    # Correcciones menores
│   ├── footer-typo/           # Ejemplo: error tipográfico
│   │   └── footer.html
│   └── header-align/          # Ejemplo: alineación del header
│       └── header.css
│
├── release/                   # Preparación de versiones
│   ├── release-1.0/           # Versión 1.0
│   │   └── changelog.md
│   └── release-1.1/           # Versión 1.1
│       └── changelog.md
│
├── hotfix/                    # Correcciones urgentes
│   ├── fix-bug-login/         # Bug crítico en login
│   │   └── login.js
│   └── fix-responsive/        # Problema de diseño responsive
│       └── style.css
│
├── support/                   # Mantenimiento de versiones antiguas
│   └── v1.0/                  # Soporte para versión 1.0
│       └── legacy-fix.js
│
└── experiment/                # Prototipos y pruebas
    └── new-ui/                # Interfaz experimental
        └── ui-prototype.html
