import { Button, Stack } from "react-bootstrap";
import classNames from "classnames";
import styles from './custome.module.scss'
const cx = classNames.bind(styles)
function Payment() {
  return (
    <Stack direction="horizontal" gap={2} className={cx('test')}>
      <Button as="a" variant="primary">
        Button as link
      </Button>
      <Button as="a" variant="success">
        Button as link
      </Button>
    </Stack>
  );
}

export default Payment;
