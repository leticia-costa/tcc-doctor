import calculateMode from "./calculateMode";

describe("calculateMode function", () => {
  it("should calculate mode for systolic and diastolic pressures", () => {
    const bloodPressures = [
      { systolicPressure: 120, dystolicPressure: 80 },
      { systolicPressure: 130, dystolicPressure: 90 },
      { systolicPressure: 120, dystolicPressure: 80 },
      { systolicPressure: 140, dystolicPressure: 95 },
      { systolicPressure: 130, dystolicPressure: 90 },
    ];

    const result = calculateMode(bloodPressures);

    expect(result.mode).toMatch(/^\d+ por \d+$/);
  });

});
