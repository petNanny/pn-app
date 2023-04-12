import * as Yup from "yup";

const abnRegex = /^\d{11}$/;
const bsbRegex = /^\d{6}$/;
const accountRegex = /^\d{16}$/;

const PaymentMethodSchema = Yup.object().shape({
  abn: Yup.string().matches(abnRegex, "Must provide 11 digits"),
  bsb: Yup.string().matches(bsbRegex, "Must provide 6 digits"),
  accountNumber: Yup.string().matches(accountRegex, "Must provide 16 digits"),
});

export default PaymentMethodSchema;
