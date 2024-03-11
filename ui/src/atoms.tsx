import styles from './atoms.module.css';

/* eslint-disable-next-line */
export interface AtomsProps {}

export function Atoms(props: AtomsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Atoms!</h1>
    </div>
  );
}

export default Atoms;
