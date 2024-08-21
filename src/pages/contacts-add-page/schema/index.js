import * as yup from "yup";

export const schema = yup.object({
  fullName: yup
    .string()
    .required("نام کامل خود را وارد نمایید!")
    .min(6, "حداقل شش کاراکتر وارد نمایید!"),

  imgSrc: yup.string().required("درج آدرس تصویر الزامی می باشد!"),
  phoneNumber: yup
    .string()
    .required("وارد کردن شماره همراه الزامی می باشد.")
    .matches(
      /((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g,
      "فرمت شماره همراه معتبر نمی باشد."
    )
    .max(14, "حداکثر چهارده رقم معتبر است.")
    .min(10, "حداقل ده رقم معتبر است."),

  email: yup
    .string()
    .required("ایمیل خود را وارد نمایید!")
    .email("فرمت ایمیل معتبر نمی باشد!"),

  job: yup.string().required("وارد کردن شغل الزامی می باشد!"),
  relative: yup.string().required("نسبت خود با مخاطب را انتخاب کنید!"),
});
