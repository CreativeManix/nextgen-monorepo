import styles from './feature-b.module.css';
import { SharedUi } from '@nextgen-monorepo/shared-ui';
import { testApiClient } from '@nextgen-monorepo/test-api-client';

/* eslint-disable-next-line */
export interface FeatureBProps {}

export function FeatureB(props: FeatureBProps) {
  let v = testApiClient();
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatureB!</h1>
      <SharedUi />
      <br />
      <code>{v}</code>
    </div>
  );
}

export default FeatureB;
