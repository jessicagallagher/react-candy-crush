import girl from '../images/candy-crush-girl.png';

export default function ScoreBoard({ score }) {
  return (
    
    <div className='main'>
      <div className='icon'>
        <img src={girl} alt='' className='girl' />
        <div className='score-board'>
          <h2 className='score-header'>Score:</h2>
          <p className='score'>{score}</p>
        </div>
      </div>
    </div>
  );
}
