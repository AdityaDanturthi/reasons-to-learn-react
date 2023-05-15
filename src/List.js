export default function List(){
    return(
      <div className="flex flex-col mt-4 ml-5">
        <h1 className='font-extrabold text-4xl p-2 text-white'>Reasons I'm excited to learn React</h1>
       <ol className="list-disc marker:text-[#81D5F5] text-white list-outside text-2xl font-medium px-6 py-2 ms-6">
        <li>High demand in the job market</li>
        <li>Reusable and modular components</li>
        <li>Performance</li>
        <li>Community support</li>
        <li>Compatible with other technologies (GraphQL & Redux)</li>
      </ol>
      </div>
    )
  }