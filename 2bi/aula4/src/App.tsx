import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregar() {
      try {
        const response = await fetch(
          "http://localhost:3000/api/produtos"
        );

        if (!response.ok) {
          throw new Error("Não foi possível carregar");
        }

        setProdutos(await response.json());
      } catch (error: unknown) {
        if (error instanceof Error) {
          setErro(error.message);
        } else {
          setErro("Não foi possível carregar");
        }
      } finally {
        setCarregando(false);
      }
    }
    carregar();
  }, []);

  if (carregando) return <p>Carregando produtos...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <strong>{produto.nome}</strong>
            <span> R$ {produto.preco.toFixed(2)}</span>
          </li>
        ))}
      </ul>
  );
}

export default App
