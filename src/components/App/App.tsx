import logo from '../../assets/logo.svg';
import { useSelector } from 'react-redux';
import './App.scss';
import { useMemo } from 'react';
import { generateSpanColor } from '../../utils/color';
import store from '../../redux/store';
import { useDispatch } from 'react-redux';

function App() {

const { nbColors, firstColor, lastColor, direction } = useSelector((store: any) => store.color);

const dispatch = useDispatch();

console.log(nbColors, firstColor, lastColor);

  // // == Imports
// import { randomHexColor, generateSpanColor } from './utils/color';
// import store from './redux/store';
// import './styles/index.scss';

// // == Rendu dans le DOM
// function renderNbColors() {
//   const { nbColors } = store.getState().color;

//   /*
//     le `!` indique à TS que l'élément ne sera jamais `null`
//     (à utiliser avec précaution)
//   */
//   document.querySelector('.nbColors')!.innerHTML = `
//     ${nbColors} couleur(s) générée(s)
//   `;
// }
// function renderGradient() {
//   const { direction, firstColor, lastColor } = store.getState().color;

//   /*
//     par défaut, `document.querySelector` retourne un type `Element`
//     qui n'a pas de propriété `style` ;
//     on spécifie qu'il s'agit d'un `HTMLElement` qui l'a.
//   */
//   document.querySelector<HTMLElement>('.gradient')!.style.background = `
//     linear-gradient(${direction},${firstColor},${lastColor})
//   `;
// }



// function renderColors() {
//   const { firstColor, lastColor } = store.getState().color;

//   const firstSpan = generateSpanColor(firstColor);
//   const lastSpan = generateSpanColor(lastColor);

//   const result = `${firstSpan} - ${lastSpan}`;

//   document.querySelector('.colors')!.innerHTML = result;
// }

// == Initialisation
// renderNbColors();
// renderGradient();
// renderColors();

// // --- Permet d'exécuter les fonctions de rendu, à chaque fois qu'un reducer fait l'objet d'un changement
// store.subscribe(() => {
//   renderNbColors();
//   renderGradient();
//   renderColors();
// });

// // == Controls
// document.getElementById('randAll')!.addEventListener('click', () => {
//   // debug
//   console.log('Random all colors');
//   // data
//   store.dispatch({
//     type: 'color/RANDOM_ALL',
//   });
// });

// document.getElementById('randFirst')!.addEventListener('click', () => {
//   // data
//   store.dispatch({
//     type: 'color/RANDOM_FIRST_COLOR',
//   });
// });

// document.getElementById('randLast')!.addEventListener('click', () => {
//   // data
//   store.dispatch({
//     type: 'color/RANDOM_LAST_COLOR',
//   });
// });

// document.getElementById('toLeft')!.addEventListener('click', () => {
//   // data
//   store.dispatch({
//     type: 'color/TO_LEFT',
//   });
// });

// document.getElementById('toRight')!.addEventListener('click', () => {
//   // data
//   store.dispatch({
//     type: 'color/TO_RIGHT',
//   });
// });

// document.getElementById('inverse')!.addEventListener('click', () => {
//   // data
//   store.dispatch({
//     type: 'color/REVERSE',
//   });
// });

// document.getElementById('reset')!.addEventListener('click', () => {
//   // data
//   store.dispatch({
//     type: 'color/RESET',
//   });
// });


const randomfirst = () => {

  dispatch({type:'color/RANDOM_FIRST_COLOR'})

}

const randomall = () => {

  dispatch({type:'color/RANDOM_ALL'})

}


const randomlast = () => {

  dispatch({type:'color/RANDOM_LAST_COLOR'})

}


const left = () => {

  dispatch({type:'color/TO_LEFT'})

}


const right = () => {

  dispatch({type:'color/TO_RIGHT'})

}


const reset = () => {

  dispatch({type:'color/RESET'})


}


const reverse = () => {

  dispatch({type:'color/REVERSE'})


}

  return (
		<div className="app">
			<div className="nbColors"></div>

			<div className="buttons group">
				<button className="button" id="randFirst" onClick={randomfirst}>Random First</button>
				<button className="button" id="randAll" onClick={randomall}>Random All</button>
				<button className="button" id="randLast" onClick={randomlast}>Random Last</button>
			</div>

			<div className="colors"></div>

			<div className="gradient" style={{background: `linear-gradient(${direction},${firstColor},${lastColor}`}}></div>

			<div className="buttons group">
				<button className="button" id="toLeft" onClick={left}>to left</button>
				<button className="button" id="toRight" onClick={right}>to right</button>

        <button className="button" id="reset" onClick={reset}>Reset</button>
        <button className="button" id="inverse" onClick={reverse}>Inverser les couleurs</button>

			</div>
		</div>

  );
}

export default App;
