import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../../../constants/colors";
import { Title } from "../../atoms/Title";
import { Card, Description, Label } from "../PatientCard/styles";
import { RecommendationsCardProps } from "./types";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { PressureLevel } from "../../../interfaces/bloodPreassure";

export const RecommendationsCard = ({ recommendations }: RecommendationsCardProps) => {
  
  const pressureLabels: Record<PressureLevel, string> = {
    'critical': 'Pressão Crítica',
    'high': 'Pressão Alta',
    'low': 'Pressão Baixa',
    'normal': 'Pressão Normal',
  };
  
  function getPressureLabel(type: PressureLevel): string {
    return pressureLabels[type] || 'Tipo de pressão desconhecido';
  }

  return (
    <>
      <Card data-testid="RecommendationsCard">
        <div className="title">
          <FontAwesomeIcon icon={faCircleExclamation} />
          <Title color={colors.darkest}>Recomendações</Title>
        </div>
        {recommendations.map((recommendation) => (
          <>
            <div className="info">
              <Label>
                {getPressureLabel(recommendation.type)}
              </Label>
              <Description>{` ${recommendation.description} `}</Description>
            </div>
            <div className="info divisor">
              <Label>
                {"Medicação:"}
              </Label>
              <Description>{` ${recommendation.medicine} `}</Description>
            </div>
          </>
        ))}
      </Card>
    </>
  );
};

export default RecommendationsCard;
