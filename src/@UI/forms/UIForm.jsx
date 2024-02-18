import React from "react";
import styles from "./UIForm.module.css";
import { useForm } from "react-hook-form";

export default function UIForm({
  sendDiscount,
  sendProduct,
  basketProducts,
  setIsModal,
  emptyCart,
  button,
  input_styles,
  button_styles,
}) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    sendDiscount && sendDiscount({ ...data });
    sendProduct && sendProduct({ ...data, order: basketProducts });
    emptyCart && emptyCart();
    console.log({ ...data, order: basketProducts });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container_form}>
      <input
        {...register("name", {
          requared: "field is requared",
        })}
        type="text"
        className={input_styles}
        placeholder="Name"
      />
      {errors?.name && <p>{errors.name?.message}</p>}

      <input
        {...register("number", {
          requared: "field is requared",
          minLength: { value: 13, message: "13 characters" },
          maxLength: { value: 13, message: "13 characters" },
        })}
        type="number"
        className={input_styles}
        placeholder="Phone number"
      />
      {errors?.number && <p>{errors.number?.message}</p>}

      <input
        {...register("email", {
          requared: "field is requared",
        })}
        type="email"
        className={input_styles}
        placeholder="Email"
      />
      {errors?.email && <p>{errors.email?.message}</p>}
      <button
        disabled={!isValid}
        className={button_styles}
        onClick={() => setIsModal && setIsModal(true)}
      >
        {button}
      </button>
    </form>
  );
}
