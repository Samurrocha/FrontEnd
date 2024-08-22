import { useState } from 'react'
import './App.css'

function App() {

  const [isBlurred, setIsBlurred] = useState(true);

  const handleClick = () => {
    setIsBlurred(false); // Remove o borrão ao clicar no botão
  };

const captureValue = (id) =>{
      let valor = document.getElementById(`${id}`);
      valor = valor.value;
      return valor;
      
    }

  const submit = () => {
  
    alert(`curriculo enviado com sucesso,${captureValue("nome")}`);
  }
  
  return (
    <>

      <section>
        <div id='title'>

          <h1>Bem vindo ao meu questionario</h1>
        </div>
        <button className='button' type='button' onClick={handleClick}> Clique aqui para iniciar</button>
      </section>


      <div className={isBlurred ? 'blur' : ''}>

        <form action="" method="get" className='form'>

          <div className='pergunta'>
            <label htmlFor='name'>Qual é o seu nome?</label>
            <input type="text" name="name" id="nome" placeholder='digite seu nome' />
          </div>

          <div className='pergunta'>
            <label htmlFor='idade'>Qual é a sua idade?</label>
            <input type="number" name="idade" id="idade" placeholder='digite sua idade' />
          </div>


          <div className='pergunta'>
            <label htmlFor='conhecimentos' className='conhecimentos'>Qual são seus conhecimentos?</label>
            <input type='text' className="conhecimentos" id="conhecimentos" placeholder='digite seus principais conhecimentos'></input>
          </div>


          <div className='pergunta'>
            <label htmlFor='experiencia' className='experiencia'>Quais empresas voce ja trabalhou e em quais cargo?</label>
            <input type='text' className="experiencia" id="experiencia" placeholder='digite seus principais conhecimentos'></input>
          </div>


          <div className='pergunta'>
            <label htmlFor='userLife' className='userLife'>conte um pouco sobre o porque se interessou pela nossa empresa</label>
            <input type='text' className="userLife" id="userLife" placeholder='digite seus principais conhecimentos'></input>
          </div>



          <button type='submit' id='submit' onClick={submit}> enviar curriculo</button>

        </form>



      </div>

        <section id='maker'>
          <p >Feito por samuel rodrigues da rocha lima</p>
        </section>
  
    </>
  )
}

export default App
