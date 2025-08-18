import { GameProps } from "@/utils/types/games";
import { Container } from "@/components/container";
import { redirect } from 'next/navigation';
import Image from 'next/image'



async function getData(id: string){
  ///next-api/?api=games&id=id

  try{
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`)
    return res.json()
  }catch(err){
    throw new Error("Failed to fetch data")
  }

}

export default async function Game({ params }: { params: Promise<{ id: string }> }){
  const { id } = await params;
  const data: GameProps = await getData(id)

  if(!data){
    console.log("Não deu certo")
    redirect('/')
  };

  console.log(console.log(data.id))
  return(
    <main className="w-full text-black">
      <div className="bg-black h-80 sm:h-96 w-full relative">
        <Image
          className="object-cover w-full h-80 sm:h-96 opacity-75"
          src={data.image_url}
          alt={data.title}
          priority= {true}
          fill={true}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
          />
      </div>
      <Container>
        <h1 className="font-bold text-xl my-4">{data.title}</h1>
        <p>{data.description}</p>

      </Container>
    </main>
  )
}
