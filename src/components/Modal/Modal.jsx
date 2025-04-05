import styles from "./Modal.module.css";

export const Modal = ({
  totalQuantity,
  totalPrice,
  email,
  setEmail,
  onClose,
}) => {
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>Your Order</h2>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price: {totalPrice.toFixed(2)} USD</p>
        <input
          className={styles.modal__email}
          placeholder="Enter your email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
