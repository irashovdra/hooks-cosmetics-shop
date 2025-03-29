import styles from "./Modal.module.css";

export const Modal = ({ favorites, onClose }) => {
  const totalItems = favorites.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );
  const totalPrice = favorites.reduce((sum, item) => {
    const price = parseFloat(item.price);
    return sum + (isNaN(price) ? 0 : price * (item.quantity || 1));
  }, 0);

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>Your Order</h2>
        <p>Total Quantity: {totalItems}</p>
        <p>Total Price: {totalPrice.toFixed(2)} USD</p>
        <input className={styles.modal__email} placeholder="Enter your email" type="email" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
