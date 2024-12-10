import { useRouteError } from "react-router-dom";
import Link from "./Link";
import styles from "./Error.module.css";

function Error() {
  // Custom hook to get the error message object faced which caused this error
  const error = useRouteError();

  return (
    <div className={styles.errorBody}>
      {/* Mars code */}
      <div className={styles.mars}></div>

      <img src="/public/assets/images/meteor.svg" className={styles.meteor} />
      <div className="mt-32 flex flex-col items-center justify-center gap-4">
        <p className={styles.title}>Oh no!! Something went wrong 😢</p>

        <p className={styles.subtitle}>{error.data || error.message}</p>
        <Link
          to={-1}
          className="mt-4 flex items-center justify-center gap-2 text-3xl font-bold text-white"
        >
          <ion-icon
            name="arrow-back-circle-outline"
            class="h-10 w-10"
          ></ion-icon>{" "}
          Go back
        </Link>
      </div>
      <img
        src="/public/assets/images/astronaut.svg"
        className={styles.astronaut}
      />
      <img
        src="/public/assets/images/spaceship.svg"
        className={styles.spaceship}
      />
    </div>
  );
}

export default Error;
