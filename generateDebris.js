const fs = require('fs'); // 파일 시스템 모듈 사용

// 우주 파편 데이터 생성 함수
function generateDebrisData() {
    const debris = [];

    for (let i = 0; i < 50; i++) {
        const Leo = 160000 + Math.random() * 2000000; //MEO earth orbit
        const angle = Math.random() * 2 * Math.PI;
        const altitude = Leo; // LEO
        const speed = (0.01 + Math.random() * 0.02).toFixed(3); // 속도
        const inclination = (Math.random() * 90 - 45).toFixed(2); // 경사각 (-45 ~ 45)
        const lon = (Math.random() * 360 - 180).toFixed(2); // 경도 (-180 ~ 180)
        const lat = (Math.random() * 180 - 90).toFixed(2); // 위도 (-90 ~ 90)

        debris.push({
            name: `Debris-Leo${i + 1}`,
            altitude: altitude.toFixed(2),
            latitude: lat,
            longitude: lon,
            speed: speed,
            inclination: inclination,
        });
    }

    for (let i = 0; i < 50; i++) {
        const Meo = 2000000 + Math.random()*(32786000); //MEO earth orbit
        const angle = Math.random() * 2 * Math.PI;
        const altitude = Meo; // Meo
        const speed = (0.005 + Math.random() * 0.01).toFixed(3); // 속도
        const inclination = (Math.random() * 90 - 45).toFixed(2); // 경사각 (-45 ~ 45)
        const lon = (Math.random() * 360 - 180).toFixed(2); // 경도 (-180 ~ 180)
        const lat = (Math.random() * 180 - 90).toFixed(2); // 위도 (-90 ~ 90)

        debris.push({
            name: `Debris-Meo${i + 1}`,
            altitude: altitude.toFixed(2),
            latitude: lat,
            longitude: lon,
            speed: speed,
            inclination: inclination,
        });
    }

    for (let i = 0; i < 50; i++) {
        const Heo = 35786000 + Math.random()*2000000; // HEO earth orbit
        const angle = Math.random() * 2 * Math.PI;
        const altitude = Heo; // Meo
        const speed = (0.001 + Math.random() * 0.005).toFixed(3); // 속도
        const inclination = (Math.random() * 90 - 45).toFixed(2); // 경사각 (-45 ~ 45)
        const lon = (Math.random() * 360 - 180).toFixed(2); // 경도 (-180 ~ 180)
        const lat = (Math.random() * 180 - 90).toFixed(2); // 위도 (-90 ~ 90)

        debris.push({
            name: `Debris-Heo${i + 1}`,
            altitude: altitude.toFixed(2),
            latitude: lat,
            longitude: lon,
            speed: speed,
            inclination: inclination,
        });
    }

    return debris;
}

// CSV 형식으로 변환 및 저장
function saveToCSV(debris) {
    const headers = "Name,Altitude,Latitude,Longitude,Speed,Inclination\n";
    const rows = debris.map(d => 
        `${d.name},${d.altitude},${d.latitude},${d.longitude},${d.speed},${d.inclination}`
    ).join('\n');

    const csvContent = headers + rows;

    // CSV 파일로 저장
    fs.writeFile('space_debris.csv', csvContent, (err) => {
        if (err) {
            console.error('Error writing to CSV file', err);
        } else {
            console.log('CSV file saved as space_debris.csv');
        }
    });
}

// 메인 실행 함수
const debrisData = generateDebrisData();
saveToCSV(debrisData);
