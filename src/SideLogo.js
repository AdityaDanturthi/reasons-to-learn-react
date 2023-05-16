import halflogo from './reactjs-icon.png';

export default function SideLogo(){
    return(
        <div className="flex items-center">
        <img className='w-48' src={halflogo} alt="logo"/>
        </div>
    );
}