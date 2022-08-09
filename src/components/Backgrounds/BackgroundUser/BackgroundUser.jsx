import s from './BackgroundUser.module.css';
import colesL from '../../../images/background/colesL.png';
import colesR from '../../../images/background/colesR.png';

// export default function BackgroundUser({ children }) {
//   return (
//     <div className={s.backgroundPage}>
//       <div  className={`${s.backgroundColes} ${s.background}`}>
//         <div className={s.coles}>  </div>
//         <div className={s.colesR} />
//         {children} 
//       </div>
//     </div>
//   );
// }

export default function BackgroundUser({ children }) { 
  return (
    <div className={s.backgroundPage}>
      <div className={`${s.backgroundColes} ${s.background}`}>
        <div className={s.colesMobTab} />
        <div className={s.coles}>
          <img
            src={colesL}
            alt="kapustaL"
            className={s.colesL}
            />
          <img
            src={colesR}
            alt="kapustaR"
            className={s.colesR}
          />
        </div>
        <div className={s.animateShadow} />
        {children} 
      </div>    
    </div>
    );
}