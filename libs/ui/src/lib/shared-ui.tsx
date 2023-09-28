import styles from './shared-ui.module.css';

/* eslint-disable-next-line */
export interface SharedUiProps {}

export function SharedUi(props: SharedUiProps) {
  return (
    <div className={styles['container']}>
      <div>I am a Component from library</div>
    </div>
  );
}

export default SharedUi;
