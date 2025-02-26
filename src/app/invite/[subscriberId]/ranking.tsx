import Image from 'next/image';

import gold from '../../../assets/medal_gold.svg'
import silver from '../../../assets/medal_silver.svg'
import cooper from '../../../assets/medal_cooper.svg'
import { getRanking } from '@/http/api';
export async function Raking () {
    const {ranking} = await getRanking()
    return (
        <div className='w-full max-w-[440px] space-y-5'>
        <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
        </h2>

        <div className="space-y-4">
            {ranking.map((item , index)=> {
                const rakingPositionmap = index + 1

                return (
                    <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
                    <span className="text-sm text-gray-300 leading-none">
                    <span className='font-semibold'>{rakingPositionmap}°</span> |
    
                        {item.name}
                    </span>
                    <span className="font-heading text-2xl font-semibold text-gray-200">
                        {item.score}
                    </span>
                    {rakingPositionmap === 1 && (
                        <Image src={gold} alt="" className='absolute top-0 right-8'/>
                        )}
                    {rakingPositionmap === 2 && (
                        <Image src={silver} alt="" className='absolute top-0 right-8'/>
                        )}
                    {rakingPositionmap === 3 && (
                        <Image src={cooper} alt="" className='absolute top-0 right-8'/>) }



                
                </div>
                )
               
            })}
            

        </div>
    </div>
    )
}