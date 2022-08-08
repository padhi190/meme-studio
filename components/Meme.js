import * as s from '../styles/MemeGenerator.module.css';

function Meme({img_url, top_text, bottom_text}) {
  return (
    <div className={s.meme}>
      <img src={img_url} alt="" />
      <h2 className={s.top}>{top_text}</h2>
      <h2 className={s.bottom}>{bottom_text}</h2>
    </div>
  );
}

export default Meme;
