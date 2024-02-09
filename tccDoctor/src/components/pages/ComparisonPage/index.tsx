import { Button } from "../../atoms/Button";
import * as S from "./styles";
import {
  faDownload,
  faHeartPulse,
  faCalendar,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import AnalysisTemplate from "../../templates/AnalysisTemplate";
import PatientCard from "../../organisms/PatientCard";
import PreassureCard from "../../organisms/PreassureCard";
import getBloodPreassure from "../../../mocks/BloodPressure/getBloodPreassure";
import calculatePressureStatistics from "../../../utils/calculatePressureStatistics";
import AlertCard from "../../organisms/AlertCard";
import BloodPreassure from "../../../interfaces/bloodPreassure";
import BloodPressureChart from "../../molecules/BloodPressureChart";
import RemindersCard from "../../organisms/RemindersCard";
import getReminders from "../../../mocks/Reminders/getReminders";
import MedicinesCard from "../../organisms/MedicinesCard";
import getMedicines from "../../../mocks/Medicines/getMedicines";
import RecommendationsCard from "../../organisms/RecommendationsCard";
import getRecommendation from "../../../mocks/Recommendations/getRecommendation";
import calculateMode from "../../../utils/calculateMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ComparisonPage = () => {
  const patient = {
    name: "Ana Maria Silva",
    age: 70,
    imc: "Sobrepeso",
    hyhypertensionLevel: "Nível 2",
    diseases: "Diabetes tipo I",
  };

  const bloodPreassures = getBloodPreassure();
  const reminders = getReminders();
  const medicines = getMedicines();
  const recommendations = getRecommendation();

  const pressureStatistics = calculatePressureStatistics(bloodPreassures);
  const mode = calculateMode(bloodPreassures);

  const filterAndFormatCriticalBloodPressures = (
    bloodPressures: BloodPreassure[]
  ): { date: string; pressure: string }[] => {
    const criticalPressures = bloodPressures.filter((pressure) => {
      return pressure.pressureLevel === "critical";
    });

    return criticalPressures.map((pressure) => {
      const { systolicPressure, dystolicPressure, date } = pressure;
      const formattedDate = date.toLocaleString();
      const formattedPressure = `${systolicPressure} por ${dystolicPressure}`;
      return { date: formattedDate, pressure: formattedPressure };
    });
  };

  const criticalFormattedPressures =
    filterAndFormatCriticalBloodPressures(bloodPreassures);

  const getDatesAndPressures = (
    bloodPressures: BloodPreassure[]
  ): { dates: string[]; pressures: string[] } => {
    const dates: string[] = [];
    const pressures: string[] = [];

    bloodPressures.forEach((pressure) => {
      const { systolicPressure, dystolicPressure, date } = pressure;

      const formattedDate = date.toLocaleString();

      const formattedPressure = `${systolicPressure} por ${dystolicPressure}`;

      dates.push(formattedDate);
      pressures.push(formattedPressure);
    });

    return { dates, pressures };
  };

  const { dates, pressures } = getDatesAndPressures(bloodPreassures);

  const getSystolicAndDiastolicPressures = (
    bloodPressures: BloodPreassure[]
  ): { systolicPressures: number[]; diastolicPressures: number[] } => {
    const systolicPressures: number[] = [];
    const diastolicPressures: number[] = [];

    bloodPressures.forEach((pressure) => {
      const { systolicPressure, dystolicPressure } = pressure;

      systolicPressures.push(systolicPressure);
      diastolicPressures.push(dystolicPressure);
    });

    return { systolicPressures, diastolicPressures };
  };

  const { systolicPressures, diastolicPressures } =
    getSystolicAndDiastolicPressures(bloodPreassures);

  return (
    <>
      <AnalysisTemplate>
        <S.DashboardContainer>
          <S.DashboardHeader>
            <S.TitleStyled>
              {`Dashboard  `} <FontAwesomeIcon icon={faChartLine} />
            </S.TitleStyled>
            <Button icon={faDownload}>Exportar</Button>
          </S.DashboardHeader>
          <div className="cards">
            <PatientCard
              hyhypertensionLevel={patient.hyhypertensionLevel}
              diseases={patient.diseases}
              age={patient.age}
              imc={patient.imc}
              name={patient.name}
            />
            <AlertCard criticalPreassure={criticalFormattedPressures} />
          </div>
          <div className="cards">
            <BloodPressureChart
              dystolicPressure={diastolicPressures}
              systolicPressure={systolicPressures}
            />
            <div className="cards-column">
              <PreassureCard
                maxValue={pressureStatistics.maxValue}
                mean={pressureStatistics.mean}
                mode={mode.mode}
                standardDeviation={pressureStatistics.standardDeviation}
              />
              <RemindersCard reminders={reminders} />
            </div>
          </div>
          <div className="cards">
            <MedicinesCard medicines={medicines} />
            <RecommendationsCard recommendations={recommendations} />
          </div>

          <S.DashboardTable></S.DashboardTable>
        </S.DashboardContainer>
      </AnalysisTemplate>
    </>
  );
};

export default ComparisonPage;
