import styles from './my-shared-component.module.css';
import './tailwind.css';

/* eslint-disable-next-line */
export interface MySharedComponentProps {}

export function MySharedComponent(props: MySharedComponentProps) {
  return (
    <div className={styles['container']}>
      <h1 className="bg-red-400 p-4">Welcome to MySharedComponent!</h1>
    </div>
  );
}

export default MySharedComponent;
