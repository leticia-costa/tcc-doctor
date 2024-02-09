import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../../../constants/colors";
import { Title } from "../../atoms/Title";
import { Card, Description, Label } from "../PatientCard/styles";
import { MedicinesCardProps } from "./types";
import { faPills } from "@fortawesome/free-solid-svg-icons";

export const MedicinesCard = ({ medicines }: MedicinesCardProps) => {
  return (
    <>
      <Card data-testid="MedicinesCard">
        <div className="title">
          <FontAwesomeIcon icon={faPills} />
          <Title color={colors.darkest}>Medicação</Title>
        </div>
        {medicines.map((medicne) => (
          <>
            <div className="info">
              <Label>
                {medicne.type === "normal" ? "Diário:" : "Pressão alta:"}
              </Label>
              <Description>{` ${medicne.medicine} `}</Description>
            </div>
            <div className="info divisor">
              <Label>
                {"Instruções:"}
              </Label>
              <Description>{` ${medicne.instruction} `}</Description>
            </div>
          </>
        ))}
      </Card>
    </>
  );
};

export default MedicinesCard;
