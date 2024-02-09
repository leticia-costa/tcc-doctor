import BloodPreassure from "../interfaces/bloodPreassure";

function calculateMode(
  bloodPressures:
    | BloodPreassure[]
    | {
        systolicPressure: number;
        dystolicPressure: number;
      }[]
): {
  mode: string;
} {
  const systolicValues = bloodPressures.map((bp) => bp.systolicPressure);
  const diastolicValues = bloodPressures.map((bp) => bp.dystolicPressure);

  const calcMode = (numbers: number[]): number | string => {
    const frequency: Record<number, number> = {};
    numbers.forEach((number) => {
      frequency[number] = (frequency[number] || 0) + 1;
    });

    let mode: number[] = [];
    let maxFreqtency = 0;
    for (const number in frequency) {
      if (frequency[number] > maxFreqtency) {
        mode = [parseInt(number, 10)];
        maxFreqtency = frequency[number];
      } else if (frequency[number] === maxFreqtency) {
        mode.push(parseInt(number, 10));
      }
    }

    return mode[0];
  };

  return {
    mode: `${calcMode(systolicValues)} por ${calcMode(diastolicValues)}`,
  };
}

export default calculateMode;
