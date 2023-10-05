import styles from './feature-a.module.css';
import { SharedUi } from '@nextgen-monorepo/shared-ui';
import { useSimpleStore } from './stores/testStore';

/* eslint-disable-next-line */
export interface FeatureAProps {}

export function FeatureA(props: FeatureAProps) {
  let data = useSimpleStore((x) => x.product);
  let getData = useSimpleStore((x) => x.getProducts);
  let isLoading = useSimpleStore((x) => x.isProductLoading);
  let error = useSimpleStore((x) => x.productError);

  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatureA!</h1>
      <div style={{ margin: 10 }}>
        <input
          type="button"
          value="Load Product"
          onClick={() => getData()}
        ></input>
      </div>
      {isLoading && <div>Loading...</div>}
      {error.length > 0 && <div>ERROR</div>}
      {data && (
        <table border={1} style={{ margin: 10 }}>
          <tbody>
            <tr>
              <td>Title</td>
              <td>{data?.title}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{data?.description}</td>
            </tr>
          </tbody>
        </table>
      )}

      <SharedUi />
    </div>
  );
}

export default FeatureA;
