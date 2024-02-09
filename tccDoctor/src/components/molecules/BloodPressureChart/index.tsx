import React from "react";
import { LineChart } from "@mui/x-charts";
import colors from "../../../constants/colors";
import { ChartCard } from "./styles";

interface BloodPressureChartProps {
  systolicPressure: number[];
  dystolicPressure: number[];
}

const BloodPressureChart: React.FC<BloodPressureChartProps> = ({
  systolicPressure,
  dystolicPressure,
}) => {
  return (
    <ChartCard>
      <LineChart
        height={400}
        series={[
          { curve: "linear", data: systolicPressure, color: colors.dark },
          { curve: "linear", data: dystolicPressure, color: colors.purple },
        ]}
      />
    </ChartCard>
  );
};

export default BloodPressureChart;
