// import React from "react";
// import Addform from "./Addform";
// import Member1 from "./Member1";
// import Member2 from "./Member2";
// import Member3 from "./Member3";
// import ConfirmTeam from './ConfirmTeam';
// import Submit from "./Submit";
// import { useForm, useStep } from "react-hooks-helper";

// const defaultData = {
//   // HackathonName: "",
//   TeamName: "",
//   TeamLeader: "",
//   RollNo: "",
//   Branch: "",
//   Email: "",
//   AddDescription: "",
//   // MobileNo: "",
//   MemberName: "",
//   MemberRollNo: "",
//   MemberBranch: "",
//   MemberEmail: "",
//   MemberName1: "",
//   MemberRollNo1: "",
//   MemberBranch1: "",
//   MemberEmail1: "",
//   MemberName2: "",
//   MemberRollNo2: "",
//   MemberBranch2: "",
//   MemberEmail2: "",
// };

// const steps = [
//   { id: "Addform" },
//   { id: "Member1" },
//   { id: "Member2" },
//   { id: "Member3" },
//   { id: "ConfirmTeam" },
//   { id: "submit" },
// ];

// const MultiStepForm = () => {
//   const [formData, setForm] = useForm(defaultData);
//   const { step, navigation } = useStep({
//     steps,
//     initialStep: 0,
//   });

//   const props = { formData, setForm, navigation };

//   switch (step.id) {
//     case "Addform":
//       return <Addform { ...props } />;
//     case "Member1":
//       return <Member1 { ...props } />;
//     case "Member2":
//       return <Member2 { ...props } />;
//     case "Member3":
//       return <Member3 { ...props } />;
//     case "ConfirmTeam":
//       return <ConfirmTeam { ...props } />;
//     case "submit":
//       return <Submit {...props} />;
//     default:
//   }

//   return (
//     <div>
//       <h1>MultiStepForm</h1>
//     </div>
//   );
// };

// export default MultiStepForm;

import React, { Component } from "react";
import AddFrom from "./Addform";
import Member1 from "./Member1";
import Member2 from "./Member2";
import Member3 from "./Member3";
import Confirm from "./Confirm";
import Submit from "./Submit";

export class Form extends Component {
  state = {
    step: 1,
    TeamName: "",
    TeamLeader: "",
    RollNo: "",
    Branch: "",
    Email: "",
    AddDescription: "",
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

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  inputChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    const { step } = this.state;
    const {
      TeamName,
      TeamLeader,
      RollNo,
      Branch,
      Email,
      AddDescription,
      MemberName,
      MemberRollNo,
      MemberBranch,
      MemberEmail,
      MemberName1,
      MemberRollNo1,
      MemberBranch1,
      MemberEmail1,
      MemberName2,
      MemberRollNo2,
      MemberBranch2,
      MemberEmail2,
    } = this.state;

    const values = {
      TeamName,
      TeamLeader,
      RollNo,
      Branch,
      Email,
      AddDescription,
      MemberName,
      MemberRollNo,
      MemberBranch,
      MemberEmail,
      MemberName1,
      MemberRollNo1,
      MemberBranch1,
      MemberEmail1,
      MemberName2,
      MemberRollNo2,
      MemberBranch2,
      MemberEmail2,
    };

    switch (step) {
      case 1:
        return (
          <AddFrom
            nextStep={this.nextStep}
            inputChange={this.inputChange}
            values={values}
          />
        );
      case 2:
        return (
          <Member1
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            inputChange={this.inputChange}
            values={values}
          />
        );
      case 3:
        return (
          <Member2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            inputChange={this.inputChange}
            values={values}
          />
        );
      case 4:
        return (
          <Member3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            inputChange={this.inputChange}
            values={values}
          />
        );
      case 5:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 6:
        return <Submit />;
      default:
        return <Submit />;
    }
  }
}

export default Form;
