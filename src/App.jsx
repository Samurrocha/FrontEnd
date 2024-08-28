import { useState } from 'react'
import './App.css'

function App() {

  const [isBlurred, setBlurred] = useState(true);

  const [mostrarDiv, setMostrarDiv] = useState(false)

  let [count, setCount] = useState(0)

  const [disable, setDisable] = useState(false)

  const handleClick = () => {

    if (count > 0) return;

    setCount(1)

    const body = document.getElementById('body')
    const section = document.querySelector('section')

    section.classList.add('hidde')
    body.classList.add('hidde')

    setMostrarDiv(true)

  };

  const starQuestionarie = () => {

    const body = document.getElementById('body')
    const section = document.querySelector('section')

    section.classList.remove('hidde')
    body.classList.remove('hidde')

    setBlurred(false)
  }


  const [respostas, setRespostas] = useState({

    pergunta1: '',
    pergunta2: '',
    pergunta3: '',
    pergunta4: [],
    pergunta5: []
  })



  const submit = (e) => {


    console.log('Respostas enviadas:', respostas);

    const pergunta = document.querySelectorAll('.pergunta')

    pergunta.forEach(element => {

      switch (element.id) {
        case 'pergunta1':
          {
            const p = element.querySelector('p');
            if (respostas.pergunta1 === 'props.title') {
              p.innerHTML = "verdadeiro";p.classList.add('verdadeiro')
            } else { p.innerHTML = "falso"; p.classList.add('falso') }
          }

          break;

        case 'pergunta2':
          {
            const p = element.querySelector('p');
            if (respostas.pergunta2 === 'useState') {
              p.innerHTML = "verdadeiro";
              p.classList.add('verdadeiro')
            } else { p.innerHTML = "falso"; p.classList.add('falso')}
          }

          break;

        case 'pergunta3':
          {
            const p = element.querySelector('p');
            if (respostas.pergunta3 === 'PropTypes') {
              p.innerHTML = "verdadeiro";
              p.classList.add('verdadeiro')
            } else { p.innerHTML = "falso"; p.classList.add('falso') }
          }

          break;

        case 'pergunta4': {
          const p = element.querySelector('p');
          p.innerHTML = respostas.pergunta4.includes('Inline Styles') && respostas.pergunta4.includes('CSS Modules') ? 'verdadeiro' : 'falso';
          p.classList.add(p.textContent === 'verdadeiro' ? 'verdadeiro' : 'falso')
          break;
        }


        case 'pergunta5':
          {
            const p = element.querySelector('p');
            p.innerHTML = respostas.pergunta5.includes('HTML style attribute') && respostas.pergunta5.includes('JavaScript Objects') ? 'verdadeiro' : 'falso';
            p.classList.add(p.textContent === 'verdadeiro' ? 'verdadeiro' : 'falso')
            break;
          }

        default:
          break;
      }

  });

    
    setDisable(true)

    e.preventDefault()

  }


  // Função chamada quando uma opção de rádio é alterada

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setRespostas(prevRespostas => {
      if (type === 'checkbox') {
        const updatedResponses = checked
          ? [...prevRespostas[name], value]
          : prevRespostas[name].filter(item => item !== value);

        return { ...prevRespostas, [name]: updatedResponses };
      } else {
        return { ...prevRespostas, [name]: value };
      }
    });

    e.preventDefault()

  };


  return (
    <>
      <section className='section'>

        <div id='title'>
          <h1>Bem vindo ao meu questionario</h1>

        </div>

        <button className='button' type='button' onClick={handleClick}>clique para logar</button>

      </section>

      {
        (mostrarDiv && isBlurred) && (
          <div className='login'>

            <h1>LOGAR</h1>
            <label htmlFor="email">Email:
              <input type="email" name="email" id="email" placeholder='exemplo@gmail.com' />
            </label>

            <label htmlFor="senha">Senha:
              <input type="password" name="senha" id="senha" placeholder='********' />
            </label>

            <button id='buttonLogar' onClick={starQuestionarie}>Logar</button>

          </div>
        )
      }

      <form id='body' className={isBlurred ? 'blur' : ''} onSubmit={submit}>

        {/* props.title */}
        <div className='pergunta' id='pergunta1'>

          <label>Como você acessa uma prop chamada title dentro de um componente React?</label>

          <div className='opções'>

            <label>
              props.title

              <input
                type="radio"
                id='teste'
                name='pergunta1'
                className='radio'
                value="props.title"
                onChange={handleChange}
                disabled={disable}
              />

            </label>


            <label>
              this.props.title
              <input
                type="radio"
                name='pergunta1'
                className='radio'
                value="this.props.title"
                onChange={handleChange}
                disabled={disable}
              />


            </label>


            <label>
              title

              <input
                type="radio"
                name='pergunta1'
                className='radio'
                value="title"
                onChange={handleChange}
                disabled={disable}
              />

            </label>


            <label>
              this.title

              <input
                type="radio"
                name='pergunta1'
                className='radio'
                value="this.title"
                onChange={handleChange}
                disabled={disable}
              />

            </label>

            <label>
              constructor

              <input
                type="radio"
                name='pergunta1'
                className='radio'
                value="constructor"
                onChange={handleChange}
                disabled={disable}
              />

            </label>

          </div>


          <p></p>

        </div>


        {/* useState*/}
        <div className='pergunta' id='pergunta2'>
          <label>Qual hook do React é usado para gerenciar o estado em componentes funcionais?</label>

          <div className='opções'>


          <label>
              style
              <input
                type="radio"
                name='pergunta2'
                className='radio'
                value="style"
                onChange={handleChange}
                disabled={disable}
              />
            </label>




            <label>
              useState
              <input
                type="radio"
                name='pergunta2'
                className='radio'
                value="useState"
                onChange={handleChange}
                disabled={disable}
              />
            </label>

            <label>
              useEffect
              <input
                type="radio"
                name='pergunta2'
                className='radio'
                value="useEffect"
                onChange={handleChange}
                disabled={disable}
              />
            </label>

            <label>
              useContext
              <input
                type="radio"
                name='pergunta2'
                className='radio'
                value="useContext"
                onChange={handleChange}
                disabled={disable}
              />
            </label>

            <label>
              useReducer
              <input
                type="radio"
                name='pergunta2'
                className='radio'
                value="useReducer"
                onChange={handleChange}
                disabled={disable}
              />
            </label>
          </div>

          <p></p>

        </div>


        {/* PropTypes */}
        <div className='pergunta' id='pergunta3'>
          <label>Qual biblioteca é utilizada para verificar os tipos das props em um componente React?</label>

          <div className='opções'>

          <label>
              origin
              <input
                type="radio"
                name='pergunta3'
                className='radio'
                value="origin"
                onChange={handleChange}
                disabled={disable}
              />
            </label>




            <label>
              TypeScript
              <input
                type="radio"
                name='pergunta3'
                className='radio'
                value="TypeScript"
                onChange={handleChange}
                disabled={disable}
              />
            </label>

            <label>
              Flow
              <input
                type="radio"
                name='pergunta3'
                className='radio'
                value="Flow"
                onChange={handleChange}
                disabled={disable}
              />
            </label>

            <label>
              PropTypes
              <input
                type="radio"
                name='pergunta3'
                className='radio'
                value="PropTypes"
                onChange={handleChange}
                disabled={disable}
              />
            </label>

            <label>
              eslint
              <input
                type="radio"
                name='pergunta3'
                className='radio'
                value="eslint"
                onChange={handleChange}
                disabled={disable}
              />
            </label>
          </div>

          <p></p>
        </div>


        <div className='pergunta' id='pergunta4'>
          <label>Quais das seguintes opções são válidas para definir o estilo de um componente React?</label>

          <div className='opções'>

            <label>
              Inline Styles
              <input
                type="checkbox"
                name='pergunta4'
                className='checkbox'
                value="Inline Styles"
                onChange={handleChange}
                disabled={disable}
              />
            </label>

            <label>
              CSS Modules
              <input
                type="checkbox"
                name='pergunta4'
                className='checkbox'
                value="CSS Modules"
                onChange={handleChange}
                disabled={disable}
              />
            </label>

            <label>
              JavaScript Objects
              <input
                type="checkbox"
                name='pergunta4'
                className='checkbox'
                value="JavaScript Objects"
                onChange={handleChange}
                disabled={disable}
              />
            </label>

            <label>
              HTML style attribute
              <input
                type="checkbox"
                name='pergunta4'
                className='checkbox'
                value="HTML style attribute"
                onChange={handleChange}
                disabled={disable}
              />
            </label>
          </div>

          <p></p>
        </div>

        <div className='pergunta' id='pergunta5'>
          <label>Qual(is) dos seguintes atributos é(são) usados para aplicar estilos inline em um elemento React?</label>

          <div className='opções'>

            <label>
              Inline Styles
              <input
                type="checkbox"
                name='pergunta5'
                className='checkbox'
                value="Inline Styles"
                onChange={handleChange}
                disabled={disable}
              />
            </label>

            <label>
              CSS Modules
              <input
                type="checkbox"
                name='pergunta5'
                className='checkbox'
                value="CSS Modules"
                onChange={handleChange}
                disabled={disable}
              />
            </label>

            <label>
              JavaScript Objects
              <input
                type="checkbox"
                name='pergunta5'
                className='checkbox'
                value="JavaScript Objects"
                onChange={handleChange}
                disabled={disable}
              />
            </label>

            <label>
              HTML style attribute
              <input
                type="checkbox"
                name='pergunta5'
                className='checkbox'
                value="HTML style attribute"
                onChange={handleChange}
                disabled={disable}
              />
            </label>
          </div>

          <p></p>
        </div>



        <button type='submit' id='submit' onSubmit={submit}> enviar questionario</button>

      </form>


    </>
  )
}


export default App
