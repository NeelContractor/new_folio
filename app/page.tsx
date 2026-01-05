import Achievement from './components/Achievement'
import Links from './components/links'
import Projects from './components/projects'

export default function Page() {
  return (
    <section className='my-10'>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Neel Contractor
      </h1>
      <div className=''>
        <h1 className='text-xl font-bold pb-2'>About Me</h1>
        <p className="mb-4 text-gray-200">
          {`I'm a self-taught programmer passionate about Solana blockchain development and cutting-edge technology. With a deep love for tech, I enjoy building innovative solutions in the decentralized world. Outside of coding, I love watching sci-fi and mystery movies, learning new things, exploring finance, and understanding life in general.`}
        </p>
      </div>
      <Links />
      <Achievement />
      <Projects />
    </section>
  )
}
