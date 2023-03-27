import { useFormik } from "formik";
import styled from "styled-components";

const ChooseService = () => {
  const formik = useFormik({
    initialValues: { service: "", select: "default" },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit} className="ownerRequest">
      <label htmlFor="service">Service</label>
      <select {...formik.getFieldProps("service")} className="chooseService">
        <option value="default">-Please select a service-</option>
        <option value="DogBoarding">Dog boarding</option>
        <option value="HouseSitting">House sitting</option>
        <option value="DoggyDayCare">Doggy day care</option>
      </select>
      <label htmlFor="date">Dates</label>
      <p>You can&apos;t book more than 180 days in advance.</p>
      <input type="text" {...formik.getFieldProps("date")} placeholder="please select date" />
      {/* <input type="submit" /> */}
    </Form>
  );
};

const Form = styled.form`
  &&& {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export default ChooseService;
