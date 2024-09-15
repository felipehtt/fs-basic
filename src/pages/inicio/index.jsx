import './index.scss';
import Cabecalho from '../../components/Cabecalho';
import Card from '../../components/Card';

function Inicio() {


  return (

    <div className="pagina-inicio">

      <Cabecalho />

      <main>

        <h1>Escolha um treino...</h1>

        <div className='bloquinhos'>

            <a className='exs' href="/ex02">

              <Card cor={'#04F404'} titulo={'Converter Kg/gramas'} subtitulo={'Exercício 02'} />

            </a>

            <a className='exs' href="/ex04">

              <Card cor={'#a20202'} titulo={'Tempo de leitura'} subtitulo={'Exercício 04'} />

            </a>

            <a className='exs' href="/ex05">

              <Card cor={'#0D33B3'} titulo={'Médias escolares'} subtitulo={'Exercício 05'} />

            </a>

          
            <a className='exs' href="/ex10">

              <Card cor={'#E44F9C'} titulo={'Calcule o IMC'} subtitulo={'Exercício 10'} />

            </a>
        </div>
        <br />

        <div className='bloquinho'>
          
          <a className='exs' href="/ex11">

            <Card cor={'#000'} titulo={'Tabuada'} subtitulo={'Exercício 11'} />

          </a>

        </div>

      </main>

    </div>

  );

}

export default Inicio;
