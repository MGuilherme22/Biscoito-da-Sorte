import React, {Component} from 'react'
import './css/estilo.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = ['O sol brilha',
       'Amo café quente',
        'Chuva cai forte',
         'Livros são incríveis',
          'Gatos são fofos']
  }

  quebraBiscoito(){
      let state = this.state;
      let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
      state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
      this.setState(state)
  }

  render(){
    return(
        <div className='container'>
            <img className='img' src={require('./assets/biscoito.png')} />
            <Botao nome='Abrir biscoito' acaoBtn={this.quebraBiscoito}/>
            <h3 className='texto-frase'>{this.state.textoFrase}</h3>
        </div>
    );
  }
}


class Botao extends Component{
  render(){
    return(
        <div>
          <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
        </div>
    );
  }
}

export default App;