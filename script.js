        // Initialize the imagery and terrain providers
        const imageryProvider = new Cesium.ArcGisMapServerImageryProvider({
            url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
        });
        const terrainProvider = new Cesium.EllipsoidTerrainProvider();
        
        // Create the Cesium Viewer with custom imagery and terrain
        const viewer = new Cesium.Viewer('cesiumContainer', {
            terrainProvider: terrainProvider,
            imageryProvider: imageryProvider,
            // infoBox: true,  // InfoBox 활성화
            selectionIndicator: true,  // 선택된 엔티티에 대한 표시
            baseLayerPicker: false  // 기본 레이어 선택기 비활성화
        });

        // Initialize score tracking
        let collectedCount = 0;

        // Generate space debris with random initial conditions
        let debris = [];
        const Gconst = 6.674e-11;
        const Mearth = 5.972e24;
        for (let i = 0; i < 50; i++) {
            const angle = Math.random() * 2 * Math.PI;
            const Leo = 160000  + Math.random()*2000000; //low earth orbit
            // const Lvelocity = Math.sqrt((Gconst*Mearth)/Leo)
            debris.push({
                angle: angle, // Random initial angle
                radius: Leo, // Fixed altitude
                speed: 0.01 + Math.random() * 0.02, // Random rotational speed
                inclination: Math.random() * 90 - 45, // Random inclination (-45° to 45°)
                initialLon: Math.random() * 360 - 180, // Random initial longitude (-180° to 180°)
                initialLat: Math.random() * 180 - 90, // Random initial latitude (-90° to 90°)
                entity: viewer.entities.add({
                    position: Cesium.Cartesian3.fromDegrees(0, 0, Leo), // Temporary initial position
                    point: { pixelSize: 5, color: Cesium.Color.GRAY }
                }),
                collected: false // Collection status
            });
        }

        for (let i = 0; i < 50; i++) {
            const angle = Math.random() * 2 * Math.PI;
            const Meo = 2000000 + Math.random()*(32786000); //MEO earth orbit
            debris.push({
                angle: Math.random() * 2 * Math.PI, // Random initial angle
                radius: Meo,
                speed: 0.005 + Math.random() * 0.01, // Random rotational speed
                inclination: Math.random() * 90 - 45, // Random inclination (-45° to 45°)
                initialLon: Math.random() * 360 - 180, // Random initial longitude (-180° to 180°)
                initialLat: Math.random() * 180 - 90, // Random initial latitude (-90° to 90°)
                entity: viewer.entities.add({
                    position: Cesium.Cartesian3.fromDegrees(0, 0, Meo), // Temporary initial position
                    point: { pixelSize: 5, color: Cesium.Color.BLUE }
                }),
                collected: false // Collection status
            });
        }

        for (let i = 0; i < 50; i++) {
            const angle = Math.random() * 2 * Math.PI;
            const Heo = 35786000 + Math.random()*2000000; //HEO earth orbit
            debris.push({
                angle: Math.random() * 2 * Math.PI, // Random initial angle
                radius: Heo,
                speed: 0.001 + Math.random() * 0.005, // Random rotational speed
                inclination: Math.random() * 90 - 45, // Random inclination (-45° to 45°)
                initialLon: Math.random() * 360 - 180, // Random initial longitude (-180° to 180°)
                initialLat: Math.random() * 180 - 90, // Random initial latitude (-90° to 90°)
                entity: viewer.entities.add({
                    position: Cesium.Cartesian3.fromDegrees(0, 0, Heo), // Temporary initial position
                    point: { pixelSize: 5, color: Cesium.Color.RED }
                }),
                collected: false // Collection status
            });
        }

        // Initialize the collector
        let collectorAltitude = 2000000;
        const collector = {
            entity: viewer.entities.add({
                name: 'Collector',
                position: Cesium.Cartesian3.fromDegrees(0, 0, collectorAltitude), // Initial collector position
                point: { pixelSize: 20, color: Cesium.Color.GREEN },
                description: `<h3>Collector Information</h3>
                          <p>Altitude: ${collectorAltitude} meters</p>
                          <p>Latitude: 0°</p><p>Longitude: 0°</p>`
            }),
            speed: 2, // Movement speed of the collector
            altitudeChange: 50000 // Change in altitude per key press
        };

        // Move the collector using arrow key inputs
        window.addEventListener('keydown', (e) => {
            const cartographic = Cesium.Cartographic.fromCartesian(collector.entity.position.getValue());
            let lat = Cesium.Math.toDegrees(cartographic.latitude);
            let lon = Cesium.Math.toDegrees(cartographic.longitude);

            switch (e.key) {
                case 'ArrowUp': lat += collector.speed; break;
                case 'ArrowDown': lat -= collector.speed; break;
                case 'ArrowLeft': lon -= collector.speed; break;
                case 'ArrowRight': lon += collector.speed; break;
                case 'w': collectorAltitude += collector.altitudeChange; break;
                case 's': collectorAltitude = Math.max(0, collectorAltitude - collector.altitudeChange); break;
            }

            collector.entity.position = Cesium.Cartesian3.fromDegrees(lon, lat, collectorAltitude);
        });

        // Detect collisions between the collector and debris, and remove collected debris
        function detectCollision() {
            debris = debris.filter(d => {
                if (d.collected) return false; // Skip already collected debris

                const debrisPosition = d.entity.position.getValue(Cesium.JulianDate.now());
                const collectorPosition = collector.entity.position.getValue(Cesium.JulianDate.now());
                
                const distance = Cesium.Cartesian3.distance(debrisPosition, collectorPosition);

                if (distance < 10000) { // Handle collision
                    d.collected = true; // Update collection status
                    viewer.entities.remove(d.entity); // Remove debris entity
                    collectedCount++; // Increment collected count
                    updateScore(); // Update score display
                    return false; // Remove debris from the array
                }
                return true; // Keep debris in the array
            });
        }

        // Update the score display
        function updateScore() {
            document.getElementById('score').innerText = `Collected: ${collectedCount}`;
        }

        // Animation loop to update debris positions and detect collisions
        function animateDebris() {
            debris.forEach(d => {
                if (!d.collected) { // Update only uncollected debris
                    d.angle += d.speed; // Increment the angle

                    const lon = d.initialLon + Cesium.Math.toDegrees(d.angle); // Update longitude
                    const lat = d.initialLat + Math.sin(d.angle) * d.inclination; // Update latitude
                    const height = d.radius; // Maintain fixed altitude

                    d.entity.position = Cesium.Cartesian3.fromDegrees(lon, lat, height); // Update position
                }
            });

            detectCollision(); // Detect and handle collisions
            requestAnimationFrame(animateDebris); // Repeat animation
        }

        // Start the animation loop
        animateDebris();
        // 햄버거 아이콘 클릭 시 드롭다운 메뉴 토글
        document.getElementById('hamburgerIcon').addEventListener('click', () => {
            const dropdownMenu = document.getElementById('dropdownMenu');
            dropdownMenu.classList.toggle('hidden');
        });