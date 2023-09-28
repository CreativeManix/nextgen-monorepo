import styles from './feature-a.module.css';
import { SharedUi } from '@nextgen-monorepo/shared-ui';

/* eslint-disable-next-line */
export interface FeatureAProps {}

export function FeatureA(props: FeatureAProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatureA!</h1>
      <SharedUi />
    </div>
  );
}

export default FeatureA;
