import React, { useContext } from "react";
import styles from "./UIForm.module.css";
import { useForm } from "react-hook-form";
import { ModalState } from "../../pages/cart/index";
import { Link } from "react-router-dom";

export default function UIForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const { isModal, setIsModal } = useContext(ModalState);
  console.log(isModal);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container_form}>
      <input
        {...register("name", {
          requared: "field is requared",
        })}
        type="text"
        className={styles.input_order_form}
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
        className={styles.input_order_form}
        placeholder="Phone number"
      />
      {errors?.number && <p>{errors.number?.message}</p>}

      <input
        {...register("email", {
          requared: "field is requared",
        })}
        type="email"
        className={styles.input_order_form}
        placeholder="Email"
      />
      {errors?.email && <p>{errors.email?.message}</p>}
      <Link className={styles.order_btn} to={"/CartIsEmpty"}>
        <button
          disabled={!isValid}
          className={styles.form_button}
          onClick={() => setIsModal(true)}
        >
          Order
        </button>
      </Link>
    </form>
  );
}
