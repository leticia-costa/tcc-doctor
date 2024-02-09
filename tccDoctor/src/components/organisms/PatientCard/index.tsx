import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../../../constants/colors";
import { Title } from "../../atoms/Title";
import * as S from "./styles";
import { PatientCardProps } from "./types";
import { faPerson } from "@fortawesome/free-solid-svg-icons";

export const PatientCard = ({
  name,
  age,
  diseases,
  hyhypertensionLevel,
  imc,
}: PatientCardProps) => {
  return (
    <>
      <S.Card data-testid="PatientCard">
        <div className="title">
          <FontAwesomeIcon icon={faPerson} />
          <Title color={colors.darkest}>Informações sobre o paciente</Title>
        </div>

        <div className="info">
          <S.Label>Nome: </S.Label>
          <S.Description>{name}</S.Description>
        </div>
        <div className="info">
          <S.Label>Idade: </S.Label>
          <S.Description>{age}</S.Description>
        </div>
        <div className="info">
          <S.Label>Doenças: </S.Label>
          <S.Description>{diseases}</S.Description>
        </div>
        <div className="info">
          <S.Label>Nível de hipertensão: </S.Label>
          <S.Description>{hyhypertensionLevel}</S.Description>
        </div>
        <div className="info">
          <S.Label>Índice de massa corporal: </S.Label>
          <S.Description>{imc}</S.Description>
        </div>
      </S.Card>
    </>
  );
};

export default PatientCard;
