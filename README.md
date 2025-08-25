# Astro Sweep - Space Debris Cleaning Simulator

**Languages**: [🇺🇸 English](README.md) | [🇰🇷 한국어](README_KR.md)

> An interactive 3D simulation game prototype designed to raise awareness about space debris issues and explore potential solutions

![Python](https://img.shields.io/badge/Python-3.x-blue)
![Flask](https://img.shields.io/badge/Flask-Latest-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![CesiumJS](https://img.shields.io/badge/CesiumJS-1.104-red)

## 📖 Project Overview

Astro Sweep is a prototype program designed as a simulation game concept to raise public awareness about space debris problems and explore practical solutions. The space debris issue is a complex and serious problem, but it remains a challenge without clear solutions. This project aims to make this issue more accessible and understandable through the medium of gaming.

## ✨ Key Features

- **3D Earth Visualization**: Real-time 3D Earth model using CesiumJS
- **Space Debris Simulation**: Space debris movement based on actual orbital mechanics
- **Interactive Collection Game**: Keyboard-controlled gameplay for collecting space debris
- **Multi-layered Orbital System**: Space debris distribution across LEO, MEO, and HEO orbits
- **Real-time Scoring System**: Tracking of collected space debris count
- **Physics-based Simulation**: Orbital velocity calculations considering gravitational constants and Earth's mass

## 🛠️ Technology Stack

### Backend

- **Flask**: Python web framework
- **CSV**: Space debris data storage and management

### Frontend

- **CesiumJS 1.104**: 3D Earth and space visualization
- **JavaScript (ES6+)**: Game logic and interaction
- **HTML5 & CSS3**: UI/UX design
- **Font Awesome**: Icon system

### APIs

- **ArcGIS MapServer**: High-resolution satellite imagery
- **CesiumJS API**: 3D visualization and entity management

## 📁 Project Structure

```
DaHacks3.0/
├── app.py                 # Flask main application
├── generateDebris.js      # Space debris data generation script
├── data/
│   └── debris.csv        # Space debris data file
├── models/
│   └── satellite.glb     # 3D model file
└── static/
    ├── index.html        # Main game page
    ├── Info.html         # Project information page
    ├── script.js         # Game logic and CesiumJS control
    └── styles.css        # Stylesheet
```

## 🚀 Installation and Setup

### Prerequisites

- Python 3.x
- Node.js (for space debris data generation)
- Modern web browser (WebGL support required)

### Installation Steps

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/DaHacks3.0.git
cd DaHacks3.0
```

2. **Install Python Dependencies**

```bash
pip install flask
```

3. **Generate Space Debris Data (Optional)**

```bash
node generateDebris.js
```

4. **Run Flask Server**

```bash
python app.py
```

5. **Access in Browser**

```
http://localhost:5000
```

## 🎮 Game Controls

| Key | Function                    |
| --- | --------------------------- |
| `↑` | Move collector northward    |
| `↓` | Move collector southward    |
| `←` | Move collector westward     |
| `→` | Move collector eastward     |
| `W` | Increase collector altitude |
| `S` | Decrease collector altitude |

## 🌌 Space Debris Classification

The game simulates space debris in three orbital regions:

- **LEO (Low Earth Orbit)**: 160km - 2,160km altitude (gray dots)
- **MEO (Medium Earth Orbit)**: 2,000km - 35,786km altitude (blue dots)
- **HEO/GEO (High Earth Orbit)**: Above 35,786km altitude (red dots)

Space debris in each orbit moves at velocities calculated according to real physics laws.

## 📊 Data and Physics Model

### Orbital Mechanics

- Gravitational constant: 6.674 × 10⁻¹¹ m³/kg⋅s²
- Earth's mass: 5.972 × 10²⁴ kg
- Orbital velocity: v = √(GM/r)

### Space Debris Data

- Total of 500 simulated space debris objects
- LEO: 300 objects, MEO: 150 objects, HEO: 50 objects
- Each debris has unique orbital parameters

## 🤝 Contributing

1. Fork this repository
2. Create a new feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👥 Team Information

**Five Hs Team** - DaHacks 3.0 Hackathon Participants

## 🔗 References

- [CesiumJS Official Documentation](https://cesium.com/platform/cesiumjs/)
- [ArcGIS World Imagery](https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer)
- [Discord Community](https://discord.gg/rss8p6dP)

---

_Help raise awareness about space debris issues and join efforts for a cleaner space environment! 🌍✨_
