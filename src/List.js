export default function List(){
    return(
      <div className="flex flex-col items-center">
        <h1 className='font-extrabold text-4xl p-2'>Reasons I'm excited to learn React</h1>
       <ol className="list-decimal list-outside text-2xl font-medium px-6 py-2 ms-8">
        <li>High demand in the job market</li>
        <li>Reusable and modular components</li>
        <li>Performance</li>
        <li>Community support</li>
        <li>Compatible with other technologies (GraphQL & Redux)</li>
      </ol>
      </div>
    )
  }