class Solution {
    carFleet(target: number, position: number[], speed: number[]): number {
        if (position.length === 0) return 0;
        let cars = position.map((pos, index) => {
            return {
                pos: pos,
                time: (target - pos) / speed[index],
            };
        });
        cars.sort((a, b) => a.pos - b.pos);

        let fleets = 1;
        let currentFleetTime = cars[cars.length - 1].time;


        for (let i = cars.length - 2; i >= 0; i--) {
            if (cars[i].time > currentFleetTime) {
                fleets++;
                currentFleetTime = cars[i].time;
            }
        }

        return fleets;
    }
}