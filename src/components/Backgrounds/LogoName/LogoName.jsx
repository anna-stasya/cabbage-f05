 import s from './LogoName.module.css';
 import kapusta from '../../../images/background/kapusta.png';

export default function LogoName() {
    return (
        <div className={s.LogoBox}>
            <img
                // src="../../../images/background/kapusta.png"
                src={kapusta}
                alt="kapusta"
                className={s.LogoHead}
            />
            <h1 className={s.LogoSign}>
                Smart Finance
            </h1>
        </div>
    );
}