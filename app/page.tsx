import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Neel Contractor
      </h1>
      <p className="mb-4">
        {`I'm a self-taught programmer passionate about Solana blockchain development and cutting-edge technology. With a deep love for tech, I enjoy building innovative solutions in the decentralized world. Outside of coding, I love watching sci-fi and mystery movies, learning new things, exploring finance, and understanding life in general.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
