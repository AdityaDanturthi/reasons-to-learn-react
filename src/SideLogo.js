import halflogo from './reactjs-icon.png';

export default function SideLogo(){
    return(
        <div className="flex items-center h-full">
        <img className='w-72' src={halflogo} alt="logo"/>
        </div>
    );
}