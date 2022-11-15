import styles from "./Name.module.css";
import { BsDropletHalf } from "react-icons/bs";

const Name = () => (
  <div
    id={styles.nameContainer}
    className="flex-col max-w-xl text-center p-1 mt-10 m-auto text-white"
  >
    <div id={styles.nameText} className="flex p-1 h-32 border-4 border-white">
      <div id={styles.nameText} className="flex w-full border-2 border-white">
        <h1 id={styles.nameText} className="flex gap-2 m-auto">
          Gotify <BsDropletHalf className="m-auto text-5xl" />
        </h1>
      </div>
    </div>
  </div>
);

export default Name;
