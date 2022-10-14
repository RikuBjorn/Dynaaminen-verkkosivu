import { useState } from 'react';
import './App.css';

function App() {
    const [paino, setPaino] = useState(0)
    const [juomat, setJuomat] = useState(0)
    const [aika, setAika] = useState(0)
    const[sukupuoli, setSukupuoli] = useState(0)
    const [result, setResult] = useState (0)

    let litroja = juomat * 0.33
    let grammoja = litroja * 8 * 4.5
    let poltto = paino / 10
    let jaljella = grammoja - (poltto * aika)
    
    

    function laskukaava(e) {
      e.preventDefault();
      
      if(sukupuoli === "mies") {
        let result2 = jaljella / (paino * 0.7)
        if(result2 < 0){
          setResult(0)
        }
      else {
        setResult(result2)
      }
      }
      else if (sukupuoli === "nainen"){
        let result2 = jaljella / (paino * 0.6)
        if(result2 < 0){
          setResult(0)
        }
      else{
        setResult(result2)
      }
    }
  }
    return (
    <div className="mainDiv">
      <h3>Laske veresi alkoholipitoisuus!</h3>
      <form>
        <div className="kentat">
          <div>
            <label>Paino</label>
            <input type="number" value={paino} onChange={e => setPaino(e.target.value)}></input>
          </div>
          <div>
            <label>Juomien määrä</label>
            <input type="number" value={juomat} onChange={e => setJuomat(e.target.value)}></input>
          </div>
          <div>
            <label>Aika</label>
            <input type="number" value={aika} onChange={e => setAika(e.target.value)}></input>
          </div>
        </div>
        <div>
          <label>Sukupuoli</label>
          <input type="radio" name="gender" value="mies" onChange= {e => setSukupuoli(e.target.value)}></input><label>Mies</label>
          <input type="radio" name="gender" value="nainen" onChange= {e => setSukupuoli (e.target.value)}></input><label>Nainen</label>
          
        </div>
        <div>
          <label>Veren alkoholipitoisuus = </label>
          <output>{result.toFixed(2)}</output>
        </div>
        <div>
          <button type="button" onClick={laskukaava}>Laske</button>
        </div>
      </form>
    </div>
  );
}

export default App;
