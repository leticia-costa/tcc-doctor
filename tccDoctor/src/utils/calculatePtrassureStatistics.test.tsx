import calculatePressureStatistics from "./calculatePressureStatistics";

describe("calculatePressureStatistics function", () => {
    it('should calculate mean, maxValue, and standard deviation for systolic and diastolic pressures', () => {
        const bloodPressures = [
          { systolicPressure: 120, dystolicPressure: 80 },
          { systolicPressure: 130, dystolicPressure: 90 },
          { systolicPressure: 140, dystolicPressure: 95 },
          { systolicPressure: 120, dystolicPressure: 80 },
          { systolicPressure: 150, dystolicPressure: 100 },
        ];
      
        const result = calculatePressureStatistics(bloodPressures);
      
        expect(result.mean).toMatch(/^\d+ por \d+$/);
      
        expect(result.maxValue).toMatch(/^\d+ por \d+$/);
      
    });   

});
