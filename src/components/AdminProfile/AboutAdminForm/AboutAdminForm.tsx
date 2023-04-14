import { ListItem, OrderedList } from "@chakra-ui/react";
import FormWrapper from "../../PetSitterProfile/FormWrapper/FormWrapper";

const AboutAdminForm = () => {
  return (
    <FormWrapper title={"Admin Rules"}>
      <OrderedList>
        <ListItem>
          <strong>Authority and Responsibility:</strong> Administrators should work within the scope
          of their authorized permissions and take full responsibility for their actions and
          decisions.
        </ListItem>
        <ListItem>
          <strong>Fairness and Impartiality:</strong> Administrators should maintain fairness and
          impartiality when managing and overseeing user activities, treating all users equally
          without being influenced by personal emotions or biases.
        </ListItem>
        <ListItem>
          <strong>Protection of User Privacy:</strong> Administrators should strictly protect
          users&apos; privacy information, refrain from disclosing, abusing, or accessing
          users&apos; personal information without authorization.
        </ListItem>
        <ListItem>
          <strong>Enforcement of Community Guidelines:</strong> Administrators should actively
          enforce the community guidelines, ensuring that users comply with the prescribed code of
          conduct, and take appropriate measures against users who violate the rules, including
          warnings, content deletion, muting, or account banning.
        </ListItem>
        <ListItem>
          <strong>Communication and Collaboration:</strong> Administrators should maintain good
          communication and collaboration with other administrators and team members, working
          together to uphold the operation and management of the community.
        </ListItem>
        <ListItem>
          <strong>Enforcement of Community Guidelines:</strong> Administrators should actively
          enforce the community guidelines, ensuring that users comply with the prescribed code of
          conduct, and take appropriate measures against users who violate the rules, including
          warnings, content deletion, muting, or account banning.
        </ListItem>
        <ListItem>
          <strong>Self-Management and Restraint:</strong> Administrators should avoid engaging in
          arguments, getting emotional, or engaging in heated debates with users, and should
          maintain a calm, objective, and professional attitude.
        </ListItem>
        <ListItem>
          <strong>Feedback and Improvement:</strong> Administrators should accept feedback from
          users and team members, and continuously improve their management work based on feedback
          received.
        </ListItem>
        <ListItem>
          <strong>Legality and Compliance:</strong> Administrators should comply with all applicable
          laws and regulations, and refrain from engaging in illegal or prohibited activities.
        </ListItem>
        <ListItem>
          <strong>Confidentiality and Non-Disclosure:</strong> Administrators should maintain the
          confidentiality of internal information regarding the community and the team, and should
          not disclose it to unauthorized individuals or organizations.
        </ListItem>
      </OrderedList>
    </FormWrapper>
  );
};

export default AboutAdminForm;
