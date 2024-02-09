import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../../../constants/colors";
import { Title } from "../../atoms/Title";
import { Card, Description, Label } from "../PatientCard/styles";
import { PreassureCardProps } from "./types";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";

export const PreassureCard = ({
  maxValue,
  mean,
  mode,
  standardDeviation,
}: PreassureCardProps) => {
  return (
    <>
      <Card data-testid="PreassureCard">
        <div className="title">
          <FontAwesomeIcon icon={faHeartPulse} />
          <Title color={colors.darkest}>Informaoes sobre pressão</Title>
        </div>
        <div className="info">
          <Label>Média de pressão: </Label>
          <Description>{mean}</Description>
        </div>
        <div className="info">
          <Label>Pressão mais alta registrada: </Label>
          <Description>{maxValue}</Description>
        </div>
        <div className="info">
          <Label>Pressão mais reocorrente: </Label>
          <Description>{mode}</Description>
        </div>
        <div className="info">
          <Label>Desvio padrão: </Label>
          <Description>{standardDeviation}</Description>
        </div>
      </Card>
    </>
  );
};

export default PreassureCard;
