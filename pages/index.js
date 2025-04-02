import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-6">🌎 Bem-vindo à Mundo Real Viagens</h1>
      <p className="text-lg mb-10">Explore nossas experiências incríveis de viagem com fé, emoção e propósito!</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Link href="/pagina_explosoes" className="bg-white shadow-md hover:shadow-xl p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">🚐 Viagens Bate-Volta</h2>
          <p>Participe de excursões transformadoras de um dia!</p>
        </Link>

        <Link href="/pagina_servicos" className="bg-white shadow-md hover:shadow-xl p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">🛠️ Serviços de Viagem</h2>
          <p>Seguro, aluguel de veículos, passaporte, vistos e intercâmbio.</p>
        </Link>

        <Link href="/pagina_nossos_grupos" className="bg-white shadow-md hover:shadow-xl p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">👥 Nossos Grupos</h2>
          <p>Disney, Cruzeiro, Viagens Religiosas, Incentivo e mais!</p>
        </Link>

        <Link href="/pagina_seguro_responsabilidade" className="bg-white shadow-md hover:shadow-xl p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">🛡️ Compromisso e Segurança</h2>
          <p>Temos CNPJ, Cadastur, selo Protur e seguro de responsabilidade civil.</p>
        </Link>
      </div>

      <div className="mt-12">
        <a
          href="https://api.whatsapp.com/send?phone=5511976099145"
          target="_blank"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-full text-lg hover:bg-green-600 transition"
        >
          📲 Fale com a gente pelo WhatsApp
        </a>
      </div>

      <footer className="mt-16 text-sm text-gray-500">
        CNPJ: 24.013.911/0001-11 • Cadastur: Ativo • Agência com selo Protur
      </footer>
    </div>
  );
}
