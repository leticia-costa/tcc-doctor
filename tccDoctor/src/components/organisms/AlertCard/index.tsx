import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../../../constants/colors";
import { Title } from "../../atoms/Title";
import { Card, Description, Label } from "../PatientCard/styles";
import { AlertCardProps } from "./types";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export const AlertCard = ({ criticalPreassure }: AlertCardProps) => {
  return (
    <>
      <Card data-testid="AlertCard">
        <div className="title">
          <FontAwesomeIcon icon={faTriangleExclamation} />
          <Title color={colors.darkest}>Alertas</Title>
        </div>
        {criticalPreassure.map((critical) => (
          <div className="info">
            <Label>{`Pressão: `}</Label>
            <Description>{` ${critical.pressure} `}</Description>
            <Description>{` en ${critical.date} `}</Description>
          </div>
        ))}
      </Card>
    </>
  );
};

export default AlertCard;
