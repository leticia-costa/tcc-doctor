import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../../../constants/colors";
import { Title } from "../../atoms/Title";
import { Card, Description, Label } from "../PatientCard/styles";
import { RemindersCardProps } from "./types";
import { faBell, faBellSlash } from "@fortawesome/free-solid-svg-icons";

export const RemindersCard = ({ reminders }: RemindersCardProps) => {
  return (
    <>
      <Card data-testid="RemindersCard">
        <div className="title">
          <FontAwesomeIcon icon={faBell} />
          <Title color={colors.darkest}>Lembretes</Title>
        </div>
        {reminders.map((reminder) => (
          <div className="info">
            <Label>
              {reminder.type === "medicine" ? " Medicação:" : " Pressão:"}
            </Label>
            <Description>{` ${reminder.hour} `}</Description>
            <Description>{` ${reminder.description} `}</Description>
            <Label>
              <FontAwesomeIcon icon={reminder.status ? faBell : faBellSlash} />{" "}
            </Label>
          </div>
        ))}
      </Card>
    </>
  );
};

export default RemindersCard;
