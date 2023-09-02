import Card from "./components/Card";
import erposterImg from "./assets/eldenring.jpg"; 
import dsposterImg from "./assets/darksouls.jpg";
import ssposterImg from "./assets/sekiro.jpg";

export default function App() {
  return (
    <>
      <Card
        title="Elden Ring "
        posterImg={erposterImg}
        description=" Um extraordinário mural decorativo do jogo Elden Ring, com uma moldura
          exquisita e dimensões imponentes. Uma preciosidade que evoca
          lembranças de um dos mais lendários jogos de todos os tempos. Este
          icônico mural transportará você para um mundo de fantasia, desafios
          épicos e a maravilha de Elden Ring, não importa onde esteja em sua
          morada. Não deixe escapar a oportunidade de incorporar esta bela
          lembrança à sua coleção!"
      />
      <Card
        title="Dark Souls III"
        posterImg={dsposterImg}
        description="Um magnífico quadro decorativo inspirado no jogo Dark Souls 3, emoldurado com madeira de alta qualidade e com dimensões impactantes. Uma lembrança valiosa de um dos mais icônicos jogos de todos os tempos. Este clássico quadro trará consigo a essência da aventura sombria e desafiadora de Dark Souls 3, onde quer que você escolha exibi-lo. Não perca a oportunidade de acrescentar essa obra de arte memorável à sua coleção!"
      />
      <Card
        title="Sekiro Shadows Die Twice"
        posterImg={ssposterImg}
        description="Um poster decorativo épico do jogo Sekiro: Shadows Die Twice, com uma moldura elegante de madeira resistente e no tamanho perfeito para exibição (A3). Uma lembrança inestimável de um dos jogos mais impactantes de todos os tempos. Este pôster clássico traz consigo a essência da jornada implacável e da ação intensa de Sekiro: Shadows Die Twice, onde quer que você opte por pendurá-lo. Não deixe escapar a chance de enriquecer sua coleção com essa peça memorável!"
      />
    </>
  );
}
