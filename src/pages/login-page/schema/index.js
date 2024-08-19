import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .required("ایمیل خود را وارد نمایید!")
    .email("فرمت ایمیل معتبر نمی باشد!"),

  password: yup
    .string()
    .required("رمز عبور خود را وارد نمایید!")
    .min(8, "حداقل هشت کاراکتر وارد نمایید!")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d).+$/,
      "رمز عبور باید شامل حداقل یک حرف و یک عدد باشد!"
    ),
});
