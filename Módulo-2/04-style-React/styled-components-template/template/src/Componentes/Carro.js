import MyCar from './imagemcarro'


export function Carro(props) {
  return (
    <div className='Card'>
      <h2 className="nomeCarro">Meu carro</h2>
      <ul>
        <MyCar />
        <li MyCar></li>
        <li className="Carro">Cor: {props.cor}</li>
        <li className="Carro">Ano: {props.ano}</li>
        <li className="Carro">Flex: {props.flex}</li>
        <li className="Carro">Adicionado: {props.adicionadoPor}</li>
      </ul>
    </div>
  );
}

