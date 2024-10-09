import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/500222387e8c5e26f06e4201330659e8.jpeg?lk3s=a5d48078&nonce=93500&refresh_token=ab47c9a352d9d2d11378fe31fc2cc252&x-expires=1728612000&x-signature=oIKBcODklbxrUMPxDfE9aHg7Oso%3D&shp=a5d48078&shcp=81f88b70"
                alt="hoang"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>van hoang</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>van hoang</span>
            </div>
        </div>
    );
}

export default AccountItem;
