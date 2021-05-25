import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Datajus</title>
        <link rel="icon" href="/datajus.png" />
      </Head>

      <body className="bg-gray-100 min-h-screen w-full">
        <Header/>
      <main className="w-full bg-white">
        <Dobra/>
        <Form/>
        <Service/>
        <div className="pt-24 px-4">
          <div className="space-y-4">
            <h1 className="text-3xl font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            <h3 className="text-xl font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A est placerat at blandit turpis lacus eget.</h3>
          </div>
          <div className="pt-10 space-y-4 text-lg">
          <div className="flex flex-row space-x-2">
            <div className="w-6 h-6  rounded-xl bg-blue-500"></div>
            <h4>Lorem ipsum dolor sit amet, consectetur.</h4>
          </div>
          <div className="flex flex-row space-x-2">
            <div className="w-6 h-6  rounded-xl bg-blue-500"></div>
            <h4>Lorem ipsum dolor sit amet, consectetur.</h4>
          </div>
          <div className="flex flex-row space-x-2">
            <div className="w-6 h-6  rounded-xl bg-blue-500"></div>
            <h4>Lorem ipsum dolor sit amet, consectetur.</h4>
          </div>
          <div className="flex flex-row space-x-2">
            <div className="w-6 h-6  rounded-xl bg-blue-500"></div>
            <h4>Lorem ipsum dolor sit amet, consectetur.</h4>
          </div>
          </div>
        </div>    
      </main>

      </body>
    </div>
  )
}

function Service() {

  return (
    <div>
              <div className="pt-20 w-full px-4">
          <div className="space-y-2">
            <h3 className="text-lg text-blue-500 font-medium">NOSSOS SERVIÇOS</h3>
            <h1 className="text-3xl font-medium">A better way to send money</h1>
          </div>
          <div className="pt-4">
            <p className="text-md">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
          </div>
          <div>
          <div className="flex flex-row pt-10 space-x-4">
            <div className="w-48 h-14 rounded-lg bg-blue-500">
            </div>
            <div className="space-y-2">
              <h1 className="text-lg font-medium">Competitive exchange rates</h1>
              <h3 className="text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. </h3>
            </div>
          </div>
          <div className="flex flex-row pt-10 space-x-4">
            <div className="w-48 h-14 rounded-lg bg-blue-500">
            </div>
            <div className="space-y-2">
              <h1 className="text-lg font-medium">No hidden fees</h1>
              <h3 className="text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. </h3>
            </div>
          </div>
          <div className="flex flex-row pt-10 space-x-4">
            <div className="w-48 h-14 rounded-lg bg-blue-500">
            </div>
            <div className="space-y-2">
              <h1 className="text-lg font-medium">Transfers are instant</h1>
              <h3 className="text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. </h3>
            </div>
          </div>
          <div className="flex flex-row pt-10 space-x-4">
            <div className="w-48 h-14 rounded-lg bg-blue-500">
            </div>
            <div className="space-y-2">
              <h1 className="text-lg font-medium">Mobile notifications</h1>
              <h3 className="text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. </h3>
            </div>
          </div>
          </div>
        </div>
      
    </div>
  )
}

function Form() {

  return(
    <div>
        <div className="bg-white px-4 space-y-10 w-full pb-4 rounded-xl shadow-lg">
          <div className="pt-4 space-y-4">
            <h1 className="text-2xl font-normal">Comece agora a recuperar a saúde da sua empresa. ⚖️</h1>
            <h3 className="text-md font-normal">Lorem ipsum dolor sit amet, consectetur elit.</h3>
          </div>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="text-lg text-gray-600">Nome Completo</label>
              <input 
              className="shadow-sm border-2 rounded-lg h-12 pl-2"
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="text-lg text-gray-600">E-mail</label>
              <input 
              className="shadow-sm border-2 rounded-lg h-12 pl-2"
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="text-lg text-gray-600">Telefone</label>
              <input 
              className="shadow-sm border-2 rounded-lg h-12 pl-2"
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="text-lg text-gray-600">CNPJ</label>
              <input 
              className="shadow-sm border-2 rounded-lg h-12 pl-2"
              ></input>
            </div>
            <button
            type="button" 
            className="w-full h-14 border rounded-lg border-blue-500 text-blue-500 font-medium">Continuar</button>
          </form>
        </div>
      
    </div>
  )
}

function Dobra() {

  return(
  <div className="bg-gray-100">
    <div className="px-4 pt-14 space-y-3">
          <h1 className="text-3xl font-medium">Data to enrich your <span className="text-blue-500">online business</span></h1>
          <h3 className="text-xl font-normal">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</h3>
        </div>
        <div className="px-4 pt-5 space-y-6 pb-20">
          <button className="w-full h-12 bg-blue-500 rounded-md text-xl text-white">Ver preços</button>
          <button className="w-full text-lg text-blue-500" >Falar com consultor -></button>
        </div>
  </div>
  )
}

function Header() {
  return (
    <div>
      <header className="flex justify-between flex-row h-20 w-screen">
          <div className="pt-5 pl-6">
          <Image
          src="/../public/Logo.png"
          height={30}
          width={108}
          />
          </div>
          <div className= "pt-4 pr-6 order-last">
            <button className="w-11 h-10 border-2 rounded border-blue-400">
              <vector className="border-indigo-800 w-8"></vector>
            </button>
          </div>
        </header>
    </div>
  )
}