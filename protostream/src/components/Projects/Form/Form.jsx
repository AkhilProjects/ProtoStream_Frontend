import React from "react";
import Addform from "./Addform";
import Member1 from "./Member1";
import Member2 from "./Member2";
import Member3 from "./Member3";
import ConfirmTeam from './ConfirmTeam';
import Submit from "./Submit";
import { useForm, useStep } from "react-hooks-helper";

const defaultData = {
  HackathonName: "",
  TeamName: "",
  TeamLeader: "",
  RollNo: "",
  Branch: "",
  Email: "",
  AddDescription: "",
  MobileNo: "",
  MemberName: "",
  MemberRollNo: "",
  MemberBranch: "",
  MemberEmail: "",
  MemberName1: "",
  MemberRollNo1: "",
  MemberBranch1: "",
  MemberEmail1: "",
  MemberName2: "",
  MemberRollNo2: "",
  MemberBranch2: "",
  MemberEmail2: "",
};

const steps = [
  { id: "Addform" },
  { id: "Member1" },
  { id: "Member2" },
  { id: "Member3" },
  { id: "ConfirmTeam" },
  { id: "submit" },
];

const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "Addform":
      return <Addform {...props} />;
    case "Member1":
      return <Member1 {...props} />;
    case "Member2":
      return <Member2 {...props} />;
    case "Member3":
      return <Member3 {...props} />;
    case "ConfirmTeam":
      return <ConfirmTeam {...props} />;
    case "submit":
      return <Submit {...props} />;
    default:
  }

  return (
    <div>
      <h1>MultiStepForm</h1>
    </div>
  );
};

export default MultiStepForm;
