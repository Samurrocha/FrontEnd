import { useState } from 'react'
import './App.css'

function App() {

  const [isBlurred, setIsBlurred] = useState(true);

  const handleClick = () => {
    setIsBlurred(false); // Remove o borrão ao clicar no botão
  };

  const captureValue = (id) => {
    let valor = document.getElementById(`${id}`);
    valor = valor.value;
    return valor;

  }

  const submit = () => {

    alert(`curriculo enviado com sucesso,${captureValue("nome")}`);
  }

  return (
    <>

      <div id='body'>

        <section>
          <div id='title'>

            <h1>Bem vindo ao meu questionario</h1>
          </div>
          <button className='button' type='button' onClick={handleClick}> Clique aqui para iniciar</button>
        </section>


        <div className={isBlurred ? 'blur' : ''}>

          <form action="" method="get" className='form'>

            <div className='pergunta' id='radio'>

              <label>Como você acessa uma prop chamada title dentro de um componente React?</label>

              <div className='opções'>

                <div id='opção'>
                  <label htmlFor='option1'>props.titlesadsdsd</label>
                  <input
                    type="radio"
                    name='radio'
                    className='radio'
                    id='option1'
                    value="props.titlesadsdsd"
                  //checked={selectedOption === 'opcao1'}
                  //onChange={handleOptionChange}
                  />
                </div>


                <label>
                  <input
                    type="radio"
                    name='radio'
                    className='radio'
                    value="radio"
                  //checked={selectedOption === 'opcao1'}
                  //onChange={handleOptionChange}
                  />
                  this.props.title</label>


                <label>
                  <input
                    type="radio"
                    name='radio'
                    className='radio'
                    value="radio"
                  //checked={selectedOption === 'opcao1'}
                  //onChange={handleOptionChange}
                  />
                  title</label>


                <label>
                  <input
                    type="radio"
                    name='radio'
                    className='radio'
                    value="radio"
                  //checked={selectedOption === 'opcao1'}
                  //onChange={handleOptionChange}
                  />
                  this.title</label>

              </div>


            </div>

            <div className='pergunta' id='radio'>

              <label>Como você acessa uma prop chamada title dentro de um componente React?</label>

              <div className='opções'>



                <label htmlFor='radio'>props.title
                  <input
                    type="radio"
                    name='radio'
                    className='radio'
                    value="props.title"
                  //checked={selectedOption === 'opcao1'}
                  //onChange={handleOptionChange}
                  />

                </label>


                <label>




                  <input
                    type="radio"
                    name='radio'
                    className='radio'
                    value="radio"
                  //checked={selectedOption === 'opcao1'}
                  //onChange={handleOptionChange}
                  />
                  this.props.title</label>


                <label>
                  <input
                    type="radio"
                    name='radio'
                    className='radio'
                    value="radio"
                  //checked={selectedOption === 'opcao1'}
                  //onChange={handleOptionChange}
                  />
                  title</label>


                <label>
                  <input
                    type="radio"
                    name='radio'
                    className='radio'
                    value="radio"
                  //checked={selectedOption === 'opcao1'}
                  //onChange={handleOptionChange}
                  />
                  this.title</label>

              </div>


            </div>


            <div className='pergunta'>



              <label>Como você acessa uma prop chamada title dentro de um componente React?</label>

              <div className='opções'>

                <label className='opção'>
                  <input
                    type="radio"
                    name='radio'
                    className='radio'
                    value="props.title"
                  //checked={selectedOption === 'opcao1'}
                  //onChange={handleOptionChange}
                  />
                  props.title
                </label>


                <label className='opção'>
                  <input
                    type="radio"
                    name='radio'
                    className='radio'
                    value="radio"
                  //checked={selectedOption === 'opcao1'}
                  //onChange={handleOptionChange}
                  />
                  this.props.title

                </label>


                <label className='opção'>
                  <input
                    type="radio"
                    name='radio'
                    className='radio'
                    value="radio"
                  //checked={selectedOption === 'opcao1'}
                  //onChange={handleOptionChange}
                  />
                  title
                </label>


                <label className='opção'>
                  <input
                    type="radio"
                    name='radio'
                    className='radio'
                    value="radio"
                  //checked={selectedOption === 'opcao1'}
                  //onChange={handleOptionChange}
                  />
                  this.title
                </label>

              </div>


            </div>













            <button type='submit' id='submit' onClick={submit}> enviar curriculo</button>

          </form>



        </div>

        <section id='maker'>
          <p >Feito por samuel rodrigues da rocha lima</p>
        </section>


      </div>

    </>
  )
}

export default App
