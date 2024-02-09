import BloodPreassure from "../interfaces/bloodPreassure";

function calculatePressureStatistics(
  bloodPressures:
    | BloodPreassure[]
    | {
        systolicPressure: number;
        dystolicPressure: number;
      }[]
): {
  mean: string;
  maxValue: string;
  standardDeviation: string;
} {
  const systolicValues = bloodPressures.map((bp) => bp.systolicPressure);
  const diastolicValues = bloodPressures.map((bp) => bp.dystolicPressure);

  const calculateMean = (values: number[]): string => {
    const mean = values.reduce((acc, val) => acc + val, 0) / values.length;
    return mean.toFixed(0);
  };

  const calculateStandardDeviation = (values: number[]): number => {
    const mean = values.reduce((acc, val) => acc + val, 0) / values.length;
    const squaredDifferences = values.map((val) => Math.pow(val - mean, 2));
    const variance =
      squaredDifferences.reduce((acc, val) => acc + val, 0) / values.length;
    const standardDeviation = Math.sqrt(variance);

    return Number(standardDeviation.toFixed(3));
  };

  return {
    mean: `${calculateMean(systolicValues)} por ${calculateMean(
      diastolicValues
    )}`,
    maxValue: `${Math.max(...systolicValues)} por ${Math.max(
      ...diastolicValues
    )}`,
    standardDeviation: `sistólica  ${calculateStandardDeviation(
      systolicValues
    )} - distólica ${calculateStandardDeviation(diastolicValues)} `,
  };
}
export default calculatePressureStatistics;
