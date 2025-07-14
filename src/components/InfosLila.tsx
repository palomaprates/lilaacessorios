import { CiFaceSmile } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
// import { FaRegGem } from 'react-icons/fa';
import { MdOutlinePlace } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";

export default function InfosLila() {
    return (
        <div className="flex-row mt-7 flex justify-between">
            <div className="flex-col p-7 gap-7 flex items-center">
                <CiFaceSmile className="h-10 w-auto" style={{ color: '#00A99D' }}/>
                <p>Atendimento personalizado ao cliente</p>
            </div>
            <div className="flex-col p-7 gap-7 flex items-center">
                <CiHeart className="h-10 w-auto" style={{ color: '#00A99D' }}/>
                <p>Jóias feitas à mão com amor</p>
            </div>
            <div className="flex-col p-7 gap-7 flex items-center">
                <IoDiamondOutline className="h-10 w-auto" style={{ color: '#00A99D' }}/>
                <p>Tradição Portuguesa</p>
            </div>
            <div className="flex-col p-7 gap-7 flex items-center">
                < MdOutlinePlace className="h-10 w-auto" style={{ color: '#00A99D' }}/>
                <p>Localizado em Sintra e Ericeira</p>
            </div>
        </div>
    )
};