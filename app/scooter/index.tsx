
import Image from 'next/image'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'

const Scooter = () => {
    return (
        <div className='h-screen bg-[#1A1A1A] relative'>
            <div className="top-0 w-screen relative">
                <div className='flex justify-between items-start pl-28 pr-16 absolute z-50 py-10 w-full'>
                    <Image className=' w-10' src="/scooter/logo.png" width={94} height={146} alt='logo' />
                    <div className=' flex justify-end gap-4 w-full items-center'>
                        <button className='border focus:border border-white rounded-xl px-2 text-white uppercase'>Home</button>
                        <button className='hover:border focus:border border-white rounded-xl px-2 text-white uppercase'>About</button>
                        <button className='hover:border focus:border border-white rounded-xl px-2 text-white uppercase'>Package</button>
                        <button className='hover:border focus:border border-white rounded-xl px-2 text-white uppercase'>Gallery</button>
                        <button className='hover:border focus:border border-white rounded-xl px-2 text-white uppercase'>Contact</button>
                    </div>
                </div>
                <Image className='w-screen absolute top-0 z-10' width={3556} height={980} src='/scooter/shape.png' alt="Shape 2" />
                <Image className='w-screen absolute top-0 z-30' width={3556} height={704} src='/scooter/shape_7.png' alt="Shape 2" />
                <Image className=' w-[70%] h-[200px] absolute top-[-20px] lg:top-0 right-0 z-40' width={2245} height={446} src='/scooter/shape_8.png' alt="Shape 2" />
            </div>
            <div className='flex justify-between h-screen w-screen items-center pt-16 relative pl-28 pr-16'>
                <Image className=' w-[37%] z-20 rounded-2xl drop-shadow-lg' width={1181} height={1181} src='/scooter/hero.png' alt="hero" />
                <div className='w-[450px] text-right text-white z-20 space-y-4 mt-8'>
                    <h1 className='text-6xl font-bold'>
                        We Would Love
                    </h1>
                    <h1 className=' text-6xl font-bold'>
                        To Move You
                    </h1>
                    <h2 className='text-3xl'>
                        You Gonna Love This
                    </h2>
                    <p className='text-white '>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                    </p>
                    <div className='w-full flex justify-end pr-16'>
                        <button className='border border-white rounded-xl px-4 text-white text-2xl font-extrabold mt-4'>Shop Now</button>
                    </div>
                </div>
            </div>
            <div className='flex gap-4 bottom-20 absolute justify-end w-full pr-16'>
                <IoLogoTwitter color={'white'} />
                <FaInstagram color='white' />
                <FaFacebookF color='white' />
                <p className=' text-white'>ScooterElectric</p>
            </div>
            <Image className='w-96 absolute bottom-0 right-0' width={1141} height={956} src='/scooter/shape_2.png' alt="Shape 2" />
        </div>
    )
}

export default Scooter